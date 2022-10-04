const db = require("../models");
const Kms = db.kmss;
const Op = db.Sequelize.Op;
const Child=db.childs;
const Mom = db.moms;
const Dad = db.dads;
const Birthrecord = db.birthrecords;
const Posyandu = db.posyandus;
const Masterpuskesmas= db.masterpuskesmas;
const Mastervilage = db.mastervilages;
// Retrieve all Kms from the database.
exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.iLike]: `%${id}%` } } : null;

    Kms.findAll({ where: condition,include: [{
        model: Child,
        as: 'child',include: [
          {
          model:Mom,
          as:'mom'
         },
         {
          model:Dad,
          as:'dad'
         },
        ]
    }]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Kms."
        });
      });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Kms.findByPk(id,{include: [{
    model:Child,
    as:'child',include: [
      {
        model:Birthrecord,
        as:'birth_record'
       },
      {
      model:Mom,
      as:'mom'
     },
     {
      model:Dad,
      as:'dad'
     },
     {
      model:Posyandu,
      as:'posyandu',include: [
        {
          model:Masterpuskesmas,
          as:'master_puskesmas'
        },
        {
          model:Mastervilage,
          as:'master_village'
        }
      ]
     },
    ]
  }]})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Kms with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Kms with id=" + id
      });
    });
};
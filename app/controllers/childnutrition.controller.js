const db = require("../models");
const Kms = db.kmss;
const Op = db.Sequelize.Op;
const Child=db.childs;
const Mom = db.moms;
// Retrieve all Kms from the database.
exports.findAll = (req, res) => {
    const date = req.query.date;
    var condition = date ? { date: { [Op.iLike]: `%${date}%` } } : null;

    Kms.findAll({ where: condition,include: [{
        model: Child,
        as: 'child',include: [{
          model:Mom,
          as:'mom'
        }]
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
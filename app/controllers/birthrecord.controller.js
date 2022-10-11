const db = require("../models");
const Birthrecord = db.birthrecords;
const Op = db.Sequelize.Op;
const Mom= db.moms;
const Masterplace= db.masterplaces;

// Create and Save a new Birthrecord
exports.create = (req, res) => {
   // Validate request
   if (!req.body.weight) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

   // Create a Birthrecord
   const birthrecord = {
    weight: req.body.weight,
    body_length: req.body.body_length,
    head_circumference: req.body.head_circumference,
    time: req.body.time,
    gender: req.body.gender, 
    place_id: req.body.place_id,
    mom_id: req.body.mom_id,
  };

  // Save Birthrecord in the database
  Birthrecord.create(birthrecord)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Birthrecord."
      });
    });
};

// Retrieve all Birthrecord from the database.
exports.findAll = (req, res) => {
    const weight = req.query.weight;
    var condition = weight ? { weight: { [Op.iLike]: `%${weight}%` } } : null;
   

  
    Birthrecord.findAll({ where: condition,include: [
      {
      model:Mom,
      as: 'mom'
    },
    {
      model:Masterplace,
      as: 'master_place'
    }
  ] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Birthrecords."
        });
      });
};

// Find a single Birthrecord with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Birthrecord.findByPk(id,{include: [
      {
      model:Mom,
      as: 'mom'
    },
    {
      model:Masterplace,
      as: 'master_place'
    }
  ]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Birthrecord with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Birthrecord with id=" + id
        });
      });
};

// Update a Birthrecord by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Birthrecord.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Birthrecord was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Birthrecord with id=${id}. Maybe Birthrecord was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Birthrecord with id=" + id
        });
      });
};

// Delete a Birthrecord with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Birthrecord.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Birthrecord was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Birthrecord with id=${id}. Maybe Birthrecord was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Birthrecord with id=" + id
        });
      });
};

// Delete all Birthrecord from the database.
exports.deleteAll = (req, res) => {
    Birthrecord.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Birthrecord were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Birthrecord."
          });
        });
};

// Find all published Posyandus
// exports.findAllPublished = (req, res) => {
//     Posyandu.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving posyandus."
//       });
//     });
// };
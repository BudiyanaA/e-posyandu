const db = require("../models");
const Masterbirthcondition = db.masterbirthconditions;
const Op = db.Sequelize.Op;

// Create and Save a new Masterbirthcondition
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

   // Create a Masterbirthcondition
   const masterbirthcondition = {
    name: req.body.name
  };

  // Save Masterbirthcondition in the database
  Masterbirthcondition.create(masterbirthcondition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the master birth conditions."
      });
    });
};

// Retrieve all Masterbirthcondition from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    Masterbirthcondition.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Masterbirthcondition."
        });
      });
};

// Find a single Masterbirthcondition with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Masterbirthcondition.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find master_birth_condition with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving master_birth_condition with id=" + id
        });
      });
};

// Update a Masterbirthcondition by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Masterbirthcondition.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Master birth condition was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Master irth conditions with id=${id}. Maybe Master birth conditions was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Master birth conditions with id=" + id
        });
      });
};

// Delete a Masterbirthcondition with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Masterbirthcondition.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Master birth  conditions was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Master birth conditions with id=${id}. Maybe Master birth condition was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Masterbirthcondition with id=" + id
        });
      });
};

// Delete all Masterbirthcondition from the database.
exports.deleteAll = (req, res) => {
    masterbirthcondition.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Masterbirthcondition were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Masterbirthcondition."
          });
        });
};

// Find all published Posyandus
// exports.findAllPublished = (req, res) => {
//     Master_birth_condition.findAll({ where: { published: true } })
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
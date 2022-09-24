const db = require("../models");
const Masterreligion = db.masterreligions;
const Op = db.Sequelize.Op;

// Create and Save a new Masterreligion
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

   // Create a Masterreligion
   const masterreligion = {
    name: req.body.name,
  };

  // Save Masterreligion in the database
  Masterreligion.create(masterreligion)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Masterreligion."
      });
    });
};

// Retrieve all Masterreligion from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    Masterreligion.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Masterreligion."
        });
      });
};

// Find a single Masterreligion with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Masterreligion.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Masterreligion with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Masterreligion with id=" + id
        });
      });
};

// Update a Masterreligion by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Masterreligion.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Masterreligion was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Masterreligion with id=${id}. Maybe Masterreligion was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Masterreligion with id=" + id
        });
      });
};

// Delete a Masterreligion with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Masterreligion.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Masterreligion was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Masterreligion with id=${id}. Maybe Masterreligion was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Masterreligion with id=" + id
        });
      });
};

// Delete all Masterreligion from the database.
exports.deleteAll = (req, res) => {
    Masterreligion.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Masterreligion were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Masterreligion."
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
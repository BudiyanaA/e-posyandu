const db = require("../models");
const Masterpuskesmas= db.masterpuskesmas;
const Op = db.Sequelize.Op;

// Create and Save a new Masterpuskesmas
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

   // Create a Masterpuskesmas
   const masterpuskesmas = {
    name: req.body.name,
  };

  // Save Masterpuskesmas in the database
  Masterpuskesmas.create(masterpuskesmas)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Masterpuskesmas."
      });
    });
};

// Retrieve all Masterpuskesmas from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    Masterpuskesmas.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Masterpuskesmas."
        });
      });
};

// Find a single Masterpuskesmas with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Masterpuskesmas.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Masterpuskesmas with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Masterpuskesmas with id=" + id
        });
      });
};

// Update a Masterpuskesmas by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Masterpuskesmas.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Masterpuskesmas was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Masterpuskesmas with id=${id}. Maybe Masterpuskesmas was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Masterpuskesmas with id=" + id
        });
      });
};

// Delete a Masterpuskesmas with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Masterpuskesmas.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Masterpuskesmas was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Masterpuskesmas with id=${id}. Maybe Masterpuskesmas was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Masterpuskesmas with id=" + id
        });
      });
};

// Delete all Masterpuskesmas from the database.
exports.deleteAll = (req, res) => {
    Masterpuskesmas.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Masterpuskesmas were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Masterpuskesmas."
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
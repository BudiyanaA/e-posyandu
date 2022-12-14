const db = require("../models");
const Masterplace = db.masterplaces;
const Op = db.Sequelize.Op;

// Create and Save a new Masterplace
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

   // Create a Masterplace
   const masterplace = {
    name: req.body.name,
  };

  // Save Masterplace in the database
  Masterplace.create(masterplace)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Masterplace."
      });
    });
};

// Retrieve all Masterplace from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    Masterplace.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Masterplace."
        });
      });
};

// Find a single Masterplace with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Masterplace.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Masterplace with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Masterplace with id=" + id
        });
      });
};

// Update a Masterplace by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Masterplace.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Masterplace was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Masterplace with id=${id}. Maybe Masterplace was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Masterplace with id=" + id
        });
      });
};

// Delete a Masterplace with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Masterplace.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Masterplace was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Masterplace with id=${id}. Maybe Masterplace was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Masterplace with id=" + id
        });
      });
};

// Delete all Masterplace from the database.
exports.deleteAll = (req, res) => {
  Masterplace.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Masterplace were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Masterplace."
          });
        });
};

// Find all published Posyandus
// exports.findAllPublished = (req, res) => {
//     Master_place.findAll({ where: { published: true } })
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
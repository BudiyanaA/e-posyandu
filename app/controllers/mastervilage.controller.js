const db = require("../models");
const Mastervilage = db.mastervilages;
const Op = db.Sequelize.Op;

// Create and Save a new Mastervilage
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

   // Create a Mastervilage
   const mastervilage = {
    name: req.body.name,
  };

  // Save Mastervilage in the database
  Mastervilage.create(mastervilage)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Mastervilage."
      });
    });
};

// Retrieve all Mastervilage from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    Mastervilage.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Mastervilage."
        });
      });
};

// Find a single Mastervilage with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Mastervilage.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Mastervilage with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Mastervilage with id=" + id
        });
      });
};

// Update a Mastervilage by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Mastervilage.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Posyandu was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Mastervilage with id=${id}. Maybe Mastervilage was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Mastervilage with id=" + id
        });
      });
};

// Delete a Mastervilage with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Mastervilage.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Mastervilage was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Mastervilage with id=${id}. Maybe Mastervilage was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Mastervilage with id=" + id
        });
      });
};

// Delete all Mastervilage from the database.
exports.deleteAll = (req, res) => {
    Mastervilage.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Mastervilage were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Mastervilage."
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
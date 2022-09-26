const db = require("../models");
const Kms = db.kmss;
const Op = db.Sequelize.Op;

// Create and Save a new Kms
exports.create = (req, res) => {
   // Validate request
   if (!req.body.date) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

   // Create a Kms
   const kms = {
    date: req.body.date,
    weight: req.body.weight,
    age: req.body.age,
    child_id: req.body.child_id
  };

  // Save Kms in the database
  Kms.create(kms)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Kms."
      });
    });
};

// Retrieve all Kms from the database.
exports.findAll = (req, res) => {
    const date = req.query.date;
    var condition = date ? { date: { [Op.iLike]: `%${date}%` } } : null
  
    Kms.findAll({ where: condition })
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

// Find a single Kms with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Kms.findByPk(id)
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

// Update a Kms by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Kms.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Kms was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Kms with id=${id}. Maybe Kms was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Kms with id=" + id
        });
      });
};

// Delete a Kms with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Kms.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Kms was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Kms with id=${id}. Maybe Kms was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Kms with id=" + id
        });
      });
};

// Delete all Kms from the database.
exports.deleteAll = (req, res) => {
    Kms.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Kms were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Kmss."
          });
        });
};

// Find all published Users
// exports.findAllPublished = (req, res) => {
//     User.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Users."
//       });
//     });
// };
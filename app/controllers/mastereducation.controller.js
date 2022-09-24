const db = require("../models");
const Mastereducation = db.mastereducations;
const Op = db.Sequelize.Op;

// Create and Save a new Mastereducation
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

   // Create a Mastereducation
   const mastereducation = {
    name: req.body.name,
  };

  // Save Mastereducation in the database
  Mastereducation.create(masterplace)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Mastereducation."
      });
    });
};

// Retrieve all Mastereducation from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    Mastereducation.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Mastereducation."
        });
      });
};

// Find a single Mastereducation with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Mastereducation.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Mastereducation with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Mastereducation with id=" + id
        });
      });
};

// Update a Mastereducation by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Mastereducation.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Mastereducation was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Mastereducation with id=${id}. Maybe Mastereducation was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Mastereducation with id=" + id
        });
      });
};

// Delete a Mastereducation with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Mastereducation.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Mastereducation was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Mastereducation with id=${id}. Maybe Mastereducation was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Mastereducation with id=" + id
        });
      });
};

// Delete all Mastereducation from the database.
exports.deleteAll = (req, res) => {
    Mastereducation.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Mastereducation were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Mastereducation."
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
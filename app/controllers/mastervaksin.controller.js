const db = require("../models");
const Mastervaksin = db.mastervaksins;
const Op = db.Sequelize.Op;

// Create and Save a new Mastervaksin
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

   // Create a Mastervaksin
   const mastervaksin = {
    name: req.body.name,
  };

  // Save Mastervaksin in the database
  Mastervaksin.create(mastervaksin)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Mastervaksin."
      });
    });
};

// Retrieve all Mastervaksin from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    Mastervaksin.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Mastervaksins."
        });
      });
};

// Find a single Mastervaksin with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Mastervaksin.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Mastervaksin with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Mastervaksin with id=" + id
        });
      });
};

// Update a Mastervaksin by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Mastervaksin.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Mastervaksin was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Mastervaksin with id=${id}. Maybe Mastervaksin was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Mastervaksin with id=" + id
        });
      });
};

// Delete a Mastervaksin with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Mastervaksin.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Mastervaksin was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Mastervaksin with id=${id}. Maybe Mastervaksin was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Mastervaksin with id=" + id
        });
      });
};

// Delete all Mastervaksin from the database.
exports.deleteAll = (req, res) => {
    Mastervaksin.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Mastervaksin were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Mastervaksin."
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
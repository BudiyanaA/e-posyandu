const db = require("../models");
const Antropometristandard = db.antropometristandards;
const Op = db.Sequelize.Op;

// Create and Save a new AntropometriStandard
exports.create = (req, res) => {
   // Validate request
   if (!req.body.age) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

   // Create a AntropometriStandard
   const antropometristandard = {
    age: req.body.age,
    month: req.body.month,
    m3sd: req.body.m3sd,
    m2sd: req.body.m2sd,
    m1sd: req.body.m1sd, 
    med: req.body.med,
    p1sd: req.body.p1sd,
    p2sd: req.body.p2sd,
    p3sd: req.body.p3sd,
    type: req.body.type,
    gender: req.body.gender,

  };

  // Save AntropometriStandard in the database
  Antropometristandard.create(antropometristandard)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the AntropometriStandard."
      });
    });
};

// Retrieve all AntropometriStandard from the database.
exports.findAll = (req, res) => {
    const month = req.query.month;
    var condition = month ? { month: { [Op.iLike]: `%${month}%` } } : null;
   

  
    Antropometristandard.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving AntropometriStandards."
        });
      });
};

// Find a single AntropometriStandard with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Antropometristandard.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find AntropometriStandard with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving AntropometriStandard with id=" + id
        });
      });
};

// Update a AntropometriStandard by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Antropometristandard.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "AntropometriStandard was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update AntropometriStandard with id=${id}. Maybe AntropometriStandard was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating AntropometriStandard with id=" + id
        });
      });
};

// Delete a AntropometriStandard with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Antropometristandard.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "AntropometriStandard was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete AntropometriStandard with id=${id}. Maybe AntropometriStandard was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete AntropometriStandard with id=" + id
        });
      });
};

// Delete all AntropometriStandard from the database.
exports.deleteAll = (req, res) => {
    Antropometristandard.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} AntropometriStandard were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all AntropometriStandard."
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
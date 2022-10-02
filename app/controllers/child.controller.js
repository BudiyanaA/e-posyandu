const db = require("../models");
const Child = db.childs;
const Op = db.Sequelize.Op;

// Create and Save a new Child
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

   // Create a Child
   const child = {
    name: req.body.name,
    nik: req.body.nik,
    pregnancy_to: req.body.pregnancy_to,
    birth_place: req.body.birth_place,
    birth_date: req.body.birth_date, 
    birth_certificate_number: req.body.birth_certificate_number,
    insurance_number: req.body.insurance_number,
    gender: req.body.gender,
    mom_id: req.body.mom_id,
    birth_record_id: req.body.birth_record_id,
    posyandu_id: req.body.posyandu_id,
    dad_id: req.body.dad_id,
    user_id: req.body.user_id,
  };

  // Save Child in the database
  Child.create(child)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Child."
      });
    });
};

// Retrieve all Child from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
   

  
    Child.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Childs."
        });
      });
};

// Find a single Child with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Child.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Child with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Child with id=" + id
        });
      });
};

// Update a Child by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Child.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Child was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Child with id=${id}. Maybe Child was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Child with id=" + id
        });
      });
};

// Delete a Child with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Child.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Child was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Child with id=${id}. Maybe Child was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Child with id=" + id
        });
      });
};

// Delete all Child from the database.
exports.deleteAll = (req, res) => {
    Child.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Child were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Child."
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
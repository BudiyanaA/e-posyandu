const db = require("../models");
const Mom = db.moms;
const Op = db.Sequelize.Op;

// Create and Save a new Mom
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

   // Create a Mom
   const mom = {
    name: req.body.name,
    nik: req.body.nik,
    rt: req.body.rt,
    rw: req.body.rw,
    address: req.body.address,
    city: req.body.city,
    districts: req.body.districts,
    birth_place: req.body.birth_place,
    birth_date: req.body.birth_date,
    religion_id: req.body.religion_id, 
    education_id: req.body.education_id,
    blood_type: req.body.blood_type,
    profession: req.body.profession,
    insurance_number: req.body.insurance_number,

  };

  // Save Mom in the database
  Mom.create(mom)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Mom."
      });
    });
};

// Retrieve all Mom from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
   

  
    Mom.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Moms."
        });
      });
};

// Find a single Mom with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Mom.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Mom with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Mom with id=" + id
        });
      });
};

// Update a Mom by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Mom.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Mom was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Mom with id=${id}. Maybe Mom was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Mom with id=" + id
        });
      });
};

// Delete a Mom with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Mom.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Mom was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Mom with id=${id}. Maybe Mom was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Mom with id=" + id
        });
      });
};

// Delete all Mom from the database.
exports.deleteAll = (req, res) => {
    Mom.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Mom were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Mom."
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
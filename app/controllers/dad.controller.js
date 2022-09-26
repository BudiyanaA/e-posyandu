const db = require("../models");
const Dad = db.dads;
const Op = db.Sequelize.Op;

// Create and Save a new Dad
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

   // Create a Dad
   const dad = {
    name: req.body.name,
    nik: req.body.nik,
    birth_date: req.body.birth_date,
    birth_place: req.body.birth_place,
    religion_id: req.body.religion_id, 
    education_id: req.body.education_id,
    blood_type: req.body.blood_type,
    profession: req.body.profession,
    mom_id: req.body.mom_id

  };

  // Save Dad in the database
  Dad.create(dad)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Dad."
      });
    });
};

// Retrieve all Dad from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
   

  
    Dad.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Dads."
        });
      });
};

// Find a single Dad with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Dad.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Dad with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Dad with id=" + id
        });
      });
};

// Update a Dad by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Dad.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Dad was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Dad with id=${id}. Maybe Dad was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Dad with id=" + id
        });
      });
};

// Delete a Dad with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Dad.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Dad was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Dad with id=${id}. Maybe Dad was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Dad with id=" + id
        });
      });
};

// Delete all Dad from the database.
exports.deleteAll = (req, res) => {
    Dad.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Dad were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Dad."
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
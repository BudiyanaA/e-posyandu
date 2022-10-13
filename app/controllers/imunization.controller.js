const db = require("../models");
const Imunization = db.imunizations;
const Op = db.Sequelize.Op;
const Mastervaksin= db.mastervaksins;
const Child= db.childs;

// Create and Save a new Dad
exports.create = (req, res) => {
   // Validate request
   if (!req.body.vaksin_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

   // Create a Dad
   const imunization = {
    vaksin_id: req.body.vaksin_id,
    child_id: req.body.child_id,
    date: req.body.date,
  };

  // Save Dad in the database
  Imunization.create(imunization)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Imunization."
      });
    });
};

// Retrieve all Dad from the database.
exports.findAll = (req, res) => {
    const date = req.query.date;
    var condition = date ? { date: { [Op.iLike]: `%${date}%` } } : null;
   

  
    Imunization.findAll({ where: condition,include: [
      {
      model:Mastervaksin,
      as: 'master_vaksin'
    },
    {
      model:Child,
      as: 'child'
    }
  ] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Imunizations."
        });
      });
};

// Find a single Dad with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Imunization.findByPk(id,{include: [
      {
      model:Mastervaksin,
      as: 'master_vaksin'
    },
    {
      model:Child,
      as: 'child'
    }
  ]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Imunization with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Imunization with id=" + id
        });
      });
};

// Update a Dad by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Imunization.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Imunization was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Imunization with id=${id}. Maybe Imunization was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Imunization with id=" + id
        });
      });
};

// Delete a Dad with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Imunization.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Imunization was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Imunization with id=${id}. Maybe Imunization was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Imunization with id=" + id
        });
      });
};

// Delete all Dad from the database.
exports.deleteAll = (req, res) => {
    Imunization.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Imunization were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Imunization."
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
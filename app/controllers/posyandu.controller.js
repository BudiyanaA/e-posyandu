const db = require("../models");
const Posyandu = db.posyandus;
const Op = db.Sequelize.Op;
const Mastervilage= db.mastervilages;

// Create and Save a new Posyandu
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

   // Create a Posyandu
   const posyandu = {
    name: req.body.name,
    rw: req.body.rw,
    village_id: req.body.village_id,
    puskesmas_id: req.body.puskesmas_id
  };

  // Save Posyandu in the database
  Posyandu.create(posyandu)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Posyandu."
      });
    });
};

// Retrieve all Posyandu from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    Posyandu.findAll({ where: condition,include: [
      {
      model:Mastervilage,
      as: 'master_village'
    }
  ] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving posyandus."
        });
      });
};

// Find a single Posyandu with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Posyandu.findByPk(id,{include: [
      {
      model:Mastervilage,
      as: 'master_village'
    }
  ]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Posyandu with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Posyandu with id=" + id
        });
      });
};

// Update a Posyandu by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Posyandu.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Posyandu was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Posyandu with id=${id}. Maybe Posyandu was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Posyandu with id=" + id
        });
      });
};

// Delete a Posyandu with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Posyandu.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Posyandu was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Posyandu with id=${id}. Maybe Posyandu was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Posyandu with id=" + id
        });
      });
};

// Delete all Posyandu from the database.
exports.deleteAll = (req, res) => {
    Posyandu.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Posyandus were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Posyandus."
          });
        });
};

// Find all published Posyandus
exports.findAllPublished = (req, res) => {
    Posyandu.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving posyandus."
      });
    });
};
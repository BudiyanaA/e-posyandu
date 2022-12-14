const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

// Create and Save a new Dad
exports.create = (req, res) => {
  // Validate request
  if (!req.body.phone) {
   res.status(400).send({
     message: "Content can not be empty!"
   });
   return;
 }

  // Create a Dad
  const user = {
   phone: req.body.phone,
   nik: req.body.nik,
   role: req.body.role,
 };

 // Save Dad in the database
 User.create(user)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while creating the User."
     });
   });
};

// Retrieve all Dad from the database.
exports.findAll = (req, res) => {
   const name = req.query.phone;
   var condition = name ? { phone: { [Op.iLike]: `%${phone}%` } } : null;
  

 
   User.findAll({ where: condition})
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving Users."
       });
     });
};

// Find a single Dad with an id
exports.findOne = (req, res) => {
   const id = req.params.id;

   User.findByPk(id)
     .then(data => {
       if (data) {
         res.send(data);
       } else {
         res.status(404).send({
           message: `Cannot find User with id=${id}.`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving User with id=" + id
       });
     });
};

// Update a Dad by the id in the request
exports.update = (req, res) => {
   const id = req.params.id;

   User.update(req.body, {
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "User was updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating User with id=" + id
       });
     });
};

// Delete a Dad with the specified id in the request
exports.delete = (req, res) => {
   const id = req.params.id;

   User.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "User was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete User with id=${id}. Maybe User was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete User with id=" + id
       });
     });
};

// Delete all Dad from the database.
exports.deleteAll = (req, res) => {
  User.destroy({
       where: {},
       truncate: false
     })
       .then(nums => {
         res.send({ message: `${nums} User were deleted successfully!` });
       })
       .catch(err => {
         res.status(500).send({
           message:
             err.message || "Some error occurred while removing all User."
         });
       });
};
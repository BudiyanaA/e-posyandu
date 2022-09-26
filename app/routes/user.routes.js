module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", users.create);
  
    // Retrieve all Posyandus
    router.get("/", users.findAll);
  
    // Retrieve all published Posyandus
    // router.get("/published", users.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", users.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", users.update);
  
    // Delete a Posyandu with id
    router.delete("/:id", users.delete);
  
    // Create a new Posyandu
    router.delete("/", users.deleteAll);
  
    app.use('/api/users', router);
  };
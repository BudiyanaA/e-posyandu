module.exports = app => {
    const master_birth_conditions = require("../controllers/master_birth_condition.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", master_birth_conditions.create);
  
    // Retrieve all Posyandus
    router.get("/", master_birth_conditions.findAll);
  
    // Retrieve all published Posyandus
    // router.get("/published", posyandus.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", master_birth_conditions.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", master_birth_conditions.update);
  
    // Delete a Posyandu with id
    router.delete("/:id", master_birth_conditions.delete);
  
    // Create a new Posyandu
    router.delete("/", master_birth_conditions.deleteAll);
  
    app.use('/api/master_birth_conditions', router);
  };
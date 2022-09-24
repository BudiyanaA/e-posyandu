module.exports = app => {
    const masterbirthconditions = require("../controllers/masterbirthcondition.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", masterbirthconditions.create);
  
    // Retrieve all Posyandus
    router.get("/", masterbirthconditions.findAll);
  
    // Retrieve all published Posyandus
    // router.get("/published", posyandus.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", masterbirthconditions.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", masterbirthconditions.update);
  
    // Delete a Posyandu with id
    router.delete("/:id", masterbirthconditions.delete);
  
    // Create a new Posyandu
    router.delete("/", masterbirthconditions.deleteAll);
  
    app.use('/api/masterbirthconditions', router);
  };
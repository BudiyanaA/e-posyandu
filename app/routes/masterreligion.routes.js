module.exports = app => {
    const masterreligions = require("../controllers/masterreligion.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", masterreligions.create);
  
    // Retrieve all Posyandus
    router.get("/", masterreligions.findAll);
  
    // Retrieve all published Posyandus
    // router.get("/published", posyandus.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", masterreligions.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", masterreligions.update);
  
    // Delete a Posyandu with id
    router.delete("/:id", masterreligions.delete);
  
    // Create a new Posyandu
    router.delete("/", masterreligions.deleteAll);
  
    app.use('/api/masterreligions', router);
  };
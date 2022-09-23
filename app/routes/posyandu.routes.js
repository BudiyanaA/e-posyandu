module.exports = app => {
    const posyandus = require("../controllers/posyandu.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", posyandus.create);
  
    // Retrieve all Posyandus
    router.get("/", posyandus.findAll);
  
    // Retrieve all published Posyandus
    router.get("/published", posyandus.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", posyandus.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", posyandus.update);
  
    // Delete a Posyandu with id
    router.delete("/:id", posyandus.delete);
  
    // Create a new Posyandu
    router.delete("/", posyandus.deleteAll);
  
    app.use('/api/posyandus', router);
  };
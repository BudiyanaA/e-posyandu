module.exports = app => {
    const mastervaksins = require("../controllers/mastervaksin.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", mastervaksins.create);
  
    // Retrieve all Posyandus
    router.get("/", mastervaksins.findAll);
  
    // Retrieve all published Posyandus
    // router.get("/published", posyandus.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", mastervaksins.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", mastervaksins.update);
  
    // Delete a Posyandu with id
    router.delete("/:id", mastervaksins.delete);
  
    // Create a new Posyandu
    router.delete("/", mastervaksins.deleteAll);
  
    app.use('/api/mastervaksins', router);
  };
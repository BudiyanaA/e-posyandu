module.exports = app => {
    const master_places = require("../controllers/posyandu.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", master_places.create);
  
    // Retrieve all Posyandus
    router.get("/", master_places.findAll);
  
    // Retrieve all published Posyandus
    // router.get("/published", master_places.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", master_places.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", master_places.update);
  
    // Delete a Posyandu with id
    router.delete("/:id", master_places.delete);
  
    // Create a new Posyandu
    router.delete("/", master_places.deleteAll);
  
    app.use('/api/master_places', router);
  };
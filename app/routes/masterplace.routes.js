module.exports = app => {
    const masterplaces = require("../controllers/masterplace.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", masterplaces.create);
  
    // Retrieve all Posyandus
    router.get("/", masterplaces.findAll);
  
    // Retrieve all published Posyandus
    // router.get("/published", master_places.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", masterplaces.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", masterplaces.update);
  
    // Delete a Posyandu with id
    router.delete("/:id", masterplaces.delete);
  
    // Create a new Posyandu
    router.delete("/", masterplaces.deleteAll);
  
    app.use('/api/masterplaces', router);
  };
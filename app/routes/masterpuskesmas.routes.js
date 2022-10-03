module.exports = app => {
    const masterpuskesmas = require("../controllers/masterpuskesmas.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", masterpuskesmas.create);
  
    // Retrieve all Posyandus
    router.get("/", masterpuskesmas.findAll);
  
    // Retrieve all published Posyandus
    // router.get("/published", posyandus.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", masterpuskesmas.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", masterpuskesmas.update);
  
    // Delete a Posyandu with id
    router.delete("/:id", masterpuskesmas.delete);
  
    // Create a new Posyandu
    router.delete("/", masterpuskesmas.deleteAll);
  
    app.use('/api/masterpuskesmas', router);
  };
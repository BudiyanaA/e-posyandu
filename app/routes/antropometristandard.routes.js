module.exports = app => {
    const antropometristandards = require("../controllers/antropometristandard.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", antropometristandards.create);
  
    // Retrieve all Posyandus
    router.get("/", antropometristandards.findAll);
  
    // Retrieve all published Posyandus
    // router.get("/published", users.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", antropometristandards.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", antropometristandards.update);
  
    // Delete a Posyandu with id
    router.delete("/:id", antropometristandards.delete);
  
    // Create a new Posyandu
    router.delete("/", antropometristandards.deleteAll);
  
    app.use('/api/antropometristandards', router);
  };
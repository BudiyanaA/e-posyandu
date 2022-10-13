module.exports = app => {
    const imunizations = require("../controllers/imunization.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", imunizations.create);
  
    // Retrieve all Posyandus
    router.get("/", imunizations.findAll);
  
    // Retrieve all published Posyandus
    // router.get("/published", users.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", imunizations.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", imunizations.update);
  
    // Delete a Posyandu with id
    router.delete("/:id", imunizations.delete);
  
    // Create a new Posyandu
    router.delete("/", imunizations.deleteAll);
  
    app.use('/api/imunizations', router);
  };
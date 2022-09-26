module.exports = app => {
    const birthrecords = require("../controllers/birthrecord.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", birthrecords.create);
  
    // Retrieve all Posyandus
    router.get("/", birthrecords.findAll);
  
    // Retrieve all published Posyandus
    // router.get("/published", users.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", birthrecords.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", birthrecords.update);
    
    // Delete a Posyandu with id
    router.delete("/:id", birthrecords.delete);
  
    // Create a new Posyandu
    router.delete("/", birthrecords.deleteAll);
  
    app.use('/api/birthrecords', router);
  };
module.exports = app => {
    const dads = require("../controllers/dad.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", dads.create);
  
    // Retrieve all Posyandus
    router.get("/", dads.findAll);
  
    // Retrieve all published Posyandus
    // router.get("/published", users.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", dads.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", dads.update);
  
    // Delete a Posyandu with id
    router.delete("/:id", dads.delete);
  
    // Create a new Posyandu
    router.delete("/", dads.deleteAll);
  
    app.use('/api/dads', router);
  };
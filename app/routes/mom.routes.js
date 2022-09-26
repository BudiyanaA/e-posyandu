module.exports = app => {
    const moms = require("../controllers/mom.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", moms.create);
  
    // Retrieve all Posyandus
    router.get("/", moms.findAll);
  
    // Retrieve all published Posyandus
    // router.get("/published", users.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", moms.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", moms.update);
  
    // Delete a Posyandu with id
    router.delete("/:id", moms.delete);
  
    // Create a new Posyandu
    router.delete("/", moms.deleteAll);
  
    app.use('/api/moms', router);
  };
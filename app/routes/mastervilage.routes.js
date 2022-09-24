module.exports = app => {
    const mastervilages = require("../controllers/mastervilage.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", mastervilages.create);
  
    // Retrieve all Posyandus
    router.get("/", mastervilages.findAll);
  
    // Retrieve all published Posyandus
    // router.get("/published", posyandus.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", mastervilages.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", mastervilages.update);
  
    // Delete a Posyandu with id
    router.delete("/:id", mastervilages.delete);
  
    // Create a new Posyandu
    router.delete("/", mastervilages.deleteAll);
  
    app.use('/api/mastervilages', router);
  };
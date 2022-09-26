module.exports = app => {
    const kmss = require("../controllers/kms.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", kmss.create);
  
    // Retrieve all Posyandus
    router.get("/", kmss.findAll);
  
    // Retrieve all published Posyandus
    // router.get("/published", users.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", kmss.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", kmss.update);
  
    // Delete a Posyandu with id
    router.delete("/:id", kmss.delete);
  
    // Create a new Posyandu
    router.delete("/", kmss.deleteAll);
  
    app.use('/api/kmss', router);
  };
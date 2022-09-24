module.exports = app => {
    const mastereducations = require("../controllers/mastereducation.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", mastereducations.create);
  
    // Retrieve all Posyandus
    router.get("/", mastereducations.findAll);
  
    // Retrieve all published Posyandus
    // router.get("/published", posyandus.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", mastereducations.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", mastereducations.update);
  
    // Delete a Posyandu with id
    router.delete("/:id", mastereducations.delete);
  
    // Create a new Posyandu
    router.delete("/", mastereducations.deleteAll);
  
    app.use('/api/mastereducations', router);
  };
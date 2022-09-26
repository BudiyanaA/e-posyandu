module.exports = app => {
    const childs = require("../controllers/child.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posyandu
    router.post("/", childs.create);
  
    // Retrieve all Posyandus
    router.get("/", childs.findAll);
  
    // Retrieve all published Posyandus
    // router.get("/published", users.findAllPublished);
  
    // Retrieve a single Posyandus with id
    router.get("/:id", childs.findOne);
  
    // Update a Posyandu with id
    router.put("/:id", childs.update);
  
    // Delete a Posyandu with id
    router.delete("/:id", childs.delete);
  
    // Create a new Posyandu
    router.delete("/", childs.deleteAll);
  
    app.use('/api/childs', router);
  };
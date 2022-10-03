module.exports = app => {
    const kmss = require("../controllers/childnutrition.controller.js");
  
    var router = require("express").Router();
    
    // Retrieve all Posyandus
    router.get("/", kmss.findAll);
  
    app.use('/api/child_nutrition', router);
  };
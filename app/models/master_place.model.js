module.exports = (sequelize, Sequelize) => {
    const Master_place = sequelize.define("master_place", {
      name: {
        type: Sequelize.STRING
      }    
    });
  
    return Master_place;
  };
module.exports = (sequelize, Sequelize) => {
    const Master_place = sequelize.define("master place", {
      name: {
        type: Sequelize.STRING
      }    
    });
  
    return Master_place;
  };
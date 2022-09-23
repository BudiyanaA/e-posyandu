module.exports = (sequelize, Sequelize) => {
    const Master_birht_condition = sequelize.define("master birht condition", {
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Master_birht_condition;
  };
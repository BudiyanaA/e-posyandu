module.exports = (sequelize, Sequelize) => {
    const Master_birth_condition = sequelize.define("master_birth_condition", {
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Master_birth_condition;
  };
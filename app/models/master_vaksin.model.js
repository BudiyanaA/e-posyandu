module.exports = (sequelize, Sequelize) => {
    const Master_vaksin = sequelize.define("master vaksin", {
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Master_vaksin;
  };
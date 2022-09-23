module.exports = (sequelize, Sequelize) => {
    const Kms = sequelize.define("kms", {
      date: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      age : {
        type: Sequelize.STRING
      },
      child_id : {
        type: Sequelize.STRING
      },
    });
  
    return Kms;
  };
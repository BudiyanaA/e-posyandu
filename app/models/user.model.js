module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      phone: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return User;
  };
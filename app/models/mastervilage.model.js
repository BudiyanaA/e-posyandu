module.exports = (sequelize, Sequelize) => {
    const Mastervilage = sequelize.define("master_vilage", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true    
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Mastervilage;
  };
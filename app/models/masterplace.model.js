module.exports = (sequelize, Sequelize) => {
    const Masterplace = sequelize.define("master_place", {
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
  
    return Masterplace;
  };
module.exports = (sequelize, Sequelize) => {
    const Masterreligion = sequelize.define("master_religion", {
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
  
    return Masterreligion;
  };
module.exports = (sequelize, Sequelize) => {
    const Masterbirthcondition = sequelize.define("master_birth_condition", {
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
  
    return Masterbirthcondition;
  };
module.exports = (sequelize, Sequelize) => {
    const Mastereducation = sequelize.define("master_education", {
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
  
    return Mastereducation;
  };
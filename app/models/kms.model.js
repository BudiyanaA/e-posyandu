module.exports = (sequelize, Sequelize) => {
    const Kms = sequelize.define("kms", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true    
      },
      date: {
        type: Sequelize.DATEONLY
      },
      weight: {
        type: Sequelize.DECIMAL
      },
      age : {
        type: Sequelize.INTEGER
      },
      child_id : {
        type: Sequelize.STRING
      },
    },
    { 
      underscored: true, 
      timestamps: true,
      paranoid: true, 
     });
  
    return Kms;
  };
module.exports = (sequelize, Sequelize) => {
    const Masterpuskesmas = sequelize.define("master_puskesmas", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true    
      },
      name: {
        type: Sequelize.STRING
      }
    },
    { 
      underscored: true, 
      timestamps: true,
      paranoid: true, 
     });
  
    return Masterpuskesmas;
  };
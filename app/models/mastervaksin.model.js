module.exports = (sequelize, Sequelize) => {
    const Mastervaksin = sequelize.define("master_vaksin", {
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
  
    return Mastervaksin;
  };
module.exports = (sequelize, Sequelize) => {
    const Posyandu = sequelize.define("posyandu", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true    
      },
      name: {
        type: Sequelize.STRING
      },
      rw: {
        type: Sequelize.STRING
      },
      // village_id: {
      //   type: Sequelize.STRING
      // }
    },
    { 
      underscored: true, 
      timestamps: true,
      paranoid: true, 
     });
  
    return Posyandu;
  };
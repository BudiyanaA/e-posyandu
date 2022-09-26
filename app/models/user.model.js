module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true    
      },
      phone: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize. ENUM ('MOM','MIDWIFE','GOVERNMENT','ADMIN')
      }
    },
    { 
      underscored: true, 
      timestamps: true,
      paranoid: true, 
     });
  
    return User;
  };
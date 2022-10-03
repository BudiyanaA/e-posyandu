module.exports = (sequelize, Sequelize) => {
    const Antropometristandard = sequelize.define("antropometri_standard", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true    
      },
      age: {
        type: Sequelize.ENUM('0-24M','24-60M','0-60M')
      },
      month: {
        type: Sequelize.STRING
      },
      m3sd: {
        type: Sequelize.DECIMAL
      },
      m2sd: {
        type: Sequelize.DECIMAL
      },
      m1sd: {
        type: Sequelize.DECIMAL
      },
      med: {
        type: Sequelize.DECIMAL
      },
      p1sd: {
        type: Sequelize.DECIMAL
      },
      p2sd: {
        type: Sequelize.DECIMAL
      },
      p3sd: {
        type: Sequelize.DECIMAL
      },
      type: {
        type: Sequelize.ENUM('BBPU','TBPU','BBPTB')
      },
      gender: {
        type: Sequelize.ENUM('M','F')
      },
    },
    { 
      underscored: true, 
      timestamps: true,
      paranoid: true, 
     });
  
    return Antropometristandard;
  };
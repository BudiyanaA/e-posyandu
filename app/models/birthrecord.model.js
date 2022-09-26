module.exports = (sequelize, Sequelize) => {
    const Birthrecord = sequelize.define("birth_record", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true    
      },
      weight: {
        type: Sequelize.DECIMAL
      },
      body_length: {
        type: Sequelize.DECIMAL
      },
      head_circumference: {
        type: Sequelize.DECIMAL
      },
      time: {
        type: Sequelize.TIME
      },
      gender: {
        type: Sequelize.ENUM('M','F')
      },
      place_id: {
        type: Sequelize.STRING
      },
      mom_id: {
        type: Sequelize.STRING
      },
    },
    { 
      underscored: true, 
      timestamps: true,
      paranoid: true, 
     });
  
    return Birthrecord;
  };
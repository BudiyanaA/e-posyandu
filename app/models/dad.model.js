module.exports = (sequelize, Sequelize) => {
    const Dad = sequelize.define("dad", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true    
      },
      name: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.STRING
      },
      birth_place: {
        type: Sequelize.STRING
      },
      religion_id: {
        type: Sequelize.STRING
      },
      education_id: {
        type: Sequelize.STRING
      },
      blood_type: {
        type: Sequelize.ENUM('A','B','O','AB')
      },
      profession: {
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
  
    return Dad;
  };
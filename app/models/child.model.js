module.exports = (sequelize, Sequelize) => {
    const Child = sequelize.define("child", {
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
      pregnancy_to: {
        type: Sequelize.INTEGER
      },
      birth_place: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.DATEONLY
      },
      birth_certificate_number: {
        type: Sequelize.STRING
      },
      insurance_number: {
        type: Sequelize.STRING
      },
      gender : {
        type: Sequelize.ENUM('M','F')
      },
      mom_id: {
        type: Sequelize.STRING
      },
      birth_record_id: {
        type: Sequelize.STRING
      },
      posyandu_id: {
        type: Sequelize.STRING
      }

    }
    ,
    { 
      underscored: true, 
      timestamps: true,
      paranoid: true, 
     });
  
    return Child;
  };
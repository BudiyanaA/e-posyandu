module.exports = (sequelize, Sequelize) => {
    const Mom = sequelize.define("mom", {
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
      rt: {
        type: Sequelize.INTEGER
      },
      rw: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      districts: {
        type: Sequelize.STRING
      },
      birth_place: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.DATEONLY
      },
      // religion_id: {
      //   type: Sequelize.STRING
      // },
      // education_id: {
      //   type: Sequelize.STRING
      // },
      blood_type: {
        type: Sequelize.ENUM('A','B','O','AB')
      },
      profession: {
        type: Sequelize.STRING
      },
      insurance_number: {
        type: Sequelize.STRING
      },
    },
    { 
      underscored: true, 
      timestamps: true,
      paranoid: true, 
     });
  
    return Mom;
  };
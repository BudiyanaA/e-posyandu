module.exports = (sequelize, Sequelize) => {
    const Child = sequelize.define("child", {
      name: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      pregnancy_to: {
        type: Sequelize.STRING
      },
      birth_place: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.STRING
      },
      birth_certificate_number: {
        type: Sequelize.STRING
      },
      insurance_number: {
        type: Sequelize.STRING
      },
      gender : {
        type: Sequelize.STRING
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

    });
  
    return Child;
  };
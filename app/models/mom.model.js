module.exports = (sequelize, Sequelize) => {
    const Mom = sequelize.define("mom", {
      name: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
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
        type: Sequelize.STRING
      },
      religion: {
        type: Sequelize.STRING
      },
      education: {
        type: Sequelize.STRING
      },
      blood_type: {
        type: Sequelize.STRING
      },
      profession: {
        type: Sequelize.STRING
      },
      insurance_number: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      }
    });
  
    return Mom;
  };
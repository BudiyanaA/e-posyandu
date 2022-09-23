module.exports = (sequelize, Sequelize) => {
    const Dad = sequelize.define("dad", {
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
      mom_id: {
        type: Sequelize.STRING
      },
    });
  
    return Dad;
  };
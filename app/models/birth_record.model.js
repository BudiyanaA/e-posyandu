module.exports = (sequelize, Sequelize) => {
    const Birth_record = sequelize.define("birth record", {
      weight: {
        type: Sequelize.STRING
      },
      body_length: {
        type: Sequelize.STRING
      },
      head_circumference: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      place_id: {
        type: Sequelize.STRING
      },
      mom_id: {
        type: Sequelize.STRING
      },
      birth_condition_ids : {
        type: Sequelize.STRING
      },
    });
  
    return Birth_record;
  };
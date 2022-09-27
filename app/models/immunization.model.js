module.exports = (sequelize, Sequelize) => {
    const Immunization = sequelize.define("immunization", {
      vaksin_id: {
        type: Sequelize.STRING
      },
      child_id: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      }
    });
  
    return Immunization;
  };
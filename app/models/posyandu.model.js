module.exports = (sequelize, Sequelize) => {
    const Posyandu = sequelize.define("posyandu", {
      name: {
        type: Sequelize.STRING
      },
      rw: {
        type: Sequelize.STRING
      },
      village_id: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Posyandu;
  };
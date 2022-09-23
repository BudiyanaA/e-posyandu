module.exports = (sequelize, Sequelize) => {
    const Posyandu = sequelize.define("posyandu", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Posyandu;
  };
module.exports = (sequelize, Sequelize) => {
    const Imunization = sequelize.define("imunization", {
        // id: {
        //     type: Sequelize.UUID,
        //     // defaultValue: Sequelize.UUIDV4,
        //     allowNull: false,
        //     primaryKey: true    
        //   },
    //   vaksin_id: {
    //     type: Sequelize.STRING
    //   },
    //   child_id: {
    //     type: Sequelize.STRING
    //   },
      date: {
        type: Sequelize.DATEONLY
      }
    }
    // ,{ 
    //     underscored: true, 
    //     timestamps: true,
    //     paranoid: true, 
    //    }
   );
  
    return Imunization;
  };
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.posyandus = require("./posyandu.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.moms = require("./mom.model.js")(sequelize, Sequelize);
db.dads = require("./dad.model.js")(sequelize, Sequelize);
db.childs = require("./child.model.js")(sequelize, Sequelize);
db.birth_records = require("./birth_record.model.js")(sequelize, Sequelize);
db.masterbirthconditions = require("./masterbirthcondition.model.js")(sequelize, Sequelize);
db.mastervaksins = require("./mastervaksin.model.js")(sequelize, Sequelize);
db.master_places= require("./master_place.model.js")(sequelize, Sequelize);
db.immunizations = require("./immunization.model.js")(sequelize, Sequelize);
db.mastervilages = require("./mastervilage.model.js")(sequelize, Sequelize);
db.kms = require("./kms.model.js")(sequelize, Sequelize);



module.exports = db;
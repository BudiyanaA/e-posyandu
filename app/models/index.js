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
db.user = require("./user.model.js")(sequelize, Sequelize);
db.mom = require("./mom.model.js")(sequelize, Sequelize);
db.dad = require("./dad.model.js")(sequelize, Sequelize);
db.child = require("./child.model.js")(sequelize, Sequelize);
db.birth_record = require("./birth_record.model.js")(sequelize, Sequelize);
db.master_birth_condition = require("./master_birth_condition.model.js")(sequelize, Sequelize);
db.master_vaksin = require("./master_vaksin.model.js")(sequelize, Sequelize);
db.master_place = require("./master_place.model.js")(sequelize, Sequelize);
db.immunization = require("./immunization.model.js")(sequelize, Sequelize);
module.exports = db;
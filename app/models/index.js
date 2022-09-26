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
db.masterplaces= require("./masterplace.model.js")(sequelize, Sequelize);
db.immunizations = require("./immunization.model.js")(sequelize, Sequelize);
db.mastervilages = require("./mastervilage.model.js")(sequelize, Sequelize);
db.masterreligions = require("./masterreligion.model.js")(sequelize, Sequelize);
db.mastereducations = require("./mastereducation.model.js")(sequelize, Sequelize);
db.kms = require("./kms.model.js")(sequelize, Sequelize);
db.moms.belongsTo(db.masterreligions, {foreignKey: "religion_id ", as:'master_religion'});
db.moms.belongsTo(db.mastereducations, {foreignKey: "education_id  ", as:'master_education'});
db.moms.belongsTo(db.users, {foreignKey: "user_id   ", as:'user'});
db.dads.belongsTo(db.masterreligions, {foreignKey: "religion_id ", as:'master_religion'});
db.dads.belongsTo(db.mastereducations, {foreignKey: "education_id  ", as:'master_education'});
db.dads.belongsTo(db.moms, {foreignKey: "mom_id   ", as:'mom'});
db.childs.belongsTo(db.birth_records, {foreignKey: "birth_record_id ", as:'birth_record'});
db.childs.belongsTo(db.posyandus, {foreignKey: "posyandu_id ", as:'posyandu'});
module.exports = db;
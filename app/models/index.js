const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,
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
db.birthrecords = require("./birthrecord.model.js")(sequelize, Sequelize);
db.masterbirthconditions = require("./masterbirthcondition.model.js")(sequelize, Sequelize);
db.mastervaksins = require("./mastervaksin.model.js")(sequelize, Sequelize);
db.masterplaces= require("./masterplace.model.js")(sequelize, Sequelize);
db.mastervilages = require("./mastervilage.model.js")(sequelize, Sequelize);
db.roles = require("./role.model.js")(sequelize, Sequelize);
db.masterreligions = require("./masterreligion.model.js")(sequelize, Sequelize);
db.mastereducations = require("./mastereducation.model.js")(sequelize, Sequelize);
db.masterpuskesmas = require("./masterpuskesmas.model.js")(sequelize, Sequelize);
db.antropometristandards= require("./antropometristandard.model.js")(sequelize, Sequelize);
db.kmss = require("./kms.model.js")(sequelize, Sequelize);
db.imunizations = require("./imunization.model.js")(sequelize, Sequelize);

db.moms.belongsTo(db.masterreligions, {foreignKey: "religion_id", as:'master_religion'});
db.moms.belongsTo(db.mastereducations, {foreignKey: "education_id", as:'master_education'});
db.moms.belongsTo(db.users, {foreignKey: "user_id", as:'user'});
db.dads.belongsTo(db.masterreligions, {foreignKey: "religion_id", as:'master_religion'});
db.dads.belongsTo(db.mastereducations, {foreignKey: "education_id", as:'master_education'});
db.dads.belongsTo(db.moms, {foreignKey: "mom_id", as:'mom'});
db.childs.belongsTo(db.birthrecords, {foreignKey: "birth_record_id", as:'birth_record'});
db.childs.belongsTo(db.posyandus, {foreignKey: "posyandu_id", as:'posyandu'});
db.childs.belongsTo(db.moms, {foreignKey: "mom_id", as:'mom'});
db.childs.belongsTo(db.dads, {foreignKey: "dad_id", as:'dad'});
db.birthrecords.belongsTo(db.masterplaces, {foreignKey: "place_id", as:'master_place'});
db.birthrecords.belongsTo(db.moms, {foreignKey: "mom_id", as:'mom'});
db.kmss.belongsTo(db.childs, {foreignKey: "child_id", as:'child'});
db.posyandus.belongsTo(db.masterpuskesmas, {foreignKey: "puskesmas_id", as:'master_puskesmas'});
db.posyandus.belongsTo(db.mastervilages, {foreignKey: "village_id", as:'master_village'});
db.imunizations.belongsTo(db.mastervaksins, {foreignKey: "vaksin_id", as:'master_vaksin'});
db.imunizations.belongsTo(db.childs, {foreignKey: "child_id", as:'child'});
db.roles.belongsToMany(db.users, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.users.belongsToMany(db.roles, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ['USER','INPUTTER','OBSERVER','ADMIN'];
module.exports = db;
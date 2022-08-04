const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
let sequelize;
const JAWSDB_URL = 'mysql://ro6kiti9c0vut32u:aq4f1gayw7dkk7g7@y6aj3qju8efqj0w1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/k8731r6ohjql1vb1';

if (JAWSDB_URL) {
  sequelize = new Sequelize(JAWSDB_URL);
} else {
  sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.note = require("./note.model.js")(sequelize, Sequelize);
db.category = require("./category.model.js")(sequelize, Sequelize);

db.category.belongsToMany(db.note, {
  through: "note_category",
  as: "notes",
  foreignKey: "category_id",
});
db.note.belongsToMany(db.category, {
  through: "note_category",
  as: "categoryes",
  foreignKey: "note_id",
});
module.exports = db;
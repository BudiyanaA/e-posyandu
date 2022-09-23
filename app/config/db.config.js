module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "deriz13",
    DB: "e-posyandu",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
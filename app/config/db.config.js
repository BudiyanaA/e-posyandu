module.exports = {
    HOST: "ec2-44-193-178-122.compute-1.amazonaws.com",
    USER: "mmyrvmkwlnaelz",
    PASSWORD: "3e27155fac3374c1fffc84b498563d0841bf89d28922fd0cb1bbfd0d04b9c8c9",
    DB: "dmbauaaufsa0l",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
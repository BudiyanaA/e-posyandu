const db = require("../models");
const ROLES = db.ROLES;
const User = db.users;

checkDuplicatePhoneOrNik = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      phone: req.body.phone
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Phone is already in use!"
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        nik: req.body.nik
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! NIK is already in use!"
        });
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

const verifySignUp = {
  checkDuplicatePhoneOrNik: checkDuplicatePhoneOrNik,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;
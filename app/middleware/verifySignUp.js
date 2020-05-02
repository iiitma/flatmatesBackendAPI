const db = require("../models");
const User = db.user;

checkDuplicatePhoneNoOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      phoneno: req.body.phoneno
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Phone Number is already in use!"
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
  });
};


const verifySignUp = {
  checkDuplicatePhoneNoOrEmail: checkDuplicatePhoneNoOrEmail,
};

module.exports = verifySignUp;
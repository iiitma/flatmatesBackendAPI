const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.userProfile = (req, res) => {
  User.findOne({
      where: {
        email: req.body.email
      },
    })
    .then((user) => {
      res.status(200).send({
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phoneno: user.phoneno,
        gender: user.gender,
        occupation: user.occupation,
        organization: user.organization,
        dob: user.dob
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });



};

exports.userVerified = (req, res) => {
  User.findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((user) => {
      res.status(200).send({
        verified: user.verified,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.userPreference = (req, res) => {
  User.findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((user) => {
      res.status(200).send({
        id: user.id,
        preference: user.preference,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
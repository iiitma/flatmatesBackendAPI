module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    userid: {
      type: Sequelize.STRING,
    },
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    verifyemail: {
      type: Sequelize.STRING,
      defaultValue: "false",
    },
    phoneno: {
      type: Sequelize.STRING,
    },
    verifyphoneno: {
      type: Sequelize.STRING,
      defaultValue: "false",
    },
    password: {
      type: Sequelize.STRING,
    },
    picture: {
      type: Sequelize.STRING,
      defaultValue: "default-avatar.png",
    },
    prefferedlocation: {
      type: Sequelize.STRING,
      defaultValue: "null",
    },
    country: {
      type: Sequelize.STRING,
      defaultValue: "Nigeria",
    },
    gender: {
      type: Sequelize.STRING,
      defaultValue: "null",
    },
    dob: {
      type: Sequelize.STRING,
      defaultValue: "null null null",
    },
    occupation: {
      type: Sequelize.STRING,
      defaultValue: "null",
    },
    organization: {
      type: Sequelize.STRING,
      defaultValue: "null",
    },
    currentAddress: {
      type: Sequelize.STRING,
    },
    apartment: {
      type: Sequelize.STRING,
      defaultValue: "null",
    },
    flatmate: {
      type: Sequelize.STRING,
      defaultValue: "null",
    },

    verified: {
      type: Sequelize.STRING,
      defaultValue: "false",
    },
    passwordrecoverycode: {
      type: Sequelize.STRING,
      defaultValue: "null",
    },
    personalitytest: {
      type: Sequelize.STRING,
      defaultValue: "false",
    },
  });

  return User;
};

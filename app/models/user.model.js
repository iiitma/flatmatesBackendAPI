module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        firstname: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        phoneno: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING,
            defaultValue: "null"
        },
        dob: {
            type: Sequelize.STRING,
            defaultValue: "null null null"
        },
        occupation: {
            type: Sequelize.STRING,
            defaultValue: "null"
        },
        organization: {
            type: Sequelize.STRING,
            defaultValue: "null"
        },
        userid: {
            type: Sequelize.STRING

        },
        verified: {
            type: Sequelize.STRING,
            defaultValue: "false"
        }
    });

    return User;
};
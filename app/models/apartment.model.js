module.exports = (sequelize, Sequelize) => {
    const Apartment = sequelize.define("apartments", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING,

        },
        featuredImage: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        amount: {
            type: Sequelize.STRING
        },
        bathroom: {
            type: Sequelize.STRING

        },
        bedroom: {
            type: Sequelize.STRING
        },
        paymentstyle: {
            type: Sequelize.STRING
        },
        queue: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        },
        max: {
            type: Sequelize.STRING
        },
        cta: {
            type: Sequelize.STRING
        }

    });

    return Apartment;
};
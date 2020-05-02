const db = require("../models");
const {
    v4: uuidv4
} = require("uuid");
const Apartment = db.apartment;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    // Create an Apartment
    const apartment = {
        id: uuidv4(),
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        featuredImage: req.body.featuredImage,
        address: req.body.address,
        location: req.body.location,
        amount: req.body.amount,
        bathroom: req.body.bathroom,
        bedroom: req.body.bedroom,
        paymentstyle: req.body.paymentstyle,
        queue: req.body.queue,
        published: req.body.published ? req.body.published : false,
        max: req.body.max ? req.body.max : null,
        cta: req.body.cta,
    };

    // Save Apartment in the database
    Apartment.create(apartment)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Listing.",
            });
        });
};

// Retrieve all Apartments from the database.
exports.findAll = (req, res) => {
    const location = req.query.location;
    var condition = location ?
        {
            location: {
                [Op.like]: `%${location}%`,
            },
        } :
        null;

    Apartment.findAll({
            where: condition,
        })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving listings.",
            });
        });
};

// Find a single Apartment with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Apartment.findByPk(id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id,
            });
        });
};

// Update an Apartment by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Apartment.update(req.body, {
            where: {
                id: id,
            },
        })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Listing was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Listing with id=${id}. Maybe Listing was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Listing with id=" + id,
            });
        });
};

// Delete an Apartment with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Apartment.destroy({
            where: {
                id: id,
            },
        })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Listing was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Listing with id=${id}. Maybe Listing was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Listing with id=" + id,
            });
        });
};

// Delete all Apartments from the database.
exports.deleteAll = (req, res) => {};

// Find all published Apartments
exports.findAllPublished = (req, res) => {
    Apartment.findAll({
            where: {
                published: true,
            },
        })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving listings.",
            });
        });
};

// Find all Apartments for an agent
exports.findAllAgent = (req, res) => {
    const agentid = req.params.agentid;
    Apartment.findAll({
            where: {
                agentid: agentid,
            },
        })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving listings.",
            });
        });
};
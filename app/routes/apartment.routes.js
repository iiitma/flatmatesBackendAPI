module.exports = app => {
    const apartment = require("../controllers/apartment.controller.js");

    var router = require("express").Router();

    // Create a new Apartment
    router.post("/", apartment.create);

    // Retrieve all Apartment
    router.get("/", apartment.findAll);

    // Retrieve all published Apartment
    router.get("/published", apartment.findAllPublished);

    // Retrieve a single Apartment with id
    router.get("/:id", apartment.findOne);

    // Update a Apartment with id
    router.put("/:id", apartment.update);

    // Delete a Apartment with id
    router.delete("/:id", apartment.delete);

    // Create a new Apartment
    router.delete("/", apartment.deleteAll);

    app.use('/api/apartments', router);
};
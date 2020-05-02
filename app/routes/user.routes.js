module.exports = function (app) {
  const {
    authJwt
  } = require("../middleware");
  const controller = require("../controllers/user.controller");
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/user", [authJwt.verifyToken], controller.userProfile);

  app.post("/api/user/profile", [authJwt.verifyUser], controller.userProfile);

  app.post("/api/user/verified", [authJwt.verifyUser], controller.userVerified);
};
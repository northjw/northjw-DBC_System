const router = require("express").Router();
const apiRouter = require("./api");
const cmsRouter = require("./cms");
const cardController = require("../controllers/cardController");

//Api routes
router.use("/api", (req, res) => {
  console.log("whatever");
  apiRouter(req, res);
});


// Requiring passport as we've configured it
const passport = require("../utils/passport");

//to do can we remove this? why are we getting all them and then posting to create a new one
//   Matches with "/api/"
router.route("/").get(cardController.findAll)
// .post(cardController.create);


router.route("/upload").post(cardController.upload);
// const dashboardRoutes = require("./dashboard");
const userRoutes = require("./api/user");

// comments routes
// router.use("/dashboard", dashboardRoutes);
// user routes
router.use("/user", userRoutes);


//HTML routes
router.use("/cms", cmsRouter);

module.exports = router;

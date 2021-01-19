const router = require("express").Router();
const apiRouter = require("./api");
const cmsRouter = require("./cms");

//Api routes
router.use("/api", (req, res) => {
  console.log("whatever");
  apiRouter(req, res);
});

const userController = require("../../controllers/userController");
// Requiring passport as we've configured it
const passport = require("../../utils/passport");

// Matches with "/api/user/login"
router
  .route("/login")
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  .post(passport.authenticate("local"), userController.login);

// Matches with "/api/user/signup"
router.route("/signup").post(userController.signup);

// Matches with "/api/user/logout"
router
  .route("/logout")
  // Route for logging user out
  .get(userController.logout);

// Matches with "/api/user/authenticate"
router
  .route("/authenticate")
  // Route for getting some data about our user to be used client side
  .post(userController.authenticate);

//   Matches with "/api/comments"
  router.route("/")
    .get(commentsController.findAll)
    .post(commentsController.create);
  
  // Matches with "/api/comments/:id"
  router
    .route("/:id")
    .get(commentsController.findById)
    .put(commentsController.update)
    .delete(commentsController.remove);

    // Matches with "/api/cards"
router.route("/").get(cardController.findAll);
router.route("/upload").post(cardController.upload);
// const dashboardRoutes = require("./dashboard");
const userRoutes = require("../user");

// comments routes
// router.use("/dashboard", dashboardRoutes);
// user routes
router.use("/user", userRoutes);

// Matches with "/api/cards/:id"
router
    .route("/:id")
    .get(cardController.findById)
    .put(cardController.update)
    .delete(cardController.remove);
  

//HTML routes
router.use("/cms", cmsRouter);

module.exports = router;

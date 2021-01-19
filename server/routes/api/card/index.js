const router = require("express").Router();
const cardController = require("../../../controllers/cardController");

// Matches with "/api/card"
router.route("/").get(cardController.findAll);
router.route("/upload").post(cardController.upload);

// Matches with "/api/card/:id"
router
    .route("/:id")
    .get(cardController.findById)
    .put(cardController.update)
    .delete(cardController.remove);

module.exports = router;

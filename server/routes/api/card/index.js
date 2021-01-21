const router = require("express").Router();
const cardController = require("../../../controllers/cardController");
const require = require("multer");



//define storage for image files

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/uploads/images");
  },

  //add bck file extension (multer removes it)
  filename:function (req, file, callback) {
      callback(null, Date.now() file.originalname)
  },

  //upload parameters for multer
  const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 3,
  },
  })
});
// Matches with "/api/cards"

router.route("/").get(cardController.findAll);
router.route("/upload").post(cardController.upload);

// Matches with "/api/card/:id"
router
  .route("/:id")
  .post(cardController.upload, upload.single('image'))
  .get(cardController.findById)
  .put(cardController.update)
  .delete(cardController.remove);

module.exports = router;

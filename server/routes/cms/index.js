const path = require("path");
const router = require("express").Router();

router.use((req, res) => {
    console.log("look on here")
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;

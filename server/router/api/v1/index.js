const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
router.use("/profile", require("./Profiles"));
router.use("/post", require("./post"));
module.exports = router;

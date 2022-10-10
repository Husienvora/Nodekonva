const express = require("express");
const router = express.Router();
const { page1 } = require("../controllers/templateset1");

router.route("/set1").post(page1);
module.exports = router;

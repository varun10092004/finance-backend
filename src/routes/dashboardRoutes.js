const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const {
  getSummary,
  getCategoryData
} = require("../controllers/dashboardController");

router.get("/summary", auth, authorize("admin", "analyst", "viewer"), getSummary);
router.get("/category", auth, authorize("admin", "analyst"), getCategoryData);

module.exports = router;
const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} = require("../controllers/recordController");

router.post("/", auth, authorize("admin"), createRecord);
router.get("/", auth, authorize("admin", "analyst"), getRecords);
router.put("/:id", auth, authorize("admin"), updateRecord);
router.delete("/:id", auth, authorize("admin"), deleteRecord);

module.exports = router;
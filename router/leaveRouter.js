const express = require("express");
const router = express.Router();
const leaveController = require("../controller/leaveController");

router.post("/add", leaveController.Add);
router.get('/find', leaveController.getleave)


module.exports = router;
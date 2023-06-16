const express = require("express");
const router = express.Router();
const complaintController = require("../controller/ComplaintContraller");

router.post("/add", complaintController.Add);
router.get('/find', complaintController.getcomplaint)


module.exports = router;
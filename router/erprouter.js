const experss = require("express");
const router = experss.Router();
const erpcontroller = require("../controller/erpcontroller");



router.post("/add", erpcontroller.adderpdata);

module.exports = router;

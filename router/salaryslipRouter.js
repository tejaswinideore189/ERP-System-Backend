const experss = require("express");
const router = experss.Router();
const salarycontroller = require("../controller/salaryslipcontroller");



router.post("/add", salarycontroller.addsalarydata);
router.post("/find", salarycontroller.getsalary);

module.exports = router;

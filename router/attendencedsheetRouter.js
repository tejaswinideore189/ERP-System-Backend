const experss = require("express");
const router = experss.Router();
const addattendencedcontroller = require("../controller/attendencedsheetContraller");



router.post("/add",  addattendencedcontroller.addattendenceddata);

router.get('/find', addattendencedcontroller.getAttendance)

router.post('/findOne' , addattendencedcontroller.getParticualrAttendance)

module.exports = router;

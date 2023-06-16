const experss = require("express");
const router = experss.Router();
const usercontroller = require("../controller/usercontroller");



router.post("/add", usercontroller.addUserdata);
router.get('/find', usercontroller.getuser)


module.exports = router;

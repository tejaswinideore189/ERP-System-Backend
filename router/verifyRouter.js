const experss =require("express")
const router=experss.Router();
const verifycontroller=require("../controller/verifyController")

router.post("/.add",verifycontroller.addverify)

module.exports = router;
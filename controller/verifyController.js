const verifymodel = require("../model/verifyModel")

const addverify =async(req, res) => {
    try {
        const verifydetail = new verifymodel({
            password:req.body.password,
            confirmpassword:req.body.confirmpassword
        })
    const saveVerify = await verifydetail.save();
    res.status(200).send({ msg: "update data", verifydata: saveVerify });
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports={addverify}
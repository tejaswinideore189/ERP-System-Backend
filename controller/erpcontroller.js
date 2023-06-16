const erpmodel = require("../model/erpmodel");
const signmodel = require('../model/signmodel')

const adderpdata = async (req, res) => {
  try {

    const signdetail = new signmodel({
      email: req.body.email,
      password: req.body.password,
      userType: req.body.userType
    })
           
    const erpdetail = new erpmodel({
      email: req.body.email,
      fName:req.body.fName,
      lName:req.body.lName,
      contact: req.body.contact,
      password:req.body.password,
      userType: req.body.userType
    });
    const savesignmodel = await signdetail.save()
    const saveErp = await erpdetail.save();
    res.status(200).send({ msg: "update data", erpdata: saveErp, signdata: savesignmodel });
  } catch (error) {
    res.status(400).send(error)
  }
};


module.exports={adderpdata}
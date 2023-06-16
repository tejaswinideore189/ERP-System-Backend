const usermodel = require("../model/usermodel");
const signmodel = require("../model/signmodel");

const addUserdata = async (req, res) => {
  try {
    const signdetail = new signmodel({
      email: req.body.email,
      password: req.body.password,
      userType: req.body.userType,
    });

    const userdetail = new usermodel({
      fName: req.body.fName,
      lName: req.body.lName,
      age: req.body.age,
      city: req.body.city,
      jobTitle: req.body.jobTitle,
      email: req.body.email,
      password: req.body.password,
      userType: req.body.userType,
    });
    const savesignmodel = await signdetail.save();
    const saveUser = await userdetail.save();
    res
      .status(200)
      .send({ msg:"update data", userdata: saveUser, signdata: savesignmodel });
  } catch (error) {
    res.status(400).send(error);
  }
};
const getuser = async(req, res) => {

  const getData = await usermodel.find()
  try{
    res.status(200).send(getData)
  }catch(err){
    res.status(500).send(err)
  }

}

module.exports = {addUserdata,getuser}
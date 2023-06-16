const signmodel = require('../model/signmodel')
const adminmodel = require('../model/erpmodel')
const usermodel = require('../model/usermodel')


const login = async(req, res) => {

    try {
      const {email, password, userType} = req.body
      const user = await signmodel.findOne({email, password, userType})
  
      if(!user){
        res.status(400).send("No details found")
      }else{
        res.status(200).send(user)
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  const adminDetails = async(req, res) => {

    try {
      const admindetail = await adminmodel.findOne({email:req.body.email}, 
        {fName:1, lName:1, email:1})

        if(!admindetail){
          res.status(400).send("No details found")
        }else{
          res.status(200).send(admindetail)
        }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  const userDetails = async(req, res) => {

    try {
      const userdetail = await usermodel.findOne({email:req.body.email}, 
        {fName:1, lName:1, email:1})

        if(!userdetail){
          res.status(400).send("No details found")
        }else{
          res.status(200).send(userdetail)
        }
    } catch (error) {
      res.status(500).send(error);
    }
  }

module.exports = {login, adminDetails, userDetails}
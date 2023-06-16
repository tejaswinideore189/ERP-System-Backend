const attendencedmodel = require("../model/attendencedsheetModel");
const signModel = require("../model/signmodel");

const addattendenceddata = async (req, res) => {
  try {
    const signData = await signModel.findOne({ email: req.body.email });
    console.log("signModel Email:", signData.email);

    if (signData.userType == "User") {
      const attendenceddetail = new attendencedmodel({
        fullName: req.body.fullName,
        // attendence_in_perc: req.body.attendence_in_perc,
        email: signData.email,
        present_days: req.body.present_days,
        absent_days: req.body.absent_days,
      });
      const saveattendenced = await attendenceddetail.save();
      res
        .status(200)
        .send({ msg: "Attendance added successfully", attendenceddata: saveattendenced });
    }
    else{
      res.status(400).send({msg: "Attendance is only applicable to User"})
    }
  } catch (error) {
    console.log(error);
  }
};

const getAttendance = async (req, res) => {
  const getData = await attendencedmodel.find();
  try {
    res.status(200).send(getData);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getParticualrAttendance = async (req, res) => {
  try {
    const userdetail = await attendencedmodel.findOne({ email: req.body.email });

    if (!userdetail) {
      res.status(400).send("No details found");
    } else {
      res.status(200).send(userdetail);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { addattendenceddata, getAttendance, getParticualrAttendance };

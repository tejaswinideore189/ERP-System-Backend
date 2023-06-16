const mongoose = require("mongoose");

const leaveSheama = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  reason: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("leaveData", leaveSheama);
const mongoose = require("mongoose");

const mailSender = require("./../util/mailSender");

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique:true,
  },

  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5,
  },
});
module.exports = mongoose.model("OTP", otpSchema);

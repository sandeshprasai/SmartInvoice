const express = require("express");
const { validateUser, validatelogin } = require("../util/validateuser");
const {
  registerUser,
  loginUser,
  getUsersData,
} = require("../userController/index");
const generateInvoice = require("./../util/validateDashBoardInputs");
const refreshToken = require("../userController/refresh-token");
const validateToken = require("../util/validateToken");
const otpGenerator = require("./../util/otpGeneration");
const sendMail = require("../util/mailSender");
const verifyOtp = require("../userController/verifyOtp");
const fetchName = require("./../userController/sendUserName");

const routes = express.Router();
routes.post("/register", validateUser, registerUser);
routes.post("/login", validatelogin, loginUser);
routes.post("/refresh", refreshToken);
routes.post("/verifyOtp", verifyOtp);
routes.post("/FetchUserName", fetchName);

routes.get("/users", validateToken, getUsersData);
module.exports = routes;

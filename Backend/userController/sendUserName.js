const jwt = require("jsonwebtoken");
require("dotenv").config();
const userName = async (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (!refreshToken) {
    return res
      .status(400)
      .json({ message: "Expired or Invalid Refresh Token" });
  }

  try {
    const response = jwt.verify(refreshToken, process.env.SECRET);
    return res.status(201).json({ fullName: response.fullName });
  } catch (error) {
    console.log(error);
  }
};

module.exports = userName;

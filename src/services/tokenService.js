const jwt = require("jsonwebtoken");

const jwtKey = process.env.jwtkey;
const jwtExpirySeconds = 300;


const GenerarToken = (username) => {       
    const token = jwt.sign({ username }, jwtKey, {
      algorithm: "HS256",
      expiresIn: jwtExpirySeconds,
    });
    console.log("token:", token);
    return token;
  };

  module.exports = {
    GenerarToken
  };
  
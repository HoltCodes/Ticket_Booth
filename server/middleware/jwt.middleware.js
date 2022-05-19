const jwt = require("jsonwebtoken");

const authenticateJwt = async(req, res, next) => {
  try {
    decodedJwt = await jwt.verify(
    req.cookies.usertoken,
    process.env.SECRET_KEY,
    );
    req.body.user_id = decodedJwt.id;
    console.log("Success", decodedJwt);
    next();
  } catch (error) {
    console.log("TOKEN ERROR");
    res.status(400).json({ errorMessage: "You must be logged in to do that!"});
  }
};


module.exports = { authenticateJwt};
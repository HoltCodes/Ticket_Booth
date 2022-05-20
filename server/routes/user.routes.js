const User = require("../controllers/user.controller")
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {

app.post("/api/register", User.register);
app.post("/api/login", User.login);
app.get("/api/logout", User.logout);

app.get("/api/user", authenticate,User.getUser)
};
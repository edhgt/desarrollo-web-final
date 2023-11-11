// controllers/passwordAuthController.js
const passport = require("passport");

const loginWithPassword = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    console.log(info)
    if (info) {
      res.status(401).json({ message: "Credenciales inválidas", info});
    } else {
      const { _id, username, displayName, email } = user;
      res.json({ message: "Login successful", user: { _id, username, displayName, email } });
    }
  })(req, res, next);
};

const logout = (req, res) => {
  req.logout();
  res.json({ message: "Cierre de sesión exitoso" });
};

module.exports = { loginWithPassword, logout };

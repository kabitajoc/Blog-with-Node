const { users } = require("../../model");
const bcrypt = require("bcryptjs");

exports.renderRegisterForm = (req, res) => {
  res.render("registerForm");
};
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  await users.create({
    username,
    email,
    password: bcrypt.hashSync(password, 12),
  });
  res.redirect("/login");
};
exports.renderLoginForm = (req, res) => {
  res.render("login");
};
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.send("Please Provide Email And password");
  }
  //check whether the coming user exist or not
  await users.findAll({
    where: {
      email: email,
    },
  });
  if (users.length == 0) {
    res.send("No user Exist with that email");
  } else {
    isMatched = bcrypt.compareSync(password, users[0].password);
    if (isMatched) {
      res.redirect("/");
    } else {
      res.send("Email or Password invalid");
    }
  }
};

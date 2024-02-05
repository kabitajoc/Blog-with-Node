exports.renderRegisterForm = (req, res) => {
  res.render("registerForm");
};

exports.renderUser = async (req, res) => {
  const usersTableuser = await users.findAll();
  res.render("user", { users: usersTableuser });
};
exports.renderRegister = (req, res) => {
  res.render("register");
};
exports.register = async (req, res) => {
  const { email, username, password } = req.body;

  await users.create({
    email: email,
    username: username,
    password: password,
  });

  res.redirect("/user");
};

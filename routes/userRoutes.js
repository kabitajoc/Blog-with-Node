const { renderRegisterForm } = require("../controller/user/userController");

const router = require("express").Router;
router.route("/register").get(renderRegisterForm);

module.exports = router;

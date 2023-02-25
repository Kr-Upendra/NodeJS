const User = require("../model/userModel");

exports.register = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.render("secret", {
      status: "success",
      title: "You reached | this is my secret",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed.",
      message: "Something bad heppen",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const userDB = await User.findOne({ username: username });
    if (userDB.password === password) {
      return res.render("secret", {
        status: "success",
        title: "You reached | this is my secret",
      });
    } else {
      res.status(400).json({
        status: "failed",
        message: "something bad heppen!",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "failed.",
      message: "Something bad heppen",
    });
  }
};

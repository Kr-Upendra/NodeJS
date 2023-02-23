const User = require("../model/userModel");

exports.register = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create({
      email: req.body.username,
      password: req.body.password,
    });
    res.render("secret", {
      status: "success!",
      title: "Secret page | Here is my secret",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed!",
      message: "something bad happen!",
      error: err,
    });
  }
};

exports.login = async (req, res) => {
  try {
    console.log(req.body);
    // const user = await User.find();
    res.status(200).json({
      status: "success!",
      data: { user: "hello" },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed!",
      message: "something bad happen!",
      error: err,
    });
  }
};

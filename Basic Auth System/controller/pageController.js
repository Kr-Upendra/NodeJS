exports.login = (req, res) => {
  res.render("login", {
    status: "success",
    title: "Login Page | Get my secret",
  });
};

exports.register = (req, res) => {
  res.render("register", {
    status: "success",
    title: "Register Page | Get my secret",
  });
};

exports.homePage = (req, res) => {
  res.status(200).render("home", {
    title: "Home Page",
  });
};

exports.signupPage = (req, res) => {
  res.status(200).render("signup", {
    title: "Signup Page",
  });
};

exports.loginPage = (req, res) => {
  res.status(200).render("login", {
    title: "Login Page",
  });
};

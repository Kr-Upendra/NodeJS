import "@babel/polyfill";
import { login } from "./login";
import { signup } from "./signup";

const loginForm = document.querySelector(".loginForm");
const signupForm = document.querySelector(".signupForm");

// Values

if (loginForm)
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const loginEmail = document.querySelector(".loginEmail").value;
    const loginPassword = document.querySelector(".loginPassword").value;
    login(loginEmail, loginPassword);
  });

if (signupForm)
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const signupUsername = document.querySelector(".signupUsername").value;
    const signupEmail = document.querySelector(".signupEmail").value;
    const signupPassword = document.querySelector(".signupPassword").value;
    const signupConfirmPassword = document.querySelector(
      ".signupConfirmPassword"
    ).value;
    signup(signupUsername, signupEmail, signupPassword, signupConfirmPassword);
  });

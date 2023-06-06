import axios from "axios";

export const signup = async (username, email, password, confirmPassword) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:5050/api/users/signup",
      data: {
        username,
        email,
        password,
        confirmPassword,
      },
    });
    if (res.data.status === "success") {
      alert(`${res.data.message}`);
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};

import axios from "axios";

export const login = async (email, password) => {
  console.log({ email, password });
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:5050/api/users/login",
      data: {
        email,
        password,
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

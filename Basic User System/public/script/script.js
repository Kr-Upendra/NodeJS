const nightMode = document.querySelector(".night__mode");
const body = document.querySelector("body");

const changeIcon = () => {
  const isNight = nightMode.getAttribute("data-isNight");
  if (isNight === "false") {
    nightMode.setAttribute("data-isNight", "true");
    nightMode.setAttribute("src", "img/sun.png");
    body.setAttribute("data-isnight", "true");
  } else {
    nightMode.setAttribute("data-isNight", "false");
    body.setAttribute("data-isnight", "false");
    nightMode.setAttribute("src", "img/moon.png");
  }
};

nightMode.addEventListener("click", changeIcon);

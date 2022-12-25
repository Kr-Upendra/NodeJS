const navigation = document.querySelector(".navigation");
const toggleBtn = document.querySelector(".toggle");
const dropdownBtn = document.querySelector(".drop-btn");
const dropdownContent = document.querySelector(".dropdown-content");

toggleBtn.addEventListener("click", () => {
  const visibility = navigation.getAttribute("data-visible");
  if (visibility === "false") {
    navigation.setAttribute("data-visible", true);
    toggleBtn.setAttribute("aria-expanded", true);
  } else {
    navigation.setAttribute("data-visible", false);
    toggleBtn.setAttribute("aria-expanded", false);
  }
});

dropdownBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});

window.onclick = function (e) {
  if (!e.target.matches(".drop-btn")) {
    let dropDowns = dropdownContent;
    for (let i = 0; i < dropDowns.length; i++) {
      let openDropDown = dropDowns[i];
      if (openDropDown.classList.contains("show")) {
        openDropDown.classList.remove("show");
      }
    }
  }
};

// let resizeTimer;
// window.addEventListener("resize", () => {
//   document.body.classList.add("resize-animation-stopper");
//   clearTimeout(resizeTimer);
//   resizeTimer = setTimeout(() => {
//     document.body.classList.remove("resize-animation-stopper");
//   }, 400);
// });

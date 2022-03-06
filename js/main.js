const section = document.querySelector("section");
const activeList = section.children[3];

const activate = function (event) {
  event.target.nodeName === "BUTTON" || event.target.alt === "share button"
    ? activeList.classList.add("active")
    : activeList.classList.remove("active");
};

section.addEventListener("click", activate);
document.getElementById("root").addEventListener("click", activate);

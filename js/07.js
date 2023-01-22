btn = document.querySelector("#btn");
btn2 = document.querySelector("#btn2");
btn3 = document.querySelector("#btn-close");
alertBox = document.querySelector(".alert-box");
paragraph = document.querySelector("#alert-value");
navbarBtn = document.querySelector(".navbar-toggler");
listGroup = document.querySelector(".list-group");

const display = (show, text) => {
  paragraph.innerText = text;
  alertBox.style.display = show;
};
function toggleNavbar() {
  listGroup.classList.toggle("show");
}

navbarBtn.addEventListener("click", toggleNavbar);

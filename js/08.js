const btn = document.querySelectorAll(".tab-button");
const tab_div = document.querySelectorAll(".tab-content");

const tap_count = 4;
for (let index = 0; index < tap_count; index++) {
  btn[index].addEventListener("click", function () {
    for (let i = 0; i < tap_count; i++) {
      btn[i].classList.remove("orange");
      tab_div[i].classList.remove("show");
    }
    btn[index].classList.add("orange");
    tab_div[index].classList.add("show");
  });
}

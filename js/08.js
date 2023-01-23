const btn = document.querySelectorAll(".tab-button");
const tab_div = document.querySelectorAll(".tab-content");
const tab_list = document.querySelector(".list");

const tap_count = 4;

function openTab(index) {
  for (let i = 0; i < tap_count; i++) {
    btn[i].classList.remove("orange");
    tab_div[i].classList.remove("show");
  }
  btn[index].classList.add("orange");
  tab_div[index].classList.add("show");
}

tab_list.addEventListener("click", function (e) {
  openTab(parseInt(e.target.dataset.id));
});

// for (let index = 0; index < tap_count; index++) {
//   btn[index].addEventListener("click", function () {
//     for (let i = 0; i < tap_count; i++) {
//       btn[i].classList.remove("orange");
//       tab_div[i].classList.remove("show");
//     }
//     btn[index].classList.add("orange");
//     tab_div[index].classList.add("show");
//   });
// }
const pants = [28, 30, 32];
const shirts = [95, 100, 105, 110];

function hideAllandShow(index) {
  for (let i = 0; i < 3; i++) {
    $(".form-select")
      .eq(i + 1)
      .removeClass("show");
  }
  $(".form-select")
    .eq(index + 1)
    .addClass("show");
}
document.querySelector(".cloth-select").addEventListener("input", function (e) {
  if (e.target.value == "모자") {
    hideAllandShow(0);
  } else if (e.target.value == "셔츠") {
    hideAllandShow(1);
  } else if (e.target.value == "바지") {
    hideAllandShow(2);
  }
});

// for (let i = 0; i < pants.length; i++) {
//   $(".form-select").eq(3).append(`<option>${pants[i]}</option>`);
// }
shirts.forEach((data) => {
  $(".form-select").eq(2).append(`<option>${data}</option>`);
});
pants.forEach((data) => {
  $(".form-select").eq(3).append(`<option>${data}</option>`);
});

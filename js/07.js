const display = (text) => {
  $("#alert-value").html(text);
  $(".alert-box").toggleClass("show");
};
let isClicked = false;

$(".navbar-toggler").on("click", function () {
  $(".list-group").toggleClass("show-list");
});

$("#btn3").on("click", function () {
  $(".black-bg").toggleClass("show-modal");
});
$("#close").on("click", function () {
  $(".black-bg").toggleClass("show-modal");
});
$("#login").on("click", function () {
  $(".black-bg").toggleClass("show-modal");
});
$("#login-form").on("submit", function (event) {
  if (document.querySelector("#id-input").value === "") {
    alert("아이디를 입력해주세요.");
    event.preventDefault();
  } else if (document.querySelector("#pw-input").value === "") {
    alert("비밀번호를 입력해주세요.");
    event.preventDefault();
  } else if (document.querySelector("#pw-input").value.length < 6) {
    alert("비밀번호를 6글자 이상 입력해주세요.");
    event.preventDefault();
  }
});

$(".badge").on("click", function () {
  isClicked = !isClicked;
  if (isClicked === false) {
    $(".badge").html("Dark 🔄");
    $(".badge").toggleClass("font-black bg-dark bg-light");
    $(".navbar").toggleClass("navbar-light bg-light navbar-dark bg-dark");
    $("body").toggleClass("dark");
    $(".list-group-item").toggleClass("dark");
  } else {
    $(".badge").html("Light 🔄");
    $(".badge").toggleClass("font-black bg-dark bg-light");
    $(".navbar").toggleClass("navbar-light bg-light navbar-dark bg-dark");
    $("body").toggleClass("dark");
    $(".list-group-item").toggleClass("dark");
  }
});

let count = 0;
$("#send-answer").on("click", function () {
  count = count + 1;
  if (document.querySelector("#answer").value === "1335") {
    alert("성공");
  } else if (count >= 3) {
    alert("멍청아");
  }
});

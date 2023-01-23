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
  } else if (!/\S+@\S+\.\S+/.test(document.querySelector("#id-input").value)) {
    alert("이메일 형식으로 입력해주세요.");
    event.preventDefault();
  } else if (document.querySelector("#pw-input").value === "") {
    alert("비밀번호를 입력해주세요.");
    event.preventDefault();
  } else if (document.querySelector("#pw-input").value.length < 6) {
    alert("비밀번호를 6글자 이상 입력해주세요.");
    event.preventDefault();
  } else if (!/[A-Z]/.test(document.querySelector("#pw-input").value)) {
    alert("대문자를 포함해주세요.");
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

let timeCount = 5;
var interval = setInterval(function () {
  timeCount = timeCount - 1;
  if (timeCount >= 0) {
    $(".alert").html(`${timeCount}초 이내 구매시 사은품 증정!`);
  } else if (timeCount === -1) {
    $(".alert").hide();
  } else if (timeCount === -2) {
    clearInterval(interval);
  }
}, 1000);

let photoIndex = 0;
$(".slide-1").on("click", function () {
  $(".slide-container").css("transform", "translateX(0px)");
  photoIndex = 0;
  $(".slide-1").css("backgroundColor", "tomato");
  $(".slide-2").css("backgroundColor", "gray");
  $(".slide-3").css("backgroundColor", "gray");
});
$(".slide-2").on("click", function () {
  $(".slide-container").css("transform", "translateX(-100vw)");
  photoIndex = 1;
  $(".slide-1").css("backgroundColor", "gray");
  $(".slide-2").css("backgroundColor", "tomato");
  $(".slide-3").css("backgroundColor", "gray");
});
$(".slide-3").on("click", function () {
  $(".slide-container").css("transform", "translateX(-200vw)");
  photoIndex = 2;
  $(".slide-1").css("backgroundColor", "gray");
  $(".slide-2").css("backgroundColor", "gray");
  $(".slide-3").css("backgroundColor", "tomato");
});

$(".side-button-left").on("click", function () {
  if (photoIndex === 1) {
    $(".slide-container").css("transform", "translateX(0px)");
    photoIndex = 0;
    $(".slide-1").css("backgroundColor", "tomato");
    $(".slide-2").css("backgroundColor", "gray");
    $(".slide-3").css("backgroundColor", "gray");
  } else if (photoIndex === 2) {
    $(".slide-container").css("transform", "translateX(-100vw)");
    photoIndex = 1;
    $(".slide-1").css("backgroundColor", "gray");
    $(".slide-2").css("backgroundColor", "tomato");
    $(".slide-3").css("backgroundColor", "gray");
  }
});
$(".side-button-right").on("click", function () {
  if (photoIndex === 0) {
    $(".slide-container").css("transform", "translateX(-100vw)");
    photoIndex = 1;
    $(".slide-1").css("backgroundColor", "gray");
    $(".slide-2").css("backgroundColor", "tomato");
    $(".slide-3").css("backgroundColor", "gray");
  } else if (photoIndex === 1) {
    $(".slide-container").css("transform", "translateX(-200vw)");
    photoIndex = 2;
    $(".slide-1").css("backgroundColor", "gray");
    $(".slide-2").css("backgroundColor", "gray");
    $(".slide-3").css("backgroundColor", "tomato");
  }
});

function 함수(num, isFirst) {
  let result = num * 0.9;
  if (isFirst) {
    result = result - 1.5;
  }
  return parseFloat(result.toFixed(2));
}

window.addEventListener("scroll", function () {
  if (this.window.scrollY >= 100) {
    $(".navbar-brand").css("font-size", "16px");
    $("body").css("padding-top", "56px");
  } else {
    $(".navbar-brand").css("font-size", "27px");
    $("body").css("padding-top", "66.5px");
  }
});
$(".lorem").on("scroll", function () {
  if (
    document.querySelector(".lorem").scrollTop +
      document.querySelector(".lorem").clientHeight ==
    document.querySelector(".lorem").scrollHeight - 2
  ) {
    $(".all-read").css("visibility", "visible");
  }
});
$(".black-bg").on("click", function (e) {
  if (e.target == this) {
    $(".black-bg").toggleClass("show-modal");
  }
});

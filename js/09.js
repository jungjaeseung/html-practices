const products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

let clickedCount = 0;
let isSorted = false;
let getUrls = [
  "https://codingapple1.github.io/js/more1.json",
  "https://codingapple1.github.io/js/more2.json",
];

function createForm(dataArr) {
  dataArr.forEach(function (data) {
    const div_layout = `<div class="col-sm-4">
    <img src="img/product1.jpg" class="w-100" />
    <h5>${data["title"]}</h5>
    <p>가격 : ${data["price"]}</p>
  </div>`;
    $(".row").append(div_layout);
  });
}
function createNewProducts(url) {
  $.get(url).done(function (data) {
    createForm(data);
  });
}
function createSortedProducts(url) {
  $.get(url).done(function (data) {
    let sortedData = data.sort((a, b) => a.price - b.price);
    createForm(sortedData);
  });
}

$("#more").on("click", function () {
  if (isSorted == false) {
    if (getUrls[clickedCount] != null) {
      createNewProducts(getUrls[clickedCount]);
      clickedCount = clickedCount + 1;
      if (clickedCount == getUrls.length) {
        $("#more").html("더보기 없음");
        $("#more").removeClass("btn-danger");
        $("#more").addClass("btn-secondary");
      }
    }
  } else {
    if (getUrls[clickedCount] != null) {
      createSortedProducts(getUrls[clickedCount]);
      clickedCount = clickedCount + 1;
      if (clickedCount == getUrls.length) {
        $("#more").html("더보기 없음");
        $("#more").removeClass("btn-danger");
        $("#more").addClass("btn-secondary");
      }
    }
  }
});

$("#sort-btn").on("click", function () {
  isSorted = !isSorted;
  $(".row").html("");
  const sortedArr = products.sort((a, b) => a.price - b.price);
  createForm(sortedArr);
  for (let i = 0; i < clickedCount; i++) {
    createSortedProducts(getUrls[i]);
  }
  $("#sort-btn").html("정렬완료");
  $("#sort-btn").removeClass("btn-danger");
  $("#sort-btn").addClass("btn-secondary");
});

createForm(products);

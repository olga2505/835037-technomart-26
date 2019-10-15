  var catalogSave = document.querySelector(".catalog-save");
  var bookmarks = document.querySelector(".bookmarks");

  var buy = document.querySelector(".catalog-buy");
  var basket = document.querySelector(".basket");

  catalogSave.addEventListener("click", function (evt) {
    evt.preventDefault();
    bookmarks.classList.add("color-add");
});

buy.addEventListener("click", function (evt) {
    evt.preventDefault();
    basket.classList.add("color-add");
});
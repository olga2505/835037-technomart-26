  var cartPopup = document.querySelector(".popup-cart");
  var cartClose = cartPopup.querySelector(".exit-cart");
  var bookmarks = document.querySelector(".bookmarks");
  var bookmarksCount = bookmarks.querySelector("span");

  var basket = document.querySelector(".basket");
  var basketCount = basket.querySelector("span")

document.addEventListener("click", function (evt) {
  var target = evt.target;

  if(target.classList.contains("catalog-save")) {
    bookmarks.classList.add("color-add");
    bookmarksCount.innerHTML = +bookmarksCount.innerHTML + 1;
  }

  if(target.classList.contains("catalog-buy")) {
    basket.classList.add("color-add");
    basketCount.innerHTML = +basketCount.innerHTML + 1;
    cartPopup.classList.add("modal-show");

    cartClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    });

  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cartPopup.classList.contains("modal-show")) {
      cartPopup.classList.remove("modal-show");
    }
  }
});

var cartLink = document.querySelector(".catalog-by");

var cartPopup = document.querySelector(".popup-cart");
var cartClose = cartPopup.querySelector(".exit-cart");

cartLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-show");
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cartPopup.classList.contains("modal-show")) {
      cartPopup.classList.remove("modal-show");
    }
  }
});
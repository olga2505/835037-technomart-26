var cartPopup=document.querySelector(".popup-cart"),cartClose=cartPopup.querySelector(".exit-cart"),bookmarks=document.querySelector(".bookmarks"),bookmarksCount=bookmarks.querySelector("span"),basket=document.querySelector(".basket"),basketCount=basket.querySelector("span");document.addEventListener("click",function(o){var t=o.target;t.classList.contains("catalog-save")&&(bookmarks.classList.add("color-add"),bookmarksCount.innerHTML=+bookmarksCount.innerHTML+1),t.classList.contains("catalog-buy")&&(basket.classList.add("color-add"),basketCount.innerHTML=+basketCount.innerHTML+1,cartPopup.classList.add("modal-show"),cartClose.addEventListener("click",function(o){o.preventDefault(),cartPopup.classList.remove("modal-show")}))}),window.addEventListener("keydown",function(o){27===o.keyCode&&(o.preventDefault(),cartPopup.classList.contains("modal-show")&&cartPopup.classList.remove("modal-show"))});
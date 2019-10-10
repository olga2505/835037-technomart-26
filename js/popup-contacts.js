
      var link = document.querySelector(".button-feedback");

      var popupContacts = document.querySelector(".popup-contacts");
      var close = popupContacts.querySelector(".exit-contacts");

      var form = popupContacts.querySelector(".form-conacts");
      var userName = popupContacts.querySelector("[name=user-name]");
      var userEmail = popupContacts.querySelector("[name=user-email]");
      var text = popupContacts.querySelector("[name=text]");

      var isStorageSupport = true;
      var storage = "";
      
      // если localStorage отключен. Как сюда добавить 2-е поле (почту)
      try {
        storage = localStorage.getItem("userName");
      } catch (err) {
        isStorageSupport = false;
      }

      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupContacts.classList.add("modal-show");

      
        if (storage) {
          userName.value = storage;
          userEmail.focus();
          } else {
            userName.focus();
          } 
          });
            
      // как добавить автозаполнение email

      close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupContacts.classList.remove("modal-show");
      popupContacts.classList.remove("modal-error");
    });

      form.addEventListener("submit", function (evt) {
        if (!userName.value || !userEmail.value || !text.value) {
          evt.preventDefault();
          // popupContacts.classList.remove("modal-error");
          // popup.offsetWidth = popup.offsetWidth;
          popupContacts.classList.add("modal-error");
        } else {
              if (isStorageSupport) {
          localStorage.setItem("userName", userName.value);
          localStorage.setItem("userEmail", userEmail.value);
          // не записывается в localStorage почта
         } 
        }
      });
      window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupContacts.classList.contains("modal-show")) {
        popupContacts.classList.remove("modal-show");
        popupContacts.classList.remove("modal-error");
      }
    }
  });
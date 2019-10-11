
      var link = document.querySelector(".button-feedback");

      var popupContacts = document.querySelector(".popup-contacts");
      var close = popupContacts.querySelector(".exit-contacts");

      var form = popupContacts.querySelector(".form-conacts");
      var userName = popupContacts.querySelector("[name=user-name]");
      var userEmail = popupContacts.querySelector("[name=user-email]");
      var text = popupContacts.querySelector("[name=text]");

      var isStorageSupport = true;
      var storage = "";
      var storageMail = "";
      
      try {
        storage = localStorage.getItem("userName");
        storageMail = localStorage.getItem("userEmail");
      } catch (err) {
        isStorageSupport = false;
      }

      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupContacts.classList.add("modal-show");

      
        if (storage) {
          userName.value = storage;
          if (storageMail) {
            userEmail.value = storageMail;
          } else {
            userEmail.focus();
          }
          text.focus();
        } else {
          userName.focus();
        }
      });
            
      close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupContacts.classList.remove("modal-show");
      popupContacts.classList.remove("modal-error");
    });

      form.addEventListener("submit", function (evt) {
        if (!userName.value || !userEmail.value) {
          evt.preventDefault();
          popupContacts.classList.remove("modal-error");
          popupContacts.offsetWidth = popupContacts.offsetWidth;
          popupContacts.classList.add("modal-error");
        } else {
              if (isStorageSupport) {
          localStorage.setItem("userName", userName.value);
          localStorage.setItem("userEmail", userEmail.value);
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

       
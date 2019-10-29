// cart

var cartBuy = document.querySelectorAll(".catalog-item-buy");
var cartPopup = document.querySelector(".modal-cart");

if (cartBuy.length > 0 && cartPopup) {
  var cartClose = cartPopup.querySelector(".modal-close");
  var cartContinue = cartPopup.querySelector(".modal-cart-continue");

  for (var i = 0; i < cartBuy.length; i++) {
    cartBuy[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-show");
    });
  }
  cartClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
  });

  cartContinue.addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
  });
}

// map

var mapLink = document.querySelector(".contacts-link-img");
var mapPopup = document.querySelector(".modal-map");

if (mapLink && mapPopup) {
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });
}

// message

var link = document.querySelector(".write-us-link");
var popup = document.querySelector(".modal-message");

if (link && popup) {
  var close = popup.querySelector(".modal-close");
  var formMessage = popup.querySelector(".modal-message-form");
  var fieldName = popup.querySelector("#user-name");
  var fieldEmail = popup.querySelector("#user-email");
  var fieldLetter = popup.querySelector("#user-letter");

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  formMessage.addEventListener("submit", function (evt) {
    if (!fieldName.value || !fieldEmail.value || !fieldLetter.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
  });
}

// esc click

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cartPopup && cartPopup.classList.contains("modal-show")) {
      cartPopup.classList.remove("modal-show");
    }
    if (mapPopup && mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
    if (popup && popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

// slider offers

var sliderOffers = document.querySelectorAll(".slider-item");
var sliderControls = document.querySelectorAll(".slider-control");
var leftOffers = document.querySelector(".js-offers-slider-left");
var rightOffers = document.querySelector(".js-offers-slider-right");
var count;

if (sliderOffers.length > 0) {
  rightOffers.addEventListener("click", function(evt) {
    evt.preventDefault();
    count = sliderOffers.length - 1;

    for (var i = 0; i < sliderOffers.length; i++) {
      if (
        sliderOffers[i].classList.contains("active") &&
        i !== sliderOffers.length - 1
      ) {
        count = i + 1;
        sliderOffers[i].classList.remove("active");
        sliderControls[i].classList.remove("active");
      }
    }
    sliderOffers[count].classList.add("active");
    sliderControls[count].classList.add("active");
  });

  leftOffers.addEventListener("click", function(evt) {
    evt.preventDefault();
    count = 0;

    for (var i = 0; i < sliderOffers.length; i++) {
      if (sliderOffers[i].classList.contains("active") && i !== 0) {
        count = i - 1;
        sliderOffers[i].classList.remove("active");
        sliderControls[i].classList.remove("active");
      }
    }
    sliderOffers[count].classList.add("active");
    sliderControls[count].classList.add("active");
  });
}

// slider services

var servicesSlides = document.querySelectorAll(".services-list-item");
var servicesControls = document.querySelectorAll(".services-slider-control");

if (servicesSlides.length > 0) {
  for (var i = 0; i < servicesControls.length; i++) {
    servicesControls[i].addEventListener("click", function(evt) {
      evt.preventDefault();

      for (var y = 0; y < servicesControls.length; y++) {
        servicesControls[y].classList.remove("active");
        servicesSlides[y].classList.remove("active");
      }

      evt.target.classList.add("active");

      for (var x = 0; x < servicesControls.length; x++) {
        if (servicesControls[x].classList.contains("active")) {
          servicesSlides[x].classList.add("active");
        }
      }
    });
  }
}

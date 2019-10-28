var sliderOffers = document.querySelectorAll(".slider-item");
var sliderControls = document.querySelectorAll(".slider-control");
var leftOffers = document.querySelector(".js-offers-slider-left");
var rightOffers = document.querySelector(".js-offers-slider-right");
var count = 0;


rightOffers.addEventListener("click", function(evt) {
  evt.preventDefault();

  for (var i = 0; i < sliderOffers.length; i++) {
    if (sliderOffers[i].classList.contains("active") && i !== sliderOffers.length - 1) {
      count = i + 1;
      sliderOffers[i].classList.remove("active");
      sliderControls[i].classList.remove("active");
    }
  }
  sliderOffers[count].classList.add("active");
  sliderControls[count].classList.add("active");
})

leftOffers.addEventListener("click", function(evt) {
  evt.preventDefault();

  for (var i = 0; i < sliderOffers.length; i++) {
    if (sliderOffers[i].classList.contains("active") && i !== 0) {
      count = i - 1;
      sliderOffers[i].classList.remove("active");
      sliderControls[i].classList.remove("active");
    }
  }
  sliderOffers[count].classList.add("active");
  sliderControls[count].classList.add("active");
})


var servicesControls = document.querySelectorAll(".services-slider-control");
var servicesSlides = document.querySelectorAll(".services-list-item");

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

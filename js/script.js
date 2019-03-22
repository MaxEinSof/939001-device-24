var button = document.querySelector(".contacts-button");
var feedback = document.querySelector(".modal-feedback");
var feedbackClose = feedback.querySelector(".modal-close");

var form = feedback.querySelector(".modal-form");
var nameField = feedback.querySelector("#modal-name-field");
var email = feedback.querySelector("#modal-email-field");
var message = feedback.querySelector("#modal-message-field");

var storageSupport = true;
var storageName = null;
var storageEmail = null;

var mapLink = document.querySelector(".map-link");
var map = document.querySelector(".modal-map");
var mapClose = map.querySelector(".modal-close");

var buttonSelfie = document.querySelector(".button-selfie");
var buttonFitness = document.querySelector(".button-fitness");
var buttonQuadcopter = document.querySelector(".button-quadcopter");

var slideSelfie = document.querySelector(".slide-selfie-stick");
var slideFitness = document.querySelector(".slide-fitness-tracker");
var slideQuadcopter = document.querySelector(".slide-quadcopter");

var buttonDelivery = document.querySelector(".button-delivery");
var buttonWarranty = document.querySelector(".button-warranty");
var buttonCredit = document.querySelector(".button-credit");

var slideDelivery = document.querySelector(".slide-delivery");
var slideWarranty = document.querySelector(".slide-warranty");
var slideCredit = document.querySelector(".slide-credit");

try {
  storageName = localStorage.getItem("name");
} catch (err) {
  storageSupport = false;
}

try {
  storageEmail = localStorage.getItem("email");
} catch (err) {
  storageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("modal-show");
  feedback.classList.add("modal-animate");
  if (storageName) {
    nameField.value = storageName;
    email.focus();
  } else {
    nameField.focus();
  }
  if (storageName && storageEmail) {
    nameField.value = storageName;
    email.value = storageEmail;
    message.focus();
  }
});

form.addEventListener("submit", function (evt) {
  if (!nameField.value || !email.value || !message.value) {
    evt.preventDefault();
    feedback.classList.remove("modal-error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("modal-error");
  } else {
    if (storageSupport) {
      localStorage.setItem("name", nameField.value);
      localStorage.setItem("email", email.value);
    }
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("modal-show");
  feedback.classList.remove("modal-animate");
  feedback.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedback.classList.contains("modal-show")) {
      feedback.classList.remove("modal-show");
      feedback.classList.remove("modal-animate");
      feedback.classList.remove("modal-error");
    }
    if (map.classList.contains("modal-show")) {
      map.classList.remove("modal-show");
      map.classList.remove("modal-animate");
    }
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
  map.classList.add("modal-animate");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
  map.classList.remove("modal-animate");
});

document.addEventListener("click", function (evt) {
  if (!evt.target.matches(".modal-feedback *, .contacts-button") && feedback.classList.contains("modal-show")) { 
    feedback.classList.remove("modal-show");
    feedback.classList.remove("modal-animate");
    feedback.classList.remove("modal-error");
  }
  if (!evt.target.matches(".modal-map *, .map-link *") && map.classList.contains("modal-show")) {
    map.classList.remove("modal-show");
    map.classList.remove("modal-animate");
  }
});

buttonSelfie.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideSelfie.classList.add("slide-show");
  buttonSelfie.classList.add("switch-button-current");

  if (slideFitness.classList.contains("slide-show")) {
    slideFitness.classList.remove("slide-show");
    buttonFitness.classList.remove("switch-button-current");
  }
  if (slideQuadcopter.classList.contains("slide-show")) {
    slideQuadcopter.classList.remove("slide-show");
    buttonQuadcopter.classList.remove("switch-button-current");
  }
});

buttonFitness.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideFitness.classList.add("slide-show");
  buttonFitness.classList.add("switch-button-current");

  if (slideSelfie.classList.contains("slide-show")) {
    slideSelfie.classList.remove("slide-show");
    buttonSelfie.classList.remove("switch-button-current");
  }
  if (slideQuadcopter.classList.contains("slide-show")) {
    slideQuadcopter.classList.remove("slide-show");
    buttonQuadcopter.classList.remove("switch-button-current");
  }
});

buttonQuadcopter.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideQuadcopter.classList.add("slide-show");
  buttonQuadcopter.classList.add("switch-button-current");

  if (slideSelfie.classList.contains("slide-show")) {
    slideSelfie.classList.remove("slide-show");
    buttonSelfie.classList.remove("switch-button-current");
  }
  if (slideFitness.classList.contains("slide-show")) {
    slideFitness.classList.remove("slide-show");
    buttonFitness.classList.remove("switch-button-current");
  }
});

buttonDelivery.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideDelivery.classList.add("slide-show");
  buttonDelivery.classList.add("slider-button-current");

  if (slideWarranty.classList.contains("slide-show")) {
    slideWarranty.classList.remove("slide-show");
    buttonWarranty.classList.remove("slider-button-current");
  }
  if (slideCredit.classList.contains("slide-show")) {
    slideCredit.classList.remove("slide-show");
    buttonCredit.classList.remove("slider-button-current");
  }
});

buttonWarranty.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideWarranty.classList.add("slide-show");
  buttonWarranty.classList.add("slider-button-current");

  if (slideDelivery.classList.contains("slide-show")) {
    slideDelivery.classList.remove("slide-show");
    buttonDelivery.classList.remove("slider-button-current");
  }
  if (slideCredit.classList.contains("slide-show")) {
    slideCredit.classList.remove("slide-show");
    buttonCredit.classList.remove("slider-button-current");
  }
});

buttonCredit.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideCredit.classList.add("slide-show");
  buttonCredit.classList.add("slider-button-current");

  if (slideDelivery.classList.contains("slide-show")) {
    slideDelivery.classList.remove("slide-show");
    buttonDelivery.classList.remove("slider-button-current");
  }
  if (slideWarranty.classList.contains("slide-show")) {
    slideWarranty.classList.remove("slide-show");
    buttonWarranty.classList.remove("slider-button-current");
  }
});
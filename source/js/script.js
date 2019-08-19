'use stirct';

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__menu-btn');
var header = document.querySelector('.page-header');
header.classList.remove('page-header--nojs');
if (navToggle) {
  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.remove('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--opened');
    }
  });
}

var modalSuccess = document.querySelector('.modal--success');
var modalError = document.querySelector('.modal--error');
var modalButton;

var formReview = document.querySelector('.review');
var formInputs = document.querySelectorAll('.review input');
var formSubmitButton = document.querySelector('.review__submit');

var closeModal = function () {
  modalSuccess.classList.remove('modal--show');
  modalError.classList.remove('modal--show');
  modalButton.removeEventListener('click', onButtonClick);
}

var onButtonClick = function () {
  closeModal();
}

var showMessage = function (message) {
  message.classList.add('modal--show');
  modalButton = message.querySelector('.modal__button');
  modalButton.addEventListener('click', onButtonClick);
}

if (formSubmitButton) {
  formSubmitButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    var errors = false;
    for (var i = 0; i < formInputs.length; i++) {
      var input = formInputs[i];
      if (!input.checkValidity()) {
        errors = true;
        break;
      }
    }
    errors ? showMessage(modalError) : showMessage(modalSuccess);
  });
}

var elBookingMapImage = document.querySelector('.booking__map-image');
var elBookingMapFrame = document.querySelector('.booking__map');
elBookingMapImage.style.display = "none";
elBookingMapFrame.style.display = "block";

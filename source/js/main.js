let burgerButton = document.querySelector('.navigation__burger');
let burgerLines = document.querySelector('.navigation__burger-line');
let navList = document.querySelector('.navigation__list');
let form = document.querySelector('.form');
let formName = document.querySelector('#input-name');
let formWeight = document.querySelector('#input-weight');
let formEmail = document.querySelector('#input-email');
let formPhone = document.querySelector('#input-phone');
let formSubmit = document.querySelector('.form__submit');

// Burger menu

burgerButton.classList.add('navigation__burger--visible');
navList.classList.add('navigation__list--closed');

burgerButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  burgerLines.classList.toggle('navigation__burger-line--closed');
  burgerLines.classList.toggle('navigation__burger-line--opened');
  navList.classList.toggle('navigation__list--closed');
  navList.classList.toggle('navigation__list--opened');
})

// Input error

form.addEventListener('submit', function (evt) {
  if (!formName.value) {
    evt.preventDefault();
    formName.classList.remove('form__input-field--error');
    formName.offsetWidth = formName.offsetWidth;
    formName.classList.add('form__input-field--error');
    formSubmit.classList.remove('form__submit--error');
    formSubmit.offsetWidth = formSubmit.offsetWidth;
    formSubmit.classList.add('form__submit--error');

  } if (!formWeight.value) {
    evt.preventDefault();
    formWeight.classList.remove('form__input-field--error');
    formWeight.offsetWidth = formWeight.offsetWidth;
    formWeight.classList.add('form__input-field--error');
    formSubmit.classList.remove('form__submit--error');
    formSubmit.offsetWidth = formSubmit.offsetWidth;
    formSubmit.classList.add('form__submit--error');

  } if (!formEmail.value) {
    evt.preventDefault();
    formEmail.classList.remove('form__input-field--error');
    formEmail.offsetWidth = formEmail.offsetWidth;
    formEmail.classList.add('form__input-field--error');
    formSubmit.classList.remove('form__submit--error');
    formSubmit.offsetWidth = formSubmit.offsetWidth;
    formSubmit.classList.add('form__submit--error');

  } if (!formPhone.value) {
    evt.preventDefault();
    formPhone.classList.remove('form__input-field--error');
    formPhone.offsetWidth = formPhone.offsetWidth;
    formPhone.classList.add('form__input-field--error');
    formSubmit.classList.remove('form__submit--error');
    formSubmit.offsetWidth = formSubmit.offsetWidth;
    formSubmit.classList.add('form__submit--error');
    };
});

// Map marker
function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 59.93992031509298, lng: 30.322092532317637 },
  });
  const image =
    "https://i.ibb.co/BZtvk1v/logo-map-pin.png";
  const beachMarker = new google.maps.Marker({
    position: { lat: 59.93884920987664, lng: 30.323017801461948 },
    map,
    icon: image,
  });

  if (window.innerWidth >= 1440) {
    map.zoom = 15;
  }
}

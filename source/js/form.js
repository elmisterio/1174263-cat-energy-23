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

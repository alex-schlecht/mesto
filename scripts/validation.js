const inputElement = document.querySelectorAll('.popup__input');
const form = document.forms;

// Показ ошибки
const isFormValid = (formInput, formSpan, validation) => {
  const errorElement = document.querySelector(`#${formInput.id}`);
  const errorSpan = document.querySelector('.popup__error_visible');
  console.log ('errorElement', errorElement);
  if(formInput.validity.valid) {
    errorSpan.textContent = '';
    formSpan.classList.remove(validation.errorClass);
    formInput.classList.remove(validation.inputErrorClass);
  } else {
    formInput.validationMessage = errorSpan.textContent;
    formSpan.classList.add(validation.errorClass);
    formInput.classList.add(validation.inputErrorClass);
  }
}
//Тоггл самбита
const toggleSubmitButton = (input, submit) => {
  const submitForm = document.querySelector(`#${submit.id}`);
  if(input.validity.valid) {
    submitForm.removeAttribute('disabled');
    submitForm.classList.remove(validation.inactiveButtonClass);
  } else {
    submitForm.removeAttribute('disabled', true);
    submitForm.classList.add(validation.inactiveButtonClass);
  }
}
const enableValidation = (validation) => {
  const {formSelector, inputSelector, submitButtonSelector} = validation;
  const forms = document.querySelectorAll(formSelector);

  forms.forEach(form => {
    const formGroup = form.querySelectorAll('.form-group');
    console.log(validation.errorClass);
    const formButton = form.querySelector(validation.submitButtonSelector);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    
    formGroup.forEach(input => {
      input.addEventListener('input', () => {
        const formSpan = form.querySelector(validation.errorClass);
        const formInput = form.querySelector(validation.inputSelector);
        isFormValid(formInput, formSpan, validation);
        toggleSubmitButton(formInput, formButton);
      });
    });
  });
}
// свойства
const validation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
enableValidation(validation);

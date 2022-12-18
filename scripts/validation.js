// Показать ошибки
const inputErrorShow = (form, input, error, errorClass, inputErrorClass) => {
  const inputError = form.querySelector(`#${input.id}-error`);
  input.classList.add(inputErrorClass);
  inputError.classList.add(errorClass);
  inputError.textContent = error;
}
// Скрыть ошибки
const inputErrorHide = (form, input, errorClass, inputErrorClass) => {
  const inputError = form.querySelector(`#${input.id}-error`);
  input.classList.remove(inputErrorClass);
  inputError.classList.remove(errorClass);
  inputError.textContent = '';
}
//Проверить форму
const isFormValid = (form, input, validation) => {
  if(!input.validity.valid) {
    inputErrorShow(form, input, input.validationMessage, validation.errorClass, validation.inputErrorClass);
  } else {
    inputErrorHide(form, input, validation.errorClass, validation.inputErrorClass);
  }
}
// Форма не прошла проверку
const inputInvalid = (formInputs) => {return formInputs.some((input) => !input.validity.valid)}
//Переключение кнопки
const toggleSubmitButton = (formInputs, submit, inactiveButtonClass) => {
  if (inputInvalid(formInputs)) {
    submit.disabled = true;
    submit.classList.add(inactiveButtonClass);
  } else {
    submit.disabled = false;
    submit.classList.remove(inactiveButtonClass);
  }
}
//Основная функция
const enableValidation = (validation) => {
  const forms = document.querySelectorAll(validation.formSelector);
  forms.forEach((form) => {
    const formInputs = [...form.querySelectorAll(validation.inputSelector)];
    const submit = form.querySelector(validation.submitButtonSelector);
    formInputs.forEach((input) => {
      input.addEventListener('input', () => {
        toggleSubmitButton(formInputs, submit, validation.inactiveButtonClass);
        isFormValid(form, input, validation);
      });
    });
  });
}
// Сброс формы
const resetForm = (popupForm) => {
  const form = popupForm.querySelector(validation.formSelector);
  const formInputs = [...form.querySelectorAll(validation.inputSelector)];
  const button = form.querySelector(validation.submitButtonSelector);
  formInputs.forEach((input) => {
    inputErrorHide(form, input, validation.inputErrorClass, validation.errorClass);
    toggleSubmitButton(formInputs, button, validation.inactiveButtonClass);
  });
}
enableValidation(validation);

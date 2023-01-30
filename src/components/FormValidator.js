class FormValidator {
  constructor({inputSelector, inputErrorClass, errorClass, inactiveButtonClass, submitButtonSelector}, form) {
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
    this._form = form;
  }
  _inputErrorShow(input) {
    const inputError = this._form.querySelector(`#${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    inputError.classList.add(this._errorClass);
    inputError.textContent = input.validationMessage;
  }
  _inputErrorHide(input) {
    const inputError = this._form.querySelector(`#${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    inputError.classList.remove(this._errorClass);
    inputError.textContent = '';
  }
  _isFormValid(input) {
    if(!input.validity.valid) {
      this._inputErrorShow(input);
    } else {
      this._inputErrorHide(input);
    }
  }
  _inputInvalid() {
    return this._formInputs.some((input) => !input.validity.valid)
  }
  _toggleSubmitButton() {
    if (this._inputInvalid()) {
      this._submit.disabled = true;
      this._submit.classList.add(this._inactiveButtonClass);
    } else {
      this._submit.disabled = false;
      this._submit.classList.remove(this._inactiveButtonClass);
    }
  }
  _setEventListeners(input) {
    input.addEventListener('input', () => {
      this._toggleSubmitButton();
      this._isFormValid(input);
    })
  }
  enableValidation() {
    this._formInputs = [...this._form.querySelectorAll(this._inputSelector)];
    this._submit = this._form.querySelector(this._submitButtonSelector);
    this._formInputs.forEach((input) => {
      this._setEventListeners(input);
    });
    this._toggleSubmitButton();
  }
  resetForm() {
    this._toggleSubmitButton();
    this._formInputs.forEach((input) => {
      this._inputErrorHide(input);
    })
  }
}
export default FormValidator;
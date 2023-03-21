import Popup from "./Popup.js"

class PopupWithForm extends Popup{
  constructor({submitForm}, popupSelector) {
    super(popupSelector)
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._formInputs = this._form.querySelectorAll('.popup__input');
    this._button = this._form.querySelector(`#${this._form.id}-submit`);
  }
  _getInputValues() {
    const inputValue = {};
    this._formInputs.forEach((input) => inputValue[input.name] = input.value);
    return inputValue;
  }
  setInputValues(inputValues) {
    this._formInputs.forEach((input) => {
      input.value = inputValues[input.name]
    })
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      const oldButtonText = this._button.textContent;
      this._button.textContent = "Сохранение...";
      this._inputValues = this._getInputValues();
      this._submitForm(this._formInputs);
      this._button.textContent = oldButtonText;
    })
  }
  
  close() {
    super.close();
    this._form.reset();
  }
}
export default PopupWithForm
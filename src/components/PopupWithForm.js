import Popup from "./Popup.js"

class PopupWithForm extends Popup{
  constructor({submitForm}, popupType) {
    super(popupType)
    this._submitForm = submitForm;
    this._form = this._popupType.querySelector('.popup__form');
    this._inputStrings = this._form.querySelectorAll('.popup__input');
  }
  _getInputValues() {
    const inputValue = {};
    this._inputStrings.forEach((input) => inputValue[input.name] = input.value);
    return inputValue;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._inputValues = this._getInputValues();
      this._submitForm(this._inputValues);
      this.close();
    })
  }
  close() {
    super.close();
    this._form.reset();
  }
}

export default PopupWithForm
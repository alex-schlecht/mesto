import Popup from "./Popup.js";

class ConfirmPopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitButton = this._popup.querySelector('.popup__button');
  }
  
  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      this._handleSubmitButton();
    })
  }
  handleSubmitButton(handleSubmitButton) {
    this._handleSubmitButton = handleSubmitButton;
  }
}

export default ConfirmPopup
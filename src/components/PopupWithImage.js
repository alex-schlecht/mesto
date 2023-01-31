import Popup from "./Popup.js"

class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupImageName = this._popup.querySelector('.popup__image-name');
  }
  open(name, src) {
    this._popupImageName.textContent = name;
    this._popupImage.src = src;
    this._popupImage.alt = name;
    super.open();
  }
}

export default PopupWithImage
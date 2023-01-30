import Popup from "./Popup.js"

class PopupWithImage extends Popup{
  constructor(popupType) {
    super(popupType);
    this._popupImage = this._popupType.querySelector('.popup__image');
    this._popupImageName = this._popupType.querySelector('.popup__image-name');
  }
  open(name, src) {
    this._popupImageName.textContent = name;
    this._popupImage.src = src;
    this._popupImage.alt = name;
    super.open();
  }
}

export default PopupWithImage
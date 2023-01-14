import {openPopup} from "./index.js";

class Card {
  constructor(configData, templateSelector) {
    this._name = configData.name;
    this._src = configData.link;
    this._templateSelector = templateSelector
  }
  _getTemplate() {
    return document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.cards__item')
    .cloneNode(true);
  }
  _clickDeleteCard() {
    this._element.remove();
    this.element = null;
  }
  _clickLikeCard() {
    this._likeButton.classList.toggle('cards__like_active');
  }
  _clickImageFullSize() {
    this._popupImageFullSize = document.querySelector('.popup_surround');
    this._popupImageFullSize.querySelector('.popup__image-name').textContent = this._name;
    const imageOfCard = this._popupImageFullSize.querySelector('.popup__image');
    imageOfCard.src = this._src;
    imageOfCard.alt = this._name;
    openPopup(this._popupImageFullSize);
  }
  _setEventListeners() {
    this._element.querySelector('.cards__delete').addEventListener('click', () => this._clickDeleteCard());
    this._element.querySelector('.cards__like').addEventListener('click', () => this._clickLikeCard());
    this._element.querySelector('.cards__image').addEventListener('click', () => this._clickImageFullSize());
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.cards__name').textContent = this._name;
    this._imageOfCard = this._element.querySelector('.cards__image');
    this._likeButton = this._element.querySelector('.cards__like');
    this._imageOfCard.src = this._src;
    this._imageOfCard.alt = this._name;
    this._setEventListeners();
    return this._element;
  }
}
export default Card;
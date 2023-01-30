class Card {
  constructor({name, src, handleCardClick}, templateSelector) {
    this._name = name;
    this._src = src;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    this._element = null;
  }
  _clickLikeCard() {
    this._likeButton.classList.toggle('cards__like_active');
  }
  _setEventListeners() {
    this._element.querySelector('.cards__delete').addEventListener('click', () => this._clickDeleteCard());
    this._element.querySelector('.cards__like').addEventListener('click', () => this._clickLikeCard());
    this._imageOfCard.addEventListener('click', () => this._handleCardClick());
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.cards__name').textContent = this._name;
    this._imageOfCard = this._element.querySelector('.cards__image');
    this._likeButton = this._element.querySelector('.cards__like');
    this._imageOfCard.name = this._name;
    this._imageOfCard.src = this._src;
    this._setEventListeners();
    return this._element;
  }
}
export default Card;
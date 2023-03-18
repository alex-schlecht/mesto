class Card {
  constructor({_id: _id, name, link, likes, ownerId, userId}, {handleCardClick, handleCardClickLike, handleCardClickDelete}, templateSelector) {
    this._id = _id;
    this._name = name;
    this._src = link;
    this._likes = likes;
    this._ownerId = ownerId;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleCardClickLike = handleCardClickLike;
    this._handleCardClickDelete = handleCardClickDelete;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    return document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.cards__item')
    .cloneNode(true);
  }
  _checkOwner(ownerId, userId) {
    return ownerId === userId;
  }
  _checkOwnerLike() {
    return (this._likes.length > 0) ? this._likes.some((likes) => this._checkOwner(likes._id, this._userId)) : false;
  }
  _setEventListeners() {
    if(this._deleteButton) {
      this._deleteButton.addEventListener('click', () => this._handleCardClickDelete(this));
    }
    this._likeButton.addEventListener('click', () => this._handleCardClickLike(this));
    this._imageOfCard.addEventListener('click', () => this._handleCardClick());
  }
  _clickDeleteCardPrivate() {
    this._deleteButton.remove();
    this._deleteButton = null;
  }
  clickDeleteCard() {
    this._element.remove();
    this._element = null;
  }
  clickLikeCard() {
    this._likeButton.classList.toggle('cards__like_active');
  }
  isLikePressed() {
    return this._likeButton.classList.contains('cards__like_active');
  }
  setLikeAmount(number) {
    this._likeNumber.textContent = number;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.cards__name').textContent = this._name;
    this._imageOfCard = this._element.querySelector('.cards__image');
    this._imageOfCard.src = this._src;
    this._imageOfCard.alt = this._name;
    this._likeContainer = this._element.querySelector('.cards__like-container');
    this._likeButton = this._element.querySelector('.cards__like');
    this._likeNumber = this._likeContainer.querySelector('.cards__like-amount');
    this._deleteButton = this._element.querySelector('.cards__delete');
    this.setLikeAmount(this._likes.length || '');
    (!this._checkOwner(this._ownerId, this._userId)) ? this._clickDeleteCardPrivate() : null;
    (this._checkOwnerLike()) ? this.clickLikeCard() : null;
    this._setEventListeners();
    return this._element;
  }
}
export default Card;
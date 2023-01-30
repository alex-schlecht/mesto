class Popup {
  constructor(popupType) {
    this._popupType = popupType;
    this._closeButton = this._popupType.querySelector('.popup__close');
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }
  _addKeydownEventListener() {
    document.addEventListener('keydown', this._handleEscClose);
  }
  _removeKeydownEventListener() {
    document.removeEventListener('keydown', this._handleEscClose);
  }
  open() {
    this._popupType.classList.add('popup_opened');
  }
  close() {
    this._popupType.classList.remove('popup_opened');
  }
  setEventListeners() {
    this._closeButton.addEventListener('click', () => this.close());
    this._popupType.addEventListener('mousedown', (event) => (event.target === event.currentTarget) ? this.close() : null);
  }
}

export default Popup
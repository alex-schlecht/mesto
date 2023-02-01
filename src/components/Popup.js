class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close');
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
    this._addKeydownEventListener();
    this._popup.classList.add('popup_opened');
  }
  close() {
    this._removeKeydownEventListener();
    this._popup.classList.remove('popup_opened');
  }
  setEventListeners() {
    this._closeButton.addEventListener('click', () => this.close());
    this._popup.addEventListener('mousedown', (event) => (event.target === event.currentTarget) ? this.close() : null);
  }
}

export default Popup
export const validation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

export const profilePopup = document.querySelector('#profile-popup');
export const newCardPopup = document.querySelector('#new-card-popup');
export const profileEdit = document.querySelector('.profile__edit');
export const newCard = document.querySelector('.profile__add-card');
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const inputName = document.querySelector('.popup__input_name');
export const inputDescription = document.querySelector('.popup__input_description');
export const cardContainer = document.querySelector('.cards__items');
export const popupFormProfile = document.querySelector('.popup__form_profile');
export const popupFormCard = document.querySelector('.popup__form_card');
export const popupImageFullSize = document.querySelector('.popup_surround');
export const popupProfileAvatarForm = document.querySelector('.popup__form_avatar');
export const popupProfileAvatar = document.querySelector('#profile-avatar-popup');
export const popupConfirm = document.querySelector('#confirm-popup');
export const newAvatar = document.querySelector('.profile__edit-avatar');

export const apiUrl = "https://mesto.nomoreparties.co/v1/cohort-60";
export const apiToken = "fb254d0d-24c1-470a-bc0c-68d2d2e3fa16";
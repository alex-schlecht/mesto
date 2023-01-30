export const initialCards = [
  {
    name: 'Архыз', 
    link: new URL('../images/cards/arkhyz.jpg', import.meta.url)
  },
  {
    name: 'Челябинская область', 
    link: new URL('../images/cards/chelyabinsk-oblast.jpg', import.meta.url)
  },
  {
    name: 'Иваново', 
    link: new URL('../images/cards/ivanovo.jpg', import.meta.url)
  },
  {
    name: 'Камчатка', 
    link: new URL('../images/cards/kamchatka.jpg', import.meta.url)
  },
  {
    name: 'Холмогорский район', 
    link: new URL('../images/cards/kholmogorsky-rayon.jpg', import.meta.url)
  },
  {
    name: 'Байкал', 
    link: new URL('../images/cards/baikal.jpg', import.meta.url)
  },
]

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
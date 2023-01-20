import {initialCards} from "./initialCards.js";
import Card from "./Card.js";
import {validation} from "./validation-config.js";
import FormValidator from "./FormValidator.js";

const profilePopup = document.querySelector('#profile-popup');
const newCardPopup = document.querySelector('#new-card-popup');
const profileEdit = document.querySelector('.profile__edit');
const newCard = document.querySelector('.profile__add-card');
const closePopupButtons = document.querySelectorAll('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const inputName = document.querySelector('.popup__input_name');
const inputDescription = document.querySelector('.popup__input_description');
const inputCardName = document.querySelector('.popup__input_card-name');
const inputCardLink = document.querySelector('.popup__input_card-link');
const cardContainer = document.querySelector('.cards__items');
const popupFormProfile = document.querySelector('.popup__form_profile');
const popupFormCard = document.querySelector('.popup__form_card');
const popups = document.querySelectorAll('.popup');
const popupImageFullSize = document.querySelector('.popup_surround');
const popupImageFullSizeImageName = popupImageFullSize.querySelector('.popup__image-name');
const popupImageFullSizeImageOfCard = popupImageFullSize.querySelector('.popup__image');



const checkKey = (event) => {
  if(event.key === 'Escape') {
    const popupClose = document.querySelector('.popup_opened');
    closePopup(popupClose);
  }
}
//Открыть попап
const openPopup = function(popupType) {
  document.addEventListener('keydown', checkKey);
  popupType.classList.add('popup_opened');

}
//Закрыть попап
const closePopup = function(popupType) {
  popupType.classList.remove('popup_opened');
  document.removeEventListener('keydown', checkKey);
}
//Редактирование профиля
const openProfilePopup = function() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  openPopup(profilePopup);
}
//Сохранение профиля
const submitProfile = function(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  closePopup(profilePopup);
}
//Сохранение карточки
const submitCard = function(event) {
  event.preventDefault();
  cardContainer.prepend(addCard(inputCardName.value, inputCardLink.value));
  closePopup(newCardPopup);
}
//Добавление экземпляра карточки
const addCard = function(name, src) {
  return new Card({name: name, link: src}, '#initial-cards').generateCard();
};
initialCards.forEach((item) => {
  cardContainer.prepend(addCard(item.name, item.link))
});
//Профиль
const formValidatorProfile = new FormValidator(validation, popupFormProfile);
formValidatorProfile.enableValidation();
//Карточка
const formValidatorCards = new FormValidator(validation, popupFormCard);
formValidatorCards.enableValidation();
//Закрытие попапа на крестик
closePopupButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
// Закрытие попапа на клик вне области попапа
popups.forEach((popupType) => {
  popupType.addEventListener('click', (event) => {
    if(event.target !== event.currentTarget) {
      return;
    }
    closePopup(popupType);
  });
});
//Обработчик открытия профиля
profileEdit.addEventListener('click', openProfilePopup);
//Обработчик для создания карточки
newCard.addEventListener('click', () => {
  popupFormCard.reset();
  formValidatorCards.resetForm();
  openPopup(newCardPopup);
});
//Обработчик сохрарения профиля
popupFormProfile.addEventListener('submit', submitProfile);
//Обработчик сохранения карточки
popupFormCard.addEventListener('submit', submitCard);

export {openPopup, popupImageFullSize, popupImageFullSizeImageName, popupImageFullSizeImageOfCard}
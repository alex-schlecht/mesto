import './index.css';
import {
  initialCards,
  profileEdit,
  newCard,
  inputName,
  inputDescription,
  cardContainer,
  popupFormProfile,
  popupFormCard,
  validation,
} from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from "../components/UserInfo.js";

//Название, описание профиля
const userInfo = new UserInfo('.profile__name', '.profile__description');

//Profile popup
const profileForm =  new PopupWithForm ({
  submitForm: (inputValues) => userInfo.setUserInfo(inputValues.name, inputValues.description),
  }, '#profile-popup');
profileForm.setEventListeners();
//Валидация Профиль
const formValidatorProfile = new FormValidator(validation, popupFormProfile);

//Card popup
const popupWithImage = new PopupWithImage('.popup_surround');
//Создание карточки
const createCard = function(name, src) {
  return new Card({name, src, handleCardClick: () => popupWithImage.open(name, src)}, '#initial-cards').generateCard();
};

//Добавление карточек из массива
const cards = new Section({items: initialCards, renderer: (card) => {
      const newCard = createCard(card.name, card.link);
      cards.addItem(newCard);
    },
  },
  '.cards__items'
);
//Форма добавления карточки
const cardForm = new PopupWithForm ({
  submitForm: (inputValues) => {
    const card = createCard(inputValues.name, inputValues.src);
    cards.addItem(card);
  },
}, '#new-card-popup');
cards.renderElements();
//Валидация Карточка
const formValidatorCards = new FormValidator(validation, popupFormCard);
//Сброс формы при открытии
const handleProfileOpenButton = () => {
  const {name, description} = userInfo.getUserInfo();
  inputName.value = name;
  inputDescription.value = description;
  formValidatorProfile.resetForm();
  profileForm.open();
}
newCard.addEventListener('click', () => {
  formValidatorCards.resetForm();
  cardForm.open();
})

cardForm.setEventListeners();
profileEdit.addEventListener('click', handleProfileOpenButton);
popupWithImage.setEventListeners();
formValidatorProfile.enableValidation();
formValidatorCards.enableValidation();
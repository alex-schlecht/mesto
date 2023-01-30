import './index.css';
import {
  initialCards,
  profilePopup,
  newCardPopup,
  profileEdit,
  newCard,
  inputName,
  inputDescription,
  cardContainer,
  popupFormProfile,
  popupFormCard,
  popupImageFullSize,
  validation,
} from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from "../components/UserInfo.js";

//Название, описание профиля
const userInfo = new UserInfo({profileName: inputName, profileDescription: inputDescription});
//Profile popup
const profileForm =  new PopupWithForm ({
  submitForm: (input) => userInfo.setUserInfo(input['name'], input['description']), 
  }, profilePopup);
profileForm.setEventListeners();
//Валидация Профиль
const formValidatorProfile = new FormValidator(validation, popupFormProfile);

//Card popup
const popupWithImage = new PopupWithImage(popupImageFullSize);
//Создание карточки
const addCard = function(name, src) {
  return new Card({name, src, handleCardClick: () => popupWithImage.open(name, src)}, '#initial-cards').generateCard();
};

//Добавление карточек из массива
const cards = new Section({items: initialCards, renderer: (card) => {
      const newCard = addCard(card.name, card.link);
      cards.addItem(newCard);
    },
  },
  cardContainer
);
//Форма добавления карточки
const cardForm = new PopupWithForm ({
  submitForm: (input) => {
    const card = addCard(input['name'], input['src']);
    cards.addItem(card);
  },
}, newCardPopup);
cards.renderElement();
//Валидация Карточка
const formValidatorCards = new FormValidator(validation, popupFormCard);
//Сброс формы при открытии
const handleProfileButton = () => {
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
profileEdit.addEventListener('click', handleProfileButton);
popupWithImage.setEventListeners();
formValidatorProfile.enableValidation();
formValidatorCards.enableValidation();
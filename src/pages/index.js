import './index.css';
import {
  apiUrl,
  apiToken,
  profileEdit,
  newCard,
  inputName,
  inputDescription,
  popupFormProfile,
  popupFormCard,
  validation,
  popupProfileAvatarForm,
  popupProfileAvatar,
  newAvatar
} from '../utils/constants.js';
import Api from '../components/Api';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import ConfirmPopup from '../components/ConfirmPopup.js'

const api = new Api({
  apiMainUrl: apiUrl, headers: {
    authorization: apiToken, 'Content-Type': 'application/json'
  }
})

//Название, описание профиля
const userInfo = new UserInfo('.profile__name', '.profile__description', '.profile__avatar');

//Валидация аватар
const formValidatorAvatar = new FormValidator(validation, popupProfileAvatarForm);

//Валидация Профиль
const formValidatorProfile = new FormValidator(validation, popupFormProfile);

//Валидация Карточка
const formValidatorCards = new FormValidator(validation, popupFormCard);

//Попап с конфирмом удаления
const confirmPopup = new ConfirmPopup('#confirm-popup');
confirmPopup.setEventListeners();

//Добавление карточки на страницу
const cards = new Section({
  renderer: (card) => {
      const newCard = createCard(card._id, card.name, card.link, card.likes, card.owner._id, userInfo.getUserInfo().id);
      cards.addItem(newCard);
    },
  }, '.cards__items');

Promise.all([api.getUserInfo(), api.getCards()])
.then(([{name, about, avatar, _id}, card]) => {
  userInfo.setUserInfo(name, about, _id);
  userInfo.setUserAvatar(avatar);
  cards.renderElements(card.reverse());
})
.catch((error) => console.log(error))

//Profile popup
const profileFormPopup =  new PopupWithForm ({
  submitForm: (inputValues) => {
    const profileName = inputValues[0].value;
    const profileAbout = inputValues[1].value;
    api.patchUserInfo(profileName, profileAbout)
      .then(() => userInfo.setUserInfo(profileName, profileAbout), profileFormPopup.close())
      .catch((error) => console.log(error))
  },
}, '#profile-popup');
profileFormPopup.setEventListeners();

const handleProfileButton = () => {
  const {name, about} = userInfo.getUserInfo();
  formValidatorProfile.resetForm();
  profileFormPopup.setInputValues({"user-name": name, "user-description": about});
  profileFormPopup.open();
}
profileEdit.addEventListener('click', handleProfileButton);


//Card popup
const popupWithImage = new PopupWithImage('.popup_surround');
popupWithImage.setEventListeners();

//Создание карточки
const createCard = function(id, name, src, likes, ownerId, userId) {
  return new Card({_id: id, name, link: src, likes, ownerId, userId}, 
    {handleCardClick: () => popupWithImage.open(name, src), handleCardClickLike: (card) => {
      if (card.isLikePressed()) {
        api.deleteLike(card._id)
          .then((res) => {
            card.setLikeAmount(res.likes.length || '');
            card.clickLikeCard();
          }).catch((error) => console.log(error))
      }
      api.putLike(card._id)
        .then((res) => {
          card.setLikeAmount(res.likes.length || '');
          card.clickLikeCard();
        }).catch((error) => console.log(error))
    }, handleCardClickDelete: (card) => {
      confirmPopup.handleSubmitButton(() => {
        api.deleteCard(card._id)
          .then(() => card.clickDeleteCard(), confirmPopup.close())
          .catch((error) => console.log(error))
      })
      confirmPopup.open();
    },
  }, '#initial-cards').generateCard();
}

//Форма добавления карточки
const cardFormPopup = new PopupWithForm ({
  submitForm: (inputValues) => {
    const cardName = inputValues[0].value;
    const cardLink = inputValues[1].value;
    api.postCard(cardName, cardLink)
      .then((res) => {
        const card = createCard(res._id, res.name, res.link, res.likes, res.owner._id, userInfo.getUserInfo().id);
        cards.addItem(card);
        cardFormPopup.close();
      })
      .catch((error) => console.log(error))
  },
}, '#new-card-popup');
cardFormPopup.setEventListeners();

newCard.addEventListener('click', () => {
  formValidatorCards.resetForm();
  cardFormPopup.open();
})

//Форма редактирования аватара
const avatarFormPopup = new PopupWithForm({
  submitForm: (inputValues) => {
    const profileAvatar = inputValues[0].value;
    api.patchAvatar(profileAvatar)
      .then(() => userInfo.setUserAvatar(profileAvatar), avatarFormPopup.close())
      .catch((error) => console.log(error))
  },
}, '#profile-avatar-popup');
avatarFormPopup.setEventListeners();



//Сброс формы при открытии
const handleProfileOpenButton = () => {
  const {name, about} = userInfo.getUserInfo();
  inputName.value = name;
  inputDescription.value = about;
  formValidatorProfile.resetForm();
  profileFormPopup.open();
}
newCard.addEventListener('click', () => {
  formValidatorCards.resetForm();
  cardFormPopup.open();
})
newAvatar.addEventListener('click', () => {
  formValidatorAvatar.resetForm();
  avatarFormPopup.open();
})
profileEdit.addEventListener('click', handleProfileOpenButton);

formValidatorAvatar.enableValidation();
formValidatorProfile.enableValidation();
formValidatorCards.enableValidation();




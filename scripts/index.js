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
const submitProfileButton = document.querySelector('.popup__submit-profile');
const submitCardButton = document.querySelector('.popup__submit-mesto');
const templateOfCard = document.querySelector('#initial-cards').content;
const cardName = document.querySelector('.cards__name');
const cardContainer = document.querySelector('.cards');
const imagePopup = document.querySelector('#full-size-image-popup');
const openedImage = document.querySelector('.popup__image');
const imageName = document.querySelector('.popup__image-name');
const profileFormSubmit = document.querySelector('.popup__form_profile');
const cardFormSubmit = document.querySelector('.popup__form_card');
const popups = document.querySelectorAll('.popup');

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
//Добавление карточки
const openCardPopup = function() {
  openPopup(newCardPopup);
}
//Сохранение карточки
const submitCard = function(event) {
  event.preventDefault();
  cardContainer.prepend(generateCard(inputCardLink.value, inputCardName.value));
  closePopup(newCardPopup);
}
//Генерация карточки лайки удаление и вызов
const generateCard = function(link, name) {
  const addCard = templateOfCard.querySelector('.cards__item').cloneNode(true);
  const nameOfCard = addCard.querySelector('.cards__name');
  nameOfCard.textContent = name;
  const imageOfCard = addCard.querySelector('.cards__image');
  imageOfCard.src = link;
  imageOfCard.alt = name;
  addCard.querySelector('.cards__like').addEventListener('click', function(event) {
    event.target.classList.toggle('cards__like_active');
  });
  addCard.querySelector('.cards__delete').addEventListener('click', function(event) {
    event.target.closest('.cards__item').remove();
  });
  const openImage = function() {
    imageName.textContent = name;
    openedImage.src = link;
    openedImage.alt = link;
    openPopup(imagePopup);
  }
  imageOfCard.addEventListener('click', openImage);
  return addCard;
}
//Наполнение карточками из массива
const renderCard = () => {
  initialCards.forEach(function(item) {
    cardContainer.append(generateCard(item.link, item.name));
  });
}
renderCard();
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
  cardFormSubmit.reset();
  resetForm(newCardPopup);
  openPopup(newCardPopup);
});
//Обработчик сохрарения профиля
profileFormSubmit.addEventListener('submit', submitProfile);
//Обработчик сохранения карточки
cardFormSubmit.addEventListener('submit', submitCard);

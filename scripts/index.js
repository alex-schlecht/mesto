const profilePopup = document.querySelector('#profile-popup');
const newCardPopup = document.querySelector('#new-card-popup');
const profileEdit = document.querySelector('.profile__edit');
const newCard = document.querySelector('.profile__add-card');
const closePopupButton = document.querySelectorAll('.popup__close');
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
//Открыть попап
const openPopup = function(popupType) {
  popupType.classList.add('popup_opened');
  const closeBtn = popupType.getElementsByClassName('popup__close')[0];
  closeBtn.addEventListener('click', () => closePopup(popupType));
}
//Закрыть попап
const closePopup = function(popupType) {
  popupType.classList.remove('popup_opened')
}
//Редактирование профиля
const openProfilePopup = function() {
  profileName.textContent = inputName.value;
  console.log(profileName.textContent);
  profileDescription.textContent = inputDescription.value;
  openPopup(profilePopup);
}
//Сохранение профиля
const profileSubmit = function(event) {
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
const cardSubmit = function(event) {
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
  addCard.querySelector('.cards__like').addEventListener('click', function(event) {
    event.target.classList.toggle('cards__like_active');
  });
  addCard.querySelector('.cards__delete').addEventListener('click', function(event) {
    event.target.closest('.cards__item').remove();
  });
  const openImage = function() {
    imageName.textContent = name;
    openedImage.src = link;
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
//Обработчик открытия профиля
profileEdit.addEventListener('click', openProfilePopup);
//Обработчик для создания карточки
newCard.addEventListener('click', openCardPopup);
//Обработчик сохрарения профиля
submitProfileButton.addEventListener('click', profileSubmit);
//Обработчик сохранения карточки
submitCardButton.addEventListener('click', cardSubmit);
const profilePopup = document.querySelector('#profile-popup');
const newCardPopup = document.querySelector('#new-card-popup');
const profileEdit = document.querySelector('.profile__edit');
const newCard = document.querySelector('.profile__add-card');
const closePopupButton = document.querySelectorAll('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const inputName = document.querySelector('.popup__input_name');
const inputDescription = document.querySelector('.popup__input_description');


//Открыть попап
const openPopup = function(popupType) {
  popupType.classList.add('popup_opened');
  const closeBtn = popupType.closest(".popup");
  closeBtn.addEventListener('click', closePopup);
}

//Закрыть попап
const closePopup = function(popupType) {
  popupType.classList.remove('popup_opened');
}

//Редактирование профиля
const openProfilePopup = function() {
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  openPopup(profilePopup);
}

profileEdit.addEventListener('click', openProfilePopup);


//const popupCloseButtonEvent = closePopupButton.forEach((button) => {
 // const closeButton = button.closest('.popup');
 // button.addEventListener('click', () => closePopup(closeButton));
//});
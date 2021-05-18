import FormValidator from './FormValidator.js';
import {initialCards} from './initial-сards.js'
import {settingsForm} from './settingsForm.js';
import Card from './Card.js';
import '../pages/index.css';

import {
  profileName,
  profileJob,
  popupForm,
  nameInput,
  jobInput,
  popupBigImageImage,
  popupBigImageText,
  popupTypeEdit,
  popupTypeAdd,
  popupBigImage,
  openPopupEditBtn,
  addCardBtn,
  popupAddSaveButton,
  closePopupEditBtn,
  closePopupAddBtn,
  popupBigImageClose,
  popupAddForm,
  textCardInput,
  linkCardInput,
  photoCard,
  profileSelectors,
  escKeyCode,
  imageSelector,
  popupImageTitleSelector
} from './constants.js';

import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';
import Section from './Section.js';
import {initialCards} from './initial-сards.js';

// Открытие попапа редактирования профиля
const userInfo = new UserInfo(profileSelectors);
popupEditOpenButton.addEventListener('click', function() {
  popupEditProfile.open();
  const currentInfo = userInfo.getUserInfo();
  nameInput.value = currentInfo.name;
  professionInput.value = currentInfo.profession;
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  closePopup(popupTypeEdit);
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}






// открытие popup
export function openPopup(popup) {
  popup.classList.add('popup_visible');
  document.addEventListener('keydown', closePopupEsc);
}
//  закрытие popup
 export function closePopup(popup) {
  popup.classList.remove('popup_visible');
  document.removeEventListener('keydown', closePopupEsc);
  
}
//закрыие popup на Esc
export function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_visible');
    closePopup(popup);
  }
}

const closePopupOverlay = popup => event => {
  if (event.target !== event.currentTarget) return;
  closePopup(popup);
}

popupTypeEdit.addEventListener('click', closePopupOverlay(popupTypeEdit));
popupTypeAdd.addEventListener('click', closePopupOverlay(popupTypeAdd));
popupBigImage.addEventListener('click', closePopupOverlay(popupBigImage));

openPopupEditBtn.addEventListener('click', () => { 
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupTypeEdit);
})

addCardBtn.addEventListener('click', () => openPopup(popupTypeAdd))

closePopupEditBtn.addEventListener('click', () => closePopup(popupTypeEdit))
closePopupAddBtn.addEventListener('click', () => closePopup(popupTypeAdd))
popupBigImageClose.addEventListener('click',() => closePopup(popupBigImage))

popupForm.addEventListener('submit', formSubmitHandler);



const formSubmitAddHandler = (event) => {
  event.preventDefault();
  const card = createCard(textCardInput.value, linkCardInput.value);
  renderCard(card);
  closePopup(popupTypeAdd);
  popupAddForm.reset();
  }

function createCard(name, link) {
  const card = new Card({name, link}, '#grid-template');
  return card.getCard();
}
 
function renderCard(card) {
photoCard.prepend(card);
}

popupAddForm.addEventListener('submit', formSubmitAddHandler);
  
initialCards.forEach(item => {
  const card = createCard(item.name, item.link);
  renderCard(card);
});

  // Включаем валидацию формы редактрования профиля
const editFormValidator = new FormValidator(settingsForm, popupForm);
editFormValidator.enableValidation();

// Включаем валидацию формы добавления карточки
const addFormValidator = new FormValidator(settingsForm, popupAddForm);
addFormValidator.enableValidation();

// Попап увеличения картинки
const popupWithImage = new PopupWithImage(popupImageSelector, popupImageCloseButtonSelector, imageSelector, popupImageTitleSelector);
popupWithImage.setEventListeners();

// Попап редактирования профиля
const popupEditProfile = new PopupWithForm(popupEditSelector, popupEditCloseButtonSelector,
  formSubmitHandler)
popupEditProfile.setEventListeners();

// Попап добавления карточки
const popupAddCard = new PopupWithForm(popupAddSelector, popupAddCloseButtonSelector,
  formSubmitAddHandler)
popupAddCard.setEventListeners();

export {
  popupFullImage,
  popupFullImageImage,
  popupFullImageTitle
}
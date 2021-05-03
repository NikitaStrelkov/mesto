import FormValidator from './FormValidator.js';
import {initialCards} from './initial-сards.js'
import {settingsForm} from './settingsForm.js';
import Card from './Card.js';

const profileName = document.querySelector('.profile__title')
const profileJob = document.querySelector('.profile__subtitle')

const popupForm = document.querySelector('.popup__form')

const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_job')

export const popupBigImageImage = document.querySelector('.popup__img')
export const popupBigImageText = document.querySelector('.popup__text-img')

//popups
const popupTypeEdit = document.querySelector('.popup_type_edit')
const popupTypeAdd = document.querySelector('.popup_type_add')
export const popupBigImage = document.querySelector('.popup_type_img')

//open popup buttons
const openPopupEditBtn = document.querySelector('.profile__button-edit')
const addCardBtn = document.querySelector('.profile__button-add')
const popupAddSaveButton = popupTypeAdd.querySelector('.popup__save-button');

//close popup buttons
const closePopupEditBtn = popupTypeEdit.querySelector('.popup__close-button')
const closePopupAddBtn = popupTypeAdd.querySelector('.popup__close-button')
const popupBigImageClose = popupBigImage.querySelector('.popup__close-button')

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

const popupAddForm = popupTypeAdd.querySelector('.popup__form')

function formSubmitHandler (evt) {
  evt.preventDefault();

  closePopup(popupTypeEdit);
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

popupForm.addEventListener('submit', formSubmitHandler);

const textCardInput = popupTypeAdd.querySelector('.popup__input_type_title-card')
const linkCardInput = popupTypeAdd.querySelector('.popup__input_type_link-card')
const photoCard = document.querySelector('.grid-places')

const formSubmitAddHandler = (event) => {
  event.preventDefault();
  const card = createCard(textCardInput.value, linkCardInput.value);
  renderCard(card);
  closePopup(popupTypeAdd);
  popupAddForm.reset();
  popupAddSaveButton.classList.add(settingsForm.inactiveButtonClass);
  }

function createCard(name, link) {
  const card = new Card({name: textCardInput.value, link: linkCardInput.value}, '#grid-template');
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

// function handleCardClick(textCardSubmit, linkCardSubmit) {
//   openPopup(popupBigImage);
//   popupBigImageImage.src = linkCardSubmit;
//   popupBigImageImage.alt = linkCardSubmit
//   popupBigImageText.textContent = textCardSubmit;
// }
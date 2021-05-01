const profileName = document.querySelector('.profile__title')
const profileJob = document.querySelector('.profile__subtitle')
const popupForm = document.querySelector('.popup__form')
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_job')
const popupBigImageImage = document.querySelector('.popup__img')
const popupBigImageText = document.querySelector('.popup__text-img')

//popups
const popupTypeEdit = document.querySelector('.popup_type_edit')
const popupTypeAdd = document.querySelector('.popup_type_add')
const popupBigImage = document.querySelector('.popup_type_img')

//open popup buttons
const openPopupEditBtn = document.querySelector('.profile__button-edit')
const addCardBtn = document.querySelector('.profile__button-add')

//close popup buttons
const closePopupEditBtn = popupTypeEdit.querySelector('.popup__close-button')
const closePopupAddBtn = popupTypeAdd.querySelector('.popup__close-button')
const popupBigImageClose = popupBigImage.querySelector('.popup__close-button')


import {initialCards} from './initial-сards.js'
import {openPopup, closePopup} from '../utils/utils.js'
import FormValidator from './FormValidator.js'
import {settingsForm} from './FormValidator.js'
import Card from './card.js'


const editProfileForm = document.querySelector('.profile-form')
const addCardForm = document.querySelector('.add-card-form')

const addCardValidator = new FormValidator(settingsForm, addCardForm);
const editProfileValidator = new FormValidator(settingsForm, editProfileForm);

addCardValidator.enableValidation();
editProfileValidator.enableValidation();

const closePopupOverlay = popup => event => {
  if (event.target !== event.currentTarget) return;
  closePopup(popup);
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupTypeEdit);
}

const formSubmitAddHandler = (event) => {
  event.preventDefault();
  const textCardSubmit = textCardInput.value;
  const linkCardSubmit = linkCardInput.value;
  renderCard(createCard(textCardSubmit, linkCardSubmit));
  closePopup(popupTypeAdd);
  popupAddForm.reset();
  validatedAddForm.checkInputValidity();
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

popupForm.addEventListener('submit', formSubmitHandler);

const textCardInput = popupTypeAdd.querySelector('.popup__input_type_title-card')
const linkCardInput = popupTypeAdd.querySelector('.popup__input_type_link-card')
const photoCard = document.querySelector('.grid-places')

function createCard(textCardSubmit, linkCardSubmit) {
    const templateCard = document.querySelector('#grid-template').content.querySelector('.grid__element');
    const templateCardElement = templateCard.cloneNode(true);
    const templateCardText = templateCardElement.querySelector('.grid__text');
    const templateCardImage = templateCardElement.querySelector('.grid__image');
    const likeButtonAdd = templateCardElement.querySelector('.grid__like');
    const imageAdd = templateCardElement.querySelector('.grid__image');
    const iconDeleteAdd = templateCardElement.querySelector('.grid__delete-button');
           
    likeButtonAdd.addEventListener('click', function() {
      likeButtonAdd.classList.toggle('grid__like_filled');
      })
  
    iconDeleteAdd.addEventListener('click', () => templateCardElement.remove())
  
    imageAdd.addEventListener('click', function () {
    openPopup(popupBigImage);
    popupBigImageImage.src = linkCardSubmit;
    popupBigImageImage.alt = linkCardSubmit
    popupBigImageText.textContent = textCardSubmit;
    });
    templateCardText.textContent = textCardSubmit;
    templateCardImage.src = linkCardSubmit;
    templateCardImage.alt = linkCardSubmit;
    return templateCardElement;
    }
      
function renderCard(card) {
   photoCard.prepend(card);
}
  
popupAddForm.addEventListener('submit', formSubmitAddHandler);
    
initialCards.forEach(item => {
renderCard(createCard(item.name, item.link));
}); 


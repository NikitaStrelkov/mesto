const profileName = document.querySelector('.profile__title')
const profileJob = document.querySelector('.profile__subtitle')

const popupForm = document.querySelector('.popup__form')

const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_job')

export const popupBigImageImage = document.querySelector('.popup__img')
export const popupBigImageText = document.querySelector('.popup__text-img')
const imageSelector = '.popup__img';
const popupImageTitleSelector = '.popup__text-img';

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
const popupAddForm = popupTypeAdd.querySelector('.popup__form')
const textCardInput = popupTypeAdd.querySelector('.popup__input_type_title-card')
const linkCardInput = popupTypeAdd.querySelector('.popup__input_type_link-card')
const photoCard = document.querySelector('.grid-places')

const profileSelectors = {
    profileNameSelector: '.profile__title', 
    profileProfessionSelector: '.profile__subtitle'
  }
const escKeyCode = 27;

export {
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
};
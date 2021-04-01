
let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__button-edit')
let closePopupBtn = document.querySelector('.popup__close-button');
let popupContent = document.querySelector('.popup__content');

let saveBtn = document.querySelector('.popup__button');

let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__item_type_name');
let jobInput = document.querySelector('.popup__item_type_job');

function openPopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;    
    popup.classList.add('popup_visible');
}
function closePopup() {
    popup.classList.remove('popup_visible');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    closePopup();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}

openPopupBtn.addEventListener('click', function(event){
    openPopup();
});

closePopupBtn.addEventListener('click', function(event){
    closePopup();
});

popupContent.addEventListener('click', function(event) {
    event.stopImmediatePropagation();
}); 

formElement.addEventListener('submit', formSubmitHandler);

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];



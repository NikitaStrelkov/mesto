let popupTypeEdit = document.querySelector('.popup_type_edit');
let openPopupEditBtn = document.querySelector('.profile__button-edit');
let closePopupEditBtn = document.querySelector('.popup__close-button_edit');

const popupTypeAdd = document.querySelector('.popup_type_add');
const addCardBtn = document.querySelector('.profile__button-add');
const closePopupAddBtn = document.querySelector('.popup__close-button_add');
const popupAddForm = popupTypeAdd.querySelector('.popup__form');

let popupContent = document.querySelector('.popup__content');

let saveBtn = document.querySelector('.popup__button');

let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__item_type_name');
let jobInput = document.querySelector('.popup__item_type_job');

const popupBigImage = document.querySelector('.popup_type_img');
const popupBigImageImage = popupBigImage.querySelector('.popup__img');
const popupBigImageText = popupBigImage.querySelector('.popup__text-img');
const popupBigImageClose = popupBigImage.querySelector('.popup__close-button');

function openPopupEdit() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;    
    popupTypeEdit.classList.add('popup_visible');
}
function closePopupEdit() {
    popupTypeEdit.classList.remove('popup_visible');
}

function openPopupAdd() {
    popupTypeAdd.classList.add('popup_visible');
}
function closePopupAdd() {
    popupTypeAdd.classList.remove('popup_visible');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    closePopupEdit();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}

openPopupEditBtn.addEventListener('click', function(event){
    openPopupEdit();
});
closePopupEditBtn.addEventListener('click', function(event){
    closePopupEdit();
    
});

addCardBtn.addEventListener('click', function(event){
    openPopupAdd();
});
closePopupAddBtn.addEventListener('click', function(event){
    closePopupAdd();
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

const popupImage = document.querySelector('.popup_type_img');
const popupImageClose = popupImage.querySelector('.popup__close-button');
const popupImageImage = popupImage.querySelector('.popup__img');
const popupImageText = popupImage.querySelector('.popup__title-img');
const textCardInput = popupAdd.querySelector('.popup__item_type_title-card');
const linkCardInput = popupAdd.querySelector('.popup__item_type_link_card');

const photoCard = document.querySelector('.grid-places');

const formSubmitAddHandler = (event) => {
    event.preventDefault();
    const textCardSubmit = textCardInput.value;
    const linkCardSubmit = linkCardInput.value;
    renderCard(createCard(textCardSubmit, linkCardSubmit));
    closePopupAdd(popupTypeAdd);
    popupAddForm.reset(); // очищение поля формы для след. добавления
    }

    function createCard(textCardSubmit, linkCardSubmit) {
        const templateCard = document.querySelector('#grid-template').content.querySelector('.grid__element');
        const templateCardElement = templateCard.cloneNode(true);
        const templateCardText = templateCardElement.querySelector('.grid__text');
        const templateCardImage = templateCardElement.querySelector('.grid__image');
        const AddlikeButton = templateCardElement.querySelector('.grid__like');
        const AddImage = templateCardElement.querySelector('.grid__image');
        const AddDeleteIcon = templateCardElement.querySelector('.grid__delete-button');
      
        //Слушатели
          AddlikeButton.addEventListener('click', function() {
            AddlikeButton.classList.toggle('grid__like-liked');
          })
      
          AddDeleteIcon.addEventListener('click', function() {
            AddDeleteIcon.closest('.grid__element').remove();
          })
      
          AddImage.addEventListener('click', function () {
            openPopup(popupBigImage);
            popupBigmageImage.src = linkCardSubmit;
            popupBigImageText.textContent = textCardSubmit;
          });
          templateCardText.textContent = textCardSubmit;
          templateCardImage.src = linkCardSubmit;
          templateCardImage.alt = linkCardSubmit;
          return templateCardElement;
        }
      
        // Рендеринг
        function renderCard(card) {
          photoCard.prepend(card);
        }
      
        // Обработчик формы добавления карточки
        popupAddForm.addEventListener('submit', formSubmitAddHandler);
        
        // Генерация
        const initialTemplate = initialCards.forEach(item => {
        renderCard(createCard(item.name, item.link));
        });
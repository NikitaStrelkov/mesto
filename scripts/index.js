
let popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeAdd = document.querySelector('.popup_type_add');

let openPopupEditBtn = document.querySelector('.profile__button-edit');
let closePopupEditBtn = document.querySelector('.popup__close-button_edit');

const addCardBtn = document.querySelector('.profile__button-add');
const closePopupAddBtn = document.querySelector('.popup__close-button_add');

let popupContent = document.querySelector('.popup__content');

let saveBtn = document.querySelector('.popup__button');

let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__item_type_name');
let jobInput = document.querySelector('.popup__item_type_job');

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



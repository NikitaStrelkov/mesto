
let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.edit-btn')
let closePopupBtn = document.querySelector('.popup__close-button');
let popupContent = document.querySelector('.popup__content');

let formElement = document.querySelector('.form__input-container');

let saveBtn = document.querySelector('.form__button');

let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

 
function openPopup() {
    popup.classList.add('popup_visible');
}
function closePopup() {
    popup.classList.remove('popup_visible');
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



function formSubmitHandler() {
    
    // Получите значение полей jobInput и nameInput из свойства value
    let nameInput = document.querySelector('.form__item_name');
    let jobInput = document.querySelector('.form__item_job');
    // Выберите элементы, куда должны быть вставлены значения полей
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

formSubmitHandler();

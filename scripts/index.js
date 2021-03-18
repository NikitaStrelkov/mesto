
let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.edit-button')
let closePopupBtn = document.querySelector('.popup__close-button');
let popupContent = document.querySelector('.popup__content');

let saveBtn = document.querySelector('.popup__button');

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

/*saveBtn.addEventListener('click', function(event) {
    closePopup();
    event.stopImmediatePropagation();
});*/

popupContent.addEventListener('click', function(event) {
    event.stopImmediatePropagation();
}); 


    let profileName = document.querySelector('.profile__title');
    let profileJob = document.querySelector('.profile__subtitle');
    
    
     


// Находим поля формы в DOM
let formElement = document.querySelector('.popup__input-container');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); 
    // Получите значение полей jobInput и nameInput из свойства value
    let nameInput = document.querySelector('.popup__item_name').value;
    let jobInput = document.querySelector('.popup__item_job').value;
    // Выберите элементы, куда должны быть вставлены значения полей
    document.querySelector('.profile__subtitle').textContent = nameInput.value;
    document.querySelector('.profile__subtitle').textContent = jobInput.value;
    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler());






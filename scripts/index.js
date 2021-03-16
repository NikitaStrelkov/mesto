console.log('Привет');

let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.edit-btn')
let closePopupBtn = document.querySelector('.popup__overlay', '.popup__close-button');
let popupContent = document.querySelector('.popup__content');

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
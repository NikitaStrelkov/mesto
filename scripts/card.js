const popupBigImageImage = document.querySelector('.popup__img')
const popupBigImageText = document.querySelector('.popup__text-img')

import {openPopup, closePopup, closePopupEsc} from '../utils/utils.js'

class Card {
    constructor({text ,link}, cardTemplateSelector) {
        this._text = text
        this._link = link
        this._cardTemplateSelector = cardTemplateSelector
    }

    _handleLikeIcon() {
        likeButtonAdd.classList.toggle('grid__like_filled');
    }

    _handleDeleteCard(evt) {
        this._templateCardElement.remove();
    }

    _handlePreviewPicture() {
        openPopup(popupBigImage);
        popupBigImageImage.src = this._link;
        popupBigImageImage.alt = this._link;
        popupBigImageText.textContent = this._text;
    }

    _setEventListeners() {
        const likeButtonAdd = templateCardElement.querySelector('.grid__like');
        const imageAdd = templateCardElement.querySelector('.grid__image');
        const iconDeleteAdd = templateCardElement.querySelector('.grid__delete-button');

        likeButtonAdd.addEventListener('click', this._handleLikeIcon);

        iconDeleteAdd.addEventListener('click', this._handleDeleteCard);

        imageAdd.addEventListener('click', this._handlePreviewPicture);
    }

    getCard() {
        const templateCard = document.querySelector(this._cardTemplateSelector)
        .content.querySelector('.grid__element');
        this._templateCardElement = templateCard.cloneNode(true);
        const templateCardText = this._templateCardElement.querySelector('.grid__text');
        const templateCardImage = this._templateCardElement.querySelector('.grid__image');
        
      
        templateCardText.textContent = this._text;
        templateCardImage.src = this._link;
        templateCardImage.alt = this._link;
        return templateCardElement;
    }
}
export default Card;
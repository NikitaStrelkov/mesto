import {openPopup, popupBigImage, popupBigImageImage, popupBigImageText} from './index.js';
export default class Card {
  constructor({name, link}, cardTemplateSelector) {
    this._text = name;
    this._link = link;
    this._cardTemplateSelector = cardTemplateSelector;
  }

  _handleLikeIcon(evt) {
    evt.target.classList.toggle('grid__like_filled'); /////
  }

  _handleDeleteCard(evt) {
    evt.target.closest('.grid__element').remove(); /////
  }

  _handlePreviewPicture() {
    openPopup(popupBigImage);
    popupBigImageImage.src = this.src;
    popupBigImageText.textContent = this.alt;
  }

  _setEventListeners() {
    this._likeButtonAdd.addEventListener('click', this._handleLikeIcon);
    this._iconDeleteAdd.addEventListener('click', this._handleDeleteCard);
    this._templateCardImage.addEventListener('click', this._handlePreviewPicture);
    // this._templateCardImage.addEventListener('click', () => {
    //   this._handleCardClick(this._text, this._link)
    // });
  }

  getCard() {
    this._templateCard = document.querySelector(this._cardTemplateSelector).content;
    this._templateCardElement = this._templateCard.cloneNode(true);
    this._likeButtonAdd = this._templateCardElement.querySelector('.grid__like');
    this._templateCardImage = this._templateCardElement.querySelector('.grid__image');
    this._iconDeleteAdd = this._templateCardElement.querySelector('.grid__delete-button');
    this._templateCardImage.src = this._link;
    this._templateCardImage.alt = this._text;
    this._templateCardElement.querySelector('.grid__text').textContent = this._text;
    this._setEventListeners();

    return this._templateCardElement;
    }
    
  }

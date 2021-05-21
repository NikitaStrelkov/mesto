class Popup {
    constructor(popupSelector, closeButtonSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeButton = this._popup.querySelector(closeButtonSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleClickOverlay = this._handleClickOverlay.bind(this);
    }

    _handleEscClose(event) {
        if(event.key === 'Escape') {
            this.close();
        }
    }

    _handleClickOverlay(event) {
        if (event.target !== this._popup) return;
        this.close();
      }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        document.addEventListener('click', this._handleClickOverlay);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        document.removeEventListener('click', this._handleClickOverlay);
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
            this.close();
        })
        
    }
}

export default Popup
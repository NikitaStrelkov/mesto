// открытие popup
export function openPopup(popup) {
    popup.classList.add('popup_visible');
    document.addEventListener('keydown', closePopupEsc);
  }
  //  закрытие popup
   export function closePopup(popup) {
    popup.classList.remove('popup_visible');
    document.removeEventListener('keydown', closePopupEsc);
  }
  //закрыие popup на Esc
   export function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
      const popup = document.querySelector('.popup_visible');
      closePopup(popup);
    }
  }
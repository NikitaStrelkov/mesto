export const settingsForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_unactive',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_active'
}

class FormValidator {
    constructor(settingsForm, form) {
        this._settings = settingsForm
        this._form = form
    }

    _showInputError = (formElement, inputElement, errorMessage) => {
      const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(this._settings.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._settings.errorClass);
    };

    _hideInputError = (formElement, inputElement, errorMessage) => {
      const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._settings.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.remove(this._settings.errorClass);
    };

    _checkInputValidity = (formElement, inputElement) => {
      const isInputNotValid = !inputElement.validity.valid;
      if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;
        this._showInputError(formElement, inputElement, errorMessage);
      } else {
        this._hideInputError(formElement, inputElement);
      }
    };

    _hasInvalidInput = (inputList) => {
      return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    }

    _toggleButtonState = (inputList, buttonElement) => {
      if (this._hasInvalidInput(inputList)) {                        
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add(this._settings.inactiveButtonClass);
      } else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove(this._settings.inactiveButtonClass);
      }
    };

    _setEventListeners = (formElement) => {
      const inputList = Array.from(formElement.querySelectorAll(this._settings.inputSelector));
      const buttonElement = formElement.querySelector(this._settings.submitButtonSelector);
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
        this._toggleButtonState(inputList, buttonElement);
      });
      this._toggleButtonState(inputList, buttonElement);
      inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
          this._checkInputValidity(formElement, inputElement);
          this._toggleButtonState(inputList, buttonElement);
        });
      });
    };

    enableValidation = () => {
      const formList = Array.from(document.querySelectorAll(this._settings.formSelector));
      formList.forEach((formElement) => {
         this._setEventListeners(formElement);
      });
    }
  }

export default FormValidator;

// const settingsForm = {
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__save-button',
//     inactiveButtonClass: 'popup__save-button_unactive',
//     inputErrorClass: 'popup__input-error',
//     errorClass: 'popup__input-error_active'
//   }
  
//   const showInputError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//     inputElement.classList.add(settingsForm.inputErrorClass);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(settingsForm.errorClass);
//   };
  
//   const hideInputError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//     inputElement.classList.remove(settingsForm.inputErrorClass);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.remove(settingsForm.errorClass);
//   };

  
//   const checkInputValidity = (formElement, inputElement) => {
//     const isInputNotValid = !inputElement.validity.valid;
//     if (isInputNotValid) {
//       const errorMessage = inputElement.validationMessage;
//       showInputError(formElement, inputElement, errorMessage);
//     } else {
//       hideInputError(formElement, inputElement);
//     }
//   };
  
//   // установление слушателей событий всем полям формы
//   const setEventListeners = (formElement) => {
//       const inputList = Array.from(formElement.querySelectorAll(settingsForm.inputSelector));
//       const buttonElement = formElement.querySelector(settingsForm.submitButtonSelector);
//       formElement.addEventListener('submit', function (evt) {
//         evt.preventDefault();
//         toggleButtonState(inputList, buttonElement);
//       });
//       toggleButtonState(inputList, buttonElement);
//       inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', function () {
//           checkInputValidity(formElement, inputElement);
//           // чтобы проверять его при изменении любого из полей
//           toggleButtonState(inputList, buttonElement);
//         });
//       });
//     };
  
//     //функция проверка на недопустимый ввод
//     const hasInvalidInput = (inputList) => {
//       return inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
//       });
//     };
    
//   //функция переключение состояние кнопки
//   const toggleButtonState = (inputList, buttonElement) => {
//       // Если есть хотя бы один невалидный инпут
//       if (hasInvalidInput(inputList)) {                        
//         buttonElement.setAttribute('disabled', true);
//         // сделай кнопку неактивной
//         buttonElement.classList.add(settingsForm.inactiveButtonClass);
//       } else {
//         buttonElement.removeAttribute('disabled');
//         // иначе сделай кнопку активной
//         buttonElement.classList.remove(settingsForm.inactiveButtonClass);
//       }
//     };
  
//   // Функция запуска проверки
//   const enableValidation = () => {
//       const formList = Array.from(document.querySelectorAll(settingsForm.formSelector));
//       formList.forEach((formElement) => {
//          setEventListeners(formElement);
//       });
//     };
//     enableValidation(settingsForm);
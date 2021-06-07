import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(popupSelector, callBackSubmitForm) {
    super(popupSelector)
    this._callBackSubmitForm = callBackSubmitForm
    this._form = this._popup.querySelector('.popup__form')
    this._allInputFields = this._form.querySelectorAll('.popup__field')
    this._submitButton = this._form.querySelector('.popup__submit')
    this._submitButtonTextDefault = this._submitButton.textContent
  }
  _getInputValues = () => {
    const inputData = {}
    this._allInputFields.forEach((inputElement) => {
      const { name, value } = inputElement
      inputData[name] = value
    })
    return inputData
  }
  _submitForm = (evt) => {
    evt.preventDefault()
    const data = this._getInputValues()
    this._callBackSubmitForm(data)
  }
  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', this._submitForm)
  }
  close() {
    super.close()
    this._form.reset()
  }

  setLoadingInterface(state, buttonText = `Сохранение...`) {
    if (state) {
      this._submitButton.textContent = buttonText
    } else {
      this._submitButton.textContent = this._submitButtonTextDefault
    }
    return
  }
}

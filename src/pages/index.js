import './index.css'
import {
  popupButtonAvatar,
  objectValidation,
  popupButtonEdit,
  popupButtonAdd,
  nameInput,
  jobInput,
  formElementCards,
  formElementEdit,
  formElementAvatar,
  containerSelector,
} from '../script/utils/constants.js'
import { Card } from '../script/components/Card.js'
import { FormValidator } from '../script/components/FormValidator.js'
import { Section } from '../script/components/Section.js'
import { PopupWithImage } from '../script/components/PopupWithImage.js'
import { PopupWithForm } from '../script/components/PopupWithForm.js'
import { PopupWithSubmit } from '../script/components/PopupWithSubmit.js'
import { UserInfo } from '../script/components/UserInfo.js'
import { Api } from '../script/components/Api.js'

let myId = null

const popupWithFormAvatar = new PopupWithForm('#edit-profile', submitEditProfileAvatar)
const popupWithFormUser = new PopupWithForm('#user', submitEditProfileForm)
const popupWithFormCard = new PopupWithForm('#cards', submitAddCardForm)

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-23',
  headers: {
    Authorization: 'c612ee53-bfd9-4a06-b181-f06567a06aa2',
    'Content-Type': 'application/json',
  },
})

const userInfo = new UserInfo({
  userName: '.profile__info-name',
  userJob: '.profile__characteristic',
  userAvatar: '.profile__avatar-edit',
})

const cardsList = new Section(
  {
    renderer: (cardItem) => {
      const cardElement = createCard(cardItem)
      cardsList.addItem(cardElement)
    },
  },
  containerSelector
)
//Promise.all
Promise.all([api.getUser(), api.getInitialCards()])
  .then((data) => {
    const [userData, cardsData] = data
    userInfo.setUserInfo(userData)
    myId = userData._id
    cardsList.renderItems(cardsData)
  })
  .catch((err) => {
    console.log(`Ошибка при получении данных: ${err}`)
  })

const popupWithImage = new PopupWithImage('#image')
const confirmationPopup = new PopupWithSubmit('#card-delete')

const addCardFormValidator = new FormValidator(objectValidation, formElementCards)
const editProfileFormValidator = new FormValidator(objectValidation, formElementEdit)
const loadAvatarFormValidator = new FormValidator(objectValidation, formElementAvatar)

addCardFormValidator.enableValidation()
editProfileFormValidator.enableValidation()
loadAvatarFormValidator.enableValidation()

popupWithImage.setEventListeners()
confirmationPopup.setEventListeners()
popupWithFormAvatar.setEventListeners()
popupWithFormUser.setEventListeners()
popupWithFormCard.setEventListeners()

popupButtonAvatar.addEventListener('click', () => {
  loadAvatarFormValidator.clearErrorMessage()
  popupWithFormAvatar.open()
})

function submitEditProfileAvatar(newAvatar) {
  popupWithFormAvatar.setLoadingInterface(true)
  api
    .updateAvatar(newAvatar)
    .then((data) => {
      userInfo.renderNewAvatar(data)
      popupWithFormAvatar.close()
    })
    .catch((err) => {
      console.log(`Ошибка при редактировании аватара: ${err}`)
    })
    .finally(() => popupWithFormAvatar.setLoadingInterface(false))
}

popupButtonEdit.addEventListener('click', () => {
  nameInput.value = userInfo.getUserInfo().userName
  jobInput.value = userInfo.getUserInfo().userJob
  popupWithFormUser.open()
  editProfileFormValidator.clearErrorMessage()
})

function submitEditProfileForm(data) {
  popupWithFormUser.setLoadingInterface(true)
  api
    .editUserInfo(data)
    .then((inputData) => {
      userInfo.setUserInfo(inputData)
      popupWithFormUser.close()
    })
    .catch((err) => {
      console.log(`Ошибка при редактировании профиля: ${err}`)
    })
    .finally(() => popupWithFormUser.setLoadingInterface(false))
}

popupButtonAdd.addEventListener('click', () => {
  popupWithFormCard.open()
  addCardFormValidator.clearErrorMessage()
})

function submitAddCardForm(inputData) {
  popupWithFormCard.setLoadingInterface(true)
  api
    .createNewCard(inputData)
    .then((card) => {
      cardsList.addNewItem(createCard(card))
      popupWithFormCard.close()
    })
    .catch((err) => {
      console.log(`Ошибка при добавлении новой карточки: ${err}`)
    })
    .finally(() => popupWithFormCard.setLoadingInterface(false))
}

function createCard(data) {
  const newCardElement = new Card(
    {
      data,
      handleCardClick: (link, name) => {
        popupWithImage.open(link, name)
      },
      handleCardLike: (card, checkMyLike) => {
        if (checkMyLike) {
          return api
            .deleteLike(card._id)
            .then((newCardData) => {
              newCardElement.updateCardData(newCardData)
              newCardElement.setLikeDisabled()
              return newCardData
            })
            .catch((err) => console.log(`Ошибка при удалении лайка: ${err}`))
        }
        {
          return api
            .likeCard(card._id)
            .then((newCardData) => {
              newCardElement.updateCardData(newCardData)
              newCardElement.setLikeActive()
              return newCardData
            })
            .catch((err) => console.log(`Ошибка при доавлении лайка: ${err}`))
        }
      },
      handleCardDelete: (cardId, cardElement) => {
        confirmationPopup.open()
        confirmationPopup.setSubmitAction(() => {
          confirmationPopup.setLoadingInterface(true)
          api
            .removeCard(cardId)
            .then(() => {
              cardElement.remove()
              confirmationPopup.close()
            })
            .catch((err) => console.log(`Ошибка при удалении карточки: ${err}`))
            .finally(() => confirmationPopup.setLoadingInterface(false))
        })
      },
    },
    '.template',
    myId
  )
  const cardElement = newCardElement.generateCard()
  return cardElement
}

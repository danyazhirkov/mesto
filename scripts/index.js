const editButton = document.querySelector('.profile__edit-button');
const popupContainer = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup_add');
const popupGetImage = document.querySelector('.popup-image');
const closeButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.form');
const formInput = document.querySelector('.form_input');
const nameInput = document.querySelector('.form__item_input_name');
const descriptionInput = document.querySelector('.form__item_input_description');
const nameProfile = document.querySelector('.profile__name');
const nameDescription = document.querySelector('.profile__description');
const addButton = document.querySelector('.profile__add-button');
const buttonClosePopupCard = document.querySelector('.popup__close-button_second');
const buttonClosePopupImage = document.querySelector('.popup-close_button');
const template = document.querySelector('#card-template').content.querySelector('.element');
const elements = document.querySelector('.elements');
const inputName = document.querySelector('.form__item_input-name_second');
const inputLink = document.querySelector('.form__item_input-description_second');
const popupImgSubtitle = document.querySelector('.popup-subtitle');
const popupImage = document.querySelector('.popup-photo');

editButton.addEventListener('click', getPopupEditProfile);
addButton.addEventListener('click', getPopupAddCard);
closeButton.addEventListener('click', closePopupEditProfile);
buttonClosePopupCard.addEventListener('click', closePopupAddCard);
buttonClosePopupImage.addEventListener('click', closePopupPhoto);


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

function addFormSubmit (evt) {
  evt.preventDefault();
  const title = inputName.value;
  const link = inputLink.value;
  const card = createCard({name: title, link:link});
  elements.prepend(card);
  closePopupAddCard();
  const form = document.querySelector('.form_input').reset();
}
formInput.addEventListener('submit', addFormSubmit);


renderCards(initialCards);

function renderCards(items) {
  const cards = items.map((item)=> {
return createCard(item);
  });
  elements.append(...cards);
}

function onDeleteClick(evt) {
  evt.target.closest('.element').remove();
}

function setLike(evt) {
  evt.target.classList.toggle('element__button-heart_theme-dark');
}

function createCard(item) {
  const card = template.cloneNode(true);
  card.querySelector('.element__name').textContent = item.name;
  card.querySelector('.element__photo').src = item.link;
  card.querySelector('.element__photo').alt= item.name;
  card.querySelector('.element__button-trash').addEventListener('click', onDeleteClick);
  card.querySelector('.element__button-heart').addEventListener('click', setLike);
  card.querySelector('.element__photo').addEventListener('click', () => {
    popupImage.src = item.link;
    popupImgSubtitle.textContent = item.name;
    popupImage.alt = item.name;
    getPopup(popupGetImage);
  }); 
  return card;
}

function getPopup(popup) {
  popup.classList.add('popup_opened');
  popup.classList.add('popup-image_active');
}

function getPopupEditProfile() {
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = nameDescription.textContent; 
  getPopup(popupContainer);
}

function getPopupAddCard() {
  getPopup(popupAdd);
}

function removePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.classList.remove('popup-image_active');
}

function closePopupEditProfile() {
  removePopup(popupContainer);
}

function closePopupAddCard() {
  removePopup(popupAdd);
}

function closePopupPhoto() {
  removePopup(popupGetImage);
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value;
    nameDescription.textContent = descriptionInput.value;
    closePopupEditProfile();
}
formElement.addEventListener('submit', handleFormSubmit); 


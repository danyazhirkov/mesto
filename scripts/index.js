let editButton = document.querySelector('.profile__edit-button');
let popupContainer = document.querySelector('.popup');
let popupSecond = document.querySelector('.popup_add');
let popupThird = document.querySelector('.popup_image');
let closeButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.form');
let formInput = document.querySelector('.form_input');
let nameInput = document.querySelector('.form__item_input_name');
let descriptionInput = document.querySelector('.form__item_input_description');
let nameProfile = document.querySelector('.profile__name');
let nameDescription = document.querySelector('.profile__description');
let addButton = document.querySelector('.profile__add-button');
let closeButtonSecond = document.querySelector('.popup__close-button_second');
const closeButtonThird = document.querySelector('.popup__close-button_third');
editButton.addEventListener('click', getPopup); 
closeButton.addEventListener('click', removePopup);
addButton.addEventListener('click', getAdd);
closeButtonSecond.addEventListener('click', removePopupSecond);
closeButtonThird.addEventListener('click', removePopupThird);

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
const template = document.querySelector('#card-template').content.querySelector('.element');
const elements = document.querySelector('.elements');
const inputName = document.querySelector('.form__item_input_name_second');
const inputLink = document.querySelector('.form__item_input_description_second');
const popupImgSubtitle = document.querySelector('.popup__subtitle');
const popupImage = document.querySelector('.popup__image');

function formAddSubmit (evt) {
  evt.preventDefault();
  const title = inputName.value;
  const link = inputLink.value;
  const card = createCard({name: title, link:link});
  elements.append(card);
  removePopupSecond();
}
formInput.addEventListener('submit', formAddSubmit);


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

function removePopupThird() {
  popupThird.classList.remove('popup_opened');
}


function createCard(item) {
  const card = template.cloneNode(true);
  card.querySelector('.element__name').textContent = item.name;
  card.querySelector('.element__photo').src = item.link;
  card.querySelector('.element__photo').alt= item.name;
  card.querySelector('.element__button-trash').addEventListener('click', onDeleteClick);
  card.querySelector('.element__button-heart').addEventListener('click', setLike);
  card.querySelector('.element__photo').addEventListener('click', ()=> {
    popupThird.classList.add('popup_opened');
    popupImage.src = item.link;
    popupImgSubtitle.textContent = item.name;
  });
  return card;
}

function getPopup() {
    popupContainer.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    descriptionInput.value = nameDescription.textContent; 
}

function getAdd() {
    popupSecond.classList.add('popup_opened');
  }

function removePopup() {
    popupContainer.classList.remove('popup_opened');
}

function removePopupSecond() {
    popupSecond.classList.remove('popup_opened');
}


function handleFormSubmit (evt) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value;
    nameDescription.textContent = descriptionInput.value;
    removePopup();
}
formElement.addEventListener('submit', handleFormSubmit); 


let editButton = document.querySelector('.profile__edit-button');
let popupContainer = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button')
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__item_input_name');
let descriptionInput = document.querySelector('.form__item_input_description');
let nameProfile = document.querySelector('.profile__name');
let nameDescription = document.querySelector('.profile__description');
editButton.addEventListener('click', getPopup); 
closeButton.addEventListener('click', removePopup);


function getPopup() {
    popupContainer.classList.add('popup__opened')
    nameInput.value = nameProfile.textContent;
    descriptionInput.value = nameDescription.textContent; 
}

function removePopup() {
    popupContainer.classList.remove('popup__opened')
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value;
    nameDescription.textContent = descriptionInput.value;
    removePopup();
}
formElement.addEventListener('submit', handleFormSubmit); 


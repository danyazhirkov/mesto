import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./cards.js";

const buttonEditProfile = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_profile");
const popupAdd = document.querySelector(".popup_add");
const popupGetImage = document.querySelector(".popup_image");
const buttonClosePopupProfile = popupProfile.querySelector(
    ".popup__close-button"
);
const formEditProfile = popupProfile.querySelector(".form");
const formAddCard = document.querySelector(".form_input");
const nameInput = document.querySelector(".form__item_input_name");
// const imputElement = document.querySelector("form__item");
const descriptionInput = document.querySelector(
    ".form__item_input_description"
);
const nameProfile = document.querySelector(".profile__name");
const nameDescription = document.querySelector(".profile__description");
const addButton = document.querySelector(".profile__add-button");
const buttonClosePopupPlace = popupAdd.querySelector(
    ".popup__close-button_second"
);
const buttonClosePopupImage = popupGetImage.querySelector(
    ".popup__button-image"
);
const elements = document.querySelector(".elements");
// const elementPhoto = document.querySelector(".element__photo");
// const elementSubtitle = document.querySelector(".element__name");
const inputName = document.querySelector(".form__item_input-name_second");
const inputLink = document.querySelector(
    ".form__item_input-description_second"
);
const popupImgSubtitle = document.querySelector(".popup__subtitle");
const popupImage = document.querySelector(".popup__photo");
const buttonSubmit = formAddCard.querySelector(".form__submit-button");

export {
    popupGetImage,
    buttonClosePopupImage,
    popupImage,
    popupImgSubtitle,
    buttonSubmit,
    formAddCard,
    elements,
};

buttonEditProfile.addEventListener("click", openPopupEditProfile);
addButton.addEventListener("click", openPopupAddCard);
buttonClosePopupProfile.addEventListener("click", closePopupEditProfile);
buttonClosePopupPlace.addEventListener("click", closePopupAddCard);
buttonClosePopupImage.addEventListener("click", closePopupPhoto);

const config = {
    inputSelector: ".form__item",
    buttonSelector: ".form__submit-button",
    buttonDisabledClass: "form__submit-button_disabled",
    errorClassActive: ".form__item-error_active",
    errorClass: ".form__item-error",
};

const formValidatorPopupAdd = new FormValidator(config, popupAdd);
formValidatorPopupAdd.enableValidation();
const formValidatorPopupProfile = new FormValidator(config, popupProfile);
formValidatorPopupProfile.enableValidation();

formValidatorPopupAdd.resetValidation();

formAddCard.addEventListener("submit", addFormSubmit);

const generateCard = function (data, templateSelector) {
    const card = new Card(data, templateSelector);
    return card.createCard();
};

initialCards.forEach((item) => {
    document
        .querySelector(".elements")
        .prepend(generateCard(item, "#card-template"));
});

function addCard(card) {
    elements.prepend(card);
}

function addFormSubmit(evt) {
    evt.preventDefault();
    addCard(
        generateCard(
            { name: inputName.value, link: inputLink.value },
            "#card-template"
        )
    );
    closePopupAddCard();
    formAddCard.reset();
}

export function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", keyEscHandler);
}

function openPopupEditProfile() {
    nameInput.value = nameProfile.textContent;
    descriptionInput.value = nameDescription.textContent;
    openPopup(popupProfile);
}

function openPopupAddCard() {
    openPopup(popupAdd);
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", keyEscHandler);
}

function closePopupEditProfile() {
    closePopup(popupProfile);
}

function closePopupAddCard() {
    closePopup(popupAdd);
}

function closePopupPhoto() {
    closePopup(popupGetImage);
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    nameDescription.textContent = descriptionInput.value;
    closePopupEditProfile();
}
formEditProfile.addEventListener("submit", handleFormSubmit);

function keyEscHandler(evt) {
    if (evt.key === "Escape") {
        closePopup(document.querySelector(".popup_opened"));
    }
}

const closePopupByOverlayClick = function (e) {
    if (e.target === e.currentTarget) {
        closePopup(e.currentTarget);
    }
};

addButton.addEventListener("click", () => {
    formValidatorPopupAdd.resetValidation();
});

popupProfile.addEventListener("click", closePopupByOverlayClick);
popupAdd.addEventListener("click", closePopupByOverlayClick);
popupGetImage.addEventListener("click", closePopupByOverlayClick);

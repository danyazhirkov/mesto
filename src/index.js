
import "./pages/index.css"

import Card from "./scripts/Card.js";
import { FormValidator } from "./scripts/FormValidator.js";
import { initialCards } from "./scripts/cards.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import Section from "./scripts/Section.js";
import UserInfo from "./scripts/UserInfo.js";

export const buttonEditProfile = document.querySelector(
    ".profile__edit-button"
);
const popupProfile = document.querySelector(".popup_profile");
const popupAdd = document.querySelector(".popup_add");
const nameInput = document.querySelector(".form__item_input_name");
const descriptionInput = document.querySelector(
    ".form__item_input_description"
);

const addButton = document.querySelector(".profile__add-button");

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

const cardList = new Section(
    {
        items: initialCards,
        renderer: (data) => {
            const card = createCard(data.title, data.link, "#card-template");
            cardList.addItem(card);
        },
    },
    ".elements"
);

cardList.renderItems();

const userInfo = new UserInfo({
    nameSelector: ".profile__name",
    infoSelector: ".profile__description",
});

const popupWithImage = new PopupWithImage(".popup_image");

const formPopupAddCard = new PopupWithForm({
    popupSelector: ".popup_add",
    handleFormSubmit: (data) => {
        cardList.addItem(createCard(data.title, data.link, "#card-template"));
        formPopupAddCard.close();
    },
});

const formPopupEditProfile = new PopupWithForm({
    popupSelector: ".popup_profile",
    handleFormSubmit: (data) => {
        userInfo.setUserInfo(data.name, data.info);
    },
});

function createCard(title, link, template) {
    const card = new Card(title, link, template, () =>
        popupWithImage.open(title, link)
    );
    return card.generateCard();
}

buttonEditProfile.addEventListener("click", () => {
    formPopupEditProfile.open();

    nameInput.value = userInfo.getUserInfo().name;
    descriptionInput.value = userInfo.getUserInfo().info;
});

addButton.addEventListener("click", () => {
    formPopupAddCard.open();
    formValidatorPopupAdd.resetValidation();
});

formPopupAddCard.setEventListeners();
popupWithImage.setEventListeners();
formPopupEditProfile.setEventListeners();

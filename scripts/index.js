const editButton = document.querySelector(".profile__edit-button");
const popupGetProfile = document.querySelector(".popup");
const popupAdd = document.querySelector(".popup_add");
const popupGetImage = document.querySelector(".popup_image");
const closeButton = document.querySelector(".popup__close-button");
const formElement = document.querySelector(".form");
const formAddCard = document.querySelector(".form_input");
const nameInput = document.querySelector(".form__item_input_name");
const imputElement = document.querySelector("form__item");
const descriptionInput = document.querySelector(
    ".form__item_input_description"
);
const nameProfile = document.querySelector(".profile__name");
const nameDescription = document.querySelector(".profile__description");
const addButton = document.querySelector(".profile__add-button");
const buttonClosePopupCard = document.querySelector(
    ".popup__close-button_second"
);
const buttonClosePopupImage = document.querySelector(".popup__button-image");
const template = document
    .querySelector("#card-template")
    .content.querySelector(".element");
const elements = document.querySelector(".elements");
const elementPhoto = document.querySelector(".element__photo");
const elementSubtitle = document.querySelector(".element__name");
const inputName = document.querySelector(".form__item_input-name_second");
const inputLink = document.querySelector(
    ".form__item_input-description_second"
);
const popupImgSubtitle = document.querySelector(".popup__subtitle");
const popupImage = document.querySelector(".popup__photo");
const buttonSubmit = formAddCard.querySelector(".form__submit-button");
const popupAll = [popupGetProfile, popupAdd, popupGetImage];

editButton.addEventListener("click", openPopupEditProfile);
addButton.addEventListener("click", openPopupAddCard);
closeButton.addEventListener("click", closePopupEditProfile);
buttonClosePopupCard.addEventListener("click", closePopupAddCard);
buttonClosePopupImage.addEventListener("click", closePopupPhoto);

const initialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
];

function addFormSubmit(evt) {
    evt.preventDefault();
    const title = inputName.value;
    const link = inputLink.value;
    const card = createCard({ name: title, link: link });
    elements.prepend(card);
    closePopupAddCard();
    formAddCard.reset();
    buttonSubmit.setAttribute("disabled", true);
    buttonSubmit.classList.add("form__submit-button_disabled");
}
formAddCard.addEventListener("submit", addFormSubmit);

renderCards(initialCards);

function renderCards(items) {
    const cards = items.map((item) => {
        return createCard(item);
    });
    elements.append(...cards);
}

function onDeleteClick(evt) {
    evt.target.closest(".element").remove();
}

function setLike(evt) {
    evt.target.classList.toggle("element__button-heart_theme-dark");
}

function createCard(item) {
    const card = template.cloneNode(true);
    card.querySelector(".element__name").textContent = item.name;
    card.querySelector(".element__photo").src = item.link;
    card.querySelector(".element__photo").alt = item.name;
    card.querySelector(".element__button-trash").addEventListener(
        "click",
        onDeleteClick
    );
    card.querySelector(".element__button-heart").addEventListener(
        "click",
        setLike
    );
    card.querySelector(".element__photo").addEventListener("click", () => {
        openPopup(popupGetImage);
        popupImage.src = item.link;
        popupImgSubtitle.textContent = item.name;
        popupImage.alt = item.name;
    });
    return card;
}

function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", keyEscHandler);
}

function openPopupEditProfile() {
    nameInput.value = nameProfile.textContent;
    descriptionInput.value = nameDescription.textContent;
    openPopup(popupGetProfile);
}

function openPopupAddCard() {
    openPopup(popupAdd);
}

function openPopupPhoto() {
    openPopup(popupGetImage);
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", keyEscHandler);
}

function closePopupEditProfile() {
    closePopup(popupGetProfile);
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
formElement.addEventListener("submit", handleFormSubmit);

function keyEscHandler(evt) {
    popupAll.some((item) => {
        if (evt.key === "Escape") {
            closePopup(item);
        }
    });
}

const closePopupByOverlayClick = function (e) {
    if (e.target === e.currentTarget) {
        closePopup(e.currentTarget);
    }
};

popupGetProfile.addEventListener("click", closePopupByOverlayClick);
popupAdd.addEventListener("click", closePopupByOverlayClick);
popupGetImage.addEventListener("click", closePopupByOverlayClick);

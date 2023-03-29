
import {
    popupGetImage,
    popupImage,
    popupImgSubtitle,
    closeButtonPopupImage,
    keyEscHandler
} from "./index.js";


export class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    _getTemplate() {
        const cardElement = document
            .querySelector("#card-template")
            .content.querySelector(".element")
            .cloneNode(true);

        return cardElement;
    }

    createCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector(".element__photo").src = this._link;
        this._element.querySelector(".element__name").textContent = this._name;
        this._element.querySelector(".element__photo").alt = this._name;
        this._element
            .querySelector(".element__button-heart")
            .addEventListener("click", () => {
                this._handleSetLike();
            });
        this._element
            .querySelector(".element__button-trash")
            .addEventListener("click", () => {
                this._hadleDeleteCard();
            });

        return this._element;
    }

    _handleOpenPopup() {
        popupGetImage.classList.add("popup_opened");
        popupImage.src = this._link;
        popupImgSubtitle.textContent = this._name;
        // document.addEventListener("keydown", ()=> {
        //     this._handleEscClose();
        // })
    }

    _handleClosePopup() {
        popupGetImage.classList.remove("popup_opened");
        // document.removeEventListener("keydown", ()=> {
        //     this._handleEscClose();
        // })
    }

    _setEventListeners() {
        this._element
            .querySelector(".element__photo")
            .addEventListener("click", () => {
                this._handleOpenPopup();
            });
        closeButtonPopupImage.addEventListener("click", () => {
            this._handleClosePopup();
        });

        document.addEventListener("keydown", this._handleClosePopup.bind(this));
    }

    _handleSetLike() {
        this._element
            .querySelector(".element__button-heart")
            .classList.toggle("element__button-heart_theme-dark");
    }

    _hadleDeleteCard() {
        this._element
            .querySelector(".element__button-trash")
            .closest(".element")
            .remove();
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this._handleClosePopup();
        }
    }

}

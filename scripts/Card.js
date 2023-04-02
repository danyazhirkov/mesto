
import {
    popupGetImage,
    popupImage,
    popupImgSubtitle,
    openPopup
} from "./index.js";


export class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
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
        return this._element;
    }
    _setEventListeners() {
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
            this._openPopupPhotoListener();

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
    _openPopupPhotoListener() { 
        this._element.querySelector('.element__photo').addEventListener('click', () => {
          this._openPopupPhoto();
        });
      }
      _openPopupPhoto() {  
        openPopup(popupGetImage);
        popupImage.src = this._link;
        popupImgSubtitle.textContent = this._name;
        popupImage.alt = this._name;

}}

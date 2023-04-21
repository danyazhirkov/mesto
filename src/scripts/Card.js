export default class Card {
    constructor(title, link, template, openPopupImage) {
        this._title = title;
        this._link = link;

        this._template = template;

        this._openPopupImage = openPopupImage;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._template)
            .content.querySelector(".element")
            .cloneNode(true);

        this._likeCardButton = cardElement.querySelector(
            ".element__button-heart"
        );
        this._elementImage = cardElement.querySelector(".element__photo");

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();

        this._elementImage.src = this._link;
        this._element.querySelector(".element__name").textContent = this._title;
        this._elementImage.alt = this._title;

        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._element
            .querySelector(".element__button-trash")
            .addEventListener("click", () => {
                this._handleDeleteCard();
            });

        this._likeCardButton.addEventListener("click", () => {
            this._handleLikeCard();
        });

        this._elementImage.addEventListener("click", () => {
            this._openPopupImage(this._title, this._link);
        });
    }

    _handleDeleteCard() {
        this._element.remove();
        this._element = null;
    }

    _handleLikeCard() {
        this._likeCardButton.classList.toggle(
            "element__button-heart_theme-dark"
        );
    }
}


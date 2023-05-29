class Card {
    constructor(
        data,
        userId,
        template,
        openPopupImage,
        handleLike,
        handleUnlike,
        handleDeleteYourCard
    ) {
        this._cardData = data;

        this._name = data.name;
        this._link = data.link;
        this.likes = data.likes;
        this._likesCounter = data.likes.length;
        this._cardId = data._id;
        this._owner = data.owner;

        this.userId = userId;

        this._template = template;

        this._openPopupImage = openPopupImage;
        this._handleLike = handleLike;
        this._handleUnlike = handleUnlike;
        this._handleDeleteYourCard = handleDeleteYourCard;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._template)
            .content.querySelector(".element")
            .cloneNode(true);

        this._likeCardButton = cardElement.querySelector(
            ".element__button-heart"
        );
        this._buttonBin = cardElement.querySelector(".element__button-trash");
        this._elementImage = cardElement.querySelector(".element__photo");

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();

        this._elementImage.src = this._link;
        this._element.querySelector(".element__name").textContent = this._name;
        this._elementImage.alt = this._name;

        this._like = this._element.querySelector(".element__button-heart");
        this._counter = this._element.querySelector(".element__like-counter");
        this.countLikes(this._cardData);

        if (this.userId !== this._cardData.owner._id) {
            this._buttonBin.style.display = "none";
        }

        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._buttonBin.addEventListener("click", () => {
            this._handleDeleteYourCard(this, this._cardId);
        });

        this._likeCardButton.addEventListener("click", () => {
            this._handleLikeCard();
        });

        this._elementImage.addEventListener("click", () => {
            this._openPopupImage(this._name, this._link);
        });
    }

    handleDeleteCard() {
        this._element.remove();
        this._element = null;
    }

    _ifCardLiked() {
        return this._likes.some((item) => item._id === this.userId);
    }

    _handleLikeCard() {
        if (this._ifCardLiked()) {
            this._handleUnlike(this._cardId);
        } else {
            this._handleLike(this._cardId);
        }
    }

    countLikes(card) {
        this._likes = card.likes;
        if (this._likes.length === 0) {
            this._counter.textContent = "0";
        } else {
            this._counter.textContent = this._likes.length;
        }

        if (this._ifCardLiked()) {
            this._like.classList.add("element__button-heart_theme-dark");
        } else {
            this._like.classList.remove("element__button-heart_theme-dark");
        }
    }
}

export default Card;

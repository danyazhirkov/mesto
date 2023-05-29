import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);

        this._handleFormSubmit = handleFormSubmit;

        this._form = this._popup.querySelector(".form");
        this._inputList = this._form.querySelectorAll(".form__item");
        this._submitButton = this._form.querySelector(".form__submit-button");
        this._defaultText = this._submitButton.textContent;
    }

    close() {
        super.close();

        this._form.reset();
    }

    _getInputValues() {
        const formValues = {};
        this._inputList.forEach((input) => {
            formValues[input.name] = input.value;
        });

        return formValues;
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    toggleSaveStatus(status, text) {
        if (status) {
            this._submitButton.textContent = text;
        } else this._submitButton.textContent = this._defaultText;
    }
}

export default PopupWithForm;

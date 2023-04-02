export class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
    }
    _hiddenError(input) {
        const inputId = input.id;
        this._errorInput = this._form.querySelector(`#${inputId}-error`);
        this._errorInput.classList.remove(this._config.errorClassActive);
        this._errorInput.textContent = "";
    }
    _showError(input) {
        const inputId = input.id;
        this._errorInput = this._form.querySelector(`#${inputId}-error`);
        input.classList.add(this._config.errorClass);
        this._errorInput.classList.add(this._config.errorClassActive);
        this._errorInput.textContent = input.validationMessage;
    }
    _toggleErrorState(input) {
        if (input.validity.valid) {
            this._hiddenError(input);
        } else {
            this._showError(input);
        }
    }
    _disableButton = () => {
        this._submitButton.setAttribute("disabled", true);
        this._submitButton.classList.add(this._config.buttonDisabledClass);
    };
    _enableButton = () => {
        this._submitButton.removeAttribute("disabled");
        this._submitButton.classList.remove(this._config.buttonDisabledClass);
    };
    _togglePopupButton() {
        this._formIsValid = this._inputs.every((input) => input.validity.valid);
        if (this._formIsValid) {
            this._enableButton();
        } else {
            this._disableButton();
        }
    }
    _setEventListeners = () => {
        this._inputs = Array.from(
            this._form.querySelectorAll(this._config.inputSelector)
        );
        this._submitButton = this._form.querySelector(
            this._config.buttonSelector
        );
        this._inputs.forEach((input) => {
            input.addEventListener("input", () => {
                this._toggleErrorState(input);
                this._togglePopupButton(input);
            });
            this._togglePopupButton(input);
        });
    };

    enableValidation = () => {
        this._setEventListeners();
    };
    resetValidation() {
        this._disableButton();
        this._inputs.forEach((input) => {
            this._hiddenError(input);
        });
    }
}

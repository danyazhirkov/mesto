export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    };

    setEventListeners() {
        this._popup.addEventListener("click", (evt) => {
            const targetClassList = evt.target.classList;
            if (
                targetClassList.contains("popup") ||
                targetClassList.contains("popup__close-button")
            ) {
                this.close();
            }
        });
    }
}


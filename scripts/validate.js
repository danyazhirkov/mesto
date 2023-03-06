const formValidationConfig = {
    formSelector: ".form",
    imputSelector: ".form__item",
    errorClass: "form__item_type_error",
    buttonSelector: ".form__submit-button",
    buttonDisabledClass: "form__submit-button_disabled",
};

function disableSubmit(evt) {
    evt.preventDefault();
}

function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));

    formList.forEach((form) => {
        form.addEventListener("submit", disableSubmit);
        addImputListeners(form, config);
        toggleButton(form, config);
    });
}

function handleFormInput(evt, config) {
    const input = evt.target;
    const inputId = input.id;
    const errorElement = document.querySelector(`#${inputId}-error`);

    if (input.validity.valid) {
        input.classList.remove(config.errorClass);
        errorElement.textContent = "";
    } else {
        input.classList.add(config.errorClass);
        errorElement.textContent = input.validationMessage;
    }
}

function toggleButton(form, config) {
    const buttonSubmit = form.querySelector(config.buttonSelector);
    const isFormValid = form.checkValidity();
    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle(config.buttonDisabledClass, !isFormValid);
}

function addImputListeners(form, config) {
    const imputList = Array.from(form.querySelectorAll(config.imputSelector));
    imputList.forEach(function (item) {
        item.addEventListener("input", (evt) => {
            handleFormInput(evt, config);
            toggleButton(form, config);
        });
    });
}

enableValidation(formValidationConfig);

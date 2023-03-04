const formValidationConfig = {
  formSelector: '.form',
  imputSelector: '.form__item',
  errorClass: 'form__item_type_error',
  buttonSelector: '.form__submit-button',
  buttonDisabledClass: 'form__submit-button_disabled',
};

function disableSubmit(evt) {
  evt.preventDefault();
}

function enableValidation(config) {
  const formList =  Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((form)=> {
    form.addEventListener('submit', disableSubmit);
  form.addEventListener('input', ()=> {
    toggleButton(form, config);
  });
  addImputListeners(form, config);
  toggleButton (form, config);
  });

} 

function handleFormInput(evt, config) {
  const input = evt.target;
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);

  if (input.validity.valid) {
    input.classList.remove(config.errorClass);
    errorElement.textContent = '';
  } else {
    input.classList.add(config.errorClass);
    errorElement.textContent = input.validationMessage;
  }
}

function toggleButton (form, config) {
  const buttonSubmit = form.querySelector(config.buttonSelector);
  const isFormValid = form.checkValidity();
  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle('form__submit-button_disabled', !isFormValid);
}


function addImputListeners(form, config) {
  const imputList = Array.from(form.querySelectorAll(config.imputSelector));
  imputList.forEach(function (item) {
    item.addEventListener('input', (evt) => {
      handleFormInput(evt, config)
    });
  });
}

enableValidation(formValidationConfig);





















// const isValid = (formElement, inputElement) => {
//     if (!inputElement.validity.valid) {
//       showInputError(formElement, inputElement, inputElement.validationMessage);
//     } 
//     else {
//       hideInputError(formElement, inputElement);
//     }
//   };
  
//   const showInputError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add('form__item_type_error');
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add('form__item-error_active');
//   };
  
//   const hideInputError = (formElement, inputElement) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove('form__item_type_error');
//     errorElement.classList.remove('form__item-error_active');
//     errorElement.textContent = '';
//   };
  
//   const setEventListeners = (formElement) => {
//     const inputList = Array.from(formElement.querySelectorAll('.form__item'));
//     inputList.forEach((inputElement) => {
//       inputElement.addEventListener('input', () => {
//         isValid(formElement, inputElement)
//       });
//     });
//   };
  
//     const enableValidation = () => {
//       const formList = Array.from(document.querySelectorAll('.form'));
//       formList.forEach((formElement) => {
//         setEventListeners(formElement);
//       });
//     };
  
//     enableValidation();


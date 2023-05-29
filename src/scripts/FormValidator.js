export default class FormValidator {
	constructor(options, form) {
	  this._options = options;
	  this._form = form;
	}
	_hiddenError(input) {   
		const inputId = input.id;
		this._errorInput = this._form.querySelector(`#${inputId}-error`);
	  input.classList.remove(this._options.errorClass);
	  this._errorInput.classList.remove(this._options.errorClassActive);
	  this._errorInput.textContent = '';
	};
	_showError(input) { 
		const inputId = input.id;
		this._errorInput = this._form.querySelector(`#${inputId}-error`);    
	  input.classList.add(this._options.errorClass);
	  this._errorInput.classList.add(this._options.errorClassActive);
	  this._errorInput.textContent = input.validationMessage;
	};
	_toggleErrorState(input) {   
	  if (input.validity.valid) {
		this._hiddenError(input);
	  } else {
		this._showError(input);
	  }
	};
	_disableButton = () => {  
	  this._submitButton.setAttribute('disabled', 'true');
	  this._submitButton.classList.add(this._options.buttonDisabledClass);
	};
	_enableButton = () => {   
	  this._submitButton.removeAttribute('disabled');
	  this._submitButton.classList.remove(this._options.buttonDisabledClass);
	};
	_togglePopupButton() {  
	  this._formIsValid = this._inputs.every(input => input.validity.valid);
	  if (this._formIsValid) {
		this._enableButton();
	  } else {
		this._disableButton();
	  }
	};
	_setEventListeners = () => {
	  this._inputs = Array.from(this._form.querySelectorAll(this._options.inputSelector));
	  this._submitButton = this._form.querySelector(this._options.buttonSelector); 
	  this._inputs.forEach(input => {     
		input.addEventListener('input', () => {
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
		this._hiddenError(input) 
	  });
	}
  }
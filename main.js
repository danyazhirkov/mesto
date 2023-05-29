(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}const n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var n,r;return n=t,(r=[{key:"_getResponseData",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"getUserData",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"updateUserData",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._getResponseData(t)}))}},{key:"sendingCard",value:function(t,e){var n=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then((function(t){return n._getResponseData(t)}))}},{key:"likeCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"unlikeCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"updateUserAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._getResponseData(t)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n,r,o,i,u,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardData=e,this._name=e.name,this._link=e.link,this.likes=e.likes,this._likesCounter=e.likes.length,this._cardId=e._id,this._owner=e.owner,this.userId=n,this._template=r,this._openPopupImage=o,this._handleLike=i,this._handleUnlike=u,this._handleDeleteYourCard=a}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){var t=document.querySelector(this._template).content.querySelector(".element").cloneNode(!0);return this._likeCardButton=t.querySelector(".element__button-heart"),this._buttonBin=t.querySelector(".element__button-trash"),this._elementImage=t.querySelector(".element__photo"),t}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImage.src=this._link,this._element.querySelector(".element__name").textContent=this._name,this._elementImage.alt=this._name,this._like=this._element.querySelector(".element__button-heart"),this._counter=this._element.querySelector(".element__like-counter"),this.countLikes(this._cardData),this.userId!==this._cardData.owner._id&&(this._buttonBin.style.display="none"),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._buttonBin.addEventListener("click",(function(){t._handleDeleteYourCard(t,t._cardId)})),this._likeCardButton.addEventListener("click",(function(){t._handleLikeCard()})),this._elementImage.addEventListener("click",(function(){t._openPopupImage(t._name,t._link)}))}},{key:"handleDeleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_ifCardLiked",value:function(){var t=this;return this._likes.some((function(e){return e._id===t.userId}))}},{key:"_handleLikeCard",value:function(){this._ifCardLiked()?this._handleUnlike(this._cardId):this._handleLike(this._cardId)}},{key:"countLikes",value:function(t){this._likes=t.likes,0===this._likes.length?this._counter.textContent="0":this._counter.textContent=this._likes.length,this._ifCardLiked()?this._like.classList.add("element__button-heart_theme-dark"):this._like.classList.remove("element__button-heart_theme-dark")}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const u=i;function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function l(t,e,n){return(e=s(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(e)?e:String(e)}var f=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"_disableButton",(function(){r._submitButton.setAttribute("disabled","true"),r._submitButton.classList.add(r._options.buttonDisabledClass)})),l(this,"_enableButton",(function(){r._submitButton.removeAttribute("disabled"),r._submitButton.classList.remove(r._options.buttonDisabledClass)})),l(this,"_setEventListeners",(function(){r._inputs=Array.from(r._form.querySelectorAll(r._options.inputSelector)),r._submitButton=r._form.querySelector(r._options.buttonSelector),r._inputs.forEach((function(t){t.addEventListener("input",(function(){r._toggleErrorState(t),r._togglePopupButton(t)})),r._togglePopupButton(t)}))})),l(this,"enableValidation",(function(){r._setEventListeners()})),this._options=e,this._form=n}var e,n;return e=t,(n=[{key:"_hiddenError",value:function(t){var e=t.id;this._errorInput=this._form.querySelector("#".concat(e,"-error")),t.classList.remove(this._options.errorClass),this._errorInput.classList.remove(this._options.errorClassActive),this._errorInput.textContent=""}},{key:"_showError",value:function(t){var e=t.id;this._errorInput=this._form.querySelector("#".concat(e,"-error")),t.classList.add(this._options.errorClass),this._errorInput.classList.add(this._options.errorClassActive),this._errorInput.textContent=t.validationMessage}},{key:"_toggleErrorState",value:function(t){t.validity.valid?this._hiddenError(t):this._showError(t)}},{key:"_togglePopupButton",value:function(){this._formIsValid=this._inputs.every((function(t){return t.validity.valid})),this._formIsValid?this._enableButton():this._disableButton()}},{key:"resetValidation",value:function(){var t=this;this._disableButton(),this._inputs.forEach((function(e){t._hiddenError(e)}))}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h(r.key),r)}}function h(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var d=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=h(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){var n=e.target.classList;(n.contains("popup")||n.contains("popup__close-button"))&&t.close()}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}const g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=e,n._form=n._popup.querySelector(".form"),n._inputList=n._form.querySelectorAll(".form__item"),n._submitButton=n._form.querySelector(".form__submit-button"),n._defaultText=n._submitButton.textContent,n}return e=u,(n=[{key:"close",value:function(){v(S(u.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;v(S(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"toggleSaveStatus",value:function(t,e){this._submitButton.textContent=t?e:this._defaultText}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},E.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._photo=e._popup.querySelector(".popup__photo"),e._title=e._popup.querySelector(".popup__subtitle"),e}return e=u,(n=[{key:"open",value:function(t,e){E(O(u.prototype),"open",this).call(this),this._photo.src=e,this._photo.alt=t,this._title.textContent=t}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},T.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}const R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(r);if(o){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleDelete=e,n._buttonSubmit=n._popup.querySelector(".form_confirm"),n}return e=u,(n=[{key:"open",value:function(t,e){T(q(u.prototype),"open",this).call(this),this._card=t,this._cardId=e}},{key:"setEventListeners",value:function(){var t=this;T(q(u.prototype),"setEventListeners",this).call(this),this._buttonSubmit.addEventListener("submit",(function(e){e.preventDefault(),t._handleDelete(t._card,t._cardId)}))}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}const x=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"addItemBeginning",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}var V=function(){function t(e){var n=e.nameSelector,r=e.aboutSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar,o=t._id;this._name.textContent=e,this._about.textContent=n,this._avatar.src=r,this.userId=o}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),N=document.querySelector(".profile__edit-button"),J=document.querySelector(".popup_profile"),F=document.querySelector(".popup_add"),G=(document.querySelector(".popup_image"),document.querySelector(".form__item_input_name")),H=document.querySelector(".form__item_input_description"),M=(document.querySelector(".popup_confirm"),document.querySelector(".profile__add-button")),Y=(document.querySelector(".popup__confirm-button"),document.querySelector(".element__button-trash"),document.querySelector(".popup_avatar").querySelector("#formEditAvatar")),z=document.querySelector(".main").querySelector(".profile").querySelector(".profile__avatar-button");function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}document.querySelector(".profile__name"),document.querySelector(".profile__job"),document.querySelector(".profile__avatar");var K,Q={inputSelector:".form__item",buttonSelector:".form__submit-button",buttonDisabledClass:"form__submit-button_disabled",errorClassActive:".form__item-error_active",errorClass:".form__item-error"};new f(Q,F).enableValidation(),new f(Q,J).enableValidation(),new f(Q,Y).enableValidation();var W=new n({url:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"f40a9f4b-0bcd-463c-8c92-98d5ed6dd089","Content-Type":"application/json"}});Promise.all([W.getUserData(),W.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];K=o._id,Z.setUserInfo(o),X.renderItems(i)})).catch((function(t){console.log(t,"Промисы catch (index)")}));var X=new x((function(t){var e=ot(t);X.addItem(e)}),".elements"),Z=new V({nameSelector:".profile__name",aboutSelector:".profile__description",avatarSelector:".profile__avatar"}),tt=new P(".popup_image"),et=new g(".popup_add",(function(t){et.toggleSaveStatus(!0,"Сохранение..."),W.sendingCard(t.title,t.link).then((function(t){X.addItemBeginning(ot(t)),setTimeout((function(){return et.close()}),1e3)})).catch((function(t){console.log(t,"Error: новая карточка не отправлена на сервер (index)"),et.toggleSaveStatus(!0,"Ошибка запроса!")})).finally((function(){setTimeout((function(){et.toggleSaveStatus(!1)}),1500)}))})),nt=new g(".popup_profile",(function(t){nt.toggleSaveStatus(!0,"Сохранение..."),W.updateUserData(t).then((function(t){Z.setUserInfo(t),setTimeout((function(){return nt.close()}),1e3)})).catch((function(t){console.log(t,"Error: новые данные о пользователе не отправлены на сервер (index)"),nt.toggleSaveStatus(!0,"Ошибка запроса!")})).finally((function(){setTimeout((function(){nt.toggleSaveStatus(!1)}),1500)}))})),rt=new g(".popup_avatar",(function(t){rt.toggleSaveStatus(!0,"Сохранение..."),W.updateUserAvatar(t).then((function(t){Z.setUserInfo(t),setTimeout((function(){return rt.close()}),1e3)})).catch((function(t){console.log(t,"Error: новый аватар пользователя не отправлен на сервер (index)"),rt.toggleSaveStatus(!0,"Ошибка запроса!")})).finally((function(){setTimeout((function(){rt.toggleSaveStatus(!1)}),1500)}))}));function ot(t){var e=new u(t,K,"#card-template",(function(){return tt.open(t.name,t.link)}),(function(t){W.likeCard(t).then((function(t){return e.countLikes(t)})).catch((function(t){console.log(t,"Error: лайк не отправлен на сервер (index)")}))}),(function(t){W.unlikeCard(t).then((function(t){return e.countLikes(t)})).catch((function(t){console.log(t,"Error: лайк не отменен на сервере (index)")}))}),(function(t,e){it.open(t,e)}));return e.generateCard()}var it=new R(".popup_confirm",(function(t,e){W.deleteCard(e).then((function(){t.handleDeleteCard(),it.close()})).catch((function(t){console.log(t,"Error: карточка не удалена с сервера (index)")}))}));z.addEventListener("click",(function(){rt.open()})),N.addEventListener("click",(function(){var t=Z.getUserInfo();G.value=t.name,H.value=t.about,nt.open()})),M.addEventListener("click",(function(){et.open()})),rt.setEventListeners(),et.setEventListeners(),tt.setEventListeners(),nt.setEventListeners(),it.setEventListeners()})();
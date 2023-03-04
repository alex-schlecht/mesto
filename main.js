(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},e=(document.querySelector("#profile-popup"),document.querySelector("#new-card-popup"),document.querySelector(".profile__edit")),r=document.querySelector(".profile__add-card"),n=(document.querySelector(".profile__name"),document.querySelector(".profile__description"),document.querySelector(".popup__input_name")),o=document.querySelector(".popup__input_description"),i=(document.querySelector(".cards__items"),document.querySelector(".popup__form_profile")),u=document.querySelector(".popup__form_card"),c=(document.querySelector(".popup_surround"),document.querySelector(".popup__form_avatar")),a=(document.querySelector("#profile-avatar-popup"),document.querySelector("#confirm-popup"),document.querySelector(".profile__edit-avatar"));function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var f=function(){function t(e){var r=e.apiMainUrl,n=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._apiMainUrl=r,this._headers=n}var e,r;return e=t,(r=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка! => ".concat(t.status))}},{key:"_request",value:function(t,e){var r=this;return fetch("".concat(this._apiMainUrl).concat(t),e).then((function(t){return r._checkResponse(t)}))}},{key:"getCards",value:function(){return this._request("/cards",{headers:this._headers})}},{key:"getUserInfo",value:function(){return this._request("/users/me",{headers:this._headers,method:"GET"})}},{key:"patchUserInfo",value:function(t,e){return this._request("/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t,about:e})})}},{key:"postCard",value:function(t,e){return this._request("/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:t,link:e})})}},{key:"deleteCard",value:function(t){return this._request("/cards/".concat(t),{headers:this._headers,method:"DELETE"})}},{key:"putLike",value:function(t){return this._request("/cards/".concat(t,"/likes"),{headers:this._headers,method:"PUT"})}},{key:"deleteLike",value:function(t){return this._request("/cards/".concat(t,"/likes"),{headers:this._headers,method:"DELETE"})}},{key:"patchAvatar",value:function(t){return this._request("/users/me/avatar",{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:t})})}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}const d=function(){function t(e,r,n){var o=e._id,i=e.name,u=e.link,c=e.likes,a=e.ownerId,l=e.userId,s=r.handleCardClick,f=r.handleCardClickLike,p=r.handleCardClickDelete;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._id=o,this._name=i,this._src=u,this._likes=c,this._ownerId=a,this._userId=l,this._handleCardClick=s,this._handleCardClickLike=f,this._handleCardClickDelete=p,this._templateSelector=n}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".cards__item").cloneNode(!0)}},{key:"_checkOwner",value:function(t,e){return t===e}},{key:"_checkOwnerLike",value:function(){var t=this;return this._likes.length>0&&this._likes.some((function(e){return t._checkOwner(e._id,t._userId)}))}},{key:"_setEventListeners",value:function(){var t=this;this._deleteButton&&this._deleteButton.addEventListener("click",(function(){return t._handleCardClickDelete(t)})),this._likeButton.addEventListener("click",(function(){return t._handleCardClickLike(t)})),this._imageOfCard.addEventListener("click",(function(){return t._handleCardClick()}))}},{key:"_clickDeleteCardPrivate",value:function(){this._deleteButton.remove(),this._deleteButton=null}},{key:"clickDeleteCard",value:function(){this._element.remove(),this._element=null}},{key:"clickLikeCard",value:function(){this._likeButton.classList.toggle("cards__like_active")}},{key:"isLikePressed",value:function(){return this._likeButton.classList.contains("cards__like_active")}},{key:"setLikeAmount",value:function(t){this._likeNumber.textContent=t}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".cards__name").textContent=this._name,this._imageOfCard=this._element.querySelector(".cards__image"),this._imageOfCard.src=this._src,this._imageOfCard.alt=this._name,this._likeContainer=this._element.querySelector(".cards__like-container"),this._likeButton=this._element.querySelector(".cards__like"),this._likeNumber=this._likeContainer.querySelector(".cards__like-amount"),this._deleteButton=this._element.querySelector(".cards__delete"),this.setLikeAmount(this._likes.length||""),!this._checkOwner(this._ownerId,this._userId)&&this._clickDeleteCardPrivate(),this._checkOwnerLike()&&this.clickLikeCard(),this._setEventListeners(),this._element}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}const _=function(){function t(e,r){var n=e.inputSelector,o=e.inputErrorClass,i=e.errorClass,u=e.inactiveButtonClass,c=e.submitButtonSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=n,this._submitButtonSelector=c,this._inactiveButtonClass=u,this._inputErrorClass=o,this._errorClass=i,this._form=r}var e,r;return e=t,(r=[{key:"_inputErrorShow",value:function(t){var e=this._form.querySelector("#".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),e.classList.add(this._errorClass),e.textContent=t.validationMessage}},{key:"_inputErrorHide",value:function(t){var e=this._form.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_isFormValid",value:function(t){t.validity.valid?this._inputErrorHide(t):this._inputErrorShow(t)}},{key:"_inputInvalid",value:function(){return this._formInputs.some((function(t){return!t.validity.valid}))}},{key:"_toggleSubmitButton",value:function(){this._inputInvalid()?(this._submit.disabled=!0,this._submit.classList.add(this._inactiveButtonClass)):(this._submit.disabled=!1,this._submit.classList.remove(this._inactiveButtonClass))}},{key:"_setEventListeners",value:function(t){var e=this;t.addEventListener("input",(function(){e._toggleSubmitButton(),e._isFormValid(t)}))}},{key:"enableValidation",value:function(){var t,e=this;this._formInputs=function(t){if(Array.isArray(t))return h(t)}(t=this._form.querySelectorAll(this._inputSelector))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._submit=this._form.querySelector(this._submitButtonSelector),this._formInputs.forEach((function(t){e._setEventListeners(t)})),this._toggleSubmitButton()}},{key:"resetForm",value:function(){var t=this;this._toggleSubmitButton(),this._formInputs.forEach((function(e){t._inputErrorHide(e)}))}}])&&v(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function k(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}const S=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_addKeydownEventListener",value:function(){document.addEventListener("keydown",this._handleEscClose)}},{key:"_removeKeydownEventListener",value:function(){document.removeEventListener("keydown",this._handleEscClose)}},{key:"open",value:function(){this._addKeydownEventListener(),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){this._removeKeydownEventListener(),this._popup.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){var t=this;this._closeButton.addEventListener("click",(function(){return t.close()})),this._popup.addEventListener("mousedown",(function(e){return e.target===e.currentTarget?t.close():null}))}}])&&k(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=E(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},C.apply(this,arguments)}function E(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function j(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}const L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(n);if(o){var r=P(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return j(this,t)});function u(t,e){var r,n=t.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._submitForm=n,r._form=r._popup.querySelector(".popup__form"),r._formInputs=r._form.querySelectorAll(".popup__input"),r._button=r._form.querySelector("#".concat(r._form.id,"-submit")),r.checkButtonState(),r}return e=u,(r=[{key:"_getInputValues",value:function(){var t={};return this._formInputs.forEach((function(e){return t[e.name]=e.value})),t}},{key:"setInputValues",value:function(t){this._formInputs.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;C(P(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._inputValues=t._getInputValues()}))}},{key:"checkButtonState",value:function(){var t=this;this._submitForm&&this._button.addEventListener("click",(function(){t._submitForm(t._formInputs)}))}},{key:"close",value:function(){C(P(u.prototype),"close",this).call(this),this._form.reset()}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=T(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},B.apply(this,arguments)}function T(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function A(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}const D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(n);if(o){var r=x(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return A(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupImageName=e._popup.querySelector(".popup__image-name"),e}return e=u,(r=[{key:"open",value:function(t,e){this._popupImageName.textContent=t,this._popupImage.src=e,this._popupImage.alt=t,B(x(u.prototype),"open",this).call(this)}}])&&q(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function F(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===U(o)?o:String(o)),n)}var o}const N=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderElements",value:function(t){var e=this;t.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&F(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function M(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==V(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===V(o)?o:String(o)),n)}var o}const H=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e),this._profileDescription=document.querySelector(r),this._avatar=document.querySelector(n)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileDescription.textContent,id:this._id}}},{key:"setUserInfo",value:function(t,e,r){this._profileName.textContent=t,this._profileDescription.textContent=e,this._id=r}},{key:"setUserAvatar",value:function(t){this._avatar.src=t}}])&&M(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function J(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==K(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==K(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===K(o)?o:String(o)),n)}var o}function $(){return $="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=z(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},$.apply(this,arguments)}function z(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=W(t)););return t}function G(t,e){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},G(t,e)}function Q(t,e){if(e&&("object"===K(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function W(t){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},W(t)}const X=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&G(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=W(n);if(o){var r=W(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return Q(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._submitButton=e._popup.querySelector(".popup__form"),e}return e=u,(r=[{key:"setEventListeners",value:function(){var t=this;$(W(u.prototype),"setEventListeners",this).call(this),this._submitButton.addEventListener(".submit",(function(e){e.preventDefault(),t._handleSubmitButton(),t.close()}))}},{key:"handleSubmitButton",value:function(t){this._handleSubmitButton=t}}])&&J(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Z=new f({apiMainUrl:"https://mesto.nomoreparties.co/v1/cohort-60",headers:{authorization:"fb254d0d-24c1-470a-bc0c-68d2d2e3fa16","Content-Type":"application/json"}}),tt=new H(".profile__name",".profile__description",".profile__avatar"),et=new _(t,c),rt=new _(t,i),nt=new _(t,u);new X("#confirm-popup").setEventListeners();var ot=new N({renderer:function(t){var e=ct(t._id,t.name,t.link,t.likes,t.owner._id,tt.getUserInfo().id);ot.addItem(e)}},".cards__items");Promise.all([Z.getUserInfo(),Z.getCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return Y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=o.name,u=o.about,c=o.avatar,a=o._id,l=n[1];tt.setUserInfo(i,u,a),tt.setUserAvatar(c),ot.renderElements(l.reverse())}));var it=new L({submitForm:function(t){var e=it._button.textContent;it._button.textContent="Сохранение...",Z.patchUserInfo(t["user-name"],t["user-description"]).then((function(){return tt.patchUserInfo(t["user-name"],t["user-description"])})).catch((function(t){return console.log(t)})).finally((function(){it.close(),it._button.textContent=e}))}},"#profile-popup");it.setEventListeners(),e.addEventListener("click",(function(){var t=tt.getUserInfo(),e=t.name,r=t.about;rt.resetForm(),it.setInputValues({"user-name":e,"user-description":r}),it.open()}));var ut=new D(".popup_surround");ut.setEventListeners();var ct=function(t,e,r,n,o,i){return new d({_id:t,name:e,link:r,likes:n,ownerId:o,userId:i},{handleCardClick:function(){return ut.open(e,r)},handleCardClickLike:function(t){t.isLikePressed()&&Z.deleteLike(t._id).then((function(e){t.setLikeAmount(e.likes.length||""),t.clickLikeCard()})).catch((function(t){return console.log(t)})),Z.putLike(t._id).then((function(e){t.setLikeAmount(e.likes.length||""),t.clickLikeCard()})).catch((function(t){return console.log(t)}))},handleClickCardDelete:function(t){X.handleSubmitButton((function(){Z.deleteCard(t._id).then((function(){return t.clickDeleteCard()})).catch((function(t){return console.log(t)}))})),X.open()}},"#initial-cards").generateCard()},at=new L({submitForm:function(t){var e=it._button.textContent;at._button.textContent="Сохранение...",Z.postCard(t["card-name"],t["card-link"]).then((function(t){var e=ct(t._id,t.name,t.link,t.likes,t.ownerId._id,t.userId._id);ot.addItem(e)})).catch((function(t){return console.log(t)})).finally((function(){at.close(),at._button.textContent=e}))}},"#new-card-popup");at.setEventListeners(),r.addEventListener("click",(function(){nt.resetForm(),at.open()}));var lt=new L({submitForm:function(t){var e=lt._button.textContent;lt._button.textContent="Сохранение...",Z.patchAvatar(t["avatar-link"]).then((function(){return tt.setUserAvatar(t["avatar-link"])})).catch((function(t){return console.log(t)})).finally((function(){lt.close(),lt._button.textContent=e}))}},"#profile-avatar-popup");lt.setEventListeners(),r.addEventListener("click",(function(){nt.resetForm(),at.open()})),a.addEventListener("click",(function(){et.resetForm(),lt.open()})),at.setEventListeners(),e.addEventListener("click",(function(){var t=tt.getUserInfo(),e=t.name,r=t.about;n.value=e,o.value=r,rt.resetForm(),it.open()})),ut.setEventListeners(),et.enableValidation(),rt.enableValidation(),nt.enableValidation()})();
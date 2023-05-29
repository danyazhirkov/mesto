import "./index.css";

import Api from "../scripts/Api.js";

import Card from "../scripts/Card.js";
import FormValidator  from "../scripts/FormValidator.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import PopupWithDeleteCard from "../scripts/PopupWithDeleteCard";
import Section from "../scripts/Section.js";
import UserInfo from "../scripts/UserInfo.js";
import Popup from "../scripts/Popup.js";

import {
    buttonEditProfile,
    popupProfile,
    popupAdd,
    nameInput,
    descriptionInput,
    addButton,
	avatarEditButton,
	baseUrl,
	myToken,
	formEditAvatar
} from "../scripts/constants";

const options = {
    inputSelector: ".form__item",
    buttonSelector: ".form__submit-button",
    buttonDisabledClass: "form__submit-button_disabled",
    errorClassActive: ".form__item-error_active",
    errorClass: ".form__item-error",
};



const formValidatorPopupAdd = new FormValidator(options, popupAdd);
formValidatorPopupAdd.enableValidation();
const formValidatorPopupProfile = new FormValidator(options, popupProfile);
formValidatorPopupProfile.enableValidation();
const formValidatorPopupAvatar = new FormValidator(options, formEditAvatar);
formValidatorPopupAvatar.enableValidation();

let userId;

const api = new Api({
	url: baseUrl,
	headers: {
		authorization: myToken,
		'Content-Type': 'application/json'
	}
});

Promise.all([api.getUserData(), api.getInitialCards()])
	.then(([userData, cardsData]) => {
		userId = userData._id;
		userInfo.setUserInfo(userData);
		cardList.renderItems(cardsData);
	})
	.catch((err) => {
		console.log(err, 'Промисы catch (index)');
	});


const cardList = new Section(
	(data) => {
		const card = createCard(data);
		cardList.addItem(card);
	},
	'.elements');

const userInfo = new UserInfo({
    nameSelector: ".profile__name",
    aboutSelector: ".profile__description",
    avatarSelector: ".profile__avatar"
});

const popupWithImage = new PopupWithImage(".popup_image");

const formPopupAddCard = new PopupWithForm(
	'.popup_add',
	(data) => {
		formPopupAddCard.toggleSaveStatus(true, "Сохранение...");
		api.sendingCard(data['title'], data['link'])
			.then((result) => {
				cardList.addItemBeginning(createCard(result));
				setTimeout(() => formPopupAddCard.close(), 1000);
			})
			.catch((err) => {
				console.log(err, 'Error: новая карточка не отправлена на сервер (index)');
				formPopupAddCard.toggleSaveStatus(true, "Ошибка запроса!");
			})
			.finally(() => {
				setTimeout(() => {
					formPopupAddCard.toggleSaveStatus(false);
				}, 1500);
			})
	}
);


const formPopupEditProfile = new PopupWithForm(
	'.popup_profile',
	(userData) => {
		formPopupEditProfile.toggleSaveStatus(true, "Сохранение...");
		api.updateUserData(userData)
			.then((data) => {
				userInfo.setUserInfo(data);
				setTimeout(() => formPopupEditProfile.close(), 1000);
			})
			.catch((err) => {
				console.log(err, 'Error: новые данные о пользователе не отправлены на сервер (index)');
				formPopupEditProfile.toggleSaveStatus(true, "Ошибка запроса!");
			})
			.finally(() => {
				setTimeout(() => {
					formPopupEditProfile.toggleSaveStatus(false);
				}, 1500);
			})
	}
);

const formPopupEditAvatar = new PopupWithForm(
	'.popup_avatar',
	(data) => {
		formPopupEditAvatar.toggleSaveStatus(true, "Сохранение...");
		api.updateUserAvatar(data)
			.then((res) => {
				userInfo.setUserInfo(res)
				setTimeout(() => formPopupEditAvatar.close(), 1000);
			})
			.catch((err) => {
				console.log(err, 'Error: новый аватар пользователя не отправлен на сервер (index)');
				formPopupEditAvatar.toggleSaveStatus(true, "Ошибка запроса!");
			})
			.finally(() => {
				setTimeout(() => {
					formPopupEditAvatar.toggleSaveStatus(false);
				}, 1500);
			})
	}
);




function createCard(data) {
	const card = new Card(
		data,
		userId,
		'#card-template',
		() => popupWithImage.open(data.name, data.link),
		(cardId) => {
			api.likeCard(cardId)
				.then((res) => card.countLikes(res))
				.catch((err) => {
					console.log(err, 'Error: лайк не отправлен на сервер (index)');
				})
		},
		(cardId) => {
			api.unlikeCard(cardId)
				.then((res) => card.countLikes(res))
				.catch((err) => {
					console.log(err, 'Error: лайк не отменен на сервере (index)');
				})
		},
		(card, cardId) => { formPopupDelete.open(card, cardId) }
	);

	return card.generateCard();
};


const formPopupDelete = new PopupWithDeleteCard(
	'.popup_confirm',
	(card, cardId) => {
		api.deleteCard(cardId)
			.then(() => {
				card.handleDeleteCard();
				formPopupDelete.close();
			})
			.catch((err) => {
				console.log(err, 'Error: карточка не удалена с сервера (index)');
			})
	}
);

avatarEditButton.addEventListener('click', () => {
	formPopupEditAvatar.open();
});



buttonEditProfile.addEventListener("click", () => {
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    descriptionInput.value = userData.about;
    formPopupEditProfile.open();

});

addButton.addEventListener("click", () => {
    formPopupAddCard.open();
});

formPopupEditAvatar.setEventListeners();
formPopupAddCard.setEventListeners();
popupWithImage.setEventListeners();
formPopupEditProfile.setEventListeners();
formPopupDelete.setEventListeners();

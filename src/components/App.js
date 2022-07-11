import { useState} from 'react';

import Footer from './Footer.js';
import Main from './Main.js';
import Header from './Header.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null)

  function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true)
	}

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true)
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true)
	}

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  return (
      <div className="page">
        <Header/>
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer/>
        <PopupWithForm name="edit" title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <div className="form__input-container">
            <input 
              className="form__input" 
              name="name" 
              type="text" 
              id="form__input_name" 
              placeholder="Имя" 
              required 
              minLength="2" 
              maxLength="40"
            />
            <span id="form__input_name-error"></span>
          </div>
          <div className="form__input-container">
            <input 
              className="form__input" 
              name="about" 
              type="text" 
              id="form__input_profession" 
              placeholder="Профессия" 
              required 
              minLength="2" 
              maxLength="200"/>
            <span id="form__input_profession-error"></span>
          </div>
        </PopupWithForm>
        <PopupWithForm name="add" title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <div className="form__input-container">
            <input 
              className="form__input" 
              name ="cardname" 
              type="text" 
              id="form__input_cardname" 
              placeholder="Название" 
              required 
              minLength="2" 
              maxLength="30"
            />
            <span id="form__input_cardname-error"></span>
          </div>
          <div className="form__input-container">
            <input 
              className="form__input" 
              name ="link" 
              type="url" 
              id="form__input_link" 
              placeholder="Ссылка на картинку" 
              required
            />
            <span id="form__input_link-error"></span>
          </div>
        </PopupWithForm>
        <PopupWithForm name="avatar" title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <div className="form__input-container">
            <input 
              className="form__input" 
              name ="link" 
              type="url" 
              id="form__input_link-avatar" 
              placeholder="Ссылка на картинку" 
              required
            />
            <span id="form__input_link-avatar-error"></span>
          </div>
        </PopupWithForm>
        <PopupWithForm name="delete-card" title="Вы уверены?"/>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          name="full-size"
        />
      </div>
    );
}

export default App;

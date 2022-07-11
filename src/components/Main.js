import { useState, useEffect } from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';
import './index.css';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
	const [userName, setUserName] = useState('');
	const [userDescription, setUserDescription] = useState('');
	const [userAvatar, setUserAvatar] = useState('');
	const [cards, setCards] = useState([]);

	function getApiStartPage() {
		Promise.all([api.getInfoUsers(), api.getCards()])
			.then(([userInfo, card]) => {
				setUserName(userInfo.name);
				setUserDescription(userInfo.about);
				setUserAvatar(userInfo.avatar)
				setCards(card)
			})
			.catch((err) => console.log(err))
	}

	useEffect(() => {
		getApiStartPage()
	}, []);


	return (
		<>
<section className="profile">
		<a 
			className="profile__avatar" 
			href="##" alt="аватар" 
			onClick={onEditAvatar}
			style={{ backgroundImage: `url(${userAvatar})` }}
			>
			
			
		</a>
		<div className="profile__info">
			<h1 className="profile__title" name="name">{userName}</h1>
			<button 
				className="profile__edit-button" 
				type="button" 
				onClick={onEditProfile}
				>

				</button>
			<p 
				className="profile__subtitle" 
				name="about">
					{userDescription}
			</p>
		</div>
		<button className="profile__add-button" type="button" onClick={onAddPlace}></button>
	</section>

	<div className="elements">
		{cards.map((item) => {
			return (
				<Card
					key={item._id}
					card={item}
					onCardClick={onCardClick}
				/>
			)
		})}
	</div>
</>

	)



}

export default Main;



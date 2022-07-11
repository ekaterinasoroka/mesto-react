function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element" onClick={handleClick}>
      <img 
        className="element__img" 
        alt={props.card.name}
        src={props.card.link}
      />
      <button className="element__delete" type="button"></button>
      <div className="element__rectangle">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__group-like">
          <button className="element__like" type="button"></button>
          <p className="element__like-number">{props.card.likes.length}</p>
        </div>
      </div>
    </div> 
  )
}

export default Card;
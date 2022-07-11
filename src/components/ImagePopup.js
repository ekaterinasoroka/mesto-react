import './index.css';

function ImagePopup(props) {
  return(
    <div
     className={`popup popup_${props.name} ${props.card ? 'popup_is-active' : 'popup'}`}>
    <div className="popup__container popup__container_view">
      <button className="popup__close popup__close_full-size" type="button" onClick={props.onClose}></button>
      <img className="popup__big-img" src={`${props.card ? props.card.link : "null"}`} alt={`${props.card ? props.card.name : "null"}`} />
      <p className="popup__subtitle"></p>
    </div>
  </div>
  )
}
export default ImagePopup;
import logo from '../images/logo.svg';

function Header({userData: {email}}) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип"/>
      <p className="header__info-user">{email}</p>
    </header>
  );
}

export default Header;

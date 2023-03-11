/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../assets/logo-svg.svg";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className='header'>
      <a href='/' className='header__logo-container'>
        <img className='header__logo' src={logo} alt='Logo' />
        <h1 className='header__title'>Altura</h1>
      </a>
      {/* <div className='header__nav'>
        <ul className='header__nav-list'>
          <li className='header__nav-item'>
            <a href='/market' className='header__nav-link'>
              Market
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navigation;

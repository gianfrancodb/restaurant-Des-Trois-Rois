import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { FormattedMessage } from 'react-intl';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = ({ onLocaleChange }) => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links" aria-label="main navigation">
        <li className="p__opensans"><a href="#home" aria-label="Home"><FormattedMessage id="navbar.home" defaultMessage="Home" /></a></li>
        <li className="p__opensans"><a href="#about" aria-label="About"><FormattedMessage id="navbar.about" defaultMessage="About" /></a></li>
        <li className="p__opensans"><a href="#menu" aria-label="Menu"><FormattedMessage id="navbar.menu" defaultMessage="Menu" /></a></li>
        <li className="p__opensans"><a href="#awards" aria-label="Awards"><FormattedMessage id="navbar.awards" defaultMessage="Our Services" /></a></li>
        <li className="p__opensans"><a href="#contact" aria-label="Contact"><FormattedMessage id="navbar.contact" defaultMessage="Contact / Reservations" /></a></li>
      </ul>
      <div className="app__navbar-login" aria-label="login navigation" style={{ display: 'block' }}>
        <ul>
          <li className="p__opensans"><button type="button" onClick={() => onLocaleChange('de')}>DE</button></li>
          <li className="p__opensans"><button type="button" onClick={() => onLocaleChange('fr')}>FR</button></li>
          <li className="p__opensans"><button type="button" onClick={() => onLocaleChange('en')}>EN</button></li>
        </ul>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} aria-label="open menu" />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} aria-label="close menu" />
            <ul className="app__navbar-smallscreen_links" aria-label="mobile navigation">
              <li><a href="#home" onClick={() => setToggleMenu(false)} aria-label="Home"><FormattedMessage id="navbar.home" defaultMessage="Home" /></a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)} aria-label="About"><FormattedMessage id="navbar.about" defaultMessage="About" /></a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)} aria-label="Menu"><FormattedMessage id="navbar.menu" defaultMessage="Menu" /></a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)} aria-label="Awards"><FormattedMessage id="navbar.awards" defaultMessage="Our Services" /></a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)} aria-label="Contact"><FormattedMessage id="navbar.contact" defaultMessage="Contact / Reservations" /></a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

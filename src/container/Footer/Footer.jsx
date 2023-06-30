import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext"><FormattedMessage id="footer.contactUs" defaultMessage="Contact Us" /></h1>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <p className="p__opensans"><FormattedMessage id="footer.address" defaultMessage="Rue de Berne 44, Geneva 1201 Switzerland" /></p>
        <p className="p__opensans"><FormattedMessage id="footer.phone1" defaultMessage="+41 22 738 24 69" /></p>

      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans" style={{ display: 'none' }}><FormattedMessage id="footer.quote" defaultMessage="The best way to find yourself is to lose yourself in the service of others." /></p>
        <div className="app__footer-links_icons" style={{ display: 'none' }}>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext"><FormattedMessage id="footer.workingHours" defaultMessage="Working Hours" /></h1>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <p className="p__opensans"><FormattedMessage id="footer.weekdays" defaultMessage="Monday:" /></p>
        <p className="p__opensans" style={{ color: 'grey' }}><FormattedMessage id="footer.weekdayHours" defaultMessage="closed" /></p>
        <p className="p__opensans"><FormattedMessage id="footer.weekend" defaultMessage="Tue - Sat:" /></p>
        <p className="p__opensans" style={{ color: 'grey' }}><FormattedMessage id="footer.weekendHours" defaultMessage="08:30 am - 12:00 am" /></p>
        <p className="p__opensans"><FormattedMessage id="footer.weekend2" defaultMessage="Sun:" /></p>
        <p className="p__opensans" style={{ color: 'grey' }}><FormattedMessage id="footer.weekendHours2" defaultMessage="09:00 am - 12:00 am" /></p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans"><FormattedMessage id="footer.copyright" defaultMessage="2023 Cafe Restaurant Des Trois Rois. All Rights reserved." /></p>
    </div>

  </div>
);

export default Footer;

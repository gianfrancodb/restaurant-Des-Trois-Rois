import React from 'react';
import { FormattedMessage } from 'react-intl';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title={<FormattedMessage id="contact.title" defaultMessage="Contact" />} />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}><FormattedMessage id="contact.findus" defaultMessage="Find Us" /></h1>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="finus_img" />
      </div>
      <div className="app__wrapper-content">
        <p className="p__opensans" style={{ marginLeft: '40%' }}><FormattedMessage id="contact.address" defaultMessage="Rue de Berne 44, Geneva 1201 Switzerland" /></p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}><FormattedMessage id="contact.openinghours" defaultMessage="Opening Hours" /></p>
        <p className="p__opensans"><FormattedMessage id="contact.weekendhours" defaultMessage="Monday: closed" /></p>
        <p className="p__opensans"><FormattedMessage id="contact.weekdayhours" defaultMessage="Tue - Sat: 08:30 am - 12:00 am" /></p>
        <p className="p__opensans"><FormattedMessage id="contact.weekendhours2" defaultMessage="Sun: 09:00 am - 12:00 am" /></p>
        <br />
        <p className="p__opensans" style={{ fontStyle: 'italic' }}><FormattedMessage id="contact.weekendhours3" defaultMessage="Our Kitchen is closed between 14:30 and 18:45" /></p>
      </div>

      <div className="app__wrapper-content">

        <br />
        <p className="p__opensans"><FormattedMessage id="contact.weekdayhours2" defaultMessage="We kindly request our esteemed guests to make their reservations exclusively by telephone. This ensures we can provide you with personalized service and promptly address any queries or special requests you may have. " /></p>

      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem', display: 'none' }} aria-label="Visit Us Button"><FormattedMessage id="contact.visitus" defaultMessage="Visit Us" /></button>
    </div>

    <div className="app__wrapper_img">
      <iframe
        title="Restaurant Location Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11043.737667907604!2d6.147197418831684!3d46.21175962947393!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c6526b4e12313%3A0xb2add7adca69911b!2sDes%20Trois%20Rois!5e0!3m2!1sen!2sch!4v1687975230831!5m2!1sen!2sch"
        width="400"
        height="300"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
);

export default FindUs;

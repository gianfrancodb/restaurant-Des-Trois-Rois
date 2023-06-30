import React from 'react';
import { FormattedMessage } from 'react-intl';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter" style={{ minWidth: '40%' }}>
    <div className="app__newsletter-heading">
      <SubHeading title={<FormattedMessage id="reservations.title" defaultMessage="Reservations" />} />
      <h1 className="headtext__cormorant"><FormattedMessage id="reservations.callus" defaultMessage="Call us" /></h1>
      <p className="p__opensans" style={{ fontSize: '4vw' }}><FormattedMessage id="reservations.phone" defaultMessage="+41 22 738 24 69" /></p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" style={{ display: 'none' }} placeholder={<FormattedMessage id="newsletter.email" aria-label="email" defaultMessage="Enter your email address" />} />
      <button type="button" className="custom__button" style={{ display: 'none' }}><FormattedMessage id="newsletter.subscribe" aria-label="subscribe" defaultMessage="Subscribe" /></button>
    </div>
  </div>
);

export default Newsletter;

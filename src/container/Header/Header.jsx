import React from 'react';
import { FormattedMessage } from 'react-intl';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  const handleDownload = () => {
    const url = '/Menu%20De-Trois-Rois%20.pdf';
    window.open(url, '_blank');
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title={<FormattedMessage id="header.subheading" defaultMessage="Cafe Restaurant des Trois Rois" />} />
        <h1 className="app__header-h1"><FormattedMessage id="header.heading" defaultMessage="A Celebration of Gastronomic Diversity" /></h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          <FormattedMessage id="header.description" defaultMessage="Explore the culinary treasures of Europe with our carefully curated menu, designed to celebrate its vibrant heritage." />
        </p>
        <button type="button" className="custom__button" aria-label="Explore Menu" onClick={handleDownload}>
          <FormattedMessage id="header.exploreMenu" defaultMessage="View Full Menu" />
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;

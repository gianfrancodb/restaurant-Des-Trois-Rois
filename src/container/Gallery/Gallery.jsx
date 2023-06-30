import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title={<FormattedMessage id="gallery.subheading" defaultMessage="Culinary favorites, as celebrated by our customers" />} />
        <h1 className="headtext__cormorant"><FormattedMessage id="gallery.heading" defaultMessage=" " /></h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
          <FormattedMessage id="gallery.description" defaultMessage=" " />
        </p>
        <button type="button" className="custom__button" aria-label="View More" style={{ display: 'none' }}><FormattedMessage id="gallery.viewMore" defaultMessage="View More" /></button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <button type="button" className="gallery__arrow-icon" onClick={() => scroll('left')} aria-label="Scroll Left"><BsArrowLeftShort /></button>
          <button type="button" className="gallery__arrow-icon" onClick={() => scroll('right')} aria-label="Scroll Right"><BsArrowRightShort /></button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

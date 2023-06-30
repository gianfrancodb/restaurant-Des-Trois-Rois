import React from 'react';
import { FormattedMessage } from 'react-intl';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center" style={{ alignItems: 'end' }}>
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant"><FormattedMessage id="aboutus.title" defaultMessage=" " /></h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"><FormattedMessage id="aboutus.description" defaultMessage="A gem nestled in the heart of Geneva. Des Trois Rois,  our roots are steeped in the rich culinary traditions of Switzerland, France and the Iberian Peninsula, but we proudly offer a diverse menu that traverses the European continent. Enjoy a meal at our restaurant counter or al fresco on the terrace, and let our attentive staff handle the rest." /></p>
        <button type="button" className="custom__button" aria-label="Know More" style={{ display: 'none' }}><FormattedMessage id="aboutus.button" defaultMessage="Know More" /></button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" style={{ height: '50px' }} />
      </div>

      <div className="app__aboutus-content_history" style={{ display: 'none' }}>
        <h1 className="headtext__cormorant"><FormattedMessage id="aboutus.history.title" defaultMessage="Our History" /></h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"><FormattedMessage id="aboutus.history.description" defaultMessage="Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet." /></p>
        <button type="button" className="custom__button" aria-label="Know More"><FormattedMessage id="aboutus.history.button" defaultMessage="Know More" /></button>
      </div>
    </div>

  </div>
);

export default AboutUs;

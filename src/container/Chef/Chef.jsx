import React from 'react';
import { FormattedMessage } from 'react-intl';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">

    <div className="app__wrapper_info">
      <SubHeading title={<FormattedMessage id="chef.title" defaultMessage="Plat du jour" />} />
      <h1 className="headtext__cormorant"><FormattedMessage id="chef.believe" defaultMessage="At noon and in the evening" /></h1>
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef_image" />
      </div>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans"><FormattedMessage id="chef.quote" defaultMessage="Keep an eye out for our changing, seasonal, and weekly specials for a pleasant surprise. Not just a restaurant, we are also a meeting place where you can unwind with a freshly tapped beer or a well-mixed cocktail. Whether you're dropping by for a quick lunch or a leisurely dinner, your satisfaction is our commitment. " /></p>
        </div>
        <p className="p__opensans"><FormattedMessage id="chef.description" defaultMessage=" " /></p>
      </div>

      <div className="app__chef-sign">
        <p><FormattedMessage id="chef.name" defaultMessage="Madame & Monsieur Monteiro" /></p>
        <p className="p__opensans"><FormattedMessage id="chef.role" defaultMessage="Managers" /></p>
        <img src={images.sign} alt="sign_image" style={{ display: 'none' }} />
      </div>
    </div>
  </div>
);

export default Chef;

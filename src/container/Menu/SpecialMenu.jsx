import React from 'react';
import { FormattedMessage } from 'react-intl';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const handleDownload = () => {
    const url = '/Menu%20De-Trois-Rois%20.pdf';
    window.open(url, '_blank');
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title={<FormattedMessage id="menu.subheading" defaultMessage=" " />} />
        <h1 className="headtext__cormorant">
          <FormattedMessage id="menu.heading" defaultMessage="Our Menu" />
        </h1>
      </div>

      <div className="app__specialMenu-menu">
        {/* SoupesEtEntreesStarters */}
        <div className="app__specialMenu-menu_food flex__center" style={{ marginRight: '5%' }}>
          <p className="app__specialMenu-menu_heading">
            <FormattedMessage id="menu.starters.heading" defaultMessage="Soupes et Entrées (Starters)" />
          </p>
          <div className="app__specialMenu_menu_items">
            {data.SoupesEtEntreesStarters.map((item, index) => (
              <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
            ))}
          </div>
        </div>

        {/* OmelettesOmelets */}
        <div className="app__specialMenu-menu_food flex__center" style={{ marginRight: '5%' }}>
          <p className="app__specialMenu-menu_heading">
            <FormattedMessage id="menu.omelettes.heading" defaultMessage="Omelettes" />
          </p>
          <div className="app__specialMenu_menu_items">
            {data.OmelettesOmelets.map((item, index) => (
              <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
            ))}
          </div>
        </div>

        {/* SpecialitesMin2Pers */}
        <div className="app__specialMenu-menu_food flex__center" style={{ marginRight: '5%' }}>
          <p className="app__specialMenu-menu_heading">
            <FormattedMessage
              id="menu.specialties.heading"
              defaultMessage="Spécialités (Minimum 2 Persons)"
            />
          </p>
          <div className="app__specialMenu_menu_items">
            {data.SpecialitesMin2Pers.map((item, index) => (
              <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
            ))}
          </div>
        </div>

        {/* NosViandesOurMeat */}
        <div className="app__specialMenu-menu_food flex__center" style={{ marginRight: '5%' }}>
          <p className="app__specialMenu-menu_heading">
            <FormattedMessage id="menu.meat.heading" defaultMessage="Nos Viandes (Our Meat)" />
          </p>
          <div className="app__specialMenu_menu_items">
            {data.NosViandesOurMeat.map((item, index) => (
              <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
            ))}
          </div>
        </div>

        {/* NosPoissonsOurFish */}
        <div className="app__specialMenu-menu_food flex__center" style={{ marginRight: '5%' }}>
          <p className="app__specialMenu-menu_heading">
            <FormattedMessage id="menu.fish.heading" defaultMessage="Nos Poissons (Our Fish)" />
          </p>
          <div className="app__specialMenu_menu_items">
            {data.NosPoissonsOurFish.map((item, index) => (
              <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
            ))}
          </div>
        </div>

        {/* PatesPasta */}
        <div className="app__specialMenu-menu_food flex__center" style={{ marginRight: '5%' }}>
          <p className="app__specialMenu-menu_heading">
            <FormattedMessage id="menu.pasta.heading" defaultMessage="Pâtes (Pasta)" />
          </p>
          <div className="app__specialMenu_menu_items">
            {data.PatesPasta.map((item, index) => (
              <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
            ))}
          </div>
        </div>

        {/* SaladeGourmandesGourmetsSalads */}
        <div className="app__specialMenu-menu_food flex__center" style={{ marginRight: '5%' }}>
          <p className="app__specialMenu-menu_heading">
            <FormattedMessage
              id="menu.salads.heading"
              defaultMessage="Salades Gourmandes (Gourmet Salads)"
            />
          </p>
          <div className="app__specialMenu_menu_items">
            {data.SaladeGourmandesGourmetsSalads.map((item, index) => (
              <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu flex__center section__padding" id="menudrinks">
          <div className="app__specialMenu-title">
            <SubHeading
              title={<FormattedMessage id="menu.drinks.subheading" defaultMessage=" " />}
            />
            <h1 className="headtext__cormorant">
              <FormattedMessage id="menu.drinks.heading" defaultMessage="Our Wines and Drinks" />
            </h1>
          </div>
        </div>

        {/* Wine Categories */}
        <div className="app__specialMenu-menu_wine flex__center" style={{ marginRight: '5%' }}>
          <p className="app__specialMenu-menu_heading">
            <FormattedMessage id="menu.wine.white" defaultMessage="White Wine Bottles" />
          </p>
          <div className="app__specialMenu_menu_items">
            {data.whiteWines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_wine flex__center" style={{ marginRight: '5%' }}>
          <p className="app__specialMenu-menu_heading">
            <FormattedMessage id="menu.wine.red" defaultMessage="Red Wine Bottles" />
          </p>
          <div className="app__specialMenu_menu_items">
            {data.redWines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_wine flex__center" style={{ marginRight: '5%' }}>
          <p className="app__specialMenu-menu_heading">
            <FormattedMessage id="menu.wine.rose" defaultMessage="Rosé Wine Bottles" />
          </p>
          <div className="app__specialMenu_menu_items">
            {data.roséWines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        {/* Cocktails */}
        <div className="app__specialMenu-menu_cocktails flex__center" style={{ marginRight: '5%' }}>
          <p className="app__specialMenu-menu_heading">
            <FormattedMessage id="menu.cocktails.heading" defaultMessage="Cocktails" />
          </p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>

        {/* Beers */}
        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">
            <FormattedMessage id="menu.beers.heading" defaultMessage="Beers" />
          </p>
          <div className="app__specialMenu_menu_items">
            {data.Beers.map((beer, index) => (
              <MenuItem key={beer.title + index} title={beer.title} price={beer.price} tags={beer.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img" style={{ display: 'none' }}>
          <img src={images.menu} alt="menu__img" />
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button" aria-label="Explore Menu" onClick={handleDownload}>
          <FormattedMessage id="header.exploreMenu" defaultMessage="View Full Menu" />
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;

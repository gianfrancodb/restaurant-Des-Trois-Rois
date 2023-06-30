import images from './images';

const SoupesEtEntreesStarters = [
  {
    title: 'Soupe De Poissons',
    tags: 'Fish Soup',
    price: '14 Fr.',
  },
  {
    title: 'Salade Verte',
    tags: 'Green Salad',
    price: '6.5 Fr.',
  },
  {
    title: 'Potage De Légumes',
    tags: 'Vegetable Soup',
    price: '8 Fr.',
  },
  {
    title: 'Salade Méalée',
    tags: 'Mixed Salad',
    price: '9 Fr.',
  },
  {
    title: 'Poulpe À La Galicienne',
    tags: 'Galician-Style Octopus',
    price: '26 Fr.',
  },
  {
    title: 'Jambon Cru',
    tags: 'Raw Ham',
    price: '26 Fr.',
  },
  {
    title: 'Crevettes À L\'Ail',
    tags: 'Garlic Shrimps',
    price: '23 Fr.',
  },
  {
    title: 'Assiette De Charcuterie',
    tags: 'Charcuterie Plate (Sausages, Ham, Beef, Cheese)',
    price: '25 Fr.',
  },
];

const OmelettesOmelets = [
  {
    title: 'Omelette Nature (Frites Maison)',
    tags: 'Plain Omelette (With Homemade Fries)',
    price: '14 Fr.',
  },
  {
    title: 'Omelette Au Jambon (Frites Maison)',
    tags: 'Ham Omelette (With Homemade Fries)',
    price: '16 Fr.',
  },
  {
    title: 'Omelette Jambon Et Fromage',
    tags: 'Ham And Cheese Omelette',
    price: '18 Fr.',
  },
];

const SpecialitesMin2Pers = [
  {
    title: 'Steak Tartare De Boeuf',
    tags: 'Beef Tartare (Raw Minced Beef)',
    price: '34 Fr.',
  },
  {
    title: 'Fondue Fromage Moitié-Moitié',
    tags: 'Half-Half Cheese Fondue (Vachein, Gruyère)',
    price: '25 Fr.',
  },
  {
    title: 'Émincé De Veau Zurichois*',
    tags: 'Chipped Veal In A Creamy Mushroom Sauce*',
    price: '39 Fr.',
  },
  {
    title: 'Fondue Aux Bolets*',
    tags: 'Cheese Fondue With Boletus Mushrooms*',
    price: '27 Fr.',
  },
  {
    title: 'Fondue Chinoise*',
    tags: 'Beef Fondue Cooked In Broth*',
    price: '39 Fr.',
  },
  {
    title: 'Croûte Au Fromage Avec Oeuf',
    tags: 'Gratined Cheese On Bread With Fried Egg',
    price: '21 Fr.',
  },
  {
    title: 'Roesti Maison Au Lard',
    tags: 'Homemade Roesti With Streaky Bacon',
    price: '21 Fr.',
  },
  {
    title: 'Morue À Brás*',
    tags: 'Salt Cod Portuguese Style',
    price: '32 Fr.',
  },
  {
    title: 'Paëlla Maison* (24H D\'Avance)',
    tags: 'Homemade Seafood Rice Spanish Style* (24 Hours In Advance)',
    price: '64 Fr.',
  },
  {
    title: 'Morue Au Four Avec Pommes De Terre',
    tags: 'Salt Cod Baked In Oven With Potatoes',
    price: '32 Fr.',
  },
];

const NosViandesOurMeat = [
  {
    title: 'Entrecôte De Bœuf Grillée (220Gr.)',
    tags: 'Grilled Sirloin Beef (220Gr.)',
    price: '32 Fr.',
  },
  {
    title: 'Entrecôte De Bœuf Au Poivre Vert',
    tags: 'Sirloin Beef With Green Pepper Sauce',
    price: '37 Fr.',
  },
  {
    title: 'Steak De Boeuf Grillé',
    tags: 'Grilled Beef Steak',
    price: '25 Fr.',
  },
  {
    title: 'Entrecôte De Bœuf Champignons',
    tags: 'Sirloin Beef With Mushrooms Sauce',
    price: '37 Fr.',
  },
  {
    title: 'Steak De Boeuf Beurre <<3 Rois>>',
    tags: 'Grilled Beef Steak With Herbal Butter Sauce',
    price: '29 Fr.',
  },
  {
    title: 'Filet De Poulet Aux Champignons',
    tags: 'Chicken Fillet With Mushrooms Sauce',
    price: '26 Fr.',
  },
  {
    title: 'Filet Mignon De Porc Au Poivre Vert',
    tags: 'Pork Tenderloin With Green Pepper Sauce',
    price: '29 Fr.',
  },
  {
    title: 'Escalope De Veau Viennoise*',
    tags: 'Breaded Veal Cutlet (Wiener Schitzel)',
    price: '39 Fr.',
  },
];

const NosPoissonsOurFish = [
  {
    title: 'Filet De Perches',
    tags: 'Perch Fillet',
    price: '33 Fr.',
  },
  {
    title: 'Poulpe À La Galicienne',
    tags: 'Galician Style Octopus',
    price: '32 Fr.',
  },
  {
    title: 'Dorade Grillée',
    tags: 'Grilled Sea Bream',
    price: '27 Fr.',
  },
  {
    title: 'Cuisses De Grenouilles*',
    tags: 'Frog Legs',
    price: '35 Fr.',
  },
  {
    title: 'Crevettes À L\'Ail*',
    tags: 'Garlic Shrimps',
    price: '39 Fr.',
  },
  {
    title: 'Calamars Grillés À L\'Ail',
    tags: 'Grilled Calamari With Garlic',
    price: '28 Fr.',
  },
];

const PatesPasta = [
  {
    title: 'Spaghetti À La Carbonara',
    tags: 'Spaghetti Carbonara With Streaky Bacon, Egg And Cream Sauce',
    price: '22 Fr.',
  },
  {
    title: 'Spaghetti Aux Fruits De Mer*',
    tags: 'Seafood Spaghetti',
    price: '27 Fr.',
  },
  {
    title: 'Spaghetti Aux Crevettes Et Tomates',
    tags: 'Spaghetti With Shrimp And Tomatoes',
    price: '28 Fr.',
  },
  {
    title: 'Tagliatelles Aux Bolets',
    tags: 'Tagliatelle Cooked With Boletus Mushrooms Sauce',
    price: '26 Fr.',
  },
];

const SaladeGourmandesGourmetsSalads = [
  {
    title: 'Salade De Chèvre Chaud',
    tags: 'Warm Goat Cheese Salad',
    price: '21 Fr.',
  },
  {
    title: 'Salade De Poulet',
    tags: 'Chicken Salad',
    price: '23 Fr.',
  },
  {
    title: 'Salade Nicoise',
    tags: 'Nicoise Salad',
    price: '21 Fr.',
  },
  {
    title: 'Salade De Foi De Volaille',
    tags: 'Chicken Liver Salad',
    price: '21 Fr.',
  },
  {
    title: 'Salade Paysanne',
    tags: 'Peasant Salad',
    price: '21 Fr.',
  },
  {
    title: 'Salade De Poulpe',
    tags: 'Octopus Salad',
    price: '28 Fr.',
  },
];

const whiteWines = [
  {
    title: 'Chardonnay la Nomade A.O.C',
    price: '42 Fr.',
    tags: 'Genève, Suisse',
  },
  {
    title: 'Epesses Chanaz Dessus A.O.C',
    price: '44 Fr.',
    tags: 'Vaud, Suisse',
  },
  {
    title: 'Fendant du Valais',
    price: '43 Fr.',
    tags: 'Suisse',
  },
  {
    title: 'Albariño',
    price: '40 Fr.',
    tags: 'Espagne',
  },
  {
    title: 'Quinta Aveleda sec D.O.C',
    price: '34 Fr.',
    tags: 'Portugal',
  },
  {
    title: 'Casal Garcia',
    price: '32 Fr.',
    tags: 'Portugal',
  },
  {
    title: 'Muralhas',
    price: '38 Fr.',
    tags: 'Portugal',
  },
];

const redWines = [
  {
    title: 'Pinot noir Genève Les Perrières , 2020/21',
    price: '42 Fr.',
    tags: 'Suisse',
  },
  {
    title: 'Gamaret de Genève << Les Perrières , 2020/21',
    price: '43 Fr.',
    tags: 'Suisse',
  },
  {
    title: 'Gamaret de Genève Cave des Rothis , 2020/21',
    price: '43 Fr.',
    tags: 'Suisse',
  },
  {
    title: 'Beronia Rioja Reserva, 2016/17',
    price: '52 Fr.',
    tags: 'Espagne',
  },
  {
    title: 'Vinha da defesa herdade do Esporão (Alentejano), 2019/20',
    price: '52 Fr.',
    tags: 'Portugal',
  },
  {
    title: 'Passa Douro, 2018/19',
    price: '53 Fr.',
    tags: 'Portugal',
  },
  {
    title: 'Bajancas Douro, 2019',
    price: '54 Fr.',
    tags: 'Portugal',
  },
  {
    title: 'Bafarela Douro Reserva, 2019',
    price: '58 Fr.',
    tags: 'Portugal',
  },
  {
    title: 'Rola Douro Reserva Quinta de Remostias , 2018/19',
    price: '58 Fr.',
    tags: 'Régua',
  },
  {
    title: 'Ventozelo Douro Reserva, 2019/20',
    price: '52 Fr.',
    tags: 'Portugal',
  },
  {
    title: 'Bouteille de vin du Mois Douro',
    price: '39 Fr.',
    tags: 'Portugal',
  },
];

const roséWines = [
  {
    title: 'Œil-de-Perdrix de Genève, Suisse',
    price: '42 Fr.',
    tags: 'Suisse',
  },
  {
    title: 'Œil-de-Perdrix Neuchâtel, Suisse',
    price: '53 Fr.',
    tags: 'Suisse',
  },
  {
    title: 'Carte Noir A.O.C, Côtes de Provence, France',
    price: '40 Fr.',
    tags: 'France',
  },
  {
    title: 'Torres de Casta, Espagne',
    price: '40 Fr.',
    tags: 'Espagne',
  },
  {
    title: 'Rosé Mateus pétillant, Portugal',
    price: '32 Fr.',
    tags: 'Portugal',
  },
  {
    title: 'Plexux pétillant, Portugal',
    price: '32 Fr.',
    tags: 'Portugal',
  },
];

const cocktails = [
  {
    title: 'Kir',
    price: '5.5 Fr.',
    tags: '10cl',
  },
  {
    title: 'Martini - Porto, rouge ou blanc',
    price: '5.5 Fr.',
    tags: '4cl',
  },
  {
    title: 'Cynar - Suze - Campari - Appenzeller',
    price: '7 Fr.',
    tags: '4cl',
  },
  {
    title: '1/2 Ricard - Pastis',
    price: '3.8 Fr.',
    tags: '2cl',
  },
  {
    title: 'Ricard - Pastis',
    price: '7.5 Fr.',
    tags: '4cl',
  },
  {
    title: 'Gin tonic',
    price: '11 Fr.',
    tags: '4cl',
  },
  {
    title: 'Rhum - Whisky ',
    price: '11 Fr.',
    tags: '4cl',
  },
  {
    title: 'Vodka',
    price: '11 Fr.',
    tags: '4cl',
  },
  {
    title: 'Fernet blanca',
    price: '8 Fr.',
    tags: '4cl',
  },
  {
    title: 'Marie Brizard - Williamine',
    price: '8.5 Fr.',
    tags: '4cl',
  },
  {
    title: 'Cointreau-Grand Marinier-Baileys',
    price: '8.5 Fr.',
    tags: '4cl',
  },
  {
    title: 'Malibu et Liqueurs divers',
    price: '8.5 Fr.',
    tags: '4cl',
  },
];

const Beers = [
  {
    title: 'Galopin',
    price: '3.7 Fr.',
    tags: '2dl',
  },
  {
    title: 'Pression',
    price: '4 Fr.',
    tags: '3dl',
  },
  {
    title: 'Cannette',
    price: '8 Fr.',
    tags: '5dl',
  },
  {
    title: 'Super bock',
    price: '3.7 Fr.',
    tags: '2.5dl',
  },
  {
    title: 'Bière sans alcool',
    price: '5 Fr.',
    tags: '3.3dl',
  },
  {
    title: 'Cidre',
    price: '8 Fr.',
    tags: '4.9dl',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Authentic European Cuisine',
    subtitle: 'Experience rich flavors from France, Switzerland, and beyond.',
  },
  {
    imgUrl: images.award01,
    title: 'Exquisite Wine Selection',
    subtitle: 'Sample fine wines carefully curated from renowned vineyards.',
  },
  {
    imgUrl: images.award05,
    title: 'Locally Sourced Produce',
    subtitle: 'Savor the freshness of dishes crafted from farm-to-table ingredients.',
  },
  {
    imgUrl: images.award03,
    title: 'Vegan Friendly',
    subtitle: 'Enjoy a range of delicious and diverse plant-based offerings.',
  },
  {
    imgUrl: images.award04,
    title: 'Prime Central Location',
    subtitle: 'In the heart of Paquis, close to the Train Station and the Lake',
  },
];

export default {
  whiteWines,
  redWines,
  roséWines,
  cocktails,
  awards,
  Beers,
  SoupesEtEntreesStarters,
  OmelettesOmelets,
  SpecialitesMin2Pers,
  NosViandesOurMeat,
  NosPoissonsOurFish,
  PatesPasta,
  SaladeGourmandesGourmetsSalads,
};

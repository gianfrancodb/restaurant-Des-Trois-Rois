import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';

import messagesDe from './translations/de.json';
import messagesFr from './translations/fr.json';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const messages = {
  de: messagesDe,
  fr: messagesFr,
};

const App = () => {
  const [locale, setLocale] = useState(navigator.language.split(/[-_]/)[0]); // Default to the browser's locale

  return (
    <IntlProvider locale={locale} defaultLocale="en" messages={messages[locale]}>
      <div>
        <Navbar onLocaleChange={setLocale} />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;

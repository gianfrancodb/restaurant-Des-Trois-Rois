import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IntlProvider } from 'react-intl';
import App from './App';
import messagesDe from './translations/de.json';
import messagesFr from './translations/fr.json';

const messages = {
  de: messagesDe,
  fr: messagesFr,
};

// Hardcoding 'fr' to test French translations
const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={language} defaultLocale="en" messages={messages[language]}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

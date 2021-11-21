import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import Favicon from 'react-favicon';
import Logo from "./images/logo/logo_icon.svg"

import App from './App';
import reportWebVitals from './reportWebVitals';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import global_es from "./traslations/es/global.json";
import global_en from "./traslations/en/global.json";

i18next.init({
  interpolation: {escapeValue:false},
  lng: "es",
  resources:{
    es:{
      global: global_es,
    },
    en:{
      global: global_en,
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <Favicon url={Logo} />
      <Helmet>

        <title>NFT Royal Token</title>
        <script src="https://code.jquery.com/jquery-2.0.3.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.3/ScrollMagic.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.3/plugins/animation.gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>

      </Helmet>
      <App />
    </I18nextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


import React, { useState } from 'react';
import Loading from "./components/Loading"

import MetaMask from './components/addtoken/MetaMask';
import detectEthereumProvider from '@metamask/detect-provider';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';

import './styles/main.css'
import './styles/style.css'
import './styles/reset.css'

//home
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/home/Hero";
import Lion from "./components/home/Lion";
import King from "./components/home/King";
import Token from "./components/home/Token";
import Gaming from "./components/home/Gaming";
import Market from "./components/home/Market";
import Road from "./components/home/Road";

//addtoken
import DownloadMetaMaskButton from './components/addtoken/DownloadMetaMaskButton';


const MainContent = () => {

  return (
    <div>

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <HashRouter hashType="noslash">
          <Switch>
            <Route path="/add" component={MetaMask} />
            <Route path="/" component={MetaMask} />
          </Switch>
        </HashRouter>
      </BrowserRouter>
    </div>
  )
};


const ErrorContent = () => {
return (
  <div>
    <div>
      <h2>You need a web3 browser like MetaMask to use this site and manage cryptocurrencies.</h2>

    </div>
  </div>
)
}


const App = () => {
  const [isProviderLoaded, setProvider] = useState([]);
  const [isLoading, setLoading] = useState([true]);

  const checkEthereumProvider = async () => {
    const provider = await detectEthereumProvider()
    setLoading(false)
    setProvider(provider)
  }

  checkEthereumProvider()


  return (
    <div className="App">
      {isLoading ? <Loading/>
        : <div>

          <Header></Header>

        <Hero>
        {isLoading ? <div><div><h2>Loading.....</h2></div></div>
        : <div>

          {isProviderLoaded ? <MainContent /> : "<ErrorContent />"}

        </div>}

        </Hero>


          <Lion/>
      <King/>
      <Token/>
      <Gaming/>
      <Market/>
      <Road/>

      <Footer></Footer>



        </div>}
    </div>
  );
}



export default App;

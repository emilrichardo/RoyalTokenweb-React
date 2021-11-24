import detectEthereumProvider from '@metamask/detect-provider';
import React, { useState } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import AddToken from './components/addtoken/AddToken';
import DownloadMetaMaskButton from './components/addtoken/DownloadMetaMaskButton';
import Loading from './components/Loading';



const ErrorContent = () => {
  return (
    <div>
      <div>
        <h2>You need a web3 browser like MetaMask to use this site and manage cryptocurrencies.</h2>
        <DownloadMetaMaskButton />
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

          {isProviderLoaded ? <Home /> : <ErrorContent />}

        </div>}
    </div>
  );
}



export default App;

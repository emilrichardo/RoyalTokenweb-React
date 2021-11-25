import detectEthereumProvider from '@metamask/detect-provider';
import React, { useState } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';


import Hero from './components/home/Hero';

import './styles/main.css'
import './styles/style.css'
import './styles/reset.css'


import AddToken from "./components/addtoken/AddToken.jsx"
const MainContent = () => {

  return (
    <div>

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <HashRouter hashType="noslash">
          <Switch>
            <Route path="/add" component={AddToken} />
            <Route path="/" component={AddToken} />
          </Switch>
        </HashRouter>
      </BrowserRouter>
    </div>
  )
};

const ErrorContent = () => {
  return (
    <div>
       no tienes la extension instalada
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
      {isLoading ? <div><div><h2>Loading.....</h2></div></div>
        : <div>

          {isProviderLoaded ? <Hero><MainContent /></Hero> : <Hero><ErrorContent /></Hero>}

        </div>}
    </div>
  );
}



export default App;

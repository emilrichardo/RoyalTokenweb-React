import React, { useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

const EthContext = React.createContext();



export default function EthState (props){

    const [isProviderLoaded, setProvider] = useState([]);
    const [isLoading, setLoading] = useState([true]);

    const checkEthereumProvider = async () => {
        const provider = await detectEthereumProvider()
        setLoading(false)
        setProvider(provider)
    }

  checkEthereumProvider()

    const example = "algun ejemplo"
    return (
        <EthContext.Provider value={example} >
            {props.children}
        </EthContext.Provider>
    )
}

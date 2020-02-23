import React, { useContext } from 'react';
import Web3Connect from 'web3connect';
import { Button } from 'react-bootstrap'

import { Web3ConnectContext, CurrentUserContext } from '../../contexts/Store';
import { getChainData } from '../../utils/Chains';
import { createWeb3User, w3connect, providerOptions } from '../../utils/Auth';

export const Web3SignIn = () => {
    const [, setWeb3Connect] = useContext(Web3ConnectContext);
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext);


    return (
        <Button
            variant="outline-primary"
            onClick={async () => {
                const web3Connect = new Web3Connect.Core({
                    network: getChainData(+process.env.REACT_APP_CHAIN_ID).network, // optional
                    providerOptions, // required
                    cacheProvider: false,
                });

                try {
                    const { web3Connect: w3c, web3, provider } = await w3connect(web3Connect);
                    const [account] = await web3.eth.getAccounts();
                    setWeb3Connect(web3Connect);
                    const user = createWeb3User(account);
                    setCurrentUser(user);

                    console.log(web3Connect);

                } catch (err) {
                    console.log('web3Connect error', err);
                }
            }}
        >
            Sign In With Web3
    </Button>
    );
};

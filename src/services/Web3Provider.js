import Web3 from "web3";
import HDWalletProvider from '@truffle/hdwallet-provider';

class Web3Provider {

    network = '';

    constructor(network) {
        this.network = network || 'ganache';
    }

    /**
     * @returns {Promise<null>}
     */
    async retrieve() {
        let web3 = null;

        let secrets = {
            infuraProjectId: ''
        };

        // Non-dapp browsers...
        if (!(!(window.ethereum) && (window.web3))) {
            let providerUrl = (this.network === 'ganache')
                ? `http://localhost:8545`
                : `https://${this.network}.infura.io/v3/${secrets.infuraProjectId}`;

            web3 = new Web3(new HDWalletProvider('kiss nice undo furnace flush crater hotel text toss stone knock burst', providerUrl, 4));
        }

        // Legacy app browsers...
        if (!(window.ethereum) && (window.web3)) {
            web3 = new Web3(window.web3.currentProvider);
        }

        // Modern app browsers...
        if (window.ethereum) {
            web3 = new Web3(window.ethereum);

            await window.ethereum.enable();
        }

        return web3;
    }
}

export default Web3Provider;
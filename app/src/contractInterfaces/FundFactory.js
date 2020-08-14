import TruffleContract from 'truffle-contract';
import fundFactoryArtifact from '../../contracts/GX_FundFactory.json';
import PromisifyEvent from '../utils/promisifyEvent';

export default class FundFactory {
    /**
     * @param provider
     * @param account
     * @param web3
     */
    constructor(provider, account, web3) {
        this.fundFactory = TruffleContract(fundFactoryArtifact);
        this.fundFactory.setProvider(provider);
        this.account = account;
        this.web3 = web3;
    }

    /**
     * Transaction to initiate the creation of a new fund
     * //LATER@param {number} profitShare % value, .000 resolution: 1 = 0.001%, 1000 = 1%, 100000 = 100%
     * //LATER@param {number} stopLossPercent % value, .000 resolution: 1 = 0.001%, 1000 = 1%, 100000 = 100%
     *
     * @param {number} startTime unix timestamp
     * @param {number} endTime unix timestamp
     * @param {number} globalTraderLimit // if 0: unlimited
     * @param {number} investMin
     * @param {number} investMax // if 0: unlimited
     * @param {string[]} traderList list of trader addresses
     * @param {number[]} limitList has to be same length as trader list, if unlimited, 0
     */

    async createFund(startTime, endTime, globalTraderLimit, investMin, investMax, traderList, limitList) {
        const instance = await this.fundFactory.deployed();

//        const investStart = 0;
//        const investEnd = 9999999;
//        const investMin = 0;
//        const investMax = 1000000000000000;
        const withdrawStart = 0;
        const withdrawEnd = 9999999;
//        const traderMarge = 10;
        const name = "Test Fund";
        const details = "Test Fund Desc";
        const tknName = "Test Fund";
        const tknSymbol = "TKN";
        const decimals = 3;

        const investmentDetails = [startTime,endTime,globalTraderLimit,investMin + investMax,withdrawStart,withdrawEnd,limitList.length];
        const names = [name,details,tknName,tknSymbol];
        
        const adminAddresses = ["0xb23cc7d24a3507ea6eb83aaf57e308674aeb01c6", "0xa306cecff8c74b85f590a5812cf486186e7c9f3f", "0xc0fe58b25027e76aa028c6150948010b0e7e6946"];
//        const traderAddresses = ["0x2fa9ef2589329c09ca3fb4296ab0826061d0257e", "0xa306cecff8c74b85f590a5812cf486186e7c9f3f", "0xc0fe58b25027e76aa028c6150948010b0e7e6946"];
        const investorAddresses = ["0x2fa9ef2589329c09ca3fb4296ab0826061d0257e", "0xa306cecff8c74b85f590a5812cf486186e7c9f3f", "0xc0fe58b25027e76aa028c6150948010b0e7e6946"];
        
//        const dexTypes = [0,1, 2];
//        const dexAddresses = ["0x2fa9ef2589329c09ca3fb4296ab0826061d0257e","0xa306cecff8c74b85f590a5812cf486186e7c9f3f", "0xc0fe58b25027e76aa028c6150948010b0e7e6946"];
               
        const dexManagerAddress = "0xE83AD9650E19D9F2902503909DAb3B2F49EbB90f";

        return instance.createFUND(names,investmentDetails,adminAddresses,traderList,investorAddresses,decimals,dexManagerAddress,1,{from: this.account});
    }

    /**
     * Check if a fund exists
     *
     * @param {string} fundAddress ethereum address
     * @return {boolean}
     */
    async checkFund(fundAddress) {
        //todo
        console.log('@todo checkFund');
        console.log(fundAddress);
    }

    /**
     * (ethereum) Event watcher function for newly created funds
     * @param {funtion} callback should have an event parameter to handle it
     * createFund event will have the following retrun values:
     * event.returnvalues: {
     *  fundAddress,
     * }
     * rest of the event object will look something like in the end of this example:
     * https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#id34
     */
    async watchFundCreatedEvent(callback) {
        const instance = await this.fundFactory.deployed();
        const instanceRawWeb3 = new this.web3.eth.Contract(instance.abi, instance.address);

        instanceRawWeb3.events.fundCreated({fromBlock: 0, toBlock: 'latest'}).on('data', callback);
    }

    /**
     * Returns a list of fundAddress-es of orders in the order they have created -createFund (ethereum) event-,
     * the number of returned fundAddress-es is limited by the limit parameter
     *
     * @param {number} limit if 0, tries to return all, but can fail if there is too many
     *
     * @return {string[]} list of fundAddress-s
     */
    async getLatestFundsFromEvents(latestNblocks) {
        const instance = await this.fundFactory.deployed();
        const instanceRawWeb3 = new this.web3.eth.Contract(instance.abi, instance.address);
        const blockNumber = await this.web3.eth.getBlockNumber();

        const fromBlock = latestNblocks === 0
            ? 0
            : blockNumber - latestNblocks;

        const logs = await PromisifyEvent(callback => instanceRawWeb3.getPastEvents('fundCreated', {
            fromBlock: fromBlock,
            toBlock: 'latest',
        }, callback));

        return logs.map(item => item.returnValues.fundAddress);
    }

    /**
     * Returns a list of fundAddress-es of orders in the order they have created -createFund (ethereum) event-,
     *
     * @return {string[]} list of fundAddress-s
     */
    async getAllFundsFromEvents() {
        const instance = await this.fundFactory.deployed();
        const instanceRawWeb3 = new this.web3.eth.Contract(instance.abi, instance.address);

        const logs = await PromisifyEvent(callback => instanceRawWeb3.getPastEvents('fundCreated', {
            fromBlock: 0,
            toBlock: 'latest',
        }, callback));

        return logs.map(item => item.returnValues.fundAddress);
    }
}

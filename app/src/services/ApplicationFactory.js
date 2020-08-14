import DetailedERC20 from "../contractInterfaces/DetailedERC20";
import FundFactory from "../contractInterfaces/FundFactory";
import Fund from "../contractInterfaces/Fund";
import KyberInterface from "../contractInterfaces/KyberInterface";

class ApplicationFactory {
    static async create(web3) {
        // Basic data
        let networkId = await web3.eth.net.getId();
        let account = (await web3.eth.getAccounts())[0];
        let network = await web3.eth.net.getNetworkType();

        // Instances
        let FundApi = new Fund(web3.currentProvider, account, web3);
        let FundFactoryApi = new FundFactory(web3.currentProvider, account, web3);
        let DetailedERC20Api = new DetailedERC20(web3.currentProvider, account, web3);
        let KyberApi = await new KyberInterface(web3.currentProvider, account, web3, network);

        return {
            web3: web3,
            networkId: networkId,
            account: account,

            FundApi: FundApi,
            FundFactoryApi: FundFactoryApi,
            DetailedERC20Api: DetailedERC20Api,
            KyberApi: KyberApi
        };
    }
}

export default ApplicationFactory;

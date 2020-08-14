import moment from "moment";
import FundRepository from "./FundRepository";

class CreateFundService {
    static async create(fund) {
        console.log('creating fund');
        console.log(fund);

        let startTime = moment(fund.launchDate, 'YYYY-MM-DD HH:mm').unix();
        let endTime = moment(fund.closeDate, 'YYYY-MM-DD HH:mm').unix();
        let globalTraderLimit = 0;
        let investMin = 0;
        let investMax = 0;

        let traderList = fund.traders.map((trader) => {
            return trader.address;
        });

        let limitList = fund.traders.map((trader) => {
            console.log(trader);

            return 0;
        });

        let response = await window.Application.FundFactoryApi.createFund(
            startTime,
            endTime,
            globalTraderLimit,
            investMin,
            investMax,
            traderList,
            limitList
        );

        console.log(response);

        let fundCreatedEvent = response.logs.find((log) => {
            return log.event === "fundCreated";
        });

        let address = fundCreatedEvent.args.fundAddress;

        let fundToStore = JSON.parse(JSON.stringify(fund));

        fundToStore.response = response;
        fundToStore.address = address;

        await FundRepository.save(fundToStore);

        console.log(fundToStore);

        return fundToStore;
    }
}

export default CreateFundService;

import moment from "moment";
import dummy from "../data/funds";

class FundRepository {
    /**
     * @returns {Array}
     */
    static all(fundAddresses) {
        let funds = JSON.parse(sessionStorage.getItem('funds'));

        if (!funds) {
            funds = [];
        }

        let filtered = funds.filter((fund) => {
            return fundAddresses.includes(fund.address);
        });

        dummy.map((fund) => {
            filtered.push(fund);
        });

        return filtered;
    }

    /**
     * @returns {Promise<*[]>}
     */
    static async active(fundAddresses) {
        return this
            .all(fundAddresses)
            .filter((fund) => {
                let currentDate = moment();
                let launchDate = moment(fund.launchDate, 'YYYY-MM-DD HH:mm');
                // let startDate = moment(fund.depositStartDate, 'YYYY-MM-DD HH:mm');
                // let endDate = moment(fund.depositCloseDate, 'YYYY-MM-DD HH:mm');

                return !launchDate.isAfter(currentDate);
            });
    }

    /**
     * @returns {Promise<*[]>}
     */
    static async inactive(fundAddresses) {
        return this
            .all(fundAddresses)
            .filter((fund) => {
                let currentDate = moment();
                let launchDate = moment(fund.launchDate, 'YYYY-MM-DD HH:mm');
                // let startDate = moment(fund.depositStartDate, 'YYYY-MM-DD HH:mm');
                // let endDate = moment(fund.depositCloseDate, 'YYYY-MM-DD HH:mm');

                return launchDate.isAfter(currentDate);
            });
    }

    /**
     * @param {String} address
     * @param {String} fundAddresses
     *
     * @returns {Promise<*{}>}
     */
    static async get(address, fundAddresses) {
        return await this
            .all(fundAddresses)
            .find((fund) => {
                return fund.address === address;
            });
    }

    /**
     * @param fund
     *
     * @returns {Promise<void>}
     */
    static async update(fund) {
        let storageFunds = JSON.parse(sessionStorage.getItem('funds'));

        let storageIndex = storageFunds.findIndex((storageFund) => {
            return storageFund.address === fund.address;
        });

        if (storageIndex !== -1) {
            storageFunds.splice(storageIndex, 1, fund);

            sessionStorage.setItem('funds', JSON.stringify(storageFunds));
        }
    }

    static async save(fund) {
        let funds = JSON.parse(sessionStorage.getItem('funds')) || [];

        funds.push(fund);

        sessionStorage.setItem('funds', JSON.stringify(funds));
    }
}

export default FundRepository;

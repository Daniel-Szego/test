<template>
    <div class="flex-1 flex flex-col">
        <navbar :user="user"></navbar>

        <main class="bg-pale-grey-two flex-1 flex flex-col min-w-0">

            <div class="flex-1 flex">
                <nav-aside :user="user"></nav-aside>

                <main class="px-3 py-5 flex-1">
                    <currency-list></currency-list>

                    <active-fund-list :user="user"
                                      :funds="activeFunds">
                    </active-fund-list>

                    <inactive-fund-list :funds="inactiveFunds"></inactive-fund-list>
                </main>
            </div>
        </main>
    </div>
</template>

<script>
    import Navbar from "../layout/Navbar";
    import NavAside from "../layout/NavAside";
    import CurrencyList from "../components/portfolio/CurrencyList";
    import ActiveFundList from "../components/portfolio/ActiveFundList";
    import InactiveFundList from "../components/portfolio/InactiveFundList";
    import FundRepository from "../services/FundRepository";

    export default {
        components: {
            ActiveFundList,
            InactiveFundList,
            Navbar,
            NavAside,
            CurrencyList
        },

        props: {
            user: {
                type: Object,
                required: true
            },

            account: {
                type: String,
                required: true
            },

            application: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                funds: [],
                activeFunds: [],
                inactiveFunds: [],
            }
        },

        async created() {
            let fundAddresses = await this.application.FundFactoryApi.getAllFundsFromEvents();

            this.activeFunds = await FundRepository.active(fundAddresses);
            this.inactiveFunds = await FundRepository.inactive(fundAddresses);
        }
    }
</script>

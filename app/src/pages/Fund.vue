<template>
    <div class="flex-1 flex flex-col">
        <navbar :user="user"></navbar>

        <main class="bg-pale-grey-two flex-1 flex flex-col min-w-0">

            <div class="flex-1 flex">
                <nav-aside :user="user"></nav-aside>

                <main class="px-3 py-5 flex-1" v-if="!loading">
                    <section class="mb-5">
                        <overview
                                :application="application"
                                :user="user"
                                :fund="fund">
                        </overview>
                    </section>

                    <section class="mb-5">
                        <div class="flex items-stretch -mx-1">
                            <div class="px-1 w-2/3">
                                <contribution
                                        v-if="fund && !isLaunched"
                                        class="mb-5"
                                        :application="application"
                                        :fund="fund">
                                </contribution>

                                <deposit
                                        v-if="fund && user.role === 'investor' && !isLaunched"
                                        :application="application"
                                        :account="account"
                                        :fund="fund"
                                        @deposit="onDeposit">
                                </deposit>

                                <portfolio
                                        v-if="fund && user.role === 'investor' && isLaunched"
                                        :fund="fund">
                                </portfolio>
                            </div>

                            <div class="px-1 w-1/3">
                                <block-chain-details :fund="fund" class="mb-5"></block-chain-details>

                                <div class="mb-2" v-if="user.role === 'pm'">
                                    <button class="button bg-ultramarine text-white w-full inline-flex items-center"
                                            v-if="!isLaunched"
                                            @click="launch">
                                        <i class="mr-3 fa fa-rocket"></i>Launch Fund
                                    </button>
                                </div>

                                <div class="mb-2" v-if="user.role === 'trader'">
                                    <router-link class="button bg-ultramarine text-white w-full inline-flex items-center"
                                                 v-if="isLaunched"
                                                 :to="`/fund/${fund.address}/trade`">
                                        <i class="mr-3 fa fa-rocket"></i>Trade
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </main>
    </div>
</template>

<script>
    import moment from "moment";
    import Navbar from "../layout/Navbar";
    import NavAside from "../layout/NavAside";
    import Overview from "../components/fund/Overview";
    import Contribution from "../components/fund/Contribution";
    import Deposit from "../components/fund/Deposit";
    import BlockChainDetails from "../components/fund/BlockChainDetails";
    import FundRepository from "../services/FundRepository";
    import Portfolio from "../components/fund/Portfolio";

    export default {
        components: {
            Portfolio,
            Navbar,
            NavAside,
            Overview,
            Contribution,
            Deposit,
            BlockChainDetails,
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

            address: {
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
                loading: false,
                fund: null
            };
        },

        async created() {
            this.loading = true;
            await this.load();
            this.loading = false;
        },

        computed: {
            isLaunched() {
                let currentDate = moment();
                let launchDate = moment(this.fund.launchDate, 'YYYY-MM-DD HH:mm');

                return !launchDate.isAfter(currentDate);
            }
        },

        methods: {
            async load() {
                let fundAddresses = await this.application.FundFactoryApi.getAllFundsFromEvents();
                let fund = await FundRepository.get(this.address, fundAddresses);

                if (!fund) {
                    await this.$router.push('/');
                }

                this.fund = fund;
            },

            async onDeposit(data) {
                console.log(data);

                await this.load();

                window.events.$emit('deposit');
            },

            async launch() {
                let fund = this.fund;

                let depositCloseDate = moment().subtract(1, "minutes").format('YYYY-MM-DD HH:mm');
                let launchDate = moment().format('YYYY-MM-DD HH:mm');

                fund.depositCloseDate = depositCloseDate;
                fund.launchDate = launchDate;

                await FundRepository.update(fund);
                await this.load();
                await this.$router.push('/');
            }
        }
    }
</script>

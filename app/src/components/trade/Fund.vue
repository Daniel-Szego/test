<template>
    <div>
        <header class="mb-5">
            <fund-header :fund="fund"></fund-header>
        </header>

        <main>
            <div>
                <header>
                    <nav-tabs v-model="selectedTab" :tabs="tabs"></nav-tabs>
                </header>

                <main class="bg-white rounded shadow p-3">
                    <fund-holdings-overview
                            v-if="mainComponent === 'holdings'"
                            :fund="fund">
                    </fund-holdings-overview>

                    <fund-portfolio-allocation
                            v-if="mainComponent === 'portfolio'">
                    </fund-portfolio-allocation>
                </main>
            </div>
        </main>
    </div>
</template>


<script>
    import FundHeader from "./FundHeader";
    import FundHoldingsOverview from "./FundHoldingsOverview";
    import FundPortfolioAllocation from "./FundPortfolioAllocation";
    import NavTabs from "../shared/NavTabs";

    export default {
        components: {
            NavTabs,
            FundHeader,
            FundHoldingsOverview,
            FundPortfolioAllocation
        },

        data() {
            return {
                fund: {},
                selectedTab: null,
                tabs: []
            }
        },

        created() {
            this.tabs = [
                {
                    title: 'Holdings Overview',
                    value: 'holdings'
                },
                {
                    title: 'Portfolio Allocation',
                    value: 'portfolio'
                }
            ];
            this.selectedTab = this.tabs[0];

            this.fund = {
                name: 'Galaxis Banking Selection 5Y 1000ETH Investment Fund',
                aum: '$892,866.56',
                tokenWhitelist: [
                    {
                        logo: '/images/currency/eth.svg',
                        name: 'Ethereum',
                    },

                    {
                        logo: '/images/currency/dai.svg',
                        name: 'Dai',
                    },

                    {
                        logo: '/images/currency/binance.svg',
                        name: 'BinanceCoin',
                    },

                    {
                        logo: '/images/currency/icon.svg',
                        name: 'ICON',
                    },

                    {
                        logo: '/images/currency/bytom.svg',
                        name: 'Bytom',
                    },
                ],
                holdings: [
                    {
                        token: {
                            logo: '/images/currency/eth.svg',
                            symbol: 'ETH',
                            name: 'Ethereum',
                        },
                        holdings: '398',
                        price: '333.00',
                        value: '132,521',
                        change: {
                            day: '0.60%',
                            week: '0.91%',
                            month: '33.20%'
                        }
                    }
                ]
            }
        },

        computed: {
            mainComponent() {
                return this.selectedTab.value || null;
            }
        }
    }
</script>

<template>
    <div class="card">
        <header class="flex items-center mb-5">
            <div class="bg-white rounded shadow px-3 py-2 mr-3">
                <h1 class="text-dark-grey-blue-two text-lg font-bold">Contribution</h1>
            </div>
        </header>

        <main>
            <div class="bg-white rounded shadow p-3">
                <div class="flex -mx-2">
                    <div class="flex-1 px-2">
                        <h4 class="text-lg text-dark-grey-blue-two font-bold leading-none py-2">Overview</h4>

                        <div>
                            <div class="flex items-center justify-between py-2 border-b border-pale-grey-three">
                                <div class="w-1/4 font-medium text-sm text-battleship-grey">Current State</div>

                                <div class="flex items-center">
                                    <div class="text-base text-aqua-marine mr-2">Accepting Contributions</div>
                                    <i class="h-6 w-6 inline-flex items-center justify-center fa fa-check rounded-full bg-aqua-marine text-xs text-white"></i>
                                </div>
                            </div>

                            <div class="flex items-center justify-between py-2 border-b border-pale-grey-three">
                                <div class="w-1/4 font-medium text-sm text-battleship-grey">Total Contributions</div>

                                <div class="flex items-center">
                                    <div class="font-normal text-base text-dark-blue-grey mr-2">{{ total }}</div>

                                    <div class="flex">
                                        <span class="mr-2">{{ currency }}</span>
                                        <img src="/images/currency/eth.svg" alt="logo" class="w-6 h-6">
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center justify-between py-2 border-b border-pale-grey-three">
                                <div class="w-1/4 font-medium text-sm text-battleship-grey">Target</div>

                                <div class="flex items-center">
                                    <div class="font-normal text-base text-dark-blue-grey mr-2">{{ target }}</div>

                                    <div class="flex">
                                        <span class="mr-2">{{ currency }}</span>
                                        <img src="/images/currency/eth.svg" alt="logo" class="w-6 h-6">
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center justify-between py-2 border-b border-pale-grey-three">
                                <div class="w-1/4 font-medium text-sm text-battleship-grey">
                                    Available to Contribute
                                </div>

                                <div class="flex items-center">
                                    <div class="font-normal text-base text-dark-blue-grey mr-2">
                                        {{ available }}
                                    </div>

                                    <div class="flex">
                                        <span class="mr-2">{{ currency }}</span>
                                        <img src="/images/currency/eth.svg" alt="logo" class="w-6 h-6">
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center justify-between py-2 border-b border-pale-grey-three">
                                <div class="w-1/4 font-medium text-sm text-battleship-grey">
                                    Time Left
                                </div>

                                <div class="font-bold text-base text-dark-blue-grey">{{ timeLeft }}</div>
                            </div>
                        </div>
                    </div>

                    <div class="px-8 flex flex-col">
                        <h4 class="text-lg text-dark-grey-blue-two font-bold leading-none py-2">
                            Fulfillment Rate
                        </h4>

                        <div class="flex flex-1 items-center justify-center">
                            <div class="h-40 w-40">
                                <pie-chart
                                        :chart-data="chart"
                                        :options="chartOptions">
                                </pie-chart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import moment from "moment";
    import PieChart from "../charts/PieChart";

    export default {
        components: {
            PieChart
        },
        props: {
            fund: {
                type: Object,
                required: true
            },

            application: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                currency: '',
                state: '',
                total: '',
                target: '',
                available: '',
                timeLeft: '',
                chartOptions: {
                    responsive: true,
                    legend: {
                        display: false,
                    },
                    title: {
                        display: false,
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                },

                totalContribution: 0,
                maximumContribution: 0,
                availableContribution: 0,

                userTotalContribution: 0,
                userMaximumContribution: 0,
                userAvailableUserContribution: 0
            }
        },

        computed: {
            chart() {
                let total = parseFloat(this.total);
                let available = parseFloat(this.fund.maximumCapital) - parseFloat(this.total);

                return {
                    datasets: [
                        {
                            data: [
                                available,
                                total
                            ],
                            backgroundColor: [
                                "#4af1a9",
                                "#25bae8",
                            ],
                            borderWidth: 0,
                            label: 'Dataset 1'
                        }
                    ],
                    labels: [
                        'Available Contributions',
                        'Total Contributions'
                    ]
                };
            }
        },

        async created() {
            await this.load();

            window.events.$on('deposit', async () => {
                await this.load();
            });
        },

        methods: {
            async load() {
                let web3 = this.application.web3;

                // Contribution
                let totalContribution = (this.fund.type === 'dummy')
                    ? this.fund.maximumCapital * 0.90
                    : await web3.utils.fromWei(await this.application.FundApi.getFundBalance(this.fund.address), 'ether');

                let maximumContribution = this.fund.maximumCapital;
                let availableContribution = maximumContribution - totalContribution;

                // User Contribution
                let userTotalContribution = (this.fund.type === 'dummy')
                    ? this.fund.maximumContribution * 0.90
                    : await web3.utils.fromWei(await this.application.FundApi.getFundBalance(this.fund.address), 'ether');

                let userMaximumContribution = this.fund.maximumContribution;
                let userAvailableUserContribution = userMaximumContribution - userTotalContribution;


                this.totalContribution = totalContribution;
                this.maximumContribution = maximumContribution;
                this.availableContribution = availableContribution;

                this.userTotalContribution = userTotalContribution;
                this.userMaximumContribution = userMaximumContribution;
                this.userAvailableUserContribution = userAvailableUserContribution;

                // @TODO
                this.currency = 'ETH';
                this.state = 'Accepting Contributions';
                this.total = totalContribution;
                this.target = maximumContribution;
                this.available = availableContribution;

                this.timeLeft = `${moment(this.fund.depositCloseDate).diff(moment(), 'days')} days`;
            }
        }
    }
</script>

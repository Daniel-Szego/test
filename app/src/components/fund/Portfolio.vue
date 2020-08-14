<template>
    <div class="card bg-white rounded shadow px-3 py-2">
        <header class="card-header">
            <h4 class="text-lg text-dark-grey-blue-two font-bold leading-none py-2">
                Your Portfolio
            </h4>
        </header>

        <main class="card-body">
            <div class="flex items-stretch">
                <section class="flex-1 px-1">
                    <div class="list-item">
                        <h5 class="list-item-title">Date</h5>
                        <p class="list-item-value">{{ date }}</p>
                    </div>

                    <div class="list-item">
                        <h5 class="list-item-title">Deposit (ETH)</h5>
                        <p class="list-item-value">{{ depositEth|number }}</p>
                    </div>

                    <div class="list-item">
                        <h5 class="list-item-title">Deposit (USD)</h5>
                        <p class="list-item-value">${{ depositUsd|number }}</p>
                    </div>

                    <div class="list-item">
                        <h5 class="list-item-title">Fund value at Inception date</h5>
                        <p class="list-item-value">{{ fundInceptionValue|number }}</p>
                    </div>
                </section>

                <section class="flex-1 px-1">
                    <div class="list-item">
                        <h5 class="list-item-title">Current Fund Value</h5>
                        <p class="list-item-value">{{ fundCurrentValue|number }}</p>
                    </div>

                    <div class="list-item">
                        <h5 class="list-item-title">P&L</h5>
                        <p class="list-item-value">{{ pl|number }}</p>
                    </div>

                    <div class="list-item">
                        <h5 class="list-item-title">Total Return</h5>
                        <p class="list-item-value">{{ totalReturn }}%</p>
                    </div>

                    <div class="list-item">
                        <h5 class="list-item-title">Total Holdings</h5>
                        <p class="list-item-value">{{ holdings|number }}</p>
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        props: {
            fund: {
                type: Object,
                required: true
            }
        },

        computed: {
            date() {
                return this.fund.launchDate;
            },

            depositEth() {
                return (this.fund.type === 'dummy')
                    ? this.fund.dummy.portfolio.deposit.eth
                    : 0;
            },

            depositUsd() {
                return (this.fund.type === 'dummy')
                    ? this.fund.dummy.portfolio.deposit.usd
                    : 0;
            },

            fundInceptionValue() {
                return (this.fund.type === 'dummy')
                    ? this.fund.dummy.portfolio.value.inception
                    : 0;
            },

            fundCurrentValue() {
                return (this.fund.type === 'dummy')
                    ? this.fund.dummy.portfolio.value.current
                    : 0;
            },

            pl() {
                return (this.fund.type === 'dummy')
                    ? this.fund.dummy.portfolio.pl
                    : 0;
            },

            totalReturn() {
                return (this.fund.type === 'dummy')
                    ? this.fund.dummy.portfolio.totalReturn
                    : 0;
            },

            holdings() {
                return (this.fund.type === 'dummy')
                    ? this.fund.dummy.portfolio.totalHoldings
                    : 0;
            }
        }
    }
</script>

<style type="scss" scoped>
    .list-item {
        @apply .flex .items-center .justify-between .py-1 .border-b .border-pale-grey-three;
    }

    .list-item-title {
        @apply .font-medium .text-sm .text-battleship-grey;
    }

    .list-item-value {
        @apply .font-normal .text-base .text-dark-blue-grey;
    }
</style>

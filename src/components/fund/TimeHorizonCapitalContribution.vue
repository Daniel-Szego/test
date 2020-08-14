<template>
    <div>
        <div class="flex -mx-2">
            <div class="flex-1 px-2">
                <h4 class="text-lg text-dark-grey-blue-two font-bold leading-none py-2">
                    Time Horizon
                </h4>

                <div>
                    <div class="list-item">
                        <div class="list-item-title w-1/4">Deposit Starting Date</div>
                        <div class="list-item-value">{{ fund.depositStartDate }}</div>
                    </div>

                    <div class="list-item">
                        <div class="list-item-title w-1/4">Fund Nature</div>
                        <div class="list-item-value font-bold"><b>{{ fundNature }}</b></div>
                    </div>

                    <div class="list-item">
                        <div class="list-item-title w-1/4">Deposit Close Date</div>
                        <div class="list-item-value">{{ fund.depositCloseDate }}</div>
                    </div>

                    <div class="list-item">
                        <div class="list-item-title w-1/4">Launch Date</div>
                        <div class="list-item-value">{{ fund.launchDate }}</div>
                    </div>

                    <div class="list-item">
                        <div class="list-item-title w-1/4">Investment Period</div>
                        <div class="list-item-value">{{ investmentPeriod }}</div>
                    </div>

                    <div class="list-item">
                        <div class="list-item-title w-1/4">Close Date</div>
                        <div class="list-item-value">{{ fund.closeDate }}</div>
                    </div>
                </div>
            </div>

            <div class="flex-1 px-2">
                <h4 class="text-lg text-dark-grey-blue-two font-bold leading-none py-2">
                    Capital
                </h4>

                <div>
                    <div class="list-item">
                        <div class="list-item-title w-1/4">Base Currency</div>

                        <div class="font-normal text-base text-dark-blue-grey">
                            <div class="flex">
                                <span class="mr-2">{{ currency }}</span>
                                <img src="/images/currency/eth.svg" alt="logo" class="w-6 h-6">
                            </div>
                        </div>
                    </div>

                    <div class="list-item">
                        <div class="list-item-title w-1/4">Lock Up Period</div>
                        <div class="font-normal text-base text-dark-blue-grey">{{ fund.incentiveFeeBasis.name }}</div>
                    </div>

                    <div class="-mx-2 px-2" style="background-color: rgba(26, 0, 181, 0.05);">
                        <div class="list-item">
                            <div class="list-item-title w-1/4">Minimum Capital (Soft Cap)</div>

                            <div class="font-normal text-base text-dark-blue-grey flex items-center">
                                <span class="mr-2">{{ fund.minimumCapital }}</span>

                                <div class="flex">
                                    <span class="mr-2">{{ currency }}</span>
                                    <img src="/images/currency/eth.svg" alt="logo" class="w-6 h-6">
                                </div>
                            </div>
                        </div>

                        <div class="list-item">
                            <div class="list-item-title w-1/4">Maximum Capital (Hard Cap)</div>

                            <div class="font-normal text-base text-dark-blue-grey flex items-center">
                                <span class="mr-2">{{ fund.maximumCapital }}</span>

                                <div class="flex">
                                    <span class="mr-2">{{ currency }}</span>
                                    <img src="/images/currency/eth.svg" alt="logo" class="w-6 h-6">
                                </div>
                            </div>
                        </div>

                        <div class="list-item">
                            <div class="list-item-title w-1/4">Minimum Contribution</div>

                            <div class="font-normal text-base text-dark-blue-grey flex items-center">
                                <span class="mr-2">{{ fund.minimumContribution }}</span>

                                <div class="flex">
                                    <span class="mr-2">{{ currency }}</span>
                                    <img src="/images/currency/eth.svg" alt="logo" class="w-6 h-6">
                                </div>
                            </div>
                        </div>

                        <div class="list-item">
                            <div class="list-item-title w-1/4">Maximum Contribution</div>

                            <div class="font-normal text-base text-dark-blue-grey flex items-center">
                                <span class="mr-2">{{ fund.minimumCapital }}</span>

                                <div class="flex">
                                    <span class="mr-2">{{ currency }}</span>
                                    <img src="/images/currency/eth.svg" alt="logo" class="w-6 h-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            fundNature() {
                return this.fund.fundNature
                    ? 'Open End'
                    : 'Closed End';
            },

            investmentPeriod() {
                return this.fund.investmentPeriod.name;
            },

            currency() {
                return this.fund.baseCurrency.name;
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

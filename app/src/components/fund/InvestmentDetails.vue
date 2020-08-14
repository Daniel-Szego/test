<template>
    <div>
        <div class="flex -mx-2">
            <div class="flex-1 px-2">
                <h4 class="text-lg text-dark-grey-blue-two font-bold leading-none py-2">
                    Investment Details
                </h4>

                <div>
                    <div class="flex items-center justify-between py-2 border-b border-pale-grey-three">
                        <div class="w-1/4 font-medium text-sm text-battleship-grey">
                            Investment Fund Manager
                        </div>

                        <div class="font-normal text-base text-dark-blue-grey">
                            {{ fund.investmentFundManager }}
                        </div>
                    </div>

                    <div class="flex items-center justify-between py-2 border-b border-pale-grey-three">
                        <div class="w-1/4 font-medium text-sm text-battleship-grey">
                            Investment Focus
                        </div>

                        <div class="font-normal text-base text-dark-blue-grey">
                            {{ fund.investmentFocus }}
                        </div>
                    </div>

                    <div class="flex items-center justify-between py-2 border-b border-pale-grey-three">
                        <div class="w-1/4 font-medium text-sm text-battleship-grey">
                            Investment Range
                        </div>

                        <div class="font-normal text-base text-dark-blue-grey">
                            {{ fund.investmentRange.name }}
                        </div>
                    </div>

                    <div class="flex items-center justify-between py-2 border-b border-pale-grey-three">
                        <div class="w-1/4 font-medium text-sm text-battleship-grey">
                            Floor
                        </div>

                        <div class="font-normal text-base text-dark-blue-grey">
                            {{ fund.floor }} %
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-1 px-2">
                <h4 class="text-lg text-dark-grey-blue-two font-bold leading-none py-2">
                    Compensation
                </h4>

                <div>
                    <div class="flex items-center justify-between py-2 border-b border-pale-grey-three">
                        <div class="w-1/4 font-medium text-sm text-battleship-grey">
                            Incentive Fee
                        </div>

                        <div class="font-normal text-base text-dark-blue-grey">
                            {{ fund.incentiveFee }} %
                        </div>
                    </div>

                    <div class="flex items-center justify-between py-2 border-b border-pale-grey-three">
                        <div class="w-1/4 font-medium text-sm text-battleship-grey">
                            Incentive Fee Basis
                        </div>

                        <div class="font-normal text-base text-dark-blue-grey">
                            {{ fund.incentiveFeeBasis.name }}
                        </div>
                    </div>

                    <div class="flex items-center justify-between py-2 border-b border-pale-grey-three">
                        <div class="w-1/4 font-medium text-sm text-battleship-grey">
                            Management Fee
                        </div>

                        <div class="font-normal text-base text-dark-blue-grey">
                            {{ fund.managementFee }} %
                        </div>
                    </div>

                    <div class="flex items-center justify-between py-2 border-b border-pale-grey-three">
                        <div class="w-1/4 font-medium text-sm text-battleship-grey">
                            Management Fee Basis
                        </div>

                        <div class="font-normal text-base text-dark-blue-grey">
                            {{ fund.managementFeeBasis.name }}
                        </div>
                    </div>

                    <div class="flex items-center justify-between py-2 border-b border-pale-grey-three">
                        <div class="w-1/4 font-medium text-sm text-battleship-grey">
                            High Water Mark
                        </div>

                        <div v-if="fund.highWaterMark === true"
                             class="font-bold text-base text-aqua-marine flex items-center">

                            <span class="mr-2">Yes</span>
                            <i class="fa fa-check-circle"></i>
                        </div>

                        <div v-if="fund.highWaterMark === false"
                             class="font-bold text-base text-coral flex items-center">

                            <span class="mr-2">No</span>
                            <i class="fa fa-times-circle"></i>
                        </div>
                    </div>

                    <div class="flex items-center justify-between py-2 border-b border-pale-grey-three">
                        <div class="w-1/4 font-medium text-sm text-battleship-grey">
                            Hurdle Rate
                        </div>

                        <div v-if="fund.hasHurdleRate === true"
                             class="font-bold text-base text-aqua-marine flex items-center">

                            <span class="mr-2">Yes</span>
                            <i class="fa fa-check-circle"></i>
                        </div>

                        <div v-if="fund.hasHurdleRate === false"
                             class="font-bold text-base text-coral flex items-center">

                            <span class="mr-2">No</span>
                            <i class="fa fa-times-circle"></i>
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
        }
    }
</script>

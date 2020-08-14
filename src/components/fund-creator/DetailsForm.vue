<template>
    <div>
        <form @submit.prevent="submit">
            <header>
                <div class="flex items-center justify-between py-10">
                    <h1>Set up and modify the term sheet</h1>

                    <button type="submit" class="button bg-ultramarine text-white flex items-center">

                        <span>Save & Continue</span>
                        <i class="fa fa-chevron-right"></i>
                    </button>
                </div>
            </header>

            <main>
                <div class="card bg-white rounded shadow p-3">
                    <div>
                        <header class="legend flex items-center justify-between rounded bg-ice-blue border border-pale-grey-three p-3">
                            <h2 class="text-2xl text-dark-blue-grey leading-none">Fund’s Name</h2>

                            <info-button></info-button>
                        </header>

                        <div class="px-12 py-6">
                            <div>
                                <label class="block label font-bold text-base text-dark-grey-blue-two mb-2">
                                    Name of the fund
                                    <span class="text-coral">*</span>
                                </label>

                                <div class="flex items-center -mx-2">
                                    <div class="flex-1 px-2">
                                        <input class="input"
                                               type="text"
                                               v-model="form.name">
                                    </div>

                                    <div class="w-5/12 px-2">
                                        <div v-if="form.name">
                                            <i class="fa fa-check text-sm w-6 h-6 inline-flex items-center justify-center bg-sea-green rounded-full bg-aqua-marine text-white mr-2"></i>
                                            <span class="font-bold text-sm text-dark-blue-grey">This name is available!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <header class="legend flex items-center justify-between rounded bg-ice-blue border border-pale-grey-three p-3">
                            <h2 class="text-2xl text-dark-blue-grey leading-none">Investment Details</h2>

                            <info-button></info-button>
                        </header>

                        <div class="px-12 py-6">

                            <div class="flex -mx-2 mb-8">
                                <div class="w-1/3 px-2">
                                    <label class="label">
                                        Investment Fund Manager
                                        <span class="text-coral">*</span>
                                    </label>

                                    <input class="input"
                                           type="text"
                                           v-model="form.investmentFundManager">
                                </div>

                                <div class="w-2/3 px-2">
                                    <label class="label">
                                        Investment Focus
                                    </label>

                                    <input class="input"
                                           type="text"
                                           v-model="form.investmentFocus">
                                </div>
                            </div>

                            <div class="flex -mx-2">
                                <div class="w-1/3 px-2">
                                    <label class="label">
                                        Investment Range
                                    </label>

                                    <investment-range-select v-model="form.investmentRange"></investment-range-select>
                                </div>

                                <div class="w-1/3 px-2">
                                    <label class="label">
                                        Token Whitelist
                                    </label>

                                    <token-whitelist-multiselect v-model="form.tokenWhitelist"></token-whitelist-multiselect>
                                </div>

                                <div class="w-1/3 px-2">
                                    <label class="label">
                                        Set up a Floor
                                    </label>

                                    <div class="input-group flex">
                                        <input class="input"
                                               type="text"
                                               v-model="form.floor">

                                        <div class="addon">%</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <header class="legend flex items-center justify-between rounded bg-ice-blue border border-pale-grey-three p-3">
                                <h2 class="text-2xl text-dark-blue-grey leading-none">Compensation</h2>

                                <info-button></info-button>
                            </header>


                            <div class="px-12 py-6">
                                <div class="flex -mx-2 mb-8">
                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Incentive Fee
                                        </label>

                                        <div class="input-group flex">
                                            <input class="input"
                                                   type="text"
                                                   v-model="form.incentiveFee">

                                            <div class="addon">%</div>
                                        </div>
                                    </div>

                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Incentive Fee Basis
                                        </label>

                                        <incentive-fee-basis-select v-model="form.incentiveFeeBasis"></incentive-fee-basis-select>
                                    </div>

                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            High Water Mark
                                        </label>

                                        <div class="h-12 flex flex-col justify-center">
                                            <button-toggle v-model="form.highWaterMark"></button-toggle>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex -mx-2">
                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Management Fee
                                        </label>

                                        <div class="input-group flex">
                                            <input class="input"
                                                   type="text"
                                                   v-model="form.managementFee">

                                            <div class="addon">%</div>
                                        </div>
                                    </div>

                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Management Fee Basis
                                        </label>

                                        <management-fee-basis-select v-model="form.managementFeeBasis"></management-fee-basis-select>
                                    </div>

                                    <div class="w-1/6 px-2">
                                        <label class="label">
                                            Hurdle Rate
                                        </label>

                                        <div class="h-12 flex flex-col justify-center">
                                            <button-toggle v-model="form.hasHurdleRate"></button-toggle>
                                        </div>
                                    </div>

                                    <div class="w-1/6 px-2">
                                        <label class="label">
                                            Hurdle Rate %
                                        </label>

                                        <div class="input-group flex">
                                            <input class="input"
                                                   type="text"
                                                   :disabled="!form.hasHurdleRate"
                                                   v-model="form.hurdleRatePercent">

                                            <div class="addon">%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <header class="legend flex items-center justify-between rounded bg-ice-blue border border-pale-grey-three p-3">
                                <h2 class="text-2xl text-dark-blue-grey leading-none">
                                    Time Horizon and Capital
                                </h2>

                                <info-button></info-button>
                            </header>


                            <div class="px-12 py-6">

                                <div class="flex -mx-2 mb-8">
                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Deposit Starting Date
                                            <span class="text-coral">*</span>
                                        </label>

                                        <date-time-picker v-model="form.depositStartDate"></date-time-picker>
                                    </div>

                                    <div class="w-1/3 px-2">
                                        <label class="label">Fund Nature</label>
                                        <fund-nature-input v-model="form.fundNature"></fund-nature-input>
                                    </div>

                                    <div class="w-1/3 px-2">
                                        <label class="label">Deposit Close Date</label>
                                        <date-time-picker v-model="form.depositCloseDate"></date-time-picker>
                                    </div>
                                </div>


                                <div class="flex -mx-2 mb-8">
                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Launch Date
                                            <span class="text-coral">*</span>
                                        </label>

                                        <date-time-picker v-model="form.launchDate"></date-time-picker>
                                    </div>

                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Investment Period
                                        </label>

                                        <investment-period-select v-model="form.investmentPeriod"></investment-period-select>
                                    </div>

                                    <div class="w-1/3 px-2">
                                        <label class="label">Close Date</label>
                                        <date-time-picker v-model="form.closeDate"></date-time-picker>
                                    </div>
                                </div>

                                <div class="flex -mx-2 mb-8">
                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Base Currency
                                        </label>

                                        <base-currency-select v-model="form.baseCurrency"></base-currency-select>
                                    </div>

                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Lock up period
                                        </label>

                                        <lock-up-period-select v-model="form.lockUpPeriod"></lock-up-period-select>
                                    </div>
                                </div>


                                <div class="flex -mx-2 mb-8">
                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Minimum Capital (Soft Cap)
                                        </label>

                                        <input class="input"
                                               type="text"
                                               v-model="form.minimumCapital">
                                    </div>

                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Maximum Capital (Hard Cap)
                                        </label>

                                        <input class="input"
                                               type="text"
                                               v-model="form.maximumCapital">
                                    </div>
                                </div>


                                <div class="flex -mx-2">
                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Minimum Contribution
                                        </label>

                                        <input class="input"
                                               type="text"
                                               v-model="form.minimumContribution">
                                    </div>

                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Maximum Contribution
                                        </label>

                                        <input class="input"
                                               type="text"
                                               v-model="form.maximumContribution">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div class="flex items-center justify-end py-10">
                    <button class="button bg-ultramarine text-white flex items-center">
                        <span>Save & Continue</span>
                        <i class="fa fa-chevron-right"></i>
                    </button>
                </div>
            </footer>
        </form>
    </div>
</template>

<script>
    import ButtonToggle from "../../components/inputs/ButtonToggle";
    import FundNatureInput from "../../components/inputs/FundNatureInput";
    import InfoButton from "../../components/InfoButton";
    import DateTimePicker from "../../components/inputs/DateTimePicker";
    import InvestmentRangeSelect from "../inputs/InvestmentRangeSelect";
    import IncentiveFeeBasisSelect from "../inputs/IncentiveFeeBasisSelect";
    import ManagementFeeBasisSelect from "../inputs/ManagementFeeBasisSelect";
    import InvestmentPeriodSelect from "../inputs/InvestmentPeriodSelect";
    import LockUpPeriodSelect from "../inputs/LockUpPeriodSelect";
    import BaseCurrencySelect from "../inputs/BaseCurrencySelect";
    import TokenWhitelistMultiselect from "../inputs/TokenWhitelistMultiselect";

    export default {
        components: {
            TokenWhitelistMultiselect,
            BaseCurrencySelect,
            LockUpPeriodSelect,
            InvestmentPeriodSelect,
            ManagementFeeBasisSelect,
            IncentiveFeeBasisSelect,
            InvestmentRangeSelect,
            DateTimePicker,
            FundNatureInput,
            ButtonToggle,
            InfoButton
        },

        props: {
            data: {
                type: Object,
                required: true
            }
        },

        created() {
            this.form = this.data;
        },

        data() {
            return {
                form: {}
            }
        },

        watch: {
            data(value) {
                this.form = value;
            }
        },

        methods: {
            submit() {
                this.$emit('submit', JSON.parse(JSON.stringify(this.form)));
            },
        }
    }
</script>

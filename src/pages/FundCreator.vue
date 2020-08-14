<template>
    <div class="flex-1 flex flex-col">
        <navbar :user="user"></navbar>

        <main class="bg-pale-grey-two flex-1 flex flex-col min-w-0">
            <div class="container mx-auto py-8">
                <section class="steps p-3 bg-white shadow rounded">
                    <steps :steps="steps"></steps>
                </section>
            </div>

            <div class="container mx-auto py-8">
                <details-form v-if="form === 'details'"
                              :data="details"
                              @submit="onSubmitDetails">
                </details-form>

                <permissions-form v-if="form === 'permissions'"
                                  :data="permissions"
                                  @submit="onSubmitPermissions"
                                  @back="form = 'details'">
                </permissions-form>

                <whitelist-form v-if="form === 'whitelist'"
                                :data="whitelist" s
                                @submit="onSubmitWhitelist"
                                @back="form = 'permissions'">
                </whitelist-form>
            </div>
        </main>
    </div>
</template>

<script>
    import moment from "moment";
    import FormSteps from "../data/formSteps";
    import Navbar from "../layout/Navbar";
    import Steps from "../components/fund-creator/Steps";
    import DetailsForm from "../components/fund-creator/DetailsForm";
    import PermissionsForm from "../components/fund-creator/PermissionsForm";
    import WhitelistForm from "../components/fund-creator/WhitelistForm";
    import CreateFundService from "../services/CreateFundService";

    export default {
        components: {
            WhitelistForm,
            PermissionsForm,
            DetailsForm,
            Navbar,
            Steps,
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
        },

        data() {
            return {
                form: 'details',
                data: {
                    // Details
                    name: '',
                    investmentFundManager: '',
                    investmentFocus: '',
                    investmentRange: {},
                    tokenWhitelist: {},
                    floor: 0,
                    incentiveFee: 20,
                    incentiveFeeBasis: {
                        name: 'Annual Return',
                        value: 4
                    },
                    highWaterMark: true,
                    managementFee: 2,
                    managementFeeBasis: {
                        name: 'Annual AVG AUM',
                        value: 3
                    },
                    hasHurdleRate: false,
                    hurdleRate: 0,
                    depositStartDate: moment().format('YYYY-MM-DD HH:mm'),
                    fundNature: false,
                    depositCloseDate: moment().add(7, 'days').format('YYYY-MM-DD HH:mm'),
                    launchDate: moment().add(7, 'days').format('YYYY-MM-DD HH:mm'),
                    investmentPeriod: {
                        name: '5Y',
                        value: 5
                    },
                    closeDate: moment().add(5, 'years').format('YYYY-MM-DD HH:mm'),
                    baseCurrency: {
                        name: 'ETH',
                        value: 1
                    },
                    lockUpPeriod: {
                        name: '5Y',
                        value: 5
                    },
                    minimumCapital: 0,
                    maximumCapital: 1000,
                    minimumContribution: 0,
                    maximumContribution: 10,
                    // Permissions
                    admins: [],
                    traders: [],
                    // Whitelist
                    access: false,
                    whitelist: [],
                }
            }
        },

        computed: {
            details() {
                return {
                    // Details
                    name: this.data.name,
                    investmentFundManager: this.data.investmentFundManager,
                    investmentFocus: this.data.investmentFocus,
                    investmentRange: this.data.investmentRange,
                    tokenWhitelist: this.data.tokenWhitelist,
                    floor: this.data.floor,
                    incentiveFee: this.data.incentiveFee,
                    incentiveFeeBasis: this.data.incentiveFeeBasis,
                    highWaterMark: this.data.highWaterMark,
                    managementFee: this.data.managementFee,
                    managementFeeBasis: this.data.managementFeeBasis,
                    hasHurdleRate: this.data.hasHurdleRate,
                    hurdleRate: this.data.hurdleRate,
                    depositStartDate: this.data.depositStartDate,
                    fundNature: this.data.fundNature,
                    depositCloseDate: this.data.depositCloseDate,
                    launchDate: this.data.launchDate,
                    investmentPeriod: this.data.investmentPeriod,
                    closeDate: this.data.closeDate,
                    baseCurrency: this.data.baseCurrency,
                    lockUpPeriod: this.data.lockUpPeriod,
                    minimumCapital: this.data.minimumCapital,
                    maximumCapital: this.data.maximumCapital,
                    minimumContribution: this.data.minimumContribution,
                    maximumContribution: this.data.maximumContribution,
                }
            },

            permissions() {
                return {
                    admins: this.data.admins,
                    traders: this.data.traders,
                }
            },

            whitelist() {
                return {
                    access: this.data.access,
                    whitelist: this.data.whitelist,
                }
            },

            steps() {
                return FormSteps[this.form];
            }
        },

        methods: {
            updateFormData(formData) {
                let data = JSON.parse(JSON.stringify(this.data));

                Object.keys(formData).forEach(function (key) {
                    if (data.hasOwnProperty(key)) {
                        data[key] = formData[key];
                    }
                });

                return data;
            },

            onSubmitDetails(formData) {
                this.data = this.updateFormData(formData);
                this.form = 'permissions';
            },

            onSubmitPermissions(formData) {
                this.data = this.updateFormData(formData);
                this.form = 'whitelist';
            },

            async onSubmitWhitelist(formData) {
                this.data = this.updateFormData(formData);

                let fund = JSON.parse(JSON.stringify(this.data));
                let storedFund = await CreateFundService.create(fund);

                await this.$router.push(`/fund/${storedFund.address}`);
            },
        }
    }
</script>

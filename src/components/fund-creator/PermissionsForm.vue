<template>
    <div>
        <form @submit.prevent="submit">
            <header>
                <div class="flex items-center justify-between py-10">
                    <h1>Set up and modify admin and trader rights</h1>

                    <div class="flex items-center">
                        <button @click="back" class="button bg-white text-dark-grey-blue-two mr-2">Back
                        </button>

                        <button type="submit"
                                class="button bg-ultramarine text-white flex items-center">

                            <span>Save & Continue</span>
                            <i class="fa fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </header>

            <main>
                <div class="card bg-white rounded shadow p-3">
                    <div class="mb-3">
                        <header class="legend flex items-center justify-between rounded bg-ice-blue border border-pale-grey-three p-3">
                            <div class="flex items-baseline">
                                <h2 class="text-2xl text-dark-blue-grey leading-none mr-2">Admin rights</h2>
                                <h4 class="text-lg text-azure leading-none">Set up related admin rights</h4>
                            </div>

                            <div class="flex items-center">
                                <button type="button"
                                        @click="addAdmin"
                                        class="button bg-azure text-white flex items-center mr-2">
                                    <span>Add admin</span>
                                    <i class="fa fa-plus"></i>
                                </button>

                                <info-button></info-button>
                            </div>
                        </header>

                        <div v-if="admins.length > 0"
                             class="px-12 py-6">

                            <div v-for="(admin, index) in admins"
                                 :key="index"
                                 class="flex -mx-2 mb-8">

                                <div class="flex px-2 items-end">
                                    <div class="h-12 flex flex-col justify-center">
                                        <button @click="removeAdmin(index)"
                                                class="h-10 w-10 button bg-white text-coral flex items-center justify-center">
                                            <i class="fa fa-times-circle ml-0"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="flex flex-1">
                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Add an Admin Address {{ parseInt(index + 1) }}
                                        </label>

                                        <input type="text"
                                               v-model="admin.address"
                                               class="input">
                                    </div>

                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Modify Trader Rights
                                        </label>

                                        <div class="h-12 flex flex-col justify-center">
                                            <button-toggle v-model="admin.modify"></button-toggle>
                                        </div>
                                    </div>

                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Close Fund
                                        </label>

                                        <div class="h-12 flex flex-col justify-center">
                                            <button-toggle v-model="admin.close"></button-toggle>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <header class="legend flex items-center justify-between rounded bg-ice-blue border border-pale-grey-three p-3">
                            <div class="flex items-baseline">
                                <h2 class="text-2xl text-dark-blue-grey leading-none mr-2">Trader
                                    rights</h2>
                                <h4 class="text-lg text-azure leading-none">Set up related trader
                                    rights</h4>
                            </div>

                            <div class="flex items-center">
                                <button type="button"
                                        @click="addTrader"
                                        class="button bg-azure text-white flex items-center mr-2">
                                    <span>Add trader</span>
                                    <i class="fa fa-plus"></i>
                                </button>

                                <info-button></info-button>
                            </div>
                        </header>

                        <div v-if="traders.length > 0"
                             class="px-12 py-6">
                            <div v-for="(trader, index) in traders"
                                 :key="index"
                                 class="flex -mx-2 mb-8">

                                <div class="flex px-2 items-end">
                                    <div class="h-12 flex flex-col justify-center">
                                        <button type="button"
                                                @click="removeTrader(index)"
                                                class="h-10 w-10 button bg-white text-coral flex items-center justify-center">
                                            <i class="fa fa-times-circle ml-0"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="flex flex-1">
                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Add an Trader Address {{ parseInt(index + 1) }}
                                        </label>

                                        <input type="text"
                                               v-model="trader.address"
                                               class="input">
                                    </div>

                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Maximum Open Positions
                                        </label>

                                        <div class="input-group flex items-center">
                                            <button type="button" class="h-12 w-12 flex items-center justify-center text-dark-grey-blue-two mr-2">
                                                <i class="fa fa-minus"></i>
                                            </button>

                                            <input type="text"
                                                   v-model="trader.maximumOpenPositions"
                                                   class="input flex-1">

                                            <button type="button" class="h-12 w-12 flex items-center justify-center text-ultramarine ml-2">
                                                <i class="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="w-1/3 px-2">
                                        <label class="label">
                                            Maximum Trade Value
                                        </label>

                                        <input type="text"
                                               v-model="trader.maximumTradeValue"
                                               class="input">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <footer>
                <div class="flex items-center justify-end py-10">
                    <div class="flex items-center">
                        <button @click="back" class="button bg-white text-dark-grey-blue-two mr-2">Back
                        </button>

                        <button class="button bg-ultramarine text-white flex items-center">
                            <span>Save & Continue</span>
                            <i class="fa fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </footer>
        </form>
    </div>
</template>

<script>
    import InfoButton from "../../components/InfoButton";
    import ButtonToggle from "../../components/inputs/ButtonToggle";

    export default {
        components: {
            InfoButton,
            ButtonToggle
        },

        props: {
            data: {
                type: Object,
                required: true
            }
        },
        
        data() {
            return {
                admins: [],
                traders: []
            }
        },

        created() {
            this.admins = this.data.admins;
            this.traders = this.data.traders;
        },

        watch: {
            data(value) {
                this.admins = value.admins;
                this.traders = value.traders;
            }
        },

        methods: {
            addAdmin() {
                const admin = {
                    address: '',
                    modify: false,
                    close: false
                };

                this.admins.push(admin);
            },

            removeAdmin(index) {
                this.admins.splice(this.admins.indexOf(index), 1);
            },

            addTrader() {
                const traders = {
                    address: '',
                    maximumOpenPositions: '',
                    maximumTradeValue: ''
                };

                this.traders.push(traders);
            },

            removeTrader(index) {
                this.traders.splice(this.traders.indexOf(index), 1);
            },

            submit() {
                let data = {
                    admins: JSON.parse(JSON.stringify(this.admins)),
                    traders: JSON.parse(JSON.stringify(this.traders))
                };

                this.$emit('submit', data);
            },

            back() {
                this.$emit('back');
            }
        }
    }
</script>

<template>
    <div>
        <form @submit.prevent="submit">
            <header>
                <div class="flex items-center justify-between py-10">
                    <h1>Set up and modify admin and trader rights</h1>

                    <div class="flex items-center">
                        <button @click="back"
                                type="button"
                                class="button bg-white text-dark-grey-blue-two mr-2">
                            Back
                        </button>

                        <button type="submit" class="button bg-ultramarine text-white flex items-center">
                            <span>Save & Complete</span>
                            <i class="fa fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </header>

            <main>
                <div class="card bg-white rounded shadow p-3">
                    <div>
                        <header class="legend flex items-center justify-between rounded bg-ice-blue border border-pale-grey-three p-3">
                            <div class="flex items-baseline">
                                <h2 class="text-2xl text-dark-blue-grey leading-none mr-2">Whitelist</h2>
                            </div>

                            <div class="flex items-center">
                                <button class="rounded p-3 h-10 w-10 inline-flex items-center justify-center focus:outline-none" style="background-color: rgba(4, 98, 158, 0.1)">
                                    <i class="fa fa-info-circle font-xl text-ocean-blue"></i>
                                </button>
                            </div>
                        </header>

                        <div class="px-12 py-6">
                            <div class="flex -mx-2 mb-8">

                                <div class="w-1/3 px-2">
                                    <label class="label">
                                        Fund Access
                                    </label>

                                    <div class="h-12 flex flex-col justify-center">
                                        <fund-access-input v-model="access"></fund-access-input>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="px-12 py-6">
                            <div>
                                <div class="rounded shadow mb-5">
                                    <div class="flex">
                                        <div class="h-12 w-12 p-1 flex flex-col items-center justify-center"></div>

                                        <div class="w-3/12 p-2 text-left text-lg text-dark-blue-grey font-bold flex items-center">
                                            ID
                                        </div>
                                        <div class="w-4/12 p-2 text-left text-lg text-dark-blue-grey font-bold flex items-center">
                                            Name
                                        </div>
                                        <div class="w-5/12 p-2 text-left text-lg text-dark-blue-grey font-bold flex items-center justify-between">
                                            <span>BlockChain Address</span>

                                            <button @click="add"
                                                    type="button"
                                                    class="button bg-azure text-white flex items-center">

                                                <span>Add Row</span>
                                                <i class="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div v-for="(whitelistItem, index) in whitelist"
                                         :key="index"
                                         class="flex items-center rounded shadow mb-2">

                                        <button @click="remove(index)"
                                                type="button"
                                                class="h-12 w-12 button bg-white text-coral flex items-center justify-center">
                                            <i class="fa fa-times-circle ml-0"></i>
                                        </button>

                                        <div class="p-1 w-3/12">
                                            <input class="input"
                                                   type="text"
                                                   v-model="whitelistItem.id"
                                                   placeholder="Click Here to Edit">
                                        </div>

                                        <div class="p-1 w-4/12">
                                            <input class="input"
                                                   type="text"
                                                   v-model="whitelistItem.name"
                                                   placeholder="Click Here to Edit">
                                        </div>

                                        <div class="p-1 w-5/12">
                                            <input class="input"
                                                   type="text"
                                                   v-model="whitelistItem.address"
                                                   placeholder="Click Here to Edit">
                                        </div>
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
                        <button @click="back"
                                type="button"
                                class="button bg-white text-dark-grey-blue-two mr-2">
                            Back
                        </button>

                        <button class="button bg-ultramarine text-white flex items-center">
                            <span>Save & Complete</span>
                            <i class="fa fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </footer>
        </form>
    </div>
</template>

<script>
    import FundAccessInput from "../../components/inputs/FundAccessInput";

    export default {
        components: {
            FundAccessInput
        },

        props: {
            data: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                access: false,
                whitelist: [],
            }
        },

        created() {
            this.access = this.data.access;
            this.whitelist = this.data.whitelist;
        },

        watch: {
            data(value) {
                this.access = value.access;
                this.whitelist = value.whitelist;
            }
        },

        methods: {
            add() {
                const item = {
                    id: '',
                    name: '',
                    address: ''
                };

                this.whitelist.push(item);
            },

            remove(index) {
                this.whitelist.splice(this.whitelist.indexOf(index), 1);
            },

            submit() {
                let data = {
                    whitelist: JSON.parse(JSON.stringify(this.whitelist)),
                    access: this.access
                };

                this.$emit('submit', data);
            },

            back() {
                this.$emit('back');
            }
        }
    }
</script>

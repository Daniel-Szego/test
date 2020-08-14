<template>
    <div class="card">
        <form @submit.prevent="submit">
            <div class="bg-white rounded shadow p-3">
                <header class="flex items-center justify-between mb-5">
                    <h4 class="text-lg text-dark-grey-blue-two font-bold leading-none py-2">
                        Deposit your contribution
                    </h4>

                    <button type="submit"
                            class="px-2 py-1 bg-aqua-marine rounded text-base text-white uppercase font-bold"
                            style="box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0.1);">
                        Confirm
                    </button>
                </header>

                <div class="flex items-stretch -mx-2">
                    <div class="px-2 flex-1">
                        <div class="flex flex-col items-center justify-center rounded p-2" style="background-color: rgba(26, 0, 181, 0.05);">
                            <div class="flex items-center text-ultramarine text-lg mb-3">
                                <i class="fa fa-wallet mr-2"></i>
                                <h4 class="font-bold">Wallet Balance</h4>
                            </div>

                            <div class="flex items-center">
                                <p class="text-xl leading-none font-bold mr-2">{{ walletDefault }}</p>

                                <div class="bg-white rounded p-1 flex items-center">
                                    <span class="text-base font-bold mr-1">{{ currency }}</span>
                                    <img src="/images/currency/eth.svg" alt="logo" class="w-6 h-6">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="px-2 flex-1">
                        <div class="flex flex-col items-center justify-center rounded p-2" style="background-color: rgba(248, 72, 72, 0.05);">
                            <div class="flex items-center text-coral text-lg mb-3">
                                <i class="fa fa-wallet mr-2"></i>
                                <h4 class="font-bold">Current Contribution</h4>
                            </div>

                            <div class="flex items-center">
                                <p class="text-xl leading-none font-bold mr-2 text-coral">{{ current|number }}</p>

                                <div class="bg-white rounded p-1 flex items-center">
                                    <span class="text-base font-bold mr-1">{{ currency }}</span>
                                    <img src="/images/currency/eth.svg" alt="logo" class="w-6 h-6">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="px-2 flex-1">
                        <div class="flex flex-col items-center justify-center rounded p-2" style="background-color: rgba(79, 208, 171, 0.05);">
                            <div class="flex items-center text-dark-grey-blue-two text-lg mb-3">
                                <i class="fa fa-wallet mr-2"></i>
                                <h4 class="font-bold">Deposit Amount</h4>
                            </div>

                            <div class="flex items-center justify-between border border-pale-grey-three rounded">
                                <input type="text"
                                       class="w-40 text-xl leading-none font-bold text-aqua-marine px-2 py-2 text-right focus:outline-none"
                                       v-model="amount">

                                <div class="bg-white rounded p-1 flex items-center">
                                    <span class="text-base font-bold mr-1">{{ currency }}</span>
                                    <img src="/images/currency/eth.svg" alt="logo" class="w-6 h-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        props: {
            account: {
                type: String,
                required: true
            },

            application: {
                type: Object,
                required: true
            },

            fund: {
                type: Object,
                required: true
            },
        },

        data() {
            return {
                walletDefault: 0,
                current: 0,
                loading: false,
                currency: '',
                amount: 0,
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
                this.currency = 'ETH';

                let web3 = this.application.web3;

                this.current = (this.fund.type === 'dummy')
                    ? this.fund.dummy.contribution.current
                    : await web3.utils.fromWei(await this.application.FundApi.getFundBalance(this.fund.address), 'ether');

                this.walletDefault = Number(parseFloat(web3.utils.fromWei(await web3.eth.getBalance(this.account), 'ether'))).toFixed(4);
            },

            async submit() {
                if (this.fund.type === 'dummy') {
                    return false;
                }

                this.loading = true;

                try {
                    let web3 = this.application.web3;
                    let address = this.fund.address;
                    let value = await web3.utils.toWei(web3.utils.toBN(this.amount));

                    let response = await this.application.FundApi.invest(
                        address,
                        value
                    );

                    this.loading = false;

                    this.$emit('deposit', response);
                } catch (e) {
                    this.loading = false;

                    console.log(e);
                }
            }
        }
    }
</script>

<template>
    <section class="mb-5">
        <div class="card">
            <header class="flex items-center mb-5">
                <div class="bg-white rounded shadow px-3 py-2 mr-3">
                    <h1 class="text-dark-grey-blue-two text-lg font-bold">Top Currencies</h1>
                </div>

                <div class="flex -mx-1 mr-3">
                    <div class="px-1">
                        <button class="bg-white rounded shadow px-3 py-2 flex items-center justify-center">
                            <i class="fa fa-chevron-left text-lg text-ultramarine leading-none"></i>
                        </button>
                    </div>

                    <div class="px-1">
                        <button class="bg-white rounded shadow px-3 py-2 flex items-center justify-center">
                            <i class="fa fa-chevron-right text-lg text-ultramarine leading-none"></i>
                        </button>
                    </div>
                </div>

                <h2 class="text-battleship-grey text-base">Showing {{ limit }} of {{ currencies.length }}</h2>
            </header>
        </div>

        <main class="bg-white rounded shadow">
            <div class="flex justify-start">
                <currency v-for="(currency, index) in currencies" :key="index" :currency="currency"></currency>
            </div>
        </main>
    </section>
</template>

<script>
    import Currency from "./Currency";

    export default {
        components: {
            Currency
        },

        data() {
            return {
                limit: 5,
                currencies: []
            }
        },

        created() {
            this.currencies = [
                {
                    logo: '/images/currency/eth.svg',
                    name: 'Ethereum',
                    value: '$320',
                    change: '-7.28%'
                },

                {
                    logo: '/images/currency/dai.svg',
                    name: 'Dai',
                    value: '$1.01',
                    change: '0.42%'
                },

                {
                    logo: '/images/currency/binance.svg',
                    name: 'BinanceCoin',
                    value: '$34.35',
                    change: '6.42%'
                },

                {
                    logo: '/images/currency/icon.svg',
                    name: 'ICON',
                    value: '$0.31',
                    change: '5.7%'
                },

                {
                    logo: '/images/currency/bytom.svg',
                    name: 'Bytom',
                    value: '$0.16',
                    change: '7.28%'
                },
            ];
        }
    }
</script>

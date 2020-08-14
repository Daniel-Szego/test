<template>
    <div class="bg-white rounded shadow p-3">
        <header class="flex items-center mb-5">
            <h1 class="text-base text-dark-grey-blue-two font-bold mr-2">Trading Station</h1>
        </header>

        <main>
            <table class="w-full text-sm">
                <thead class="text-battleship-grey text-right font-semibold">
                    <tr>
                        <th class="text-left">Token</th>
                        <th>Bid</th>
                        <th>Ask</th>
                        <th>Spread</th>
                        <th>Current Price</th>
                        <th>%1D</th>
                    </tr>
                </thead>

                <tbody class="text-dark-grey-blue-two text-right font-semibold">
                    <tr v-for="(item, index) in items"
                        :key="index"
                        class="border-t border-pale-grey-two">

                        <td class="text-left">
                            <div class="flex items-center">
                                <img :src="item.token.logo" class="h-4 w-4 mr-2">
                                <span class="mr-2">{{ item.token.symbol }}</span>
                            </div>
                        </td>

                        <td class="text-aqua-marine">{{ item.bid }}</td>
                        <td class="text-coral">{{ item.ask }}</td>
                        <td>{{ item.spread }}</td>
                        <td>{{ item.price }}</td>
                        <td class="text-aqua-marine">{{ item.change.day }}</td>
                    </tr>
                </tbody>
            </table>
        </main>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: []
            }
        },

        created() {
            this.items = [
                {
                    token: {
                        logo: '/images/currency/eth.svg',
                        symbol: 'ETH',
                    },
                    bid: '328.01',
                    ask: '334.65',
                    spread: '2%',
                    price: '333.00',
                    change: {
                        day: '0.60%'
                    }
                }
            ];
        }
    }
</script>

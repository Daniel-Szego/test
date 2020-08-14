<template>
    <div class="bg-white rounded shadow p-3">
        <header class="flex items-center mb-5">
            <h1 class="text-base text-dark-grey-blue-two font-bold mr-2">Open Positions</h1>
        </header>

        <main>
            <table class="w-full text-sm">
                <thead class="text-battleship-grey text-right font-semibold">
                    <tr>
                        <th class="text-left">Currency</th>
                        <th>Holdings</th>
                        <th>Current Price (USD)</th>
                        <th>Current MTM (USD)</th>
                        <th>Entry Price</th>

                        <th>Entry Value</th>
                        <th>P&L (USD)</th>
                        <th>Stop</th>
                        <th>Close Trade</th>
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

                        <td>{{ item.holdings }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.mtm }}</td>
                        <td>{{ item.entry.price }}</td>
                        <td>{{ item.entry.value }}</td>
                        <td>{{ item.pl }}</td>
                        <td>
                            <button class="rounded shadow text-sm font-bold px-2 py-1 text-ocean-blue">Add</button>
                        </td>
                        <td>
                            <button class="rounded shadow text-sm font-bold px-2 py-1 text-coral">Close</button>
                        </td>
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
                    holdings: '398',
                    price: '333.00',
                    mtm: '132,521',
                    entry: {
                        price: '321',
                        value: '127,746'
                    },
                    pl: '4,776',
                }
            ];
        }
    }
</script>

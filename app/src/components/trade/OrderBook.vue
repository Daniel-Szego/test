<template>
    <div class="bg-white rounded shadow p-3">
        <header class="mb-5">
            <div class="flex items-center justify-between">
                <h1 class="text-base text-dark-grey-blue-two font-bold mr-2">Order Book</h1>

                <div class="text-xs flex items-center -mx-2">
                    <div class="flex items-center px-2">
                        <h4 class="text-battleship-grey font-bold mr-3 ">Asset</h4>

                        <div class="flex items-center mr-3">
                            <img :src="asset.token.logo" class="h-4 w-4 mr-2">
                            <span class="mr-2">{{ asset.token.name }}</span>
                        </div>

                        <p>{{ asset.token.symbol }} / USD</p>
                    </div>

                    <div class="flex items-center px-2">
                        <h4 class="text-xs text-battleship-grey font-bold mr-2">Current Price</h4>
                        <p>{{ asset.price }}</p>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <table class="w-full text-sm">
                <thead class="text-battleship-grey text-right font-semibold">
                    <tr>
                        <th class="text-left">DEX</th>
                        <th>Size</th>
                        <th>Bid</th>
                        <th>Ask</th>
                        <th>Size</th>
                        <th>Spread</th>
                        <th>%VOL1D</th>
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

                        <td>{{ item.bid.size }}</td>
                        <td class="text-aqua-marine">{{ item.bid.price }}</td>
                        <td class="text-coral">{{ item.ask.price }}</td>
                        <td>{{ item.ask.size }}</td>

                        <td>{{ item.spread }}</td>
                        <td>{{ item.volume.day }}</td>
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
                asset: null,
                items: []
            }
        },

        created() {
            this.asset = {
                token: {
                    logo: '/images/currency/eth.svg',
                    symbol: 'ETH',
                    name: 'Ethereum'
                },
                price: '$333.00'
            };

            this.items = [
                {
                    token: {
                        logo: '/images/currency/eth.svg',
                        symbol: 'ETH',
                    },
                    bid: {
                        size: '1800',
                        price: '328.01'
                    },
                    ask: {
                        size: '1800',
                        price: '334.65',
                    },
                    spread: '1.99%',
                    volume: {
                        day: '602,370'
                    }
                }
            ];
        }
    }
</script>

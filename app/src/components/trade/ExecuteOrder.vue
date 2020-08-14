<template>
    <div class="bg-white rounded shadow p-3">
        <header class="mb-5">
            <div class="flex items-center justify-between">
                <h1 class="text-base text-dark-grey-blue-two font-bold mr-2">Execute Order</h1>

                <div class="text-xs flex items-center -mx-2">
                    <div class="flex items-center px-2">
                        <h4 class="text-battleship-grey font-bold mr-3 ">Asset</h4>

                        <div class="flex items-center mr-3">
                            <img :src="asset.token.logo" class="h-4 w-4 mr-2">
                            <span>{{ asset.token.symbol }} / USD</span>
                        </div>
                    </div>

                    <div class="flex items-center px-2">
                        <h4 class="text-battleship-grey font-bold mr-3 ">DEX</h4>

                        <div class="flex items-center mr-3">
                            <img :src="dex.token.logo" class="h-4 w-4 mr-2">
                            <span>{{ dex.token.symbol }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <div class="mb-5">
                <div class="flex mb-5">
                    <button class="flex-1">Buy</button>
                    <button class="flex-1">Sell</button>
                </div>

                <div class="flex -mx-2">
                    <div class="flex-1 p-2">
                        <label class="label">Order Size</label>

                        <div class="input-group flex">
                            <input class="input"
                                   type="text">

                            <div class="addon px-3">{{ asset.token.symbol }}</div>
                        </div>
                    </div>

                    <div class="flex-1 p-2">
                        <label class="label">Total</label>

                        <div class="input-group flex">
                            <input class="input"
                                   type="text">

                            <div class="addon px-3">USD</div>
                        </div>
                    </div>
                </div>


                <div class="flex -mx-2">
                    <div class="flex-1 p-2">
                        <label class="label">Price</label>

                        <div class="input-group flex">
                            <input class="input"
                                   type="text"
                                   disabled>

                            <div class="addon px-3">USD</div>
                        </div>
                    </div>

                    <div class="flex-1 p-2 flex flex-col items-end justify-end">
                        <button class="h-12 button bg-aqua-marine text-white w-full">Place Buy Order</button>
                    </div>
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between mb-2">
                    <div class="w-1/3">
                        <h5 class="text-xs text-ocean-blue font-bold">Wallet Details</h5>
                    </div>

                    <main class="w-2/3 flex flex-col">
                        <div class="flex-1 flex items-center justify-between text-xs">
                            <h5 class="mr-3">Currency</h5>
                            <div>
                                <div class="flex items-center">
                                    <img :src="asset.token.logo" class="h-4 w-4 mr-2">
                                    <span>{{ asset.token.symbol }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="flex-1 flex items-center justify-between text-xs">
                            <h5 class="mr-3">Balance</h5>
                            <p>300</p>
                        </div>
                    </main>
                </div>

                <div class="flex items-center justify-between mb-2">
                    <div class="w-1/3">
                        <h5 class="text-xs text-ocean-blue font-bold">Trader Rights</h5>
                    </div>

                    <main class="w-2/3 flex flex-col">
                        <div class="flex-1 flex items-center justify-between text-xs">
                            <h5 class="mr-3">Trader ID</h5>
                            <p>0x01sdfsg2323</p>
                        </div>

                        <div class="flex-1 flex items-center justify-between text-xs">
                            <h5 class="mr-3">Maximum Trade Value</h5>
                            <p>$150,000</p>
                        </div>

                        <div class="flex-1 flex items-center justify-between text-xs">
                            <h5 class="mr-3">Maximum Open Positions</h5>
                            <p>8</p>
                        </div>
                    </main>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                asset: null,
                dex: null
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

            this.dex = {
                token: {
                    logo: '/images/currency/eth.svg',
                    symbol: 'ETH',
                    name: 'Ethereum'
                },
                price: '$333.00'
            };
        }
    }
</script>

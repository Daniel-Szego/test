<template>
    <div>
        <div class="flex items-center mb-5">
            <h1 class="text-base text-bluey-grey font-bold mr-2">Total AUM</h1>
            <h2 class="text-sm text-azure font-bold">{{ fund.aum }}</h2>
        </div>

        <div>
            <table class="w-full text-sm">
                <thead class="text-battleship-grey text-right font-semibold">
                    <tr>
                        <th class="text-left">Currency</th>
                        <th>Holdings</th>
                        <th>Current Price (USD)</th>
                        <th>Value (USD)</th>
                        <th>%1D</th>
                        <th>%1W</th>
                        <th>%1M</th>
                    </tr>
                </thead>

                <tbody class="text-dark-grey-blue-two text-right font-semibold">
                    <tr v-for="(holding, index) in fund.holdings"
                        :key="index"
                        class="border-t border-pale-grey-two">

                        <td class="text-left">
                            <div class="flex items-center">
                                <img :src="holding.token.logo" class="h-4 w-4 mr-2">
                                <span class="mr-2">{{ holding.token.symbol }}</span>
                            </div>
                        </td>

                        <td>{{ holding.holdings }}</td>
                        <td>{{ holding.price }}</td>
                        <td>{{ holding.value }}</td>
                        <td class="text-aqua-marine">{{ holding.change.day }}</td>
                        <td class="text-aqua-marine">{{ holding.change.week }}</td>
                        <td class="text-aqua-marine">{{ holding.change.month }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            fund: {
                type: Object,
                required: true
            }
        }
    }
</script>

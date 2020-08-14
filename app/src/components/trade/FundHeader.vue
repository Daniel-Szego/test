<template>
    <div class="bg-white rounded border border-ocean-blue px-2 py-2">
        <div class="flex items-center justify-between">

            <div class="flex items-baseline">
                <h1 class="text-base text-dark-grey-blue-two font-bold leading-none mr-3">
                    Name of the fund
                </h1>

                <h2 class="text-sm text-ocean-blue font-bold leading-none">
                    {{ fund.name }}
                </h2>
            </div>

            <div class="flex items-center">
                <h1 class="text-base text-dark-grey-blue-two font-bold mr-3">Token Whitelist</h1>

                <div class="flex items-center">
                    <div v-for="(token, index) in fund.tokenWhitelist"
                         :key="index"
                         class="flex items-center text-sm font-bold text-dark-blue-grey mr-3">

                        <span class="mr-2">{{ token.name }}</span>
                        <img :src="token.logo" class="h-5 w-5">
                    </div>
                </div>
            </div>

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
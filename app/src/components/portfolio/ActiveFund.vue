<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <span class="text-ocean-blue bg-pale-grey-three rounded px-3 py-2">Logo</span>
            <i class="fa fa-ellipsis-h text-ultramarine"></i>
        </div>

        <h4 class="text-sm text-ultramarine font-bold leading-none mb-5">
            <router-link :to="`/fund/${fund.address}`" class="underline">{{ fund.name }}</router-link>
        </h4>

        <div>
            <div class="list-item">
                <div class="list-item-title">Launch Date</div>
                <div class="list-item-value">{{ fund.launchDate }}</div>
            </div>

            <div class="list-item">
                <div class="list-item-title">AUM</div>
                <div class="list-item-value">${{ aum|number }}</div>
            </div>

            <div class="list-item" v-if="user.role === 'investor'">
                <div class="list-item-title">Holdings</div>
                <div class="list-item-value">${{ holdings|number }}</div>
            </div>

            <div class="list-item">
                <div class="list-item-title">Total Return</div>

                <div class="flex items-center">
                    <span class="font-bold text-base text-aqua-marine mr-2">{{ totalReturn }} %</span>
                    <i class="h-6 w-6 inline-flex items-center justify-center fa fa-arrow-up rounded-full bg-aqua-marine text-xs text-white"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            user: {
                type: Object,
                required: true
            },

            fund: {
                type: Object,
                required: true
            }
        },

        computed: {
            aum() {
                return (this.fund.type === 'dummy')
                    ? this.fund.dummy.aum
                    : 0;
            },

            holdings() {
                return (this.fund.type === 'dummy')
                    ? this.fund.dummy.holdings
                    : 0;
            },

            totalReturn() {
                return (this.fund.type === 'dummy')
                    ? this.fund.dummy.totalReturn
                    : 0;
            }
        }
    }
</script>

<style type="scss" scoped>
    .list-item {
        @apply .flex .items-center .justify-between .py-1 .border-b .border-pale-grey-three;
    }

    .list-item-title {
        @apply .font-medium .text-sm .text-battleship-grey;
    }

    .list-item-value {
        @apply .font-normal .text-base .text-dark-blue-grey;
    }
</style>

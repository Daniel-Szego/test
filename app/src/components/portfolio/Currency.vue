<template>
    <div class="flex flex-col text-sm p-3 items-center w-32">

        <img :src="currency.logo" alt="logo" class="w-6 h-6">
        <span class="font-semibold text-dark-grey-blue-two">{{ currency.name }}</span>
        <span class="font-bold text-bluey-grey">{{ currency.value }}</span>

        <div v-if="!isDecreasing">
            <i class="h-4 w-4 inline-flex items-center justify-center fa fa-arrow-up rounded-full bg-aqua-marine text-xs text-white mr-2"></i>
            <span class="text-aqua-marine">{{ currency.change }}</span>
        </div>

        <div v-if="isDecreasing">
            <i class="h-4 w-4 inline-flex items-center justify-center fa fa-arrow-down rounded-full bg-coral text-xs text-white mr-2"></i>
            <span class="text-coral">{{ currency.change }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            currency: {
                type: Object,
                required: true
            }
        },

        computed: {
            isDecreasing() {
                return (this.currency.change.charAt(0) === '-');
            }
        }
    }
</script>
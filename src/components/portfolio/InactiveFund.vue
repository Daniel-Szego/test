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
            <div class="flex items-center justify-between py-1 border-b border-pale-grey-three">
                <div class="font-medium text-sm text-battleship-grey">Start Date</div>
                <div class="font-normal text-base text-dark-blue-grey">{{ fund.depositStartDate }}</div>
            </div>

            <div class="flex items-center justify-between py-1 border-b border-pale-grey-three">
                <div class="font-medium text-sm text-battleship-grey">Target</div>
                <div class="font-normal text-base text-dark-blue-grey">
                    {{ fund.maximumCapital }} {{ fund.baseCurrency.name }}
                </div>
            </div>

            <div v-if="status === 'contribution'" class="flex items-center justify-between py-1 border-b border-pale-grey-three">
                <div class="font-medium text-sm text-battleship-grey">Fulfillment Rate</div>
                <div class="font-normal text-base text-dark-blue-grey">{{ fulfillmentRate }} %</div>
            </div>

            <div v-if="status === 'registering'" class="flex items-center justify-between py-1 border-b border-pale-grey-three">
                <div class="font-medium text-sm text-battleship-grey">Deposit Start</div>
                <div class="font-normal text-base text-dark-blue-grey">{{ fund.depositStartDate }}</div>
            </div>

            <div class="flex items-center justify-between py-1 border-b border-pale-grey-three">
                <div class="font-medium text-sm text-battleship-grey">Status</div>

                <div v-if="status === 'contribution'" class="flex items-center">
                    <span class="font-bold text-base text-aqua-marine mr-2">{{ statusText }}</span>
                    <i class="h-6 w-6 inline-flex items-center justify-center fa fa-check rounded-full bg-aqua-marine text-xs text-white"></i>
                </div>

                <div v-if="status === 'registering'" class="flex items-center">
                    <span class="font-bold text-base text-azure mr-2">{{ statusText }}</span>
                    <i class="h-6 w-6 inline-flex items-center justify-center fa fa-clock rounded-full bg-azure text-xs text-white"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from "moment";

    export default {
        props: {
            fund: {
                type: Object,
                required: true
            }
        },

        computed: {
            status() {
                let currentDate = moment();
                let startDate = moment(this.fund.depositStartDate, 'YYYY-MM-DD HH:mm');
                let endDate = moment(this.fund.depositCloseDate, 'YYYY-MM-DD HH:mm');
                let launchDate = moment(this.fund.launchDate, 'YYYY-MM-DD HH:mm');

                let status = 'registering';

                if (startDate.isBefore(currentDate)) {
                    status = 'registering';
                }

                if (currentDate.isBetween(startDate, endDate)) {
                    status = 'contribution';
                }

                if (!launchDate.isAfter(currentDate)) {
                    status = 'launched';
                }

                return status;
            },

            statusText() {
                let texts = {
                    'registering': 'Registering',
                    'contribution': 'Accepting Contributions',
                    'launched': 'Launched'
                };

                return texts[this.status];
            },

            fulfillmentRate() {
                return (this.fund.type === 'dummy')
                    ? 90
                    : 0;
            }
        }
    }
</script>

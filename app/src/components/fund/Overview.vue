<template>
    <div class="card">
        <header class="flex items-center mb-5">
            <div class="bg-white rounded shadow px-3 py-2 mr-3">
                <h1 class="text-lg font-bold text-dark-grey-blue-two">Fund Overview</h1>
            </div>

            <div class="bg-white rounded shadow px-3 py-2 flex-1">
                <h1 class="text-lg font-bold text-ocean-blue">{{ fund.name }}</h1>
            </div>
        </header>

        <div>
            <header>
                <nav-tabs v-model="selectedTab" :tabs="tabs"></nav-tabs>
            </header>

            <main class="bg-white rounded shadow p-3">
                <investment-details
                        v-if="selectedTab.value === 'investment'"
                        :fund="fund">
                </investment-details>

                <time-horizon-capital-contribution
                        v-if="selectedTab.value === 'time-horizon-capital' && !isLaunched"
                        :fund="fund">
                </time-horizon-capital-contribution>

                <time-horizon-capital-launched
                        v-if="selectedTab.value === 'time-horizon-capital' && isLaunched"
                        :application="application"
                        :user="user"
                        :fund="fund">
                </time-horizon-capital-launched>
            </main>
        </div>
    </div>
</template>

<script>
    import moment from "moment";
    import NavTabs from "../shared/NavTabs";
    import InvestmentDetails from "./InvestmentDetails";
    import TimeHorizonCapitalContribution from "./TimeHorizonCapitalContribution";
    import TimeHorizonCapitalLaunched from "./TimeHorizonCapitalLaunched";

    export default {
        components: {
            TimeHorizonCapitalLaunched,
            TimeHorizonCapitalContribution,
            NavTabs,
            InvestmentDetails
        },

        props: {
            application: {
                type: Object,
                required: true
            },

            user: {
                type: Object,
                required: true
            },

            fund: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                selectedTab: null,
                tabs: []
            }
        },

        created() {
            this.tabs = [
                {
                    title: 'Investment Details',
                    value: 'investment'
                },
                {
                    title: 'Time Horizon & Capital',
                    value: 'time-horizon-capital'
                }
            ];
            this.selectedTab = this.tabs[0];
        },

        computed: {
            isLaunched() {
                let currentDate = moment();
                let launchDate = moment(this.fund.launchDate, 'YYYY-MM-DD HH:mm');

                return !launchDate.isAfter(currentDate);
            }
        }
    }
</script>

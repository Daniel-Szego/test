<template>
    <section class="mb-5">
        <div class="card">
            <header class="flex items-center mb-5">
                <div class="bg-white rounded shadow px-3 py-2 mr-3">
                    <h1 class="text-dark-grey-blue-two text-lg font-bold">Active Funds</h1>
                </div>

                <div class="flex-1 flex items-center justify-between bg-white rounded shadow px-1 py-1">
                    <span class="badge bg-dark-grey-blue-two rounded py-1 px-2 text-white text-base font-extrabold leading-none">{{ funds.length }}</span>
                    <div class="flex items-center">
                        <span class="text-base text-bluey-grey font-normal mr-3 leading-none">Showing {{ index + 1 }} of {{ funds.length }}</span>

                        <div class="flex items-center -mx-2 px-2">
                            <i class="px-2 text-ultramarine fa fa-chevron-left" @click="prev"></i>
                            <i class="px-2 text-ultramarine fa fa-chevron-right" @click="next"></i>
                        </div>
                    </div>
                </div>
            </header>

            <main v-if="current" class="bg-white rounded shadow p-3">
                <transition name="fade" mode="out-in">
                    <portfolio-active-fund
                            :user="user"
                            :fund="current"
                            :key="index">
                    </portfolio-active-fund>
                </transition>
            </main>
        </div>
    </section>
</template>

<script>
    import PortfolioActiveFund from "./ActiveFund";

    export default {
        components: {
            PortfolioActiveFund
        },

        props: {
            user: {
                type: Object,
                required: true
            },

            funds: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                index: 0,
            }
        },

        created() {
            this.index = 0;
        },

        computed: {
            current() {
                return this.funds[this.index] || null;
            }
        },

        methods: {
            next() {
                if (this.index < this.funds.length - 1) {
                    this.index += 1;
                }
            },

            prev() {
                if (this.index > 0) {
                    this.index -= 1;
                }
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>

<template>
    <div class="flex-1 flex flex-col">
        <navbar :user="user"></navbar>

        <main class="bg-pale-grey-two flex-1 flex flex-col min-w-0">
            <div class="flex-1 flex">
                <nav-aside :user="user"></nav-aside>

                <main class="px-3 py-5 flex-1">
                    <section class="mb-5">
                        <fund></fund>
                    </section>

                    <section class="mb-5">
                        <div class="flex -mx-1">
                            <div class="px-1 flex w-2/5">
                                <trading-station class="flex-1"></trading-station>
                            </div>

                            <div class="px-1 flex w-3/5">
                                <order-book class="flex-1"></order-book>
                            </div>
                        </div>
                    </section>

                    <section class="mb-5">
                        <div class="flex items-stretch -mx-1">
                            <div class="px-1 flex w-2/5">
                                <execute-order class="flex-1"></execute-order>
                            </div>
                        </div>
                    </section>

                    <section class="mb-5">
                        <open-positions></open-positions>
                    </section>
                </main>
            </div>
        </main>
    </div>
</template>

<script>
    import Navbar from "../layout/Navbar";
    import NavAside from "../layout/NavAside";
    import Fund from "../components/trade/Fund";
    import TradingStation from "../components/trade/TradingStation";
    import OrderBook from "../components/trade/OrderBook";
    import ExecuteOrder from "../components/trade/ExecuteOrder";
    import OpenPositions from "../components/trade/OpenPositions";

    export default {
        components: {
            Navbar,
            NavAside,
            Fund,
            TradingStation,
            OrderBook,
            ExecuteOrder,
            OpenPositions,
        },

        props: {
            user: {
                type: Object,
                required: true
            },

            account: {
                type: String,
                required: true
            },

            address: {
                type: String,
                required: true
            },

            application: {
                type: Object,
                required: true
            }
        },

        data() {
            return {}
        }
    }
</script>

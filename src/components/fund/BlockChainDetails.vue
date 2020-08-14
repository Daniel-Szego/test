<template>
    <div class="card">
        <header class="flex items-center mb-5">
            <div class="bg-white rounded shadow px-3 py-2 mr-3">
                <h1 class="text-dark-grey-blue-two text-lg font-bold">Blockchain Details</h1>
            </div>
        </header>

        <main>
            <div class="bg-white rounded shadow p-3">
                <div class="flex items-center mb-5">
                    <h4 class="text-lg text-dark-grey-blue-two font-bold leading-none py-2 mr-2">
                        Overview
                    </h4>

                    <i class="fa fa-copy text-bluey-grey"></i>
                </div>


                <div class="p-2 mb-5" style="background-color: #f5f5f5;">
                    <a class="text-ocean-blue text-sm underline" :href="url" target="_blank">{{ fund.address }}…</a>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        props: {
            fund: {
                type: Object,
                required: true
            }
        },

        computed: {
            url() {
                return `https://kovan.etherscan.io/address/${this.fund.address}`;
            }
        }
    }
</script>


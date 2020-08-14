<template>
    <nav class="flex items-start -mx-1">
        <div v-for="(tab,index) in tabs"
             :key="index"
             @click="select(tab)"
             class="px-1">

            <button class="px-2 py-1 rounded-t text-base font-bold" :class="tabClasses(tab)">
                {{ tab.title }}
            </button>
        </div>
    </nav>
</template>

<script>
    export default {
        props: {
            value: {
                type: Object,
            },

            tabs: {
                type: Array,
                required: true
            },
        },

        methods: {
            select(tab) {
                this.$emit('input', tab);
            },

            tabClasses(tab) {
                return {
                    'active': (this.value === tab),
                    'inactive': (this.value !== tab)
                };
            }
        }
    }
</script>

<style lang="scss" scoped>
    .active {
        @apply .bg-white .text-ultramarine;
    }

    .inactive {
        background-color: rgba(32, 49, 68, 0.1);

        @apply .text-dark-grey-blue-two;
    }
</style>

<template>
    <object-select :value="value" :options="options" @input="onInput"></object-select>
</template>

<script>
    import ObjectSelect from "../form/ObjectSelect";

    export default {
        components: {
            ObjectSelect
        },

        props: {
            value: {
                type: Object,
                default: () => {
                }
            },
        },

        data() {
            return {
                options: [
                    {
                        name: 'Trade',
                        value: 1
                    },
                    {
                        name: 'Monthly Return',
                        value: 2
                    },
                    {
                        name: 'Quarterly Return',
                        value: 3
                    },
                    {
                        name: 'Annual Return',
                        value: 4
                    }
                ]
            }
        },

        methods: {
            onInput(value) {
                this.$emit('input', value);
            }
        }
    }
</script>

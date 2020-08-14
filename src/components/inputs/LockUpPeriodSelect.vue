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
                        name: '3M',
                        value: 1
                    },
                    {
                        name: '6M',
                        value: 2
                    },
                    {
                        name: '1Y',
                        value: 3
                    },
                    {
                        name: '2Y',
                        value: 4
                    },
                    {
                        name: '5Y',
                        value: 5
                    },
                    {
                        name: '10Y',
                        value: 6
                    },
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

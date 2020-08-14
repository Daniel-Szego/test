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
                        name: 'Monthly AVG AUM',
                        value: 1
                    },
                    {
                        name: 'Quarterly AVG AUM',
                        value: 2
                    },
                    {
                        name: 'Annual AVG AUM',
                        value: 3
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

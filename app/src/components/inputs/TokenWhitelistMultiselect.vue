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
                default: () => {}
            },
        },

        data() {
            return {
                options: [
                    {
                        name: 'ETH',
                        value: 1
                    },
                    {
                        name: 'DAI',
                        value: 2
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

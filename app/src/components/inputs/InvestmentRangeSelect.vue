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
                        name: 'All Utility Token',
                        value: 1
                    },
                    {
                        name: 'Blue chips (TOP 10)',
                        value: 2
                    },
                    {
                        name: 'Banking Sector',
                        value: 3
                    },
                    {
                        name: 'Insurance Sector',
                        value: 4
                    },
                    {
                        name: 'Custom',
                        value: 5
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

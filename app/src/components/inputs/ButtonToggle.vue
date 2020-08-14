<template>
    <button-select :value="selected"
                   :options="options"
                   @input="select">
    </button-select>
</template>

<script>
    import ButtonSelect from "./ButtonSelect";

    export default {
        components: {
            ButtonSelect
        },

        props: {
            value: {
                type: Boolean,
                required: true
            },
        },

        data() {
            return {
                options: [
                    {
                        name: 'Yes',
                        value: true
                    },
                    {
                        name: 'No',
                        value: false
                    },
                ]
            }
        },

        computed: {
            selected() {
                return this.options.find(option => option.value === this.value);
            }
        },

        methods: {
            select(option) {
                this.$emit('input', option.value);
            }
        }
    }
</script>

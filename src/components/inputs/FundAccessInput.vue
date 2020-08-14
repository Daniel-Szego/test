<template>
    <div class="h-12 flex flex-col justify-center">
        <button-select :value="selected"
                       :options="options"
                       @input="select">
        </button-select>
    </div>
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
                        name: 'Private',
                        value: true
                    },
                    {
                        name: 'Public',
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

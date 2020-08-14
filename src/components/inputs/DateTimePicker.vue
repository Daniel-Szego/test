<template>
    <div class="input-group flex">
        <vue-ctk-date-time-picker
                id="custom-date-time-picker"
                :value='value'
                @input="update"
                :format="options.format"
                :formatted="options.format"
                :noLabel="true"
                :minuteInterval="5"
                :noClearButton="true"
                :noButtonNow="true"
                color="#1a00b5">
        </vue-ctk-date-time-picker>

        <div class="addon">
            <i class="fa fa-calendar"></i>
        </div>
    </div>
</template>

<script>
    import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
    import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';

    export default {
        components: {
            VueCtkDateTimePicker
        },

        props: {
            value: {
                type: String,
                default: ''
            },
        },

        data() {
            return {
                options: {
                    format: 'YYYY-MM-DD HH:mm'
                }
            }
        },

        methods: {
            update(value) {
                this.$emit('input', value);
            }
        }
    }
</script>

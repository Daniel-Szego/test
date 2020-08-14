<template>
    <div class="button-select">
        <div class="flex -mx-2">
            <div v-for="(option, index) in options"
                 :key="index"
                 class="flex-1 px-2 border-r last:border-r-0 border-pale-grey-three">
                <button type="button"
                        class="button-select-option"
                        :class="{'active' : option === value, 'disabled' : option.disabled === true }"
                        @click="select(option)">
                    {{ option.name }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: Object,
                default: () => {
                }
            },
            options: {
                type: Array,
                default: () => []
            },
            deselect: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            selected() {
                return !(Object.keys(this.value).length === 0 && this.value.constructor === Object);
            },

            select(option) {
                if (!option.disabled) {
                    let selected = (this.deselect && option === this.value)
                        ? {}
                        : option;

                    this.$emit('input', selected);
                }
            },
        }
    }
</script>

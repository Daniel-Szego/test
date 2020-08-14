<template>
    <div
            class="object-select relative"
            :class="{'opened' : isOpen }"
            aria-haspopup="true"
            :aria-expanded="isOpen"
            @click.prevent="isOpen = !isOpen">

        <slot name="selected" v-bind:value="value">
            <div class="flex items-center justify-between w-full" v-if="selected()">
                <button type="button" class="selected focus:outline-none text-left" v-text="value.name"></button>

                <i class="fa fa-chevron-down"></i>
            </div>
        </slot>

        <slot name="placeholder" v-bind:options="options" v-bind:placeholder="placeholder">
            <div class="flex items-center justify-between w-full" v-if="!selected()">
                <button type="button" class="placeholder focus:outline-none text-left" v-text="placeholder"></button>

                <i class="fa fa-chevron-down"></i>
            </div>
        </slot>

        <ul class="options absolute" v-show="isOpen">
            <li v-for="(option,index) in options"
                :key="index"
                class="option cursor-pointer"
                :class="{'active' : option === value, 'disabled' : option.disabled === true }"
                v-text="option.name"
                @click="select(option)">
            </li>
        </ul>
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
            placeholder: {
                type: String,
                default: 'Please select one...'
            },
            deselect: {
                type: Boolean,
                default: false,
            }
        },

        data() {
            return {
                isOpen: false,
            };
        },

        watch: {
            isOpen(isOpen) {
                if (isOpen) {
                    document.addEventListener('click', this.closeIfClickedOutside);
                }
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

            closeIfClickedOutside(event) {
                if (event.target.classList.contains('disabled')) {
                    this.isOpen = true;
                }

                if (!event.target.closest('.object-select')) {
                    this.isOpen = false;

                    document.removeEventListener('click', this.closeIfClickedOutside);
                }
            }
        }
    }
</script>

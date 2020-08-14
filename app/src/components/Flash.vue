<template>
    <transition name="fade">
        <div class="alert alert-flash px-3 py-2 shadow border-l-4 border-gray-600 "
             :class="'alert-'+level"
             role="alert"
             v-show="show">
            <div class="flex items-center justify-center">
                <div>
                    <h4 v-if="title" v-text="title" class="text-sm font-bold text-left"></h4>
                    <p v-if="body" v-text="body" class="text-left"></p>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: ['message'],

        data() {
            return {
                title: this.title,
                body: this.message,
                level: 'success',
                show: false
            }
        },
        created() {
            if (this.message) {
                this.flash();
            }

            window.events.$on('flash', data => this.flash(data));
        },
        methods: {
            flash(data) {
                if (data) {
                    this.title = data.title;
                    this.body = data.message;
                    this.level = data.level;
                }
                this.show = true;
                this.hide();
            },

            hide() {
                setTimeout(() => {
                    this.show = false;
                }, 3000);
            }
        }
    };
</script>

<style scoped>
    .alert-flash {
        position: fixed;
        right: 25px;
        bottom: 25px;
    }

    /**
     * Fade transition styles
     */
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
    {
        opacity: 0
    }

    /**
     * Bounce transition styles
     */
    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

    /**
     * Slide transition styles
     */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for <2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>

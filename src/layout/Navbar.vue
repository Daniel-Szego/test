<template>
    <header class="navbar">
        <div class="brand mr-auto">
            <router-link to="/">
                <img src="/images/logo.svg" alt="logo" class="h-10">
            </router-link>
        </div>

        <div class="flex items-center h-full px-6 border-l border-pale-grey-three">
            <!--            <div class="notification-toggle">-->
            <!--                <i class="fa fa-bell"></i>-->
            <!--                <span class="counter">6</span>-->
            <!--            </div>-->
            <i class="fa fa-user-astronaut text-3xl mr-3"></i>

            <div class="flex flex-col mr-5">
                <span class="capitalize text-base leading-none mb-1 mr-1">{{ user.name }}</span>
                <span class="capitalize text-xs leading-none text-battleship-grey">{{ user.role }}</span>
            </div>


            <!--            <div class="user-toggle mr-2">-->
            <!--                <img src="https://place-hold.it/100" alt="Profile Picture">-->
            <!--                <span class="mr-1">{{ user.name }}</span>-->
            <!--                <i class="fa fa-caret-down"></i>-->
            <!--            </div>-->

            <div class="notification-toggle" @click="logout">
                <i class="fa fa-power-off"></i>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        props: {
            user: {
                type: Object,
                required: true
            }
        },

        methods: {
            logout() {
                window.events.$emit('logout');
            }
        }
    }
</script>

<template>
    <div id="app" class="flex flex-col min-h-screen font-sans">
        <router-view></router-view>

        <flash></flash>
    </div>
</template>

<script>
    import "./sass/app.scss";
    import Flash from "./components/Flash";

    export default {
        name: 'app',
        components: {
            Flash
        }
    }
</script>

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';
import AuthFactory from "./services/Auth/AuthFactory";

Vue.use(VueRouter);

const router = new VueRouter(routes);

router.beforeEach((to, from, next) => {
    const Auth = AuthFactory.create();

    // If the user is not authenticated, drop to the login page
    if (to.meta.auth && !Auth.check()) {
        next({
            path: '/login',
            params: {nextUrl: to.fullPath}
        });
    }

    next();
});

Vue.config.productionTip = false;

window.events = new Vue();

window.flash = function (message, title = '', level = 'success') {
    window.events.$emit('flash', {message, title, level});
};

Vue.filter('number', function (value) {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
});

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import VueRouter from 'vue-router';
import { MdApp, MdButton, MdToolbar, MdContent, MdTabs } from 'vue-material/dist/components';
import App from './App.vue';
import 'vue-material/dist/vue-material.min.css';
import routes from "./routes";

Vue.use(MdApp);
Vue.use(MdButton);
Vue.use(MdToolbar);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(VueRouter);

Vue.component('router-link', Vue.options.components.RouterLink);
Vue.component('router-view', Vue.options.components.RouterView);

const router = new VueRouter({
    routes
});

new Vue({
    router,
    template: '<App/>',
    components: { 
        App 
    }
}).$mount('#app');
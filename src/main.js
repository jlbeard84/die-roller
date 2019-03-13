import Vue from 'vue';
import VueMaterial from 'vue-material';
import App from './App.vue';

import 'vue-material/dist/vue-material.min.css';

Vue.use(VueMaterial);

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});
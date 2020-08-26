import Vue from 'vue';
import App from './components/App.vue';
import router from './router';
import Vuelidate from 'vuelidate';
import Notifications from 'vue-notification';
import {store} from './store.js';


require('./bootstrap');



Vue.use(Vuelidate);
Vue.use(Notifications);


const app = new Vue({
    el: 'App',
    components: {
    	App,
    },
    store,
    router,
	created() {
        console.log('App  created .')
    }
});


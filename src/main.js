import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles.scss';

Vue.config.productionTip = false

export function createApp() {
    
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    });

    return { app, store, router };
}

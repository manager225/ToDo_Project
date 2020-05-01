import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from "./filters/date.filter";
import vuetify from './plugins/vuetify';
import 'vuetify/src/styles/main.sass'

Vue.config.productionTip = false;

Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import router from './router';
import store from './store';
import dateFilter from "./filters/date.filter";
import vuetify from './plugins/vuetify';
import messagePlugin from "./utils/message.plugin"
import 'vuetify/src/styles/main.sass';
import './registerServiceWorker'


Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import router from './router';
import store from './store';
import dateFilter from "./filters/date.filter";
import vuetify from './plugins/vuetify';
import messagePlugin from "./utils/message.plugin";
import VuetifyConfirm from 'vuetify-confirm'
import 'vuetify/src/styles/main.sass';
import './registerServiceWorker'

import "./assets/toast.css"
import "materialize-css/dist/js/materialize.min"
import "materialize-css/js/toasts"
import "vue-materialize/toast"
import "vue-materialize/toaster"

import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

import 'firebase/firestore'
Vue.config.productionTip = false;



Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);

Vue.use(VuetifyConfirm, {
  vuetify,
  buttonTrueText: 'Yes',
  buttonFalseText: 'Oh, no',
  color: 'warning',
  icon: 'warning',
  title: 'Warning',
  width: 600,
  // property: '$confirm'
});


const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBnzfG0_RAVgwUEuhRgVJNvNw-MHA9hQd4",
    authDomain: "todomarvel-f9315.firebaseapp.com",
    databaseURL: "https://todomarvel-f9315.firebaseio.com",
    projectId: "todomarvel-f9315",
    storageBucket: "todomarvel-f9315.appspot.com",
    messagingSenderId: "658451372663",
    appId: "1:658451372663:web:3ee2a7b7c335e43f314472",
    measurementId: "G-QFJMHNHZ6S"
  });


// const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
Vue.$db = db;
// Vue.prototype.$db = firebase.database();

// firebase.initializeApp(firebaseConfig);
let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app');
  }

});







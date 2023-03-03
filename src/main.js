import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {BootstrapVue,IconsPluing} from "bootstrap-vue";
//make bootsrap globally available for use
Vue.use(BootstrapVue);
Vue.use(IconsPluging);

import vuetify from './plugins/vuetify'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

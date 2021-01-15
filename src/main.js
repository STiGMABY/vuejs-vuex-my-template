import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "@/router";
import axios from "axios";
import store from './store'

Vue.config.productionTip = false

//что бы не импортировать в каждую компоненту axios, привяжем его к прототипу Vue
//теперь он будет доступен через this в каждом компоненте
Vue.prototype.axios = axios

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')


//аналог Render v React App.js
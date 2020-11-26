import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import './sass/index.scss'
import axios from 'axios'
import { playerId } from '@/services/ProfileService'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

axios.interceptors.request.use(function(config) {
  if (playerId) config.headers.profileId = playerId
  return config
})

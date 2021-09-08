import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import '@/scss/buefy.scss'
import store from '@/store' // short for @/store/index

Vue.use(Buefy)

Vue.config.productionTip = false

Vue.use(store)

new Vue({
  render: h => h(App),
}).$mount('#app')

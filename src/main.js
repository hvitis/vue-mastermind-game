import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import '@/scss/customColors.scss'
import store from '@/store' 

Vue.config.devtools = true

// Styling library
Vue.use(Buefy)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')


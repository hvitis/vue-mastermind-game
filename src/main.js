import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import '@/scss/customColors.scss'
import store from '@/store' 
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

Vue.use(VueLodash, { lodash: lodash })

Vue.config.devtools = true

// Styling library
Vue.use(Buefy)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')


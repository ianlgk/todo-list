import Vue from 'vue'
import ToDo from '@/view/ToDo.vue'
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(ToDo),
}).$mount('#app')

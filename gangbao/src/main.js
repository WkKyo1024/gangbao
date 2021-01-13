import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// import './element-variables.scss'
// import './assets/scss/_variables.scss'
import './assets/scss/style.scss'

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

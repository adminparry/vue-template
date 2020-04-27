import Vue from 'vue'
import App from './App'
import './styles/index.css'
import './plugins/element'
import './filters';
import router from './router'
import store from './store'

new Vue({

  router,
  store,
  // apolloProvider: createProvider(),
  render: h => h(App),

}).$mount('#app')


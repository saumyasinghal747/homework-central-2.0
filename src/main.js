import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'
import store from './store'
Vue.config.productionTip = false
Date.prototype.addDays = function(days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}
Date.prototype.addHours = function(hours) {
  const date = new Date(this.valueOf());
  date.setHours(this.getHours()+hours);
  return date;
}

Date.prototype.addMinutes = function(minutes) {
  const date = new Date(this.valueOf());
  date.setMinutes(this.getMinutes()+minutes);
  return date;
}
new Vue({
  router,
  mounted(){

    setInterval(function() {
      store.state.now = new Date()//.addMinutes(10)//.addHours(20)//.addMinutes(6)//simulation!
    },1000)
  },
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './Layout'
import router from './router'
import vueResource from "vue-resource"
import progressbar from 'vue-strap/src/Progressbar'
//import VueProgressBar from 'vue-progressbar'

//const options = {
//color: '#bffaf3',
//failedColor: '#874b4b',
//height:'2px',
//thickness: '5px',
//transition: {
//  speed: '0.2s',
//  opacity: '0.6s',
//  termination: 300
//},
//autoRevert: true,
//location: 'bottom',
//inverse: false
//}
//Vue.use(VueProgressBar, options)
//Vue.use(VueProgressBar, {
//color: 'rgb(143, 255, 199)',
//failedColor: 'red',
//height: '2px',
//autoRevert:true
//})


Vue.use(vueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout,progressbar }
})

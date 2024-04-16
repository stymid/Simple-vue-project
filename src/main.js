import App from "./App.vue"
import router from "./router"

// import Vue from 'vue'
// import { BootstrapVue } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'


import { createApp } from "vue"

const app = createApp(App);

// console.log(Vue)
app.use(router)
// Vue.use(BootstrapVue)
app.mount("#app")


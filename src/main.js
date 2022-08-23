import { createApp } from "vue";
import App from "./App.vue";
import router from './routes'
import './index.css'
import apolloProvider from './ApolloClient .js'
import Vue from 'vue'
 
//import material-icon scss
import "font-awesome/css/font-awesome.min.css";
 
//defined as global component
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);
 
const app = createApp(App);
app.use(router);
new Vue({
    router,
    apolloProvider,
    render: h => h(App)
  }).$mount('#app')

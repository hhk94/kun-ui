import Vue from 'vue'
import App from './App'

// #ifdef MP
import './components/index.scss'
// #endif

// #ifndef MP
import KunUI from "./components"
Vue.use(KunUI);
// #endif
Vue.config.productionTip = false

App.mpType = 'app'


const app = new Vue({
    ...App
})
app.$mount()

// console.log(app);

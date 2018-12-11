import Vue from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import * as tf from '@tensorflow/tfjs'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    mounted: async function() {
        let model = await tf.loadModel('model/model.json')
        Vue.prototype.$model = model
        
        let res = await fetch('model/class_names.txt')
        let text = await res.text()
        Vue.prototype.$classArray = text.split('\n')
    }
}).$mount('#app')

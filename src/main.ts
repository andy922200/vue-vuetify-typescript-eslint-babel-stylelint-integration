import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import cssVars from 'css-vars-ponyfill'
cssVars()
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

// vue-i18n settings start
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

import {
    messages, defaultLocale
} from './i18n/config/index'

const i18n = new VueI18n({
    messages,
    locale: defaultLocale,
    fallbackLocale: defaultLocale
})
// vue-i18n settings end

new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App)
}).$mount('#app')

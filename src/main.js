import { createApp } from 'vue'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css';
import 'aos/dist/aos.css';
import '@/assets/css/main.css'

import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue';
import router from '@/app/router';
import store from '@/app/store';
import App from '@/app/App.vue'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { tr } from 'vuetify/locale'
store.dispatch('adminModule/loadTokenFromStorage');

const vuetify = createVuetify({
  locale: {
    locale: 'tr',
    messages: {  tr },
  },
    components,
    directives,
  })

const app = createApp(App);

app
.use(store)
.use(vuetify)
.use(router)
.use( CkeditorPlugin )
.mount('#app')
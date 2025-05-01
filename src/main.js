import { createApp } from 'vue'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css';
import '@/assets/css/main.css'
import router from '@/app/router';
import store from '@/app/store';
import VueTheMask from 'vue-the-mask';
import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { tr } from 'vuetify/locale'
import App from '@/app/App.vue'
store.dispatch('loadTokenFromStorage');

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
.use(VueTheMask)
.use( CkeditorPlugin )
.use(vuetify)
.use(router)
.mount('#app')
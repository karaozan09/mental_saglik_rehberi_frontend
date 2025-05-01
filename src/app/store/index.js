import { createStore } from 'vuex'
import { appSessionStorage,appLocalStorage } from '@/app/utils/storage/storage';
import httpBase from '../utils/http/http';
import { formatChange } from "@/app/utils/format-change/format-change.js"
import { useRouter } from 'vue-router';
const modules = {};
const moduleFiles = import.meta.glob('./**/*Module.js', { eager: true }); // store içinde Module.js ile biten dosyaalarını buluyoruz

Object.entries(moduleFiles).forEach(([filePath, module]) => {
  const moduleName = filePath
    .replace(/(\.\/|Module\.js)/g, '') // './' ve 'Module.js' kısmını temizle
    .replace(/\//g, '_'); // Alt klasörleri "_" ile birleştir

  if (module.default) {
    modules[moduleName] = module.default;
    modules[moduleName].namespaced = true; 
  }
});

export default createStore({
  state: {
    loading: false,
    loginUser: appSessionStorage.getItem('loginUser') || null,
    token: appSessionStorage.getItem('token') || '',
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      httpBase.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    },

    //isim değişirsen setting modülünde değiş
    setloginUser(state,loginUser){
      loginUser.img = formatChange.formatUrl(loginUser.img);
      appSessionStorage.setItem('loginUser',loginUser);
      state.loginUser = loginUser
    },

    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions:{
    async login({commit},login){
      try {
          const response = await httpBase.post("/api/login", login);
          if(response.status == 200){
              const token = response.data.token;
              const loginUser = response.data.user;
              commit('setToken', token);
              commit('setloginUser', loginUser);
              appSessionStorage.setItem('token',token);
              return true
          }else{
              return false
          }
        } catch (error) {
          console.error('Error changing admin status:', error);
        }

    },

    logout({ commit }, router) {
      commit('setToken', null);
      appSessionStorage.clear();
      window.location.reload();
    },

    loadTokenFromStorage({ commit }) {
      const token = appSessionStorage.getItem('token');
      if (token) {
        commit('setToken', token);
      }
    }
  },
  getters:{
    isAuthenticated: state => !!state.token,
  },

  modules
})
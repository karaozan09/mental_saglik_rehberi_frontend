import axios from 'axios';
import store from '@/app/store';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const config = {
  baseURL: BASE_URL,
};

const httpBase = axios.create(config);

let loadingTimeout;

// İstek kesici
httpBase.interceptors.request.use(config => {
  // Yükleme durumunu başlat
  store.commit('setLoading', false);
  loadingTimeout = setTimeout(() => {
    store.commit('setLoading', true);
  }, 300);
  return config;
}, error => {
  clearTimeout(loadingTimeout);
  store.commit('setLoading', false);
  return Promise.reject(error);
});

// Yanıt kesici
httpBase.interceptors.response.use(response => {
  clearTimeout(loadingTimeout);
  store.commit('setLoading', false);
  return response;
}, error => {
  clearTimeout(loadingTimeout);
  store.commit('setLoading', false);
  return Promise.reject(error);
});

export default httpBase;
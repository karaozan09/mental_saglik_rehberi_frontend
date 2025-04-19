import { createStore } from 'vuex'
import userModule from './user/userModule';


export default createStore({
  state: {
    loading: false,
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions:{
  },
  getters:{

  },
  modules: {
    userModule
  }
})
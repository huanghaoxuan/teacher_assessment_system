import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { teacherid: null, loginStatus: false },
  mutations: {
    isLogin(state, status) {
      state.loginStatus = status;
    }
  },
  actions: {},
  plugins: [createPersistedState()]
});

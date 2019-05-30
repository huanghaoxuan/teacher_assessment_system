import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teacherid: null,
    loginStatus: false,
    identity: 0
  },
  mutations: {
    isLogin(state, status) {
      state.loginStatus = status;
    },
    changeIdentity(state, identity) {
      state.identity = identity;
    },
    changeTeacherid(state, teacherid) {
      state.teacherid = teacherid;
    }
  },
  actions: {},
  plugins: [createPersistedState({ storage: window.sessionStorage })]
});

import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teacherid: null,
    loginStatus: false,
    identity: 0 //0为未登录，1为老师，2为系管理员，3为学院管理员
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

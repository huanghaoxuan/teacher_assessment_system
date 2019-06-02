import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teacherid: null,
    loginStatus: false,
    dataIdentity: 0, //此为数据库储存的权限信息，仅在登陆时修改
    identity: 0 //0为未登录，1为老师，2为系管理员，3为学院管理员//此为当前展示的权限信息
  },
  mutations: {
    isLogin(state, status) {
      state.loginStatus = status;
    },
    changeIdentity(state, identity) {
      //填写权限信息
      state.dataIdentity = identity;
      state.identity = identity;
    },
    changeShowIdentity(state, identity) {
      //更改当前展示的权限信息
      state.identity = identity;
    },
    changeTeacherid(state, teacherid) {
      state.teacherid = teacherid;
    }
  },
  actions: {},
  plugins: [createPersistedState({ storage: window.sessionStorage })]
});

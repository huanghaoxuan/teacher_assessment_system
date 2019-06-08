import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teacherid: null,
    teachername: null,
    teachedepartmentDept: null, //用于展示当前教师所属学院
    dataTeachedepartmentDept: null, //当前教师所属学院
    loginStatus: false,
    dataIdentity: 0, //此为数据库储存的权限信息，仅在登录时修改
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
      //更改当前展示院系信息
      if (identity == 2) {
        state.teachedepartmentDept = state.dataTeachedepartmentDept;
      } else if (identity == 3) {
        state.teachedepartmentDept = null;
      }
    },
    changeTeacherid(state, teacherid) {
      state.teacherid = teacherid;
    },
    changeTeachername(state, teachername) {
      //更改教师姓名
      state.teachername = teachername;
    },
    changedataTeachedepartmentDept(state, dataTeachedepartmentDept) {
      //设置当前登陆用户的实际院系信息
      state.dataTeachedepartmentDept = dataTeachedepartmentDept;
      //设置当前展示的信息为院级管理员
      if (state.identity == 2) {
        state.teachedepartmentDept = dataTeachedepartmentDept;
      } else if (state.identity == 3) {
        state.teachedepartmentDept = null;
      }
    }
  },
  actions: {},
  plugins: [createPersistedState({ storage: window.sessionStorage })]
});

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/sidebar",
      name: "sidebar",
      component: () => import("./components/Sidebar.vue"),
      children: [
        {
          path: "/classroomTeaching/status",
          name: "classroomTeachingStatus",
          component: () =>
            import("./views/teacheringWork/classroomTeaching/status.vue")
        }
      ]
    },
    {
      path: "*",
      redirect: "/sidebar"
    }
  ]
});

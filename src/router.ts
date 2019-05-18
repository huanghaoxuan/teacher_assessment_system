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
            import("./views/teacheringWork/classroomTeaching/Status.vue")
        },
        {
          path: "/experimentalPracticeTeaching/status",
          name: "experimentalPracticeTeachingStatus",
          component: () =>
            import("./views/teacheringWork/experimentalPracticeTeaching/Status.vue")
        },
        {
          path: "/internshipGuide/status",
          name: "internshipGuideStatus",
          component: () =>
            import("./views/teacheringWork/internshipGuide/Status.vue")
        },
        {
          path: "/practicalTrainingGuidance/status",
          name: "practicalTrainingGuidanceStatus",
          component: () =>
            import("./views/teacheringWork/practicalTrainingGuidance/Status.vue")
        },
        {
          path: "/graduationDesignGuide/status",
          name: "graduationDesignGuideStatus",
          component: () =>
            import("./views/teacheringWork/graduationDesignGuide/Status.vue")
        }
      ]
    },
    {
      path: "*",
      redirect: "/sidebar"
    }
  ]
});

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  //mode: "history",
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
            import(
              "./views/teacheringWork/experimentalPracticeTeaching/Status.vue"
            )
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
            import(
              "./views/teacheringWork/practicalTrainingGuidance/Status.vue"
            )
        },
        {
          path: "/graduationDesignGuide/status",
          name: "graduationDesignGuideStatus",
          component: () =>
            import("./views/teacheringWork/graduationDesignGuide/Status.vue")
        },
        {
          path: "/guideTheGreatCreation/status",
          name: "guideTheGreatCreationStatus",
          component: () =>
            import("./views/teacheringWork/guideTheGreatCreation/Status.vue")
        },
        {
          path: "/guideContest/status",
          name: "guideContestStatus",
          component: () =>
            import("./views/teacheringWork/guideContest/Status.vue")
        },
        {
          path: "/teachingAwards/status",
          name: "teachingAwardsStatus",
          component: () =>
            import("./views/teacheringWork/teachingAwards/Status.vue")
        },
        {
          path: "/longitudinalTopicsProject/status",
          name: "longitudinalTopicsProjectStatus",
          component: () =>
            import(
              "./views/scientificResearch/longitudinalTopicsProject/Status.vue"
            )
        },
        {
          path: "/horizontalTopicProjects/status",
          name: "horizontalTopicProjectsStatus",
          component: () =>
            import(
              "./views/scientificResearch/horizontalTopicProjects/Status.vue"
            )
        },
        {
          path: "/publishPaper/status",
          name: "publishPaperStatus",
          component: () =>
            import("./views/scientificResearch/publishPaper/Status.vue")
        },
        {
          path: "/patentApplication/status",
          name: "patentApplicationStatus",
          component: () =>
            import("./views/scientificResearch/patentApplication/Status.vue")
        },
        {
          path: "/teachingTopics/status",
          name: "teachingTopicsStatus",
          component: () =>
            import("./views/teachingConstruction/teachingTopics/Status.vue")
        },
        {
          path: "/teachingActivities/status",
          name: "teachingActivitiesStatus",
          component: () =>
            import("./views/teachingConstruction/teachingActivities/Status.vue")
        },
        {
          path: "/comprehensiveReform/status",
          name: "comprehensiveReformStatus",
          component: () =>
            import(
              "./views/teachingConstruction/comprehensiveReform/Status.vue"
            )
        },
        {
          path: "/curriculumConstruction/status",
          name: "curriculumConstructionStatus",
          component: () =>
            import(
              "./views/teachingConstruction/curriculumConstruction/Status.vue"
            )
        },
        {
          path: "/textbookConstruction/status",
          name: "textbookConstructionStatus",
          component: () =>
            import(
              "./views/teachingConstruction/textbookConstruction/Status.vue"
            )
        },
        {
          path: "/laboratoryConstruction/status",
          name: "laboratoryConstructionStatus",
          component: () =>
            import(
              "./views/teachingConstruction/laboratoryConstruction/Status.vue"
            )
        },
        {
          path: "/admissions/status",
          name: "admissionsStatus",
          component: () => import("./views/publicAffairs/admissions/Status.vue")
        },
        {
          path: "/employment/status",
          name: "employmentStatus",
          component: () => import("./views/publicAffairs/employment/Status.vue")
        },
        {
          path: "/counselor/status",
          name: "counselorStatus",
          component: () => import("./views/publicAffairs/counselor/Status.vue")
        },
        {
          path: "/secondClassroom/status",
          name: "secondClassroomStatus",
          component: () =>
            import("./views/publicAffairs/secondClassroom/Status.vue")
        },
        {
          path: "/socialServices/status",
          name: "socialServicesStatus",
          component: () =>
            import("./views/publicAffairs/socialServices/Status.vue")
        },
        {
          path: "/annualReviewStatus/status",
          name: "annualReviewStatusStatus",
          component: () =>
            import("./views/others/annualReviewStatus/Status.vue")
        },
        {
          path: "/comprehensiveAwardWinning/status",
          name: "comprehensiveAwardWinningStatus",
          component: () =>
            import("./views/others/comprehensiveAwardWinning/Status.vue")
        },
        {
          path: "/files/status",
          name: "filesStatus",
          component: () => import("./views/others/files/Status.vue")
        },
        {
          path: "/othersemployment/status",
          name: "othersemploymentStatus",
          component: () => import("./views/others/employment/Status.vue")
        },
        {
          path: "/user/information",
          name: "userInformation",
          component: () => import("./views/user/Information.vue")
        },
        {
          path: "/score/contestAward/status",
          name: "scorecontestAwardStatus",
          component: () => import("./views/score/contestAward/Status.vue")
        },
        {
          path: "/score/governmentAchievementAward/status",
          name: "scoregovernmentAchievementAwardStatus",
          component: () =>
            import("./views/score/governmentAchievementAward/Status.vue")
        },
        {
          path: "/score/guideContest/status",
          name: "scoreGuideContestStatus",
          component: () => import("./views/score/guideContest/Status.vue")
        },
        {
          path: "/score/horizontalTopicProjects/status",
          name: "scorehorizontalTopicProjectsStatus",
          component: () =>
            import("./views/score/horizontalTopicProjects/Status.vue")
        },
        {
          path: "/score/longitudinalTopicsProject/status",
          name: "scorelongitudinalTopicsProjectStatus",
          component: () =>
            import("./views/score/longitudinalTopicsProject/Status.vue")
        },
        {
          path: "/score/notGovernmentAchievementAward/status",
          name: "scorenotGovernmentAchievementAwardStatus",
          component: () =>
            import("./views/score/notGovernmentAchievementAward/Status.vue")
        },
        {
          path: "/score/patentApplication/status",
          name: "scorepatentApplicationStatus",
          component: () => import("./views/score/patentApplication/Status.vue")
        },
        {
          path: "/score/publishPaper/status",
          name: "scorepublishPaperStatus",
          component: () => import("./views/score/publishPaper/Status.vue")
        },
        {
          path: "/user/editIdentity",
          name: "EditIdentityStatus",
          component: () => import("./views/user/EditIdentity.vue")
        },
        {
          path: "/user/updatePassword",
          name: "UpdatePassword",
          component: () => import("./views/user/UpdatePassword.vue")
        },
        {
          path: "/user/findUser",
          name: "findUser",
          component: () => import("./views/user/FindUser.vue")
        },
        {
          path: "/user/resetPassword",
          name: "findUser",
          component: () => import("./views/user/ResetPassword.vue")
        }
      ]
    },
    {
      path: "/setting",
      name: "setting",
      component: () => import("./components/setting//Setting.vue")
    },
    {
      path: "/forgetting",
      name: "forgetting",
      component: () => import("./components/setting/Forgetting.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./components/login/Login.vue"),
      meta: { allowBack: false }
    },
    {
      path: "*",
      redirect: "/sidebar"
    }
  ]
});

<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" :defaultSelectedKeys="['']" mode="inline">
        <a-sub-menu key="teacheringWork">
          <span slot="title"> <a-icon type="user" /><span>教学工作</span></span>
          <a-menu-item
            key="teacheringWork_classroomTeaching"
            @click="() => jump('/classroomTeaching/status')"
            >课堂教学</a-menu-item
          >
          <a-menu-item
            key="teacheringWork_experimentalPracticeTeaching"
            @click="() => jump('/experimentalPracticeTeaching/status')"
            >实验实践教学</a-menu-item
          >
          <a-menu-item
            key="teacheringWork_internshipGuide"
            @click="() => jump('/internshipGuide/status')"
            >实习指导</a-menu-item
          >
          <a-menu-item
            key="teacheringWork_practicalTrainingGuidance"
            @click="() => jump('/practicalTrainingGuidance/status')"
            >实训指导</a-menu-item
          >
          <a-menu-item
            key="teacheringWork_graduationDesignGuide"
            @click="() => jump('/graduationDesignGuide/status')"
            >毕业设计指导</a-menu-item
          >
          <a-menu-item
            key="teacheringWork_guideTheGreatCreation"
            @click="() => jump('/guideTheGreatCreation/status')"
            >指导大创</a-menu-item
          >
          <a-menu-item
            key="teacheringWork_guideContest"
            @click="() => jump('/guideContest/status')"
            >指导竞赛</a-menu-item
          >
          <a-menu-item
            key="teacheringWork_teachingAwards"
            @click="() => jump('/teachingAwards/status')"
            >教学获奖</a-menu-item
          >
        </a-sub-menu>

        <a-sub-menu key="scientificResearch">
          <span slot="title"> <a-icon type="user" /><span>科学研究</span></span>
          <a-menu-item
            key="scientificResearch_longitudinalTopicsProject"
            @click="() => jump('/longitudinalTopicsProject/status')"
            >纵向课题项目</a-menu-item
          >
          <a-menu-item
            key="scientificResearch_horizontalTopicProjects"
            @click="() => jump('/horizontalTopicProjects/status')"
            >横向课题项目</a-menu-item
          >
          <a-menu-item
            key="scientificResearch_publishPaper"
            @click="() => jump('/publishPaper/status')"
            >发表论文</a-menu-item
          >
          <a-menu-item
            key="scientificResearch_patentApplication"
            @click="() => jump('/patentApplication/status')"
            >申请专利</a-menu-item
          >
        </a-sub-menu>

        <a-sub-menu key="teachingConstruction">
          <span slot="title">
            <a-icon type="user" /><span>教改教研教学建设</span></span
          >
          <a-menu-item
            key="teachingConstruction_teachingTopics"
            @click="() => jump('/teachingTopics/status')"
            >承担教研教改课题</a-menu-item
          >
          <a-menu-item key="teachingConstruction_teachingActivities"
            >日常教研活动</a-menu-item
          >
          <a-menu-item key="teachingConstruction_comprehensiveReform"
            >专业建设、专业综合改革</a-menu-item
          >
          <a-menu-item key="teachingConstruction_curriculumConstruction"
            >课程建设</a-menu-item
          >
          <a-menu-item key="teachingConstruction_textbookConstruction"
            >教材建设</a-menu-item
          >
          <a-menu-item key="teachingConstruction_laboratoryConstruction"
            >实验室建设</a-menu-item
          >
        </a-sub-menu>

        <a-sub-menu key="publicAffairs">
          <span slot="title"> <a-icon type="user" /><span>公共事务</span></span>
          <a-menu-item key="publicAffairs_admissions">招生</a-menu-item>
          <a-menu-item key="publicAffairs_employment">就业</a-menu-item>
          <a-menu-item key="publicAffairs_counselor">辅导员</a-menu-item>
          <a-menu-item key="publicAffairs_secondClassroom"
            >第二课堂</a-menu-item
          >
          <a-menu-item key="publicAffairs_socialServices">社会服务</a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="others">
          <span slot="title"> <a-icon type="user" /><span>其他部分</span></span>
          <a-menu-item key="others_annualReviewStatus"
            >年度考核情况</a-menu-item
          >
          <a-menu-item key="others_comprehensiveAward-winning"
            >综合获奖</a-menu-item
          >
          <a-menu-item key="others_files"
            >任职以来起草、制定的重要文件、报告</a-menu-item
          >
          <a-menu-item key="others_employment"
            >任职以来所带已毕业班级就业率考研率违纪率情况</a-menu-item
          >
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <router-view />
    </a-layout>
  </a-layout>
</template>
<script>
import router from "../router";
export default {
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    jump(address) {
      this.$router.push(address);
    }
  }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>

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
          <a-menu-item
            key="teachingConstruction_teachingActivities"
            @click="() => jump('/teachingActivities/status')"
            >日常教研活动</a-menu-item
          >
          <a-menu-item
            key="teachingConstruction_comprehensiveReform"
            @click="() => jump('/comprehensiveReform/status')"
            >专业建设、专业综合改革</a-menu-item
          >
          <a-menu-item
            key="teachingConstruction_curriculumConstruction"
            @click="() => jump('/curriculumConstruction/status')"
            >课程建设</a-menu-item
          >
          <a-menu-item
            key="teachingConstruction_textbookConstruction"
            @click="() => jump('/textbookConstruction/status')"
            >教材建设</a-menu-item
          >
          <a-menu-item
            key="teachingConstruction_laboratoryConstruction"
            @click="() => jump('/laboratoryConstruction/status')"
            >实验室建设</a-menu-item
          >
        </a-sub-menu>

        <a-sub-menu key="publicAffairs">
          <span slot="title"> <a-icon type="user" /><span>公共事务</span></span>
          <a-menu-item
            key="publicAffairs_admissions"
            @click="() => jump('/admissions/status')"
            >招生</a-menu-item
          >
          <a-menu-item
            key="publicAffairs_employment"
            @click="() => jump('/employment/status')"
            >就业</a-menu-item
          >
          <a-menu-item
            key="publicAffairs_counselor"
            @click="() => jump('/counselor/status')"
            >辅导员</a-menu-item
          >
          <a-menu-item
            key="publicAffairs_secondClassroom"
            @click="() => jump('/secondClassroom/status')"
            >第二课堂</a-menu-item
          >
          <a-menu-item
            key="publicAffairs_socialServices"
            @click="() => jump('/socialServices/status')"
            >社会服务</a-menu-item
          >
        </a-sub-menu>

        <a-sub-menu key="others">
          <span slot="title"> <a-icon type="user" /><span>其他部分</span></span>
          <a-menu-item
            key="others_annualReviewStatus"
            @click="() => jump('/annualReviewStatus/status')"
            >年度考核情况</a-menu-item
          >
          <a-menu-item
            key="others_comprehensiveAwardWinning"
            @click="() => jump('/comprehensiveAwardWinning/status')"
            >综合获奖</a-menu-item
          >
          <a-menu-item key="others_files" @click="() => jump('/files/status')"
            >任职以来起草、制定的重要文件、报告</a-menu-item
          >
          <a-menu-item
            key="others_employment"
            @click="() => jump('/othersemployment/status')"
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

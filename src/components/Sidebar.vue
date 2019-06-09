/* eslint-disable vue/no-parsing-error */
<template>
  <a-layout
    id="components-layout-demo-custom-trigger"
    style="min-height: 100vh"
  >
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
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

        <a-sub-menu key="score" v-if="$store.state.identity != 1">
          <span slot="title">
            <a-icon type="user" /><span>得分信息查询</span></span
          >
          <a-menu-item
            key="score_contestAward"
            @click="() => jump('/score/contestAward/status')"
            >竞赛奖</a-menu-item
          >
          <a-menu-item
            key="score_governmentAchievementAward"
            @click="() => jump('/score/governmentAchievementAward/status')"
            >政府部门设立的教学（科研）成果奖</a-menu-item
          >
          <a-menu-item
            key="scores_guideContest"
            @click="() => jump('/score/guideContest/status')"
            >指导学生比赛（毕业设计）获奖</a-menu-item
          >
          <a-menu-item
            key="score_horizontalTopicProjects"
            @click="() => jump('/score/horizontalTopicProjects/status')"
            >横向研究课题项目</a-menu-item
          >
          <a-menu-item
            key="score_longitudinalTopicsProject"
            @click="() => jump('/score/longitudinalTopicsProject/status')"
            >纵向课题项目</a-menu-item
          >
          <a-menu-item
            key="score_notGovernmentAchievementAward"
            @click="() => jump('/score/notGovernmentAchievementAward/status')"
            >非政府部门组织的教学（科研）成果奖</a-menu-item
          >
          <a-menu-item
            key="score_patentApplication"
            @click="() => jump('/score/patentApplication/status')"
            >专利和发明</a-menu-item
          >
          <a-menu-item
            key="score_publishPaper"
            @click="() => jump('/score/publishPaper/status')"
            >发表论文</a-menu-item
          >
        </a-sub-menu>

        <a-sub-menu key="user" v-if="$store.state.identity >= 2">
          <span slot="title"> <a-icon type="user" /><span>用户管理</span></span>
          <a-menu-item
            key="user_editIdentity"
            @click="() => jump('/user/editIdentity')"
            v-if="$store.state.identity == 3"
          >
            <a-icon type="user" />账号权限管理</a-menu-item
          >
          <a-menu-item
            key="user_findUser"
            @click="() => jump('/user/findUser')"
            v-if="$store.state.identity >= 2"
          >
            <a-icon type="user" />账号查询</a-menu-item
          >
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-row>
          当前权限选择:&nbsp;&nbsp;
          <a-select style="width: 10%" @change="handleChange">
            <a-select-option value="1">教师填写权限</a-select-option>
            <a-select-option value="2" v-if="dataIdentity >= 2"
              >系级管理员</a-select-option
            >
            <a-select-option value="3" v-if="dataIdentity >= 3"
              >院级管理员</a-select-option
            >
          </a-select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a-col :span="17">
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="() => (collapsed = !collapsed)"
            />
          </a-col>
          <a-popover>
            <template slot="content">
              <a-list itemLayout="horizontal">
                <a-list-item>
                  <a-list-item-meta
                    ><a slot="title" @click="() => jump('/user/information')">
                      <a-avatar
                        size="small"
                        slot="avatar"
                        icon="user"
                      />&nbsp;&nbsp;个人中心</a
                    >
                  </a-list-item-meta>
                </a-list-item>
                <a-list-item>
                  <a-list-item-meta
                    ><a
                      slot="title"
                      @click="() => jump('/user/updatePassword')"
                    >
                      <a-avatar
                        size="small"
                        slot="avatar"
                        icon="user"
                      />&nbsp;&nbsp;修改密码</a
                    >
                  </a-list-item-meta>
                </a-list-item>
                <a-list-item>
                  <a-list-item-meta
                    ><a slot="title" @click="() => jump('/login')">
                      <a-avatar
                        size="small"
                        slot="avatar"
                        icon="poweroff"
                      />&nbsp;&nbsp;退出登录</a
                    >
                  </a-list-item-meta>
                </a-list-item>
              </a-list>
            </template>
            <a-avatar
              shape="square"
              size="large"
              :style="{ backgroundColor: color, verticalAlign: 'middle' }"
              >{{ avatarValue }}</a-avatar
            >
          </a-popover>
        </a-row>
      </a-layout-header>
      <router-view v-if="alive" />
    </a-layout>
  </a-layout>
</template>
<script>
import router from "../router";
export default {
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      alive: true,
      dataIdentity: this.$store.state.dataIdentity,
      avatarValue: "您",
      color: "#f56a00",
      collapsed: false
    };
  },
  methods: {
    jump(address) {
      this.$router.push(address);
    },
    handleChange(value) {
      this.$store.commit("changeShowIdentity", value);
      this.reload();
    },
    reload() {
      this.alive = false;
      this.$nextTick(() => {
        this.alive = true;
      });
    }
  }
};
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>

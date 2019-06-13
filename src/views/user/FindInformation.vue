<template>
  <div>
    <a-button type="primary" @click="showModal">查看详细信息</a-button>
    <a-modal
      title="正在修改课堂教学内容"
      :visible="visible"
      @ok="handleOk"
      cancelText="返回"
      :maskClosable="false"
      width="50%"
      @cancel="handleCancel"
    >
      <a-list itemLayout="horizontal">
        <a-list-item slot="">
          <a-list-item-meta :description="list.name">
            <h3 slot="title">姓名:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.sex">
            <h3 slot="title">性别:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.birthday">
            <h3 slot="title">出生年月:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.academicQualifications">
            <h3 slot="title">学历:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.academicDegrees">
            <h3 slot="title">学位:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.duties">
            <h3 slot="title">职务:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.politicalLandscape">
            <h3 slot="title">政治面貌:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.classTeacher">
            <h3 slot="title">工号:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.idcard">
            <h3 slot="title">身份证号码:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.departmentDept">
            <h3 slot="title">所在学院:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.enterSchoolTime">
            <h3 slot="title">进校时间:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.universityYear">
            <h3 slot="title">高校工龄:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.undergraduateGraduationSchool">
            <h3 slot="title">本科毕业学校:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.academicQualificationsSchool">
            <h3 slot="title">获得最高学历的院校或机构:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.academicQualificationsTime">
            <h3 slot="title">最高学历取得时间:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.academicDegreesSchool">
            <h3 slot="title">获得最高学位的院校或机构:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.academicDegreesTime">
            <h3 slot="title">最高学位取得时间:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.studyProfessional">
            <h3 slot="title">所学专业:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.teacherQualificationCertificate">
            <h3 slot="title">教师资格证:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.preJobTraining">
            <h3 slot="title">岗前培训:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.putonghuaExam">
            <h3 slot="title">普通话考试:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.professionalTechnologyDuties">
            <h3 slot="title">现专业技术职务:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta
            :description="list.professionalTechnologyDutiesTime"
          >
            <h3 slot="title">现专业技术职务取得时间:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.professionalStudyDirection">
            <h3 slot="title">现从事专业研究方向:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.professionalStudyDirectionYear">
            <h3 slot="title">现从事专业研究方向年限:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.continuingEducationSituation">
            <h3 slot="title">继续教育情况:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.engineeringPracticeExperience">
            <h3 slot="title">工程实践经历:</h3>
          </a-list-item-meta>
        </a-list-item>

        <a-list-item slot="">
          <a-list-item-meta :description="list.guidanceStudentPracticeNumber">
            <h3 slot="title">指导学生实践轮数:</h3>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </a-modal>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  props: {
    list: {}
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.visible = false;
    },
    handleCancel(e) {
      this.visible = false;
    }
  }
};
</script>

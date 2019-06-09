<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card title="用户查询（工号或者姓名查询）">
      <a-input-search
        placeholder="输入工号查询"
        style="width: 200px"
        @search="onSearchByTeachid"
      />
      <br />
      <br />
      <a-input-search
        placeholder="输入姓名查询"
        style="width: 200px"
        @search="onSearchByName"
      />
      <br />
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
    </a-card>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  data() {
    return {
      list: {}
    };
  },
  methods: {
    onSearchByTeachid(value) {
      this.axios
        .get(
          "/userinformation/selectUserinformation",
          {
            params: {
              classTeacher: value
            }
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(
          function(res) {
            //console.log(res.data);
            this.list = res.data;
            if (res.data == "") {
              this.$notification.error({
                message: "无用户满足查询条件"
              });
            }
          }.bind(this)
        )
        .catch(
          function(err) {
            if (err.response) {
              //console.log(err.response);
              //控制台打印错误返回的内容
            }
            //bind(this)可以不用
          }.bind(this)
        );
    },
    onSearchByName(value) {
      this.axios
        .get(
          "/userinformation/selectUserinformation/name",
          {
            params: {
              name: value
            }
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(
          function(res) {
            //console.log(res.data);
            this.list = res.data;
            if (res.data == "") {
              this.$notification.error({
                message: "无用户满足查询条件"
              });
            }
          }.bind(this)
        )
        .catch(
          function(err) {
            if (err.response) {
              //console.log(err.response);
              //控制台打印错误返回的内容
            }
            //bind(this)可以不用
          }.bind(this)
        );
    }
  }
};
</script>

<template>
  <div>
    <a-button type="primary" @click="showModal">修改</a-button>
    <a-modal
      title="正在修改个人信息"
      :visible="visible"
      @ok="handleOk"
      okText="确认修改"
      cancelText="取消"
      :maskClosable="false"
      :confirmLoading="confirmLoading"
      width="60%"
      @cancel="handleCancel"
    >
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item
          label="姓名"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'name',
              { rules: [{ required: true, message: '姓名不能为空' }] }
            ]"
            placeholder="请输入姓名'"
          />
        </a-form-item>

        <a-form-item
          label="性别"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'sex',
              { rules: [{ required: true, message: '性别不能为空' }] }
            ]"
          >
            <a-radio value="男">
              男
            </a-radio>
            <a-radio value="女">
              女
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="出生年月"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-date-picker
            v-decorator="[
              'birthday',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '出生年月不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入出生年月"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="学历"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-select
            v-decorator="[
              'academicQualifications',
              { rules: [{ required: true, message: '学历不能为空' }] }
            ]"
            placeholder="请输入学历"
          >
            <a-select-option value="无">
              其他
            </a-select-option>
            <a-select-option value="小学">
              小学
            </a-select-option>
            <a-select-option value="初中">
              初中
            </a-select-option>
            <a-select-option value="高中/职中/中专">
              高中/职中/中专
            </a-select-option>
            <a-select-option value="大学专科">
              大学专科
            </a-select-option>
            <a-select-option value="大学本科">
              大学本科
            </a-select-option>
            <a-select-option value="硕士研究生">
              硕士研究生
            </a-select-option>
            <a-select-option value="博士研究生">
              博士研究生
            </a-select-option>
            <a-select-option value="博士后">
              博士后
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="学位"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-select
            v-decorator="[
              'academicDegrees',
              { rules: [{ required: true, message: '学位不能为空' }] }
            ]"
            placeholder="请输入学位"
          >
            <a-select-option value="无">
              无
            </a-select-option>
            <a-select-option value="大专文凭（副学士学位）">
              大专文凭（副学士学位）
            </a-select-option>
            <a-select-option value="学士学位">
              学士学位
            </a-select-option>
            <a-select-option value="硕士学位">
              硕士学位
            </a-select-option>
            <a-select-option value="博士学位">
              博士学位
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="职务"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'duties',
              { rules: [{ required: true, message: '职务不能为空' }] }
            ]"
            placeholder="请输入职务'"
          />
        </a-form-item>

        <a-form-item
          label="政治面貌"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-select
            v-decorator="[
              'politicalLandscape',
              { rules: [{ required: true, message: '政治面貌不能为空' }] }
            ]"
            placeholder="请输入政治面貌"
          >
            <a-select-option value="中共党员">
              中共党员
            </a-select-option>
            <a-select-option value="中共预备党员">
              中共预备党员
            </a-select-option>
            <a-select-option value="共青团员">
              共青团员
            </a-select-option>
            <a-select-option value="民革党员">
              民革党员
            </a-select-option>
            <a-select-option value="民盟盟员">
              民盟盟员
            </a-select-option>
            <a-select-option value="民建会员">
              民建会员
            </a-select-option>
            <a-select-option value="民进会员">
              民进会员
            </a-select-option>
            <a-select-option value="农工党党员">
              农工党党员
            </a-select-option>
            <a-select-option value="致公党党员">
              致公党党员
            </a-select-option>
            <a-select-option value="九三学社社员">
              九三学社社员
            </a-select-option>
            <a-select-option value="台盟盟员">
              台盟盟员
            </a-select-option>
            <a-select-option value="无党派人士">
              无党派人士
            </a-select-option>
            <a-select-option value="群众">
              群众
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="工号"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'classTeacher',
              { rules: [{ required: true, message: '工号不能为空' }] }
            ]"
            placeholder="请输入工号'"
            :disabled="true"
          />
        </a-form-item>

        <a-form-item
          label="所在学院"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-select
            v-decorator="[
              'departmentDept',
              { rules: [{ required: true, message: '所在学院不能为空' }] }
            ]"
            placeholder="请输入所在学院"
          >
            <a-select-option value="电子与计算机工程学院">
              电子与计算机工程学院
            </a-select-option>
            <a-select-option value="建筑与艺术设计学院">
              建筑与艺术设计学院
            </a-select-option>
            <a-select-option value="土木与交通工程学院">
              土木与交通工程学院
            </a-select-option>
            <a-select-option value="机械与电气工程学院">
              机械与电气工程学院
            </a-select-option>
            <a-select-option value="制药与化学工程学院">
              制药与化学工程学院
            </a-select-option>
            <a-select-option value="经济管理学院">
              经济管理学院
            </a-select-option>
            <a-select-option value="基础部">
              基础部
            </a-select-option>
            <a-select-option value="党政办">
              党政办
            </a-select-option>
            <a-select-option value="保卫处">
              保卫处
            </a-select-option>
            <a-select-option value="组织人事部">
              组织人事部
            </a-select-option>
            <a-select-option value="教务处">
              教务处
            </a-select-option>
            <a-select-option value="学生处">
              学生处
            </a-select-option>
            <a-select-option value="团委">
              团委
            </a-select-option>
            <a-select-option value="财务与资产管理处">
              财务与资产管理处
            </a-select-option>
            <a-select-option value="后勤管理处">
              后勤管理处
            </a-select-option>
            <a-select-option value="质量保证部">
              质量保证部
            </a-select-option>
            <a-select-option value="发展合作处">
              发展合作处
            </a-select-option>
            <a-select-option value="图档信息中心">
              图档信息中心
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="进校时间"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-date-picker
            v-decorator="[
              'enterSchoolTime',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '进校时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入进校时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="高校工龄"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'universityYear',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '高校工龄输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入高校工龄"
            addonAfter="年"
          />
        </a-form-item>

        <a-form-item
          label="本科毕业学校"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'undergraduateGraduationSchool',
              { rules: [{ required: true, message: '本科毕业学校不能为空' }] }
            ]"
            placeholder="请输入本科毕业学校'"
          />
        </a-form-item>

        <a-form-item
          label="获得最高学历的院校或机构"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'academicQualificationsSchool',
              {
                rules: [
                  {
                    required: true,
                    message: '获得最高学历的院校或机构不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入获得最高学\r\n历的院校或机构'"
          />
        </a-form-item>

        <a-form-item
          label="最高学历取得时间"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-date-picker
            v-decorator="[
              'academicQualificationsTime',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '最高学历取得时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入最高学历取得时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="获得最高学位的院校或机构"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'academicDegreesSchool',
              {
                rules: [
                  {
                    required: true,
                    message: '获得最高学位的院校或机构不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入获得最高学位的院校或机构'"
          />
        </a-form-item>

        <a-form-item
          label="最高学位取得时间"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-date-picker
            v-decorator="[
              'academicDegreesTime',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '最高学位取得时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入最高学位取得时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="身份证号码"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'idcard',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '身份证号码输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入身份证号码"
          />
        </a-form-item>

        <a-form-item
          label="所学专业"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'studyProfessional',
              { rules: [{ required: true, message: '所学专业不能为空' }] }
            ]"
            placeholder="请输入所学专业'"
          />
        </a-form-item>

        <a-form-item
          label="教师资格证"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-checkbox-group
            v-decorator="[
              'teacherQualificationCertificate',
              { rules: [{ required: true, message: '教师资格证不能为空' }] }
            ]"
            placeholder="请输入教师资格证'"
            style="width: 100%;"
          >
            <a-row>
              <a-col :span="24">
                <a-checkbox value="幼儿园教师资格证">
                  幼儿园教师资格证
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="小学教师资格证">
                  小学教师资格证
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="初级中学教师资格证">
                  初级中学教师资格证
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="高级中学教师资格证">
                  高级中学教师资格证
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="中等职业学校教师资格证">
                  中等职业学校教师资格证
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="中等职业学校实习指导教师资格证">
                  中等职业学校实习指导教师资格证
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="高等学校教师资格证">
                  高等学校教师资格证
                </a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </a-form-item>

        <a-form-item
          label="岗前培训"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'preJobTraining',
              { rules: [{ required: true, message: '岗前培训不能为空' }] }
            ]"
            placeholder="请输入岗前培训'"
          >
            <a-radio value="通过">
              通过
            </a-radio>
            <a-radio value="不通过">
              不通过
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="普通话考试"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-select
            v-decorator="[
              'putonghuaExam',
              { rules: [{ required: true, message: '普通话考试不能为空' }] }
            ]"
            placeholder="请输入普通话考试"
          >
            <a-select-option value="无">
              无
            </a-select-option>
            <a-select-option value="一级甲等">
              一级甲等
            </a-select-option>
            <a-select-option value="一级乙等">
              一级乙等
            </a-select-option>
            <a-select-option value="二级甲等">
              二级甲等
            </a-select-option>
            <a-select-option value="二级乙等">
              二级乙等
            </a-select-option>
            <a-select-option value="三级甲等">
              三级甲等
            </a-select-option>
            <a-select-option value="三级乙等">
              三级乙等
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="现专业技术职务"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'professionalTechnologyDuties',
              {
                rules: [
                  {
                    required: true,
                    message: '现专业技术职务不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入现专业技术职务"
          />
        </a-form-item>

        <a-form-item
          label="现专业技术职务取得时间"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-date-picker
            v-decorator="[
              'professionalTechnologyDutiesTime',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '现专业技术职务取得时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入现专业技术职务取得时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="现从事专业研究方向"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'professionalStudyDirection',
              {
                rules: [
                  {
                    required: true,
                    message: '现从事专业研究方向不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入现从事专业研究方向"
          />
        </a-form-item>

        <a-form-item
          label="现从事专业研究方向年限"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'professionalStudyDirectionYear',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '现从事专业研究方向年限输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入现从事专业研究方向年限'"
            addonAfter="年"
          />
        </a-form-item>

        <a-form-item
          label="继续教育情况"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'continuingEducationSituation',
              {
                rules: [
                  {
                    required: true,
                    message: '继续教育情况不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入继续教育情况"
          />
        </a-form-item>

        <a-form-item
          label="工程实践经历"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'engineeringPracticeExperience',
              {
                rules: [
                  {
                    required: true,
                    message: '工程实践经历不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入工程实践经历"
          />
        </a-form-item>

        <a-form-item
          label="指导学生实践轮数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'guidanceStudentPracticeNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '指导学生实践轮数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入指导学生实践轮数'"
            addonAfter="轮"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: {
    editData: {}
  },
  data() {
    return {
      visible: false,
      confirmLoading: false,
      form: this.$form.createForm(this)
    };
  },
  methods: {
    showModal() {
      this.visible = true;
      //console.log(this.editData);
      setTimeout(() => {
        if (
          this.editData.teacherQualificationCertificate != null &&
          this.editData.teacherQualificationCertificate != "null"
        ) {
          this.form.setFieldsValue(this.editData);
          this.form.setFieldsValue({
            teacherQualificationCertificate: this.editData.teacherQualificationCertificate.split(
              "、"
            ),
            birthday: moment(this.editData.birthday, "YYYY-MM-DD"),
            enterSchoolTime: moment(
              this.editData.enterSchoolTime,
              "YYYY-MM-DD"
            ),
            academicQualificationsTime: moment(
              this.editData.academicQualificationsTime,
              "YYYY-MM-DD"
            ),
            academicDegreesTime: moment(
              this.editData.academicDegreesTime,
              "YYYY-MM-DD"
            ),
            professionalTechnologyDutiesTime: moment(
              this.editData.professionalTechnologyDutiesTime,
              "YYYY-MM-DD"
            )
          });
        } else {
          this.form.setFieldsValue({
            classTeacher: this.editData.classTeacher
          });
        }
      }, 10);
    },
    handleOk(e) {
      this.confirmLoading = true;
      this.handleSubmit(e);
    },
    handleCancel(e) {
      this.visible = false;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          var teacherQualificationCertificateStr = "";
          for (
            let index = 0;
            index < values.teacherQualificationCertificate.length;
            index++
          ) {
            teacherQualificationCertificateStr =
              teacherQualificationCertificateStr +
              values.teacherQualificationCertificate[index] +
              "、";
          }
          const fieldsValue = {
            ...values,
            birthday: values["birthday"].format("YYYY-MM-DD"),
            enterSchoolTime: values["enterSchoolTime"].format("YYYY-MM-DD"),
            academicQualificationsTime: values[
              "academicQualificationsTime"
            ].format("YYYY-MM-DD"),
            academicDegreesTime: values["academicDegreesTime"].format(
              "YYYY-MM-DD"
            ),
            professionalTechnologyDutiesTime: values[
              "professionalTechnologyDutiesTime"
            ].format("YYYY-MM-DD"),
            teacherQualificationCertificate: teacherQualificationCertificateStr
          };
          //console.log(fieldsValue);
          {
            this.axios
              .post(
                "/userinformation/updateByPrimaryKey",
                this.qs.stringify({
                  id: this.editData.id,
                  ...fieldsValue
                }),
                {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                }
              )
              .then(
                function(res) {
                  //console.log(res.data);
                  //每条数据需要一个唯一的key值
                  this.visible = false;
                  this.$router.go(0);
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

        this.confirmLoading = false;
      });
    }
  }
};
</script>

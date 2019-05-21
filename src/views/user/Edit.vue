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
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'techerid',
              { rules: [{ required: true, message: '工号不能为空' }] }
            ]"
            placeholder="请输入工号'"
            :disabled="true"
          />
        </a-form-item>

        <a-form-item
          label="所在系部"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-select
            v-decorator="[
              'departmentDept',
              { rules: [{ required: true, message: '所在系部不能为空' }] }
            ]"
            placeholder="请输入所在系部"
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
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
            placeholder="请输入获得最高学历的院校或机构'"
          />
        </a-form-item>

        <a-form-item
          label="获得最高学位的院校或机构"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
          label="身份证号码"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
          label="是否"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'yesorno',
              { rules: [{ required: true, message: '是否不能为空' }] }
            ]"
          >
            <a-radio value="新开课">
              新开课
            </a-radio>
            <a-radio value="整合课">
              整合课
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="学分"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'credits',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '学分输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入学分"
            addonAfter="分"
          />
        </a-form-item>

        <a-form-item
          label="学时"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'hours',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '学时有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入学时"
            addonAfter="小时"
          />
        </a-form-item>

        <a-form-item
          label="授课班个数"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'classesNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '授课班个数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入授课班个数'"
            addonAfter="个"
          />
        </a-form-item>

        <a-form-item
          label="平行班个数"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'parallelClassesNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '平行班个数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入平行班个数'"
            addonAfter="个"
          />
        </a-form-item>

        <a-form-item
          label="作业次数"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'homeworkNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '作业次数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入作业次数'"
            addonAfter="次"
          />
        </a-form-item>

        <a-form-item
          label="批改次数"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'correctingNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '批改次数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入批改次数'"
            addonAfter="次"
          />
        </a-form-item>

        <a-form-item
          label="答疑次数"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'answeringNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '答疑次数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入答疑次数'"
            addonAfter="次"
          />
        </a-form-item>

        <a-form-item
          label="备注"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-textarea
            v-decorator="[
              'note',
              { rules: [{ required: true, message: '备注不能为空' }] }
            ]"
            placeholder="请输入备注'"
          />
        </a-form-item>

        <a-form-item
          label="学年"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'year',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '学年输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入学年'"
            addonAfter="年"
          />
        </a-form-item>

        <a-form-item
          label="学期"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-select
            v-decorator="[
              'semester',
              { rules: [{ required: true, message: '请选择学期' }] }
            ]"
            placeholder="请选择学期"
          >
            <a-select-option value="1">
              第一学期
            </a-select-option>
            <a-select-option value="2">
              第二学期
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
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
      console.log(this.editData);
      setTimeout(() => {
        this.form.setFieldsValue({
          name: this.editData.name,
          character: this.editData.character,
          type: this.editData.type,
          yesorno: this.editData.yesorno,
          credits: this.editData.credits,
          hours: this.editData.hours,
          classesNumber: this.editData.classesNumber,
          parallelClassesNumber: this.editData.parallelClassesNumber,
          homeworkNumber: this.editData.homeworkNumber,
          correctingNumber: this.editData.correctingNumber,
          answeringNumber: this.editData.answeringNumber,
          note: this.editData.note,
          year: this.editData.year,
          semester: this.editData.semester
        });
      }, 0);
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
          const fieldsValue = {
            ...values,
            birthday: values["birthday"].format("YYYY-MM-DD"),
            enterSchoolTime: values["enterSchoolTime"].format("YYYY-MM-DD")
          };
          console.log(fieldsValue);
        }
        this.confirmLoading = false;
      });
    }
  }
};
</script>

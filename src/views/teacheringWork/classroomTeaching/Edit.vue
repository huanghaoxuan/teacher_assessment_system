<template>
  <div>
    <a-button type="primary" @click="showModal">修改</a-button>
    <a-modal
      title="正在修改课堂教学内容"
      :visible="visible"
      @ok="handleOk"
      okText="确认修改"
      cancelText="取消"
      :maskClosable="false"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item
          label="课程名称"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'name',
              { rules: [{ required: true, message: '课程名称不能为空' }] }
            ]"
            placeholder="请输入课程名称'"
          />
        </a-form-item>
        <a-form-item
          label="课程性质"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'character',
              { rules: [{ required: true, message: '课程性质不能为空' }] }
            ]"
          >
            <a-radio value="通识基础">
              通识基础
            </a-radio>
            <a-radio value="专业基础">
              专业基础
            </a-radio>
            <a-radio value="专业主干">
              专业主干
            </a-radio>
            <a-radio value="专业方向">
              专业方向
            </a-radio>
            <a-radio value="素质类选修课">
              素质类选修课
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="授课形式"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'type',
              { rules: [{ required: true, message: '授课形式不能为空' }] }
            ]"
          >
            <a-radio value="讲授为主">
              讲授为主
            </a-radio>
            <a-radio value="理论和实践对半">
              理论和实践对半
            </a-radio>
            <a-radio value="实践为主">
              实践为主
            </a-radio>
          </a-radio-group>
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
              { rules: [{ required: true, message: '学分不能为空' }] }
            ]"
            placeholder="请输入学分'"
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
              { rules: [{ required: true, message: '学时不能为空' }] }
            ]"
            placeholder="请输入学时'"
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
              { rules: [{ required: true, message: '授课班个数不能为空' }] }
            ]"
            placeholder="请输入授课班个数'"
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
              { rules: [{ required: true, message: '平行班个数不能为空' }] }
            ]"
            placeholder="请输入平行班个数'"
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
              { rules: [{ required: true, message: '作业次数不能为空' }] }
            ]"
            placeholder="请输入作业次数'"
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
              { rules: [{ required: true, message: '批改次数不能为空' }] }
            ]"
            placeholder="请输入批改次数'"
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
              { rules: [{ required: true, message: '答疑次数不能为空' }] }
            ]"
            placeholder="请输入答疑次数'"
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
          <a-input-number
            v-decorator="[
              'input-number',
              { rules: [{ required: true, message: '学年输入有误' }] }
            ]"
            placeholder="请输入学年'"
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
          credits: this.editData.credits,
          hours: this.editData.hours,
          classesNumber: this.editData.classesNumber,
          parallelClassesNumber: this.editData.parallelClassesNumber,
          homeworkNumber: this.editData.homeworkNumber,
          correctingNumber: this.editData.correctingNumber,
          answeringNumber: this.editData.answeringNumber,
          note: this.editData.note,
          semester: this.editData.semester
        });
      }, 0);
    },
    handleOk(e) {
      this.ModalText = "The modal will be closed after two seconds";
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
          console.log(values);
        }
      });
    }
  }
};
</script>

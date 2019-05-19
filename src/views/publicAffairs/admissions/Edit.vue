<template>
  <div>
    <a-button type="primary" @click="showModal">修改</a-button>
    <a-modal
      title="正在修改招生内容"
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
          label="招生点负责人"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'admissionsHeader',
              { rules: [{ required: true, message: '招生点负责人不能为空' }] }
            ]"
            placeholder="请输入招生点负责人'"
          />
        </a-form-item>

        <a-form-item
          label="参与招生"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'admissionsHeader',
              { rules: [{ required: true, message: '参与招生不能为空' }] }
            ]"
            placeholder="请输入参与招生'"
          />
        </a-form-item>

        <a-form-item
          label="招生表现"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'performance',
              { rules: [{ required: true, message: '招生表现不能为空' }] }
            ]"
            placeholder="请输入招生表现'"
          />
        </a-form-item>

        <a-form-item
          label="招生业绩"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'result',
              { rules: [{ required: true, message: '招生业绩不能为空' }] }
            ]"
            placeholder="请输入招生业绩'"
          />
        </a-form-item>

        <a-form-item
          label="招生地点"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'address',
              { rules: [{ required: true, message: '招生地点不能为空' }] }
            ]"
            placeholder="请输入招生地点'"
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
          admissionsHeader: this.editData.admissionsHeader,
          hasAdmission: this.editData.hasAdmission,
          performance: this.editData.performance,
          result: this.editData.result,
          address: this.editData.address,
          note: this.editData.note,
          year: this.editData.year
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
          console.log(values);
        }
        this.confirmLoading = false;
      });
    }
  }
};
</script>

<template>
  <div>
    <a-button type="primary" @click="showModal">修改</a-button>
    <a-modal
      title="正在修改教学获奖内容"
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
          label="获奖名称"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'name',
              { rules: [{ required: true, message: '获奖名称不能为空' }] }
            ]"
            placeholder="请输入获奖名称'"
          />
        </a-form-item>

        <a-form-item
          label="获奖类型"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'type',
              { rules: [{ required: true, message: '获奖类型不能为空' }] }
            ]"
            placeholder="请输入获奖类型"
          >
            <a-radio value="竞赛奖">
              竞赛奖
            </a-radio>
            <a-radio value="政府成果奖">
              政府成果奖
            </a-radio>
            <a-radio value="非政府成果奖">
              非政府成果奖
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="获奖级别"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'level',
              { rules: [{ required: true, message: '获奖级别不能为空' }] }
            ]"
            placeholder="请输入获奖级别"
          >
            <a-radio value="国家级">
              国家级
            </a-radio>
            <a-radio value="省部级">
              省部级
            </a-radio>
            <a-radio value="大区级">
              大区级
            </a-radio>
            <a-radio value="市局级">
              市局级
            </a-radio>
            <a-radio value="院级">
              院级
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="获奖等级"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'grade',
              { rules: [{ required: true, message: '获奖等级不能为空' }] }
            ]"
            placeholder="请输入获奖等级"
          >
            <a-radio value="特等奖">
              特等奖
            </a-radio>
            <a-radio value="一等奖">
              一等奖
            </a-radio>
            <a-radio value="二等奖">
              二等奖
            </a-radio>
            <a-radio value="三等奖">
              三等奖
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="指导形式"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'character',
              { rules: [{ required: true, message: '指导形式不能为空' }] }
            ]"
            placeholder="请输入指导形式"
          >
            <a-radio value="项目负责人">
              项目负责人
            </a-radio>
            <a-radio value="主要贡献者">
              主要贡献者
            </a-radio>
            <a-radio value="参与者">
              参与者
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="参赛人数"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'participantsNumber',
              { rules: [{ required: true, message: '参赛人数不能为空' }] }
            ]"
            placeholder="请输入参赛人数'"
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
          winnersNumber: this.editData.winnersNumber,
          note: this.editData.note,
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
          console.log(values);
        }
        this.confirmLoading = false;
      });
    }
  }
};
</script>

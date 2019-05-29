<template>
  <div>
    <a-button type="primary" @click="showModal">修改</a-button>
    <a-modal
      title="正在修改承担教研教改课题内容"
      :visible="visible"
      @ok="handleOk"
      okText="确认修改"
      cancelText="取消"
      :maskClosable="false"
      :confirmLoading="confirmLoading"
      width="50%"
      @cancel="handleCancel"
    >
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item
          label="课题名称"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'name',
              { rules: [{ required: true, message: '课题名称不能为空' }] }
            ]"
            placeholder="请输入课题名称'"
          />
        </a-form-item>

        <a-form-item
          label="课题来源"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-select
            v-decorator="[
              'source',
              { rules: [{ required: true, message: '课题来源不能为空' }] }
            ]"
            placeholder="请输入课题来源'"
          >
            <a-select-option value="国家级">
              国家级
            </a-select-option>
            <a-select-option value="省部级">
              省部级
            </a-select-option>
            <a-select-option value="市局级">
              市局级
            </a-select-option>
            <a-select-option value="院级">
              院级
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="任务角色"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-select
            v-decorator="[
              'character',
              { rules: [{ required: true, message: '任务角色不能为空' }] }
            ]"
            placeholder="请输入任务角色'"
          >
            <a-select-option value="负责人">
              负责人
            </a-select-option>
            <a-select-option value="第二负责人">
              第二负责人
            </a-select-option>
            <a-select-option value="主要参与人">
              主要参与人
            </a-select-option>
            <a-select-option value="一般参与人">
              一般参与人
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="课题性质"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'type',
              { rules: [{ required: true, message: '课题性质不能为空' }] }
            ]"
            placeholder="请输入课题性质"
          >
            <a-radio value="重点资助">
              重点资助
            </a-radio>
            <a-radio value="一般资助">
              一般资助
            </a-radio>
            <a-radio value="立项">
              立项
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="项目状况"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'condition',
              { rules: [{ required: true, message: '项目状况不能为空' }] }
            ]"
            placeholder="请输入项目状况"
          >
            <a-radio value="结题">
              结题
            </a-radio>
            <a-radio value="在研">
              在研
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="立项时间"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-date-picker
            v-decorator="[
              'startTime',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '立项时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入立项时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="结题时间"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-date-picker
            v-decorator="[
              'endTime',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '结题时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入结题时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="项目质量"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'result',
              { rules: [{ required: true, message: '项目质量不能为空' }] }
            ]"
            placeholder="请输入项目质量"
          >
            <a-radio value="通过">
              通过
            </a-radio>
            <a-radio value="优秀">
              优秀
            </a-radio>
          </a-radio-group>
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
        this.form.setFieldsValue(this.editData);
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
          const fieldsValue = {
            ...values,
            startTime: values["startTime"].format("YYYY-MM-DD"),
            endTime: values["endTime"].format("YYYY-MM-DD")
          };
          console.log(fieldsValue);
          {
            this.axios
              .post(
                "/teachingconstructionTeachingtopics/updateByPrimaryKey",
                this.qs.stringify({
                  id: this.editData.id,
                  classTeacher: this.$store.state.teacherid,
                  status: "未审核",
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
                  console.log(res.data);
                  //每条数据需要一个唯一的key值
                  this.visible = true;
                  this.$router.go(0);
                }.bind(this)
              )
              .catch(
                function(err) {
                  if (err.response) {
                    console.log(err.response);
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

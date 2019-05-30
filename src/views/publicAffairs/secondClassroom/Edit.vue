<template>
  <div>
    <a-button type="primary" @click="showModal">修改</a-button>
    <a-modal
      title="正在修改第二课堂内容"
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
          label="活动名称"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'name',
              {
                rules: [{ required: true, message: '活动名称不能为空' }]
              }
            ]"
            placeholder="请输入活动名称"
          />
        </a-form-item>

        <a-form-item
          label="指导形式"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'tpye',
              {
                rules: [{ required: true, message: '指导形式不能为空' }]
              }
            ]"
            placeholder="请输入指导形式"
          />
        </a-form-item>

        <a-form-item
          label="定期指导"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'regularGuidance',
              {
                rules: [{ required: true, message: '定期指导不能为空' }]
              }
            ]"
            placeholder="请输入定期指导"
          />
        </a-form-item>

        <a-form-item
          label="不定期指导"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'occasionalGuidance',
              {
                rules: [{ required: true, message: '不定期指导不能为空' }]
              }
            ]"
            placeholder="请输入不定期指导"
          />
        </a-form-item>

        <a-form-item
          label="指导时间"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-date-picker
            v-decorator="[
              'time',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '指导时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入指导时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="标志性成果"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'result',
              {
                rules: [{ required: true, message: '标志性成果不能为空' }]
              }
            ]"
            placeholder="请输入标志性成果"
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
      //console.log(this.editData);
      setTimeout(() => {
        this.form.setFieldsValue(this.editData);
        this.form.setFieldsValue({ time: null });
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
            time: values["time"].format("YYYY-MM-DD")
          };
          //console.log(fieldsValue);
          {
            this.axios
              .post(
                "/publicaffairsSecondclassroom/updateByPrimaryKey",
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
                  //console.log(res.data);
                  //每条数据需要一个唯一的key值
                  this.visible = true;
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

<template>
  <div>
    <a-button type="primary" @click="showModal">新建</a-button>
    <a-modal
      title="正在新添加日常教研活动内容"
      :visible="visible"
      @ok="handleOk"
      okText="确认添加"
      cancelText="取消"
      :maskClosable="false"
      :confirmLoading="confirmLoading"
      width="50%"
      @cancel="handleCancel"
    >
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item
          label="缺席扣分"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'absent',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '缺席扣分输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入缺席扣分'"
            addonAfter="分"
          />
        </a-form-item>

        <a-form-item
          label="迟到早退扣分"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'lateDeparture',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '迟到早退扣分输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入迟到早退扣分'"
            addonAfter="分"
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
          //console.log(values);
          {
            this.axios
              .post(
                "/teachingconstructionTeachingactivities/insert",
                this.qs.stringify({
                  classTeacher: this.$store.state.teacherid,
                  status: "未审核",
                  ...values
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

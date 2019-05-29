<template>
  <div>
    <a-button type="primary" @click="showModal">新建</a-button>
    <a-modal
      title="正在新添加任职以来起草、制定的重要文件、报告内容"
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
          label="文件、报告题目"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'name',
              {
                rules: [{ required: true, message: '文件、报告题目不能为空' }]
              }
            ]"
            placeholder="请输入文件、报告题目"
          />
        </a-form-item>

        <a-form-item
          label="时间"
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
                    message: '时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="本人排名"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'rank',
              {
                rules: [{ required: true, message: '本人排名不能为空' }]
              }
            ]"
            placeholder="请输入本人排名"
          />
        </a-form-item>

        <a-form-item
          label="总人数"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'peopleNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: 'v输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入总人数'"
            addonAfter="人"
          />
        </a-form-item>

        <a-form-item
          label="使用范围及产生效益"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'useScope',
              {
                rules: [
                  { required: true, message: '使用范围及产生效益不能为空' }
                ]
              }
            ]"
            placeholder="请输入使用范围及产生效益"
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
          const fieldsValue = {
            ...values,
            time: values["time"].format("YYYY-MM-DD")
          };
          console.log(fieldsValue);
          {
            this.axios
              .post(
                "/othersFiles/updateByPrimaryKey",
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

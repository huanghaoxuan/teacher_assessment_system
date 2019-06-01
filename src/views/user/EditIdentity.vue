<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card title="权限控制">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item
          label="工号"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'access_name',
              { rules: [{ required: true, message: '工号不能为空' }] }
            ]"
            placeholder="请输入工号'"
          />
        </a-form-item>
        <a-form-item
          label="权限"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-select
            v-decorator="[
              'access_identity',
              { rules: [{ required: true, message: '权限不能为空' }] }
            ]"
            placeholder="请输入权限'"
          >
            <a-select-option value="1">教师</a-select-option>
            <a-select-option value="2">系级管理员</a-select-option>
            <a-select-option value="3">院级管理员</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
          label=" "
        >
          <a-button type="primary" html-type="submit">
            提交
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          //console.log(fieldsValue);
          {
            this.axios
              .post(
                "/userAccess/updateIdentity",
                this.qs.stringify({
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
                  //this.$router.go(0);
                  this.$notification.success({
                    message: "该账号账号权限已成功变更"
                  });
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
      });
    }
  }
};
</script>

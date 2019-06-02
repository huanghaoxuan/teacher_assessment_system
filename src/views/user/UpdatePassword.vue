<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card title="权限控制">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item
          label="旧的密码"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'old_access_pass',
              { rules: [{ required: true, message: '旧的密码不能为空' }] }
            ]"
            placeholder="请输入旧的密码"
            type="password"
          />
        </a-form-item>
        <a-form-item
          label="新的密码"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'access_pass',
              { rules: [{ required: true, message: '新的密码不能为空' }] }
            ]"
            placeholder="请输入新的密码"
            type="password"
          />
        </a-form-item>
        <a-form-item
          label="确认新的密码"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'access_pass_v',
              { rules: [{ required: true, message: '确认新的密码不能为空' }] }
            ]"
            placeholder="请输入确认新的密码"
            type="password"
          />
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
          if (values[access_pass_v] != values[access_pass]) {
            this.$notification.error({
              message: "密码与确认密码不同"
            });
          } else {
            //console.log(fieldsValue);
            {
              this.axios
                .post(
                  "/userAccess/updateNamePassword",
                  this.qs.stringify({
                    ...values,
                    access_name: this.$store.state.teacherid
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
                    if (res.data == 1) {
                      this.$notification.success({
                        message: "该账号密码已成功变更"
                      });
                    } else {
                      this.$notification.error({
                        message: "旧密码输入错误，密码变更失败，请重新更改"
                      });
                    }
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
        }
      });
    }
  }
};
</script>

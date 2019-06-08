<template>
  <div style="background:#ECECEC; padding:30px">
    <a-spin :spinning="spinning" tip="正在返回登录，请稍后">
      <a-card title="忘记密码">
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item
            label="工号"
            :label-col="{ span: 7 }"
            :wrapper-col="{ span: 10 }"
          >
            <a-input
              v-decorator="[
                'access_name',
                { rules: [{ required: true, message: '工号不能为空' }] }
              ]"
              placeholder="请输入工号"
            />
          </a-form-item>
          <a-form-item
            label="新的密码"
            :label-col="{ span: 7 }"
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
            :label-col="{ span: 7 }"
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
            label="验证码"
            :label-col="{ span: 7 }"
            :wrapper-col="{ span: 10 }"
          >
            <a-input
              v-decorator="[
                'token',
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入验证码'
                    }
                  ]
                }
              ]"
              placeholder="请输入验证码"
            />
          </a-form-item>
          <a-form-item
            label=":"
            :label-col="{ span: 7 }"
            :wrapper-col="{ span: 10 }"
          >
            <a-button
              style="margin-left: 8px"
              @click="getToken"
              :disabled="tokenButtonDisabled"
            >
              {{ tokenButtonVal }}
            </a-button>
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
    </a-spin>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tokenButtonVal: "点击获取验证码",
      tokenButtonDisabled: false,
      timer: null,
      form: this.$form.createForm(this),
      spinning: false
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
                  "/userAccess/forgetNamePassword",
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
                    //this.reload();
                    if (res.data == 1) {
                      this.$notification.success({
                        message: "该账号密码已成功变更"
                      });
                      this.spinning = true;
                      setTimeout(() => {
                        this.$router.push("/login");
                      }, 3000);
                    } else {
                      this.$notification.error({
                        message: "验证码输入错误，密码变更失败，请重新更改"
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
    },
    getToken(e) {
      e.preventDefault();
      this.form.validateFields(["access_name"], (err, values) => {
        if (!err) {
          this.tokeButtonM(true);
          //console.log(values);
          {
            this.axios
              .post(
                "/userinformation/getToken/forget",
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
                  //this.reload();
                  this.$notification.success({
                    message: "邮件已成功发送，请在填写的邮箱中查收"
                  });
                }.bind(this)
              )
              .catch(
                function(err) {
                  if (err.response) {
                    //console.log(err.response);
                    //控制台打印错误返回的内容
                    this.$notification.error({
                      message: "邮件发送失败，请重试"
                    });
                  }
                  //bind(this)可以不用
                }.bind(this)
              );
          }
        }
      });
    },
    tokeButtonM(boolean) {
      if (boolean) {
        var number = 180;
        this.tokenButtonDisabled = true;
        this.tokenButtonVal = "请" + number + "秒后重试";
        this.timer = setInterval(() => {
          number--; // 修改数据date
          this.tokenButtonVal = "请" + number + "秒后重试";
          //console.log(number);
          if (number == 0) {
            this.tokeButtonM(false);
            clearTimeout(this.timer);
          }
        }, 1000);
      } else {
        this.tokenButtonDisabled = false;
        this.tokenButtonVal = "点击获取验证码";
      }
    }
  },
  mounted() {
    this.$store.commit("isLogin", false);
    //console.log(this.$store.state.loginStatus);
  }
};
</script>

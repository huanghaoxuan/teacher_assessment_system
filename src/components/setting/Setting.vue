/* eslint-disable vue/no-parsing-error */
<template>
  <div style="background:#ECECEC; padding:100px">
    <a-card title="正在进行基础设置">
      <a-steps :current="current">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
      </a-steps>
      <div style=" padding:100px" v-if="current == 0">
        <a-form :form="form0">
          <a-form-item
            label="姓名"
            :label-col="{ span: 7 }"
            :wrapper-col="{ span: 10 }"
          >
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入姓名'
                    }
                  ]
                }
              ]"
              placeholder="请输入姓名"
            />
          </a-form-item>
        </a-form>
      </div>
      <div style=" padding:100px" v-if="current == 1">
        <a-form :form="form1">
          <a-form-item
            label="邮箱"
            :label-col="{ span: 7 }"
            :wrapper-col="{ span: 10 }"
          >
            <a-input
              v-decorator="[
                'email',
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入邮箱'
                    }
                  ]
                }
              ]"
              placeholder="请输入邮箱"
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
        </a-form>
      </div>

      <div style=" padding:100px" v-if="current == 2">
        <a-form :form="form2">
          <a-form-item
            label="所在学院"
            :label-col="{ span: 7 }"
            :wrapper-col="{ span: 10 }"
          >
            <a-select
              v-decorator="[
                'departmentDept',
                { rules: [{ required: true, message: '所在学院不能为空' }] }
              ]"
              placeholder="请输入所在学院"
            >
              <a-select-option value="电子与计算机工程学院">
                电子与计算机工程学院
              </a-select-option>
              <a-select-option value="建筑与艺术设计学院">
                建筑与艺术设计学院
              </a-select-option>
              <a-select-option value="土木与交通工程学院">
                土木与交通工程学院
              </a-select-option>
              <a-select-option value="机械与电气工程学院">
                机械与电气工程学院
              </a-select-option>
              <a-select-option value="制药与化学工程学院">
                制药与化学工程学院
              </a-select-option>
              <a-select-option value="经济管理学院">
                经济管理学院
              </a-select-option>
              <a-select-option value="基础部">
                基础部
              </a-select-option>
              <a-select-option value="党政办">
                党政办
              </a-select-option>
              <a-select-option value="保卫处">
                保卫处
              </a-select-option>
              <a-select-option value="组织人事部">
                组织人事部
              </a-select-option>
              <a-select-option value="教务处">
                教务处
              </a-select-option>
              <a-select-option value="学生处">
                学生处
              </a-select-option>
              <a-select-option value="团委">
                团委
              </a-select-option>
              <a-select-option value="财务与资产管理处">
                财务与资产管理处
              </a-select-option>
              <a-select-option value="后勤管理处">
                后勤管理处
              </a-select-option>
              <a-select-option value="质量保证部">
                质量保证部
              </a-select-option>
              <a-select-option value="发展合作处">
                发展合作处
              </a-select-option>
              <a-select-option value="图档信息中心">
                图档信息中心
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-form>
      </div>
      <div style=" padding:100px" v-if="current == 3">
        <h1 style="text-align:center">
          欢迎使用东南大学成贤学院数据采集系统
        </h1>
        <br />
        <h3>
          恭喜您，您已完成东南大学成贤学院数据采集系统的简单设置
        </h3>
        <br />
        <h3>更多个人信息请在个人信息页面填写。</h3>
        <br />
        <h3>本系统将对您进行信息采集。</h3>
        <br />
        <h3>最终解释权归黄浩轩所有</h3>
        <br />
        <h3>
          最后，制作人黄浩轩及其制作组成员诚挚欢迎您使用东南大学成贤学院数据采集系统
        </h3>
      </div>

      <div style="text-align: right;padding:10px">
        <a-button
          v-if="current == 1"
          style="margin-left: 8px"
          @click="current++"
        >
          暂不设置
        </a-button>

        <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
          上一步
        </a-button>

        <!-- 设置姓名的按钮 -->
        <a-button
          style="margin-left: 8px"
          v-if="current == 0"
          type="primary"
          @click="handleSubmit0"
        >
          下一步
        </a-button>

        <!-- 设置邮箱的按钮 -->
        <a-button
          style="margin-left: 8px"
          v-if="current == 1"
          type="primary"
          @click="handleSubmit1"
        >
          下一步
        </a-button>

        <!-- 设置学院的按钮 -->
        <a-button
          style="margin-left: 8px"
          v-if="current == 2"
          type="primary"
          @click="handleSubmit2"
        >
          下一步
        </a-button>

        <a-button
          v-if="current == steps.length - 1"
          type="primary"
          @click="$router.push('/sidebar')"
          style="margin-left: 8px"
        >
          完成
        </a-button>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      tokenButtonVal: "点击获取验证码",
      tokenButtonDisabled: false,
      timer: null,
      form0: this.$form.createForm(this),
      form1: this.$form.createForm(this),
      form2: this.$form.createForm(this),
      steps: [
        {
          title: "姓名设置"
        },
        {
          title: "邮箱设置"
        },
        {
          title: "学院设置"
        },
        {
          title: "使用须知"
        }
      ]
    };
  },
  methods: {
    prev() {
      this.current--;
    },
    handleSubmit0(e) {
      e.preventDefault();
      this.form0.validateFields((err, values) => {
        if (!err) {
          //console.log(values);
          {
            this.axios
              .post(
                "/userinformation/updatename",
                this.qs.stringify({
                  ...values,
                  classTeacher: this.$store.state.teacherid
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
                    this.$store.commit("changeTeachername", values.name);
                    this.current++;
                  } else {
                    this.$notification.error({
                      message: "姓名设置失败，请重试"
                    });
                  }
                }.bind(this)
              )
              .catch(
                function(err) {
                  if (err.response) {
                    //console.log(err.response);
                    //控制台打印错误返回的内容
                    this.$notification.error({
                      message: "姓名设置失败，请重试"
                    });
                  }
                  //bind(this)可以不用
                }.bind(this)
              );
          }
        }
      });
    },
    handleSubmit1(e) {
      e.preventDefault();
      this.form1.validateFields((err, values) => {
        if (!err) {
          //console.log(values);
          {
            this.axios
              .post(
                "/userinformation/updateEmail",
                this.qs.stringify({
                  ...values,
                  classTeacher: this.$store.state.teacherid
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
                  //this.reload();
                  if (res.data == 1) {
                    this.current++;
                  } else {
                    this.$notification.error({
                      message: "验证码错误，请重试"
                    });
                  }
                }.bind(this)
              )
              .catch(
                function(err) {
                  if (err.response) {
                    //console.log(err.response);
                    //控制台打印错误返回的内容
                    this.$notification.error({
                      message: "验证码错误，请重试"
                    });
                  }
                  //bind(this)可以不用
                }.bind(this)
              );
          }
        }
      });
    },
    handleSubmit2(e) {
      e.preventDefault();
      this.form2.validateFields((err, values) => {
        if (!err) {
          //console.log(values);
          {
            this.axios
              .post(
                "/userinformation/updatedepartmentDept",
                this.qs.stringify({
                  ...values,
                  classTeacher: this.$store.state.teacherid
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
                  //this.reload();
                  if (res.data == 1) {
                    this.$store.commit(
                      "changedataTeachedepartmentDept",
                      values.departmentDept
                    );
                    this.current++;
                  } else {
                    this.$notification.error({
                      message: "学院设置失败，请重试"
                    });
                  }
                }.bind(this)
              )
              .catch(
                function(err) {
                  if (err.response) {
                    //console.log(err.response);
                    //控制台打印错误返回的内容
                    this.$notification.error({
                      message: "学院设置失败，请重试"
                    });
                  }
                  //bind(this)可以不用
                }.bind(this)
              );
          }
        }
      });
    },
    getToken(e) {
      e.preventDefault();
      this.form1.validateFields(["email"], (err, values) => {
        if (!err) {
          this.tokeButtonM(true);
          //console.log(values);
          {
            this.axios
              .post(
                "/userinformation/getToken",
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
    this.axios
      .get(
        "/userinformation/selectUserinformation",
        {
          params: {
            classTeacher: this.$store.state.teacherid
          }
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(
        function(res) {
          //console.log(res.data);
          if (res.data.name == null || res.data.name == "null") {
            this.current = 0;
          } else if (res.data.email == null || res.data.email == "null") {
            this.current = 1;
          } else if (
            res.data.departmentDept == null ||
            res.data.departmentDept == "null"
          ) {
            this.current = 2;
          } else {
            this.$store.commit(
              "changedataTeachedepartmentDept",
              res.data.departmentDept
            );
            this.$store.commit("changeTeachername", res.data.name);
            this.$router.push("/sidebar");
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
    //this.current = 3;
  }
};
</script>

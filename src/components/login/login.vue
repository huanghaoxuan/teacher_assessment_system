<template>
  <div>
    <div id="bg">
      <div id="hint">
        <!-- 提示框 -->
        <p>登录失败</p>
      </div>
      <div id="login_wrap">
        <div id="login">
          <!-- 登录注册切换动画 -->
          <div id="status">
            <i style="top: 5px">登录</i>
            <i style="top: 36px">注册</i>
          </div>
          <span>
            <form action="post">
              <p class="form">
                <input
                  type="text"
                  id="user"
                  placeholder="用户名"
                  v-model="username"
                />
              </p>
              <p class="form">
                <input
                  type="password"
                  id="passwd"
                  placeholder="密码"
                  v-model="password"
                />
              </p>
              <p class="form confirm">
                <input
                  type="password"
                  id="confirm-passwd"
                  placeholder="请确认密码"
                  v-model="confirmPassword"
                />
              </p>
              <input
                type="button"
                value="登录"
                class="btn"
                @click="login()"
                style="margin-right: 20px;"
              />
              <input
                type="button"
                value="注册"
                class="btn"
                @click="signin()"
                id="btn"
              />
            </form>
            <!-- <a href="#">忘记密码？</a> -->
          </span>
        </div>

        <div id="login_img">
          <!-- 图片绘制框 -->
          <span class="circle">
            <span></span>
            <span></span>
          </span>
          <span class="star">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span class="fly_star">
            <span></span>
            <span></span>
          </span>
          <p id="title">东南大学成贤学院<br /><br />数据采集系统</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onoff: true,
      username: null,
      password: null,
      confirmPassword: null
    };
  },
  methods: {
    login() {
      var confirm = document.getElementsByClassName("confirm")[0];
      if (this.onoff) {
        if (this.username == null || this.username == "") {
          this.$notification.error({
            message: "账号未输入"
          });
        } else if (this.password == null || this.password == "") {
          this.$notification.error({
            message: "密码未输入"
          });
        } else {
          this.axios
            .get(
              "/userAccess/selectByNamePassword",
              {
                params: {
                  access_name: this.username,
                  access_pass: this.password
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
                //console.log(res);
                if (res.data == 0) {
                  this.$notification.error({
                    message: "账号密码错误，请重新登录！"
                  });
                } else {
                  this.$store.commit("isLogin", true);
                  this.$store.commit("changeIdentity", res.data);
                  this.$store.commit("changeTeacherid", this.username);
                  this.$router.push("/setting");
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
      } else {
        let status = document
          .getElementById("status")
          .getElementsByTagName("i");
        confirm.style.height = 0;
        status[0].style.top = 5 + "px";
        status[1].style.top = 36 + "px";
        this.onoff = !this.onoff;
      }
    },
    signin() {
      var confirm = document.getElementsByClassName("confirm")[0];
      let status = document.getElementById("status").getElementsByTagName("i");
      let hit = document.getElementById("hint").getElementsByTagName("p")[0];
      if (this.onoff) {
        confirm.style.height = 51 + "px";
        status[0].style.top = 36 + "px";
        status[1].style.top = 5 + "px";
        this.onoff = !this.onoff;
      } else {
        if (this.username == null || this.username == "") {
          this.$notification.error({
            message: "账号未输入"
          });
        } else if (this.password == null || this.password == "") {
          this.$notification.error({
            message: "密码未输入"
          });
        } else if (this.confirmPassword == null || this.confirmPassword == "") {
          this.$notification.error({
            message: "确认密码未输入"
          });
        } else if (this.confirmPassword != this.password) {
          this.$notification.error({
            message: "密码与确认密码不同"
          });
        } else {
          this.axios
            .post(
              "/userAccess/insert",
              this.qs.stringify({
                access_name: this.username,
                access_pass: this.password
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
                if (res.data == 1) {
                  this.$store.commit("isLogin", true);
                  this.$store.commit("changeIdentity", 1);
                  this.$store.commit("changeTeacherid", this.username);
                  this.$router.push("/setting");
                } else {
                  this.$notification.error({
                    message: "该账号已经存在"
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
  },
  mounted() {
    this.$store.commit("isLogin", false);
    //console.log(this.$store.state.loginStatus);
  }
};
</script>

<style>
@import url("./css/main.css");
</style>

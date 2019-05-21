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
            <i style="top: 5px">登陆</i>
            <i style="top: 36px">注册</i>
          </div>
          <span>
            <form action="post">
              <p class="form">
                <input type="text" id="user" placeholder="用户名" />
              </p>
              <p class="form">
                <input type="password" id="passwd" placeholder="密码" />
              </p>
              <p class="form confirm">
                <input
                  type="password"
                  id="confirm-passwd"
                  placeholder="请确认密码"
                />
              </p>
              <input
                type="button"
                value="登陆"
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
            <a href="#">忘记密码？</a>
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
          <p id="title">东南大学成贤学院<br /><br />教师考核</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onoff: true
    };
  },
  methods: {
    login() {
      var confirm = document.getElementsByClassName("confirm")[0];
      if (this.onoff) {
        console.log("登陆");
        this.$store.commit("isLogin", true);
        this.$router.push("/sidebar");
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
        console.log("注册");
      }
    }
  },
  mounted() {
    this.$store.commit("isLogin", false);
    console.log(this.$store.state.loginStatus);
  }
};
</script>

<style>
@import url("./css/main.css");
</style>

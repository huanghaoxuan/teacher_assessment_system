<template>
  <div>
    <div id="app">
      <router-view />
    </div>
    <div class="footer">
      Copyright © 2016 东南大学成贤学院计算机工程系 All rights reserved.
      版权所有，严禁复制、镜像<br />
      技术支持：<a
        href="https://github.com/huanghaoxuan"
        style="text-decoration:none;"
      >
        黄浩轩</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  mounted() {
    window.onpopstate = () => {
      if (!this.allowBack) {
        //    这个allowBack 是存在vuex里面的变量
        history.go(1);
      }
    };
  }
};
</script>
<style>
.footer {
  text-align: center;
  color: rgba(3, 32, 48, 1);
  line-height: 30px;
  width: 100%;
  font-size: 12px;
  position: fixed;
  bottom: 0;
  overflow: hidden;
  margin: 0;
}
</style>

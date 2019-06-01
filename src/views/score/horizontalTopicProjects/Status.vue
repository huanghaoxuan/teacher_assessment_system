<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card title="横向研究课题项目">
      <edit
        :editData="data[record.key]"
        v-if="$store.state.identity == 3"
        slot="extra"
      ></edit>
      <a-collapse @change="changeActivekey" :bordered="false" accordion>
        <a-collapse-panel header="1万" key="1">
          <p>{{ data.oneMillion }}</p>
        </a-collapse-panel>
        <a-collapse-panel header="1-3万" key="2">
          <p>{{ data.oneToThreeMillion }}</p>
        </a-collapse-panel>
        <a-collapse-panel header="3-5万" key="3">
          <p>{{ data.threeToFiveMillion }}</p>
        </a-collapse-panel>
        <a-collapse-panel header="5-10万" key="4">
          <p>{{ data.fiveToTenMillion }}</p>
        </a-collapse-panel>
        <a-collapse-panel header="10-20万" key="5">
          <p>{{ data.tenToTwentyMillion }}</p>
        </a-collapse-panel>
        <a-collapse-panel header="20-30万" key="6">
          <p>{{ data.twentyToThirtyMillion }}</p>
        </a-collapse-panel>
      </a-collapse>
    </a-card>
  </div>
</template>
<script>
import edit from "./Edit";
export default {
  components: { edit },
  data() {
    return { data: {} };
  },
  methods: {
    changeActivekey(key) {
      console.log(key);
    }
  },
  mounted() {
    this.axios
      .get(
        "/scoreHorizontaltopicprojects/selectByPrimaryKey",
        {},
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(
        function(res) {
          this.data = res.data;
          //console.log(res.data);
          //控制台打印请求成功时返回的数据
          //bind(this)可以不用
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
};
</script>

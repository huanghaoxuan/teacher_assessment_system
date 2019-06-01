<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card title="发表论文">
      <edit
        :editData="data[record.key]"
        v-if="$store.state.identity == 3"
        slot="extra"
      ></edit>
      <a-collapse @change="changeActivekey" :bordered="false" accordion>
        <a-collapse-panel header="EI" key="1">
          <p>{{ data.ei }}</p>
        </a-collapse-panel>
        <a-collapse-panel header="SCI" key="2">
          <p>{{ data.sci }}</p>
        </a-collapse-panel>
        <a-collapse-panel header="其他" key="3">
          <p>{{ data.others }}</p>
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
        "/scorePublishpaperController/selectByPrimaryKey",
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

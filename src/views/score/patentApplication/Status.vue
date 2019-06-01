<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card title="专利和发明">
      <edit
        :editData="data[record.key]"
        v-if="$store.state.identity == 3"
        slot="extra"
      ></edit>
      <a-collapse @change="changeActivekey" :bordered="false" accordion>
        <a-collapse-panel header="发明专利授权" key="1">
          <p>{{ data.invention }}</p>
        </a-collapse-panel>
        <a-collapse-panel header="国家已受理发明专利" key="2">
          <p>{{ data.countryAccept }}</p>
        </a-collapse-panel>
        <a-collapse-panel header="实用新型专利授权" key="3">
          <p>{{ data.practical }}</p>
        </a-collapse-panel>
        <a-collapse-panel header="外观设计专利授权" key="4">
          <p>{{ data.exteriorDesign }}</p>
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
        "/scorePatentapplication/selectByPrimaryKey",
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

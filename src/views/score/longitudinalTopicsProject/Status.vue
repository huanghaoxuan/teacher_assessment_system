<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card title="纵向课题项目">
      <edit
        :editData="data"
        v-if="$store.state.identity == 3"
        slot="extra"
      ></edit>
      <a-collapse @change="changeActivekey" :bordered="false" accordion>
        <a-collapse-panel header="国家级" key="1">
          <a-collapse>
            <a-collapse-panel header="重点资助" key="1-1">
              <p>{{ data.countryKeyFunding }}</p>
            </a-collapse-panel>
            <a-collapse-panel header="一般资助" key="1-2">
              <p>{{ data.countryGeneralFunding }}</p>
            </a-collapse-panel>
            <a-collapse-panel header="立项" key="1-3">
              <p>{{ data.countryProject }}</p>
            </a-collapse-panel>
          </a-collapse>
        </a-collapse-panel>
        <a-collapse-panel header="省部级" key="2">
          <a-collapse>
            <a-collapse-panel header="重点资助" key="2-1">
              <p>{{ data.provincialKeyFunding }}</p>
            </a-collapse-panel>
            <a-collapse-panel header="一般资助" key="2-2">
              <p>{{ data.provincialGeneralFunding }}</p>
            </a-collapse-panel>
            <a-collapse-panel header="立项" key="2-3">
              <p>{{ data.provincialProject }}</p>
            </a-collapse-panel>
          </a-collapse>
        </a-collapse-panel>
        <a-collapse-panel header="市局级" key="3">
          <a-collapse>
            <a-collapse-panel header="重点资助" key="3-1">
              <p>{{ data.cityKeyFunding }}</p>
            </a-collapse-panel>
            <a-collapse-panel header="一般资助" key="3-2">
              <p>{{ data.cityGeneralFunding }}</p>
            </a-collapse-panel>
            <a-collapse-panel header="立项" key="3-3">
              <p>{{ data.cityProject }}</p>
            </a-collapse-panel>
          </a-collapse>
        </a-collapse-panel>
        <a-collapse-panel header="校级" key="4">
          <a-collapse>
            <a-collapse-panel header="重点资助" key="4-1">
              <p>{{ data.schoolKeyFunding }}</p>
            </a-collapse-panel>
            <a-collapse-panel header="一般资助" key="4-2">
              <p>{{ data.schoolGeneralFunding }}</p>
            </a-collapse-panel>
            <a-collapse-panel header="立项" key="4-3">
              <p>{{ data.schoolProject }}</p>
            </a-collapse-panel>
          </a-collapse>
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
        "/scoreLongitudinaltopicsproject/selectByPrimaryKey",
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

<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card title="政府部门设立的教学（科研）成果奖">
      <edit
        :editData="data[record.key]"
        v-if="$store.state.identity == 3"
        slot="extra"
      ></edit>
      <a-collapse @change="changeActivekey" :bordered="false" accordion>
        <a-collapse-panel header="国家级" key="1">
          <a-collapse>
            <a-collapse-panel header="一等（特等）" key="1-1">
              <p>{{ data.countryFirstDigit }}</p>
            </a-collapse-panel>
            <a-collapse-panel header="二等" key="1-2">
              <p>{{ data.countrySecondDigit }}</p>
            </a-collapse-panel>
            <a-collapse-panel header="三等" key="1-3">
              <p>{{ data.countryThirdDigit }}</p>
            </a-collapse-panel>
          </a-collapse>
        </a-collapse-panel>
        <a-collapse-panel header="省部级（大区）" key="2">
          <a-collapse>
            <a-collapse-panel header="一等（特等）" key="2-1">
              <p>{{ data.provincialFirstDigit }}</p>
            </a-collapse-panel>
            <a-collapse-panel header="二等" key="2-2">
              <p>{{ data.provincialSecondDigit }}</p>
            </a-collapse-panel>
            <a-collapse-panel header="三等" key="2-3">
              <p>{{ data.provincialThirdDigit }}</p>
            </a-collapse-panel>
          </a-collapse>
        </a-collapse-panel>
        <a-collapse-panel header="市局级" key="3">
          <a-collapse>
            <a-collapse-panel header="一等（特等）" key="3-1">
              <p>{{ data.cityFirstDigit }}</p>
            </a-collapse-panel>
            <a-collapse-panel header="二等" key="3-2">
              <p>{{ data.citySecondDigit }}</p>
            </a-collapse-panel>
            <a-collapse-panel header="三等" key="3-3">
              <p>{{ data.cityThirdDigit }}</p>
            </a-collapse-panel>
          </a-collapse>
        </a-collapse-panel>
        <a-collapse-panel header="校级" key="4">
          <a-collapse>
            <a-collapse-panel header="一等（特等）" key="4-1">
              <p>{{ data.schoolFirstDigit }}</p>
            </a-collapse-panel>
            <a-collapse-panel header="二等" key="4-2">
              <p>{{ data.schoolSecondDigit }}</p>
            </a-collapse-panel>
            <a-collapse-panel header="三等" key="4-3">
              <p>{{ data.schoolThirdDigit }}</p>
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
        "/scoreGovernmentachievementaward/selectByPrimaryKey",
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

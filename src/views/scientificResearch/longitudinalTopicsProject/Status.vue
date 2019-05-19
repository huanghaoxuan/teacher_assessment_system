<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card title="纵向课题项目">
      <floder slot="extra"></floder>
      <a-table
        :pagination="{ defaultPageSize: 9 }"
        :columns="columns"
        :dataSource="data"
        :scroll="{ x: 2600, y: 610 }"
      >
        <template slot="operation1" slot-scope="text, record">
          <edit :editData="data[record.key]"></edit>
        </template>
        <template slot="operation2" slot-scope="text, record">
          <a-popconfirm
            v-if="data.length"
            title="点击确认以删除?"
            cancelText="取消"
            okText="确认"
            @confirm="() => onDelete(record.key)"
          >
            <a-button type="danger" @click="() => {}">删除</a-button>
          </a-popconfirm>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script>
import floder from "./Floder.vue";
import edit from "./Edit.vue";
const columns = [
  {
    title: "项目名称",
    width: 200,
    dataIndex: "name",
    key: "1",
    fixed: "left"
  },
  { title: "项目来源", dataIndex: "source", key: "2", width: 200 },
  {
    title: "任务角色",
    dataIndex: "character",
    key: "3",
    width: 200
  },
  {
    title: "课题性质",
    dataIndex: "type",
    key: "4",
    width: 200
  },
  {
    title: "项目经费",
    dataIndex: "money",
    key: "5",
    width: 200
  },
  { title: "立项时间", dataIndex: "startTime", key: "6", width: 200 },
  {
    title: "预计结题时间",
    dataIndex: "estimatedClosingTime",
    key: "7",
    width: 200
  },
  { title: "结题结论", dataIndex: "result", key: "8", width: 200 },
  { title: "备注", dataIndex: "note", key: "9", width: 200 },
  { title: "学年", dataIndex: "year", key: "10", width: 200 },
  {
    title: "审核情况",
    dataIndex: "status",
    key: "11",
    width: 200,
    fixed: "right"
  },
  {
    title: "操作",
    dataIndex: "operation1",
    key: "12",
    width: 100,
    fixed: "right",
    scopedSlots: { customRender: "operation1" }
  },
  {
    title: "",
    dataIndex: "operation2",
    key: "13",
    width: 100,
    fixed: "right",
    scopedSlots: { customRender: "operation2" }
  }
];

export default {
  components: { floder, edit },
  data() {
    return {
      data: [],
      columns
    };
  },
  methods: {
    onDelete(key) {
      const data = [...this.data];
      this.data = data.filter(item => item.key !== key);
    }
  },
  mounted() {
    this.axios
      .post(
        "/fruitClassTeaching/findClassTeaching",
        this.qs.stringify({
          classTeacher: this.$store.state.teacherid,
          pageNum: 1,
          pageSize: 9
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
          for (let index = 0; index < res.data.list.length; index++) {
            var str = JSON.stringify(res.data.list[index]);
            str = str.split("}")[0];
            str = str + ',"key":' + index + "}";
            console.log(str);
            res.data.list[index] = JSON.parse(str);
            console.log(res.data.list[index]);
          }
          this.data = res.data.list;
          //控制台打印请求成功时返回的数据
          //bind(this)可以不用
        }.bind(this)
      )
      .catch(
        function(err) {
          if (err.response) {
            console.log(err.response);
            //控制台打印错误返回的内容
          }
          //bind(this)可以不用
        }.bind(this)
      );
  }
};
</script>

<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card title="第二课堂">
      <floder slot="extra" v-if="$store.state.identity == 1"></floder>
      <a-table
        v-if="$store.state.identity == 1"
        :pagination="pagination"
        :columns="columns1"
        :dataSource="data"
        :scroll="{ x: 2200, y: 610 }"
        @change="handleTableChange"
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

      <a-table
        v-if="$store.state.identity == 2"
        :pagination="pagination"
        :columns="columns2"
        :dataSource="data"
        :scroll="{ x: 2400, y: 610 }"
        @change="handleTableChange"
      >
        <template slot="operation1" slot-scope="text, record">
          <a-button
            type="primary"
            @click="auditChange(data[record.key], '通过')"
            >通过</a-button
          >
        </template>
        <template slot="operation2" slot-scope="text, record">
          <a-button @click="auditChange(data[record.key], '不通过')"
            >不通过</a-button
          >
        </template>
      </a-table>

      <a-table
        v-if="$store.state.identity == 3"
        :pagination="pagination"
        :columns="columns3"
        :dataSource="data"
        :scroll="{ x: 2200, y: 610 }"
        @change="handleTableChange"
      >
      </a-table>
    </a-card>
  </div>
</template>

<script>
import floder from "./Floder.vue";
import edit from "./Edit.vue";
const columns1 = [
  {
    title: "活动名称",
    width: 200,
    dataIndex: "name",
    key: "1",
    fixed: "left"
  },
  {
    title: "指导形式",
    dataIndex: "tpye",
    key: "2",
    width: 200
  },
  {
    title: "定期指导",
    dataIndex: "regularGuidance",
    key: "3",
    width: 200
  },
  {
    title: "不定期指导",
    dataIndex: "occasionalGuidance",
    key: "4",
    width: 200
  },
  {
    title: "指导时间",
    dataIndex: "time",
    key: "5",
    width: 200
  },
  {
    title: "标志性成果",
    dataIndex: "result",
    key: "6",
    width: 200
  },
  { title: "备注", dataIndex: "note", key: "7", width: 200 },
  { title: "学年", dataIndex: "showYear", key: "8", width: 200 },
  { title: "学期", dataIndex: "semester", key: "9", width: 200 },
  {
    title: "审核情况",
    dataIndex: "status",
    key: "10",
    width: 200,
    fixed: "right"
  },
  {
    title: "操作",
    dataIndex: "operation1",
    key: "11",
    width: 100,
    fixed: "right",
    scopedSlots: { customRender: "operation1" }
  },
  {
    title: "",
    dataIndex: "operation2",
    key: "12",
    width: 100,
    fixed: "right",
    scopedSlots: { customRender: "operation2" }
  }
];
const columns2 = [
  {
    title: "教师姓名",
    width: 200,
    dataIndex: "classTeacherName",
    key: "0",
    fixed: "left"
  },
  {
    title: "活动名称",
    width: 200,
    dataIndex: "name",
    key: "1"
  },
  {
    title: "指导形式",
    dataIndex: "tpye",
    key: "2",
    width: 200
  },
  {
    title: "定期指导",
    dataIndex: "regularGuidance",
    key: "3",
    width: 200
  },
  {
    title: "不定期指导",
    dataIndex: "occasionalGuidance",
    key: "4",
    width: 200
  },
  {
    title: "指导时间",
    dataIndex: "time",
    key: "5",
    width: 200
  },
  {
    title: "标志性成果",
    dataIndex: "result",
    key: "6",
    width: 200
  },
  { title: "备注", dataIndex: "note", key: "7", width: 200 },
  { title: "学年", dataIndex: "showYear", key: "8", width: 200 },
  { title: "学期", dataIndex: "semester", key: "9", width: 200 },
  {
    title: "审核情况",
    dataIndex: "status",
    key: "10",
    width: 200,
    fixed: "right"
  },
  {
    title: "操作",
    dataIndex: "operation1",
    key: "11",
    width: 100,
    fixed: "right",
    scopedSlots: { customRender: "operation1" }
  },
  {
    title: "",
    dataIndex: "operation2",
    key: "12",
    width: 100,
    fixed: "right",
    scopedSlots: { customRender: "operation2" }
  }
];
const columns3 = [
  {
    title: "教师姓名",
    width: 200,
    dataIndex: "classTeacherName",
    key: "0",
    fixed: "left"
  },
  {
    title: "活动名称",
    width: 200,
    dataIndex: "name",
    key: "1"
  },
  {
    title: "指导形式",
    dataIndex: "tpye",
    key: "2",
    width: 200
  },
  {
    title: "定期指导",
    dataIndex: "regularGuidance",
    key: "3",
    width: 200
  },
  {
    title: "不定期指导",
    dataIndex: "occasionalGuidance",
    key: "4",
    width: 200
  },
  {
    title: "指导时间",
    dataIndex: "time",
    key: "5",
    width: 200
  },
  {
    title: "标志性成果",
    dataIndex: "result",
    key: "6",
    width: 200
  },
  { title: "备注", dataIndex: "note", key: "7", width: 200 },
  { title: "学年", dataIndex: "showYear", key: "8", width: 200 },
  { title: "学期", dataIndex: "semester", key: "9", width: 200 },
  {
    title: "审核情况",
    dataIndex: "status",
    key: "10",
    width: 200,
    fixed: "right"
  }
];

export default {
  components: { floder, edit },
  data() {
    return {
      data: [],
      columns1,
      columns2,
      columns3,
      pagination: { defaultPageSize: 9, total: 9 }
    };
  },
  methods: {
    auditChange(data, statusStr) {
      data = { ...data, status: statusStr };
      this.axios
        .post(
          "/publicaffairsSecondclassroom/updateByPrimaryKey",
          this.qs.stringify({
            ...data
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
            this.$router.go(0);
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
    },
    onDelete(key) {
      const data = [...this.data];
      this.data = data.filter(item => item.key !== key);
      //console.log(data[key].id);
      this.axios
        .get(
          "/publicaffairsSecondclassroom/deleteByPrimaryKey",
          {
            params: {
              id: data[key].id
            }
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(function(res) {}.bind(this))
        .catch(
          function(err) {
            if (err.response) {
              //console.log(err.response);
              //控制台打印错误返回的内容
            }
            //bind(this)可以不用
          }.bind(this)
        );
    },
    handleTableChange(pagination, filters, sorter) {
      if (this.$store.state.identity == 1) {
        this.showListData(pagination.current);
      } else {
        this.showAllListData(pagination.current);
      }
    },
    showListData(pageNum) {
      this.axios
        .get(
          "/publicaffairsSecondclassroom/selectByClassTeacher",
          {
            params: {
              classTeacher: this.$store.state.teacherid,
              pageNum: pageNum,
              pageSize: 9
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
            //每条数据需要一个唯一的key值
            for (let index = 0; index < res.data.list.length; index++) {
              res.data.list[index].key = index;
              var year = res.data.list[index].year + 1;
              var yearStr = res.data.list[index].year + " — " + year + " 学年";
              res.data.list[index].showYear = yearStr;
            }
            this.data = res.data.list;
            this.pagination.total = res.data.total;
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
    },
    showAllListData(pageNum) {
      this.axios
        .get(
          "/publicaffairsSecondclassroom/selectAll",
          {
            params: {
              pageNum: pageNum,
              pageSize: 9
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
            //每条数据需要一个唯一的key值
            for (let index = 0; index < res.data.list.length; index++) {
              res.data.list[index].key = index;
              var year = res.data.list[index].year + 1;
              var yearStr = res.data.list[index].year + " — " + year + " 学年";
              res.data.list[index].showYear = yearStr;
            }
            this.data = res.data.list;
            this.pagination.total = res.data.total;
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
  },
  mounted() {
    //console.log(this.$store.state.teacherid);
    if (this.$store.state.identity == 1) {
      this.showListData(1);
    } else {
      this.showAllListData(1);
    }
  }
};
</script>

<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card title="日常教研活动">
      <floder slot="extra" v-if="$store.state.identity == 2"></floder>
      <a-table
        v-if="$store.state.identity == 1"
        :pagination="pagination"
        :columns="columns1"
        :dataSource="data"
        :scroll="{ x: 1600, y: 610 }"
        @change="handleTableChange"
      >
        <template slot="operation1" slot-scope="text, record">
          <!-- 用于教师登录时显示，无具体操作 -->
          <a-button type="primary" disabled v-if="$store.state.identity == 1"
            >修改</a-button
          >
          <edit
            :editData="data[record.key]"
            v-if="$store.state.identity == 2"
          ></edit>
        </template>
        <template slot="operation2" slot-scope="text, record">
          <!-- 用于教师登录时显示，无具体操作 -->
          <a-button type="danger" disabled v-if="$store.state.identity == 1"
            >删除</a-button
          >
          <a-popconfirm
            v-if="data.length && $store.state.identity == 2"
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
        v-if="$store.state.identity == 3"
        :pagination="pagination"
        :columns="columns3"
        :dataSource="data"
        :scroll="{ x: 1400, y: 610 }"
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
    title: "工号",
    width: 200,
    dataIndex: "classTeacher",
    key: "1",
    fixed: "left"
  },
  {
    title: "缺席扣分",
    width: 200,
    dataIndex: "absent",
    key: "2"
  },
  { title: "迟到早退扣分", dataIndex: "lateDeparture", key: "3", width: 200 },
  { title: "备注", dataIndex: "note", key: "4", width: 200 },
  { title: "学年", dataIndex: "showYear", key: "5", width: 200 },
  { title: "学期", dataIndex: "semester", key: "6", width: 200 },
  {
    title: "审核情况",
    dataIndex: "status",
    key: "7",
    fixed: "right",
    width: 200
  },
  {
    title: "操作",
    dataIndex: "operation1",
    key: "8",
    width: 100,
    fixed: "right",
    scopedSlots: { customRender: "operation1" }
  },
  {
    title: "",
    dataIndex: "operation2",
    key: "9",
    width: 100,
    fixed: "right",
    scopedSlots: { customRender: "operation2" }
  }
];
const columns3 = [
  {
    title: "工号",
    width: 200,
    dataIndex: "classTeacher",
    key: "1",
    fixed: "left"
  },
  {
    title: "缺席扣分",
    width: 200,
    dataIndex: "absent",
    key: "2"
  },
  { title: "迟到早退扣分", dataIndex: "lateDeparture", key: "3", width: 200 },
  { title: "备注", dataIndex: "note", key: "4", width: 200 },
  { title: "学年", dataIndex: "showYear", key: "5", width: 200 },
  { title: "学期", dataIndex: "semester", key: "6", width: 200 },
  {
    title: "审核情况",
    dataIndex: "status",
    key: "7",
    width: 200
  }
];

export default {
  inject: ["reload"],
  components: { floder, edit },
  data() {
    return {
      data: [],
      columns1,
      columns3,
      pagination: { defaultPageSize: 9, total: 9 }
    };
  },
  methods: {
    onDelete(key) {
      const data = [...this.data];
      this.data = data.filter(item => item.key !== key);
      //console.log(data[key].id);
      this.axios
        .get(
          "/teachingconstructionTeachingactivities/deleteByPrimaryKey",
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
          "/teachingconstructionTeachingactivities/selectByClassTeacher",
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
          "/teachingconstructionTeachingactivities/selectAll",
          {
            params: {
              departmentDept: this.$store.state.teachedepartmentDept,
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

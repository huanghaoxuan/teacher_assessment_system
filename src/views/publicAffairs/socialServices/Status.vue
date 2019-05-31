<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card title="社会服务">
      <floder slot="extra"></floder>
      <a-table
        :pagination="pagination"
        :columns="columns"
        :dataSource="data"
        :scroll="{ x: 1400, y: 610 }"
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
    </a-card>
  </div>
</template>

<script>
import floder from "./Floder.vue";
import edit from "./Edit.vue";
const columns = [
  {
    title: "活动名称",
    width: 200,
    dataIndex: "name",
    key: "1"
  },
  {
    title: "参与形式",
    dataIndex: "tpye",
    key: "2",
    width: 200
  },
  { title: "备注", dataIndex: "note", key: "3", width: 200 },
  { title: "学年", dataIndex: "showYear", key: "4", width: 200 },
  { title: "学期", dataIndex: "semester", key: "5", width: 200 },
  {
    title: "审核情况",
    dataIndex: "status",
    key: "6",
    fixed: "right",
    width: 200
  },
  {
    title: "操作",
    dataIndex: "operation1",
    key: "7",
    width: 100,
    fixed: "right",
    scopedSlots: { customRender: "operation1" }
  },
  {
    title: "",
    dataIndex: "operation2",
    key: "8",
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
      columns,
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
          "/publicaffairsSocialservices/deleteByPrimaryKey",
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
      this.showListData(pagination.current);
    },
    showListData(pageNum) {
      this.axios
        .get(
          "/publicaffairsSocialservices/selectByClassTeacher",
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
    }
  },
  mounted() {
    //console.log(this.$store.state.teacherid);
    this.showListData(1);
  }
};
</script>

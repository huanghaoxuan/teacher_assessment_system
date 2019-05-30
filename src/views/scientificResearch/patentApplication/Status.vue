<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card title="申请专利">
      <floder slot="extra"></floder>
      <a-table
        :pagination="pagination"
        :columns="columns"
        :dataSource="data"
        :scroll="{ x: 2000, y: 610 }"
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
    title: "专利名称",
    width: 200,
    dataIndex: "name",
    key: "1",
    fixed: "left"
  },
  { title: "专利类型", dataIndex: "tpye", key: "2", width: 200 },
  {
    title: "申请时间",
    dataIndex: "publicationDate",
    key: "3",
    width: 200
  },
  {
    title: "是否受理",
    dataIndex: "hasProcessing",
    key: "4",
    width: 200
  },
  {
    title: "是否获授权",
    dataIndex: "hasAuthorized",
    key: "5",
    width: 200
  },
  { title: "是否获专利", dataIndex: "hasPatent", key: "6", width: 200 },
  { title: "备注", dataIndex: "note", key: "7", width: 200 },
  { title: "学年", dataIndex: "year", key: "8", width: 200 },
  {
    title: "审核情况",
    dataIndex: "status",
    key: "9",
    width: 200,
    fixed: "right"
  },
  {
    title: "操作",
    dataIndex: "operation1",
    key: "10",
    width: 100,
    fixed: "right",
    scopedSlots: { customRender: "operation1" }
  },
  {
    title: "",
    dataIndex: "operation2",
    key: "11",
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
          "/scientificresearchPatentapplication/deleteByPrimaryKey",
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
          "/scientificresearchPatentapplication/selectByClassTeacher",
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
              var str = JSON.stringify(res.data.list[index]);
              str = str.split("}")[0];
              str = str + ',"key":' + index + "}";
              res.data.list[index] = JSON.parse(str);
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

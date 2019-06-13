<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card title="账号查询">
      <a-form layout="inline" :form="form" @submit="handleSubmit">
        <a-form-item label="教师工号">
          <a-input
            v-decorator="['classTeacher']"
            placeholder="请输入教师工号"
          />
        </a-form-item>
        <a-form-item label="教师名字">
          <a-input v-decorator="['name']" placeholder="请输入教师名字" />
        </a-form-item>
        <a-form-item label="所在学院">
          <a-select
            v-decorator="['departmentDept']"
            placeholder="请输入所在学院"
            style="width: 200px"
          >
            <a-select-option value="">
              学院不参与筛选
            </a-select-option>
            <a-select-option value="电子与计算机工程学院">
              电子与计算机工程学院
            </a-select-option>
            <a-select-option value="建筑与艺术设计学院">
              建筑与艺术设计学院
            </a-select-option>
            <a-select-option value="土木与交通工程学院">
              土木与交通工程学院
            </a-select-option>
            <a-select-option value="机械与电气工程学院">
              机械与电气工程学院
            </a-select-option>
            <a-select-option value="制药与化学工程学院">
              制药与化学工程学院
            </a-select-option>
            <a-select-option value="经济管理学院">
              经济管理学院
            </a-select-option>
            <a-select-option value="基础部">
              基础部
            </a-select-option>
            <a-select-option value="党政办">
              党政办
            </a-select-option>
            <a-select-option value="保卫处">
              保卫处
            </a-select-option>
            <a-select-option value="组织人事部">
              组织人事部
            </a-select-option>
            <a-select-option value="教务处">
              教务处
            </a-select-option>
            <a-select-option value="学生处">
              学生处
            </a-select-option>
            <a-select-option value="团委">
              团委
            </a-select-option>
            <a-select-option value="财务与资产管理处">
              财务与资产管理处
            </a-select-option>
            <a-select-option value="后勤管理处">
              后勤管理处
            </a-select-option>
            <a-select-option value="质量保证部">
              质量保证部
            </a-select-option>
            <a-select-option value="发展合作处">
              发展合作处
            </a-select-option>
            <a-select-option value="图档信息中心">
              图档信息中心
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">
            查询
          </a-button>
        </a-form-item>
      </a-form>
      <br />
      <a-table
        :pagination="pagination"
        :columns="columns"
        :dataSource="data"
        @change="handleTableChange"
      >
        <template slot="operation" slot-scope="text, record">
          <findInformation :list="data[record.key]"></findInformation>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script>
const columns = [
  {
    title: "教师姓名",
    width: 200,
    dataIndex: "name",
    key: "1"
  },
  {
    title: "教师工号",
    width: 200,
    dataIndex: "classTeacher",
    key: "2"
  },
  { title: "所在系部", dataIndex: "departmentDept", key: "3", width: 200 },
  {
    title: "操作",
    dataIndex: "operation",
    key: "4",
    width: 200,
    scopedSlots: { customRender: "operation" }
  }
];

import findInformation from "./FindInformation";
export default {
  inject: ["reload"],
  components: { findInformation },
  data() {
    return {
      data: [],
      columns,
      form: this.$form.createForm(this),
      pagination: { defaultPageSize: 9, total: 9 }
    };
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.getdata(pagination.current, values);
        }
      });
    },
    getdata(pageNum, values) {
      //console.log(values)
      this.axios
        .get(
          "/userinformation/selectUserinformation/findUser",
          {
            params: {
              ...values,
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
            this.list = res.data.list;
            for (let index = 0; index < res.data.list.length; index++) {
              res.data.list[index].key = index;
            }
            this.data = res.data.list;
            this.pagination.total = res.data.total;
            //控制台打印请求成功时返回的数据
            //bind(this)可以不用
            if (res.data.total == 0) {
              this.$notification.error({
                message: "无用户满足查询条件"
              });
            }
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
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.getdata(1, values);
        }
      });
    }
  }
};
</script>

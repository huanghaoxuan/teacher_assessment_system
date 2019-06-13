<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card title="社会服务">
      <floder slot="extra" v-if="$store.state.identity == 1"></floder>
      <a-form
        layout="inline"
        :form="form"
        @submit="handleSubmit"
        v-if="$store.state.identity != 1"
      >
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
            :disabled="$store.state.identity == 2"
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
        v-if="$store.state.identity == 1"
        :pagination="pagination"
        :columns="columns1"
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

      <a-table
        v-if="$store.state.identity == 2"
        :pagination="pagination"
        :columns="columns2"
        :dataSource="data"
        :scroll="{ x: 1600, y: 610 }"
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
    title: "活动名称",
    width: 200,
    dataIndex: "name",
    fixed: "left",
    key: "1"
  },
  {
    title: "参与形式",
    dataIndex: "tpye",
    key: "2",
    width: 200
  },
  { title: "备注", dataIndex: "note", key: "3", width: 200 },
  { title: "学年", dataIndex: "showYear", key: "4", width: 270 },
  { title: "学期", dataIndex: "semester", key: "5", width: 270 },
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
    title: "参与形式",
    dataIndex: "tpye",
    key: "2",
    width: 200
  },
  { title: "备注", dataIndex: "note", key: "3", width: 200 },
  { title: "学年", dataIndex: "showYear", key: "4", width: 270 },
  { title: "学期", dataIndex: "semester", key: "5", width: 270 },
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
    title: "参与形式",
    dataIndex: "tpye",
    key: "2",
    width: 200
  },
  { title: "备注", dataIndex: "note", key: "3", width: 200 },
  { title: "学年", dataIndex: "showYear", key: "4", width: 270 },
  { title: "学期", dataIndex: "semester", key: "5", width: 270 },
  {
    title: "审核情况",
    dataIndex: "status",
    key: "6",
    fixed: "right",
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
      columns2,
      columns3,
      form: this.$form.createForm(this),
      pagination: { defaultPageSize: 9, total: 9 }
    };
  },
  methods: {
    auditChange(data, statusStr) {
      data = { ...data, status: statusStr };
      this.axios
        .post(
          "/publicaffairsSocialservices/updateByPrimaryKey",
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
            this.reload();
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
      if (this.$store.state.identity == 1) {
        this.showListData(pagination.current);
      } else {
        this.form.validateFields((err, values) => {
          if (!err) {
            this.showAllListData(pagination.current, values);
          }
        });
      }
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
    },
    showAllListData(pageNum, values) {
      this.axios
        .get(
          "/publicaffairsSocialservices/selectAll",
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
            if (res.data.list != null) {
              for (let index = 0; index < res.data.list.length; index++) {
                res.data.list[index].key = index;
                var year = res.data.list[index].year + 1;
                var yearStr =
                  res.data.list[index].year + " — " + year + " 学年";
                res.data.list[index].showYear = yearStr;
              }
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
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.showAllListData(1, values);
        }
      });
    }
  },
  mounted() {
    //console.log(this.$store.state.teacherid);
    if (this.$store.state.identity == 1) {
      //教师填写权限时，只能查询自己的信息
      this.showListData(1);
    } else if (this.$store.state.identity == 2) {
      //系管理员权限时，只能查询本系的信息
      this.form.setFieldsValue({
        departmentDept: this.$store.state.teachedepartmentDept
      });
      this.showAllListData(1, {
        departmentDept: this.$store.state.teachedepartmentDept
      });
    } else {
      //院管理员权限时，查询全部信息
      this.showAllListData(1, null);
    }
  }
};
</script>

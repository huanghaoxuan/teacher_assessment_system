<template>
  <div style="background:#ECECEC; padding:30px">
    <a-table
      :columns="columns"
      :dataSource="data"
      :scroll="{ x: 3100, y: 600 }"
    >
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="data.length"
          title="确认删除?"
          @confirm="() => onDelete(record.key)"
        >
          <a href="#">删除</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: "课程名称",
    width: 200,
    dataIndex: "name",
    key: "1",
    fixed: "left"
  },
  { title: "课程性质", dataIndex: "character", key: "2", width: 200 },
  { title: "授课形式", dataIndex: "type", key: "3", width: 200 },
  { title: "是否", dataIndex: "yesorno", key: "4", width: 200 },
  { title: "学分", dataIndex: "credits", key: "5", width: 200 },
  { title: "学时", dataIndex: "hours", key: "6", width: 200 },
  { title: "授课班个数", dataIndex: "classesNumber", key: "7", width: 200 },
  {
    title: "平行班个数",
    dataIndex: "parallelClassesNumber",
    key: "8",
    width: 200
  },
  { title: "作业次数", dataIndex: "homeworkNumber", key: "9", width: 200 },
  { title: "批改次数", dataIndex: "correctingNumber", key: "10", width: 200 },
  { title: "答疑次数", dataIndex: "answeringNumber", key: "11", width: 200 },
  { title: "备注", dataIndex: "note", key: "12", width: 200 },
  { title: "学年/学期", dataIndex: "year", key: "13", width: 200 },
  {
    title: "审核情况",
    dataIndex: "status",
    key: "14",
    width: 200,
    fixed: "right"
  },
  {
    title: "操作",
    dataIndex: "operation",
    key: "15",
    width: 200,
    fixed: "right",
    scopedSlots: { customRender: "operation" }
  }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `课程名称 ${i}`,
    character: `课程性质 ${i}`,
    type: `授课形式 ${i}`,
    yesorno: `是否 ${i}`,
    credits: `学分 ${i}`,
    hours: `学时 ${i}`,
    classesNumber: `授课班个数 ${i}`,
    parallelClassesNumber: `平行班个数 ${i}`,
    homeworkNumber: `作业次数 ${i}`,
    correctingNumber: `批改次数 ${i}`,
    answeringNumber: `答疑次数 ${i}`,
    note: `备注 ${i}`,
    year: `学年/学期 ${i}`,
    status: `审核情况 ${i}`
  });
}

export default {
  data() {
    return {
      data,
      columns
    };
  },
  methods: {
    onDelete(key, record) {
      const data = [...this.data];
      this.data = data.filter(item => item.key !== key);
    }
  }
};
</script>

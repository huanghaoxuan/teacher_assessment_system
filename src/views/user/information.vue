<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card title="基本信息">
      <edit slot="extra" :editData="data"></edit>
      <a-table
        :columns="columns"
        :dataSource="data"
        :showHeader="false"
        :pagination="false"
      >
      </a-table>
    </a-card>
  </div>
</template>

<script>
import edit from "./Edit.vue";
const columns = [
  {
    title: "",
    dataIndex: "title",
    width: "20%",
    align: "right"
  },
  {
    title: "",
    dataIndex: "value",
    width: "80%",
    align: "left"
  }
];
const data = [
  {
    key: "1",
    columns: "name", //列属性
    title: "姓名:", //列含义
    value: "" //属性值
  },
  {
    key: "2",
    columns: "sex", //列属性
    title: "性别:",
    value: ""
  },
  {
    key: "3",
    columns: "birthday", //列属性
    title: "出生年月:",
    value: ""
  },
  {
    key: "4",
    columns: "academicQualifications", //列属性
    title: "学历:",
    value: ""
  },
  {
    key: "5",
    columns: "academicDegrees", //列属性
    title: "学位:",
    value: ""
  },
  {
    key: "6",
    columns: "duties", //列属性
    title: "职务:",
    value: ""
  },
  {
    key: "7",
    columns: "politicalLandscape", //列属性
    title: "政治面貌:",
    value: ""
  },
  {
    key: "8",
    columns: "techerid", //列属性
    title: "工号:",
    value: ""
  },
  {
    key: "9",
    columns: "departmentDept.", //列属性
    title: "所在系部:",
    value: ""
  },
  {
    key: "10",
    columns: "enterSchoolTime", //列属性
    title: "进校时间:",
    value: ""
  },
  {
    key: "11",
    columns: "universityYear", //列属性
    title: "高校工龄:",
    value: ""
  },
  {
    key: "12",
    columns: "undergraduateGraduationSchool", //列属性
    title: "本科毕业学校:",
    value: ""
  },
  {
    key: "13",
    columns: "academicQualificationsSchool", //列属性
    title: "获得最高学历的院校或机构:",
    value: ""
  },
  {
    key: "14",
    columns: "academicDegreesSchool", //列属性
    title: "获得最高学位的院校或机构:",
    value: ""
  },
  {
    key: "15",
    columns: "idcard", //列属性
    title: "身份证号码:",
    value: ""
  },
  {
    key: "16",
    columns: "academicDegrees", //列属性
    title: "申报学科:",
    value: ""
  },
  {
    key: "17",
    columns: "academicDegrees", //列属性
    title: "拟报职称:",
    value: ""
  },
  {
    key: "18",
    columns: "academicDegrees", //列属性
    title: "所学专业:",
    value: ""
  },
  {
    key: "19",
    columns: "academicDegrees", //列属性
    title: "工作时间:",
    value: ""
  },
  {
    key: "20",
    columns: "academicDegrees", //列属性
    title: "教师资格证:",
    value: ""
  },
  {
    key: "21",
    columns: "academicDegrees", //列属性
    title: "岗前培训:",
    value: ""
  },
  {
    key: "22",
    columns: "academicDegrees", //列属性
    title: "普通话考试:",
    value: ""
  },
  {
    key: "24",
    columns: "academicDegrees", //列属性
    title: "最高学历取得时间:",
    value: ""
  },
  {
    key: "25",
    columns: "academicDegrees", //列属性
    title: "最高学位取得时间:",
    value: ""
  },
  {
    key: "26",
    columns: "academicDegrees", //列属性
    title: "现专业技术职务:",
    value: ""
  },
  {
    key: "27",
    columns: "academicDegrees", //列属性
    title: "现专业技术职务取得时间:",
    value: ""
  },
  {
    key: "28",
    columns: "academicDegrees", //列属性
    title: "现从事专业研究方向:",
    value: ""
  },
  {
    key: "29",
    columns: "academicDegrees", //列属性
    title: "现从事专业研究方向年限:",
    value: ""
  },
  {
    key: "30",
    columns: "academicDegrees", //列属性
    title: "继续教育情况:",
    value: ""
  },
  {
    key: "31",
    columns: "academicDegrees", //列属性
    title: "工程实践经历:",
    value: ""
  },
  {
    key: "32",
    columns: "academicDegrees", //列属性
    title: "指导学生实践轮数:",
    value: ""
  }
];

export default {
  components: { edit },
  data() {
    return {
      data,
      columns
    };
  }
};
</script>

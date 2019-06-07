<template>
  <div>
    <a-button type="primary" @click="showModal">修改</a-button>
    <a-modal
      title="正在修改实验实践教学内容"
      :visible="visible"
      @ok="handleOk"
      okText="确认修改"
      cancelText="取消"
      :maskClosable="false"
      :confirmLoading="confirmLoading"
      width="50%"
      @cancel="handleCancel"
    >
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item
          label="实验课程名称"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'name',
              { rules: [{ required: true, message: '实验课程名称不能为空' }] }
            ]"
            placeholder="请输入实验课程名称'"
          />
        </a-form-item>
        <a-form-item
          label="角色"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'character',
              { rules: [{ required: true, message: '角色不能为空' }] }
            ]"
          >
            <a-radio value="第一指导">
              第一指导
            </a-radio>
            <a-radio value="第二指导">
              第二指导
            </a-radio>
            <a-radio value="第三指导">
              第三指导
            </a-radio>
            <a-radio value="参与">
              参与
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="总时数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'allTime',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '总时数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入总时数'"
            addonAfter="小时"
          />
        </a-form-item>

        <a-form-item
          label="周学时"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'weekTime',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '周学时输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入周学时'"
            addonAfter="小时"
          />
        </a-form-item>

        <a-form-item
          label="学生人数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'studentNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '学生人数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入学生人数"
            addonAfter="人"
          />
        </a-form-item>

        <a-form-item
          label="平行班个数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'parallelClassesNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '平行班个数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入平行班个数'"
            addonAfter="个"
          />
        </a-form-item>

        <a-form-item
          label="每班分组次数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'groupingPerClassNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '每班分组次数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入每班分组次数'"
            addonAfter="次"
          />
        </a-form-item>

        <a-form-item
          label="指导教师人数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'instructorsNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '指导教师人数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入指导教师人数'"
            addonAfter="人"
          />
        </a-form-item>

        <a-form-item
          label="实验类型"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-checkbox-group
            v-decorator="[
              'experimentType',
              { rules: [{ required: true, message: '实验类型不能为空' }] }
            ]"
            placeholder="请输入实验类型'"
            style="width: 100%;"
          >
            <a-row>
              <a-col :span="8">
                <a-checkbox value="演示性">
                  演示性
                </a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="验证性">
                  验证性
                </a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="设计性">
                  设计性
                </a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="综合性">
                  综合性
                </a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="创新性">
                  创新性
                </a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </a-form-item>

        <a-form-item
          label="交试验报告次数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'reportsNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '交试验报告次数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入交试验报告次数"
            addonAfter="次"
          />
        </a-form-item>

        <a-form-item
          label="批改次数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'correctionsNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '批改次数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入批改次数'"
            addonAfter="次"
          />
        </a-form-item>

        <a-form-item
          label="备注"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-textarea v-decorator="['note']" placeholder="请输入备注'" />
        </a-form-item>

        <a-form-item
          label="学年"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'year',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message:
                      '学年输入有误（请输入数字）（若为  2018 — 2019 学年 请输入 2018）'
                  }
                ]
              }
            ]"
            placeholder="若为2018—2019学年请输入2018"
            addonAfter="年"
          />
        </a-form-item>

        <a-form-item
          label="学期"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-select
            v-decorator="[
              'semester',
              { rules: [{ required: true, message: '学期不能为空' }] }
            ]"
            placeholder="请选择学期"
          >
            <a-select-option value="第一学期">
              第一学期
            </a-select-option>
            <a-select-option value="第二学期">
              第二学期
            </a-select-option>
            <a-select-option value="暂无">
              暂无
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
export default {
  inject: ["reload"],
  props: {
    editData: {}
  },
  data() {
    return {
      visible: false,
      confirmLoading: false,
      form: this.$form.createForm(this)
    };
  },
  methods: {
    showModal() {
      this.visible = true;
      //console.log(this.editData);
      setTimeout(() => {
        this.form.setFieldsValue(this.editData);
        this.form.setFieldsValue({
          experimentType: this.editData.experimentType.split("、")
        });
      }, 10);
    },
    handleOk(e) {
      this.confirmLoading = true;
      this.handleSubmit(e);
    },
    handleCancel(e) {
      this.visible = false;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          var experimentTypeStr = "";
          for (let index = 0; index < values.experimentType.length; index++) {
            experimentTypeStr =
              experimentTypeStr + values.experimentType[index] + "、";
          }
          //console.log(values);
          //console.log(experimentTypeStr);
          {
            this.axios
              .post(
                "/teacheringworkExperimentalpracticeteaching/updateByPrimaryKey",
                this.qs.stringify({
                  id: this.editData.id,
                  classTeacher: this.$store.state.teacherid,
                  ...values,
                  status: "未审核",
                  experimentType: experimentTypeStr
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
                  this.visible = false;
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
          }
        }

        this.confirmLoading = false;
      });
    }
  }
};
</script>

<template>
  <div>
    <a-button type="primary" @click="showModal">修改</a-button>
    <a-modal
      title="正在修改专业建设、专业综合改革内容"
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
          label="任务角色"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-select
            v-decorator="[
              'character',
              { rules: [{ required: true, message: '任务角色不能为空' }] }
            ]"
            placeholder="请输入任务角色"
          >
            <a-select-option value="负责人">
              负责人
            </a-select-option>
            <a-select-option value="第二负责人">
              第二负责人
            </a-select-option>
            <a-select-option value="主要参与者">
              主要参与者
            </a-select-option>
            <a-select-option value="一般参与者">
              一般参与者
            </a-select-option>
            <a-select-option value="未参与">
              未参与
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="承担任务"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-checkbox-group
            v-decorator="[
              'undertakingTasks',
              { rules: [{ required: true, message: '承担任务不能为空' }] }
            ]"
            placeholder="请输入承担任务"
            style="width: 100%;"
          >
            <a-row>
              <a-col :span="24">
                <a-checkbox value="制定（修订）培养方案">
                  制定（修订）培养方案
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="撰写市场调研报告">
                  撰写市场调研报告
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="研制专业培养知识能力素质矩阵图">
                  研制专业培养知识能力素质矩阵图
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="开展毕业生调查">
                  开展毕业生调查
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="制定（修订）专业发展规划">
                  制定（修订）专业发展规划
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="制定专业试点改革方案">
                  制定专业试点改革方案
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="撰写项目总结报告">
                  撰写项目总结报告
                </a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </a-form-item>

        <a-form-item
          label="备注"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-textarea v-decorator="['note']" placeholder="请输入备注'" />
        </a-form-item>

        <a-form-item
          label="学年"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
            placeholder="若为 ' 2018 — 2019 学年 '请输入 2018"
            addonAfter="年"
          />
        </a-form-item>

        <a-form-item
          label="学期"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
        this.form.setFieldsValue({ undertakingTasks: [] });
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
          var undertakingTasksStr = "";
          for (let index = 0; index < values.undertakingTasks.length; index++) {
            undertakingTasksStr =
              undertakingTasksStr + values.undertakingTasks[index] + "、";
          }
          //console.log(values);
          {
            this.axios
              .post(
                "/teachingconstructionComprehensivereform/updateByPrimaryKey",
                this.qs.stringify({
                  id: this.editData.id,
                  classTeacher: this.$store.state.teacherid,
                  ...values,
                  status: "未审核",
                  undertakingTasks: undertakingTasksStr
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
          }
        }

        this.confirmLoading = false;
      });
    }
  }
};
</script>

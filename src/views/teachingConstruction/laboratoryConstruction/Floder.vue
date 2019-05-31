<template>
  <div>
    <a-button type="primary" @click="showModal">新建</a-button>
    <a-modal
      title="正在新添加实验室建设内容"
      :visible="visible"
      @ok="handleOk"
      okText="确认添加"
      cancelText="取消"
      :maskClosable="false"
      :confirmLoading="confirmLoading"
      width="50%"
      @cancel="handleCancel"
    >
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item
          label="开发实验项目名称"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'name',
              {
                rules: [{ required: true, message: '开发实验项目名称不能为空' }]
              }
            ]"
            placeholder="请输入开发实验项目名称'"
          />
        </a-form-item>

        <a-form-item
          label="任务角色"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'character',
              { rules: [{ required: true, message: '任务角色不能为空' }] }
            ]"
            placeholder="请输入任务角色'"
          >
            <a-radio value="建设项目负责人">
              建设项目负责人
            </a-radio>
            <a-radio value="第二负责人">
              第二负责人
            </a-radio>
            <a-radio value="主要参与者">
              主要参与者
            </a-radio>
            <a-radio value="一般参与者">
              一般参与者
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="本人贡献"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-checkbox-group
            v-decorator="[
              'contribution',
              { rules: [{ required: true, message: '本人贡献不能为空' }] }
            ]"
            placeholder="请输入本人贡献"
            style="width: 100%;"
          >
            <a-row>
              <a-col :span="24">
                <a-checkbox value="编制建设方案">
                  编制建设方案
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="设备论证及采购">
                  设备论证及采购
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="安装调试设备">
                  安装调试设备
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="开发实验项目">
                  开发实验项目
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="自制仪器设备">
                  自制仪器设备
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="改制仪器设备">
                  改制仪器设备
                </a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </a-form-item>

        <a-form-item
          label="对应学时"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'hours',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '对应学时输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入对应学时"
            addonAfter="小时"
          />
        </a-form-item>

        <a-form-item
          label="收益人数"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'peopleNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '收益人数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入收益人数"
            addonAfter="人"
          />
        </a-form-item>

        <a-form-item
          label="适用专业"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'professional',
              {
                rules: [{ required: true, message: '适用专业不能为空' }]
              }
            ]"
            placeholder="请输入适用专业'"
          />
        </a-form-item>

        <a-form-item
          label="适用年级"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'grade',
              {
                rules: [{ required: true, message: '适用年级不能为空' }]
              }
            ]"
            placeholder="请输入适用年级'"
          />
        </a-form-item>

        <a-form-item
          label="自制装置名称"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'controlDeviceName',
              {
                rules: [{ required: true, message: '自制装置名称不能为空' }]
              }
            ]"
            placeholder="请输入自制装置名称'"
          />
        </a-form-item>

        <a-form-item
          label="改制装置名称"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'reformingDeviceName',
              {
                rules: [{ required: true, message: '改制装置名称不能为空' }]
              }
            ]"
            placeholder="请输入改制装置名称'"
          />
        </a-form-item>

        <a-form-item
          label="节省经费数"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'money',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '节省经费数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入节省经费数"
            addonAfter="万元"
          />
        </a-form-item>

        <a-form-item
          label="备注"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-textarea
            v-decorator="[
              'note',
              { rules: [{ required: true, message: '备注不能为空' }] }
            ]"
            placeholder="请输入备注'"
          />
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
                    message: '学年输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入学年'"
            addonAfter="年"
          />
        </a-form-item>

        <a-form-item
          label="学期"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-select v-decorator="['semester']" placeholder="请选择学期">
            <a-select-option value="第一学期">
              第一学期
            </a-select-option>
            <a-select-option value="第一学期">
              第二学期
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
export default {
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
          var contributionStr = "";
          for (let index = 0; index < values.contribution.length; index++) {
            contributionStr =
              contributionStr + values.contribution[index] + "、";
          }
          //console.log(values);
          {
            this.axios
              .post(
                "/teachingconstructionLaboratoryconstruction/insert",
                this.qs.stringify({
                  classTeacher: this.$store.state.teacherid,
                  status: "未审核",
                  ...values,
                  contribution: contributionStr
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
                  this.visible = true;
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

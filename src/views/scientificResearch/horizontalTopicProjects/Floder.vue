<template>
  <div>
    <a-button type="primary" @click="showModal">新建</a-button>
    <a-modal
      title="正在新添加横向课题项目内容"
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
          label="项目名称"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'name',
              { rules: [{ required: true, message: '项目名称不能为空' }] }
            ]"
            placeholder="请输入项目名称'"
          />
        </a-form-item>

        <a-form-item
          label="项目来源"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-select
            v-decorator="[
              'source',
              { rules: [{ required: true, message: '项目来源不能为空' }] }
            ]"
            placeholder="请输入项目来源"
          >
            <a-select-option value="政校合作">
              政校合作
            </a-select-option>
            <a-select-option value="校企合作">
              校企合作
            </a-select-option>
            <a-select-option value="校际合作">
              校际合作
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="任务角色"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
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
            <a-select-option value="排二">
              排二
            </a-select-option>
            <a-select-option value="排三">
              排三
            </a-select-option>
            <a-select-option value="排四">
              排四
            </a-select-option>
            <a-select-option value="排五">
              排五
            </a-select-option>
            <a-select-option value="排五以后">
              排五以后
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="项目经费"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'money',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '项目经费输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入项目经费"
            addonAfter="万元"
          />
        </a-form-item>

        <a-form-item
          label="立项时间"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-date-picker
            v-decorator="[
              'startTime',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '立项时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入立项时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="预计结题时间"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-date-picker
            v-decorator="[
              'estimatedClosingTime',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '预计结题时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入预计结题时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="结题结论"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-textarea v-decorator="['result']" placeholder="请输入结题结论'" />
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
          const fieldsValue = {
            ...values,
            startTime: values["startTime"].format("YYYY-MM-DD"),
            estimatedClosingTime: values["estimatedClosingTime"].format(
              "YYYY-MM-DD"
            )
          };
          //console.log(fieldsValue);
          {
            this.axios
              .post(
                "/scientificresearchHorizontaltopicprojects/insert",
                this.qs.stringify({
                  classTeacher: this.$store.state.teacherid,
                  ...fieldsValue,
                  status: "未审核"
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

<template>
  <div>
    <a-button type="primary" @click="showModal">新建</a-button>
    <a-modal
      title="正在新添加纵向课题项目内容"
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
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-select
            v-decorator="[
              'source',
              { rules: [{ required: true, message: '项目来源不能为空' }] }
            ]"
            placeholder="请输入项目来源"
          >
            <a-select-option value="国家自然科学基金">
              国家自然科学基金
            </a-select-option>
            <a-select-option value="国家社科基金">
              国家社科基金
            </a-select-option>
            <a-select-option value="省自然科学基金">
              省自然科学基金
            </a-select-option>
            <a-select-option value="省社科基金">
              省社科基金
            </a-select-option>
            <a-select-option value="市厅级">
              市厅级
            </a-select-option>
            <a-select-option value="专项课题（思政、党建等）">
              专项课题（思政、党建等）
            </a-select-option>
            <a-select-option value="院级">
              院级
            </a-select-option>
            <a-select-option value="其他">
              其他
            </a-select-option>
          </a-select>
        </a-form-item>

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
          label="课题性质"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'type',
              { rules: [{ required: true, message: '课题性质不能为空' }] }
            ]"
            placeholder="请输入课题性质"
          >
            <a-radio value="重点资助">
              重点资助
            </a-radio>
            <a-radio value="一般资助">
              一般资助
            </a-radio>
            <a-radio value="二等奖">
              二等奖
            </a-radio>
            <a-radio value="三等奖">
              三等奖
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="项目经费"
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
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-date-picker
            v-decorator="[
              'participantsNumber',
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
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-textarea
            v-decorator="[
              'result',
              { rules: [{ required: true, message: '结题结论不能为空' }] }
            ]"
            placeholder="请输入结题结论'"
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
            participantsNumber: values["participantsNumber"].format(
              "YYYY-MM-DD"
            ),
            estimatedClosingTime: values["estimatedClosingTime"].format(
              "YYYY-MM-DD"
            )
          };
          console.log(fieldsValue);
          {
            this.axios
              .post(
                "/fruitClassTeaching/commitClassTeaching",
                this.qs.stringify({}),
                {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                }
              )
              .then(
                function(res) {
                  console.log(res.data);
                  //每条数据需要一个唯一的key值
                  this.$router.go(0);
                }.bind(this)
              )
              .catch(
                function(err) {
                  if (err.response) {
                    console.log(err.response);
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

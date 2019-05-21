<template>
  <div>
    <a-button type="primary" @click="showModal">新建</a-button>
    <a-modal
      title="正在新添加毕业设计指导内容"
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
          label="毕业设计名称"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'name',
              { rules: [{ required: true, message: '毕业设计名称不能为空' }] }
            ]"
            placeholder="请输入毕业设计名称'"
          />
        </a-form-item>

        <a-form-item
          label="指导形式"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'character',
              { rules: [{ required: true, message: '指导形式不能为空' }] }
            ]"
            placeholder="请输入指导形式"
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
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="获奖级别"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-select
            v-decorator="[
              'level',
              { rules: [{ required: true, message: '获奖级别不能为空' }] }
            ]"
            placeholder="请输入获奖级别"
          >
            <a-select-option value="省级一等奖">
              省级一等奖
            </a-select-option>
            <a-select-option value="省级二等奖">
              省级二等奖
            </a-select-option>
            <a-select-option value="省级三等奖">
              省级三等奖
            </a-select-option>
            <a-select-option value="省级团队一等奖">
              省级团队一等奖
            </a-select-option>
            <a-select-option value="省级团队二等奖">
              省级团队二等奖
            </a-select-option>
            <a-select-option value="省级团队三等奖">
              省级团队三等奖
            </a-select-option>
            <a-select-option value="院级优秀奖">
              院级优秀奖
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="获奖人数"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'winnersNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '获奖人数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入获奖人数"
            addonAfter="人"
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
          <a-select
            v-decorator="[
              'semester',
              { rules: [{ required: true, message: '请选择学期' }] }
            ]"
            placeholder="请选择学期"
          >
            <a-select-option value="1">
              第一学期
            </a-select-option>
            <a-select-option value="2">
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
      ModalText: "Content of the modal",
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
          console.log(values);
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

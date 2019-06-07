<template>
  <div>
    <a-button type="primary" @click="showModal">修改</a-button>
    <a-modal
      title="纵向课题项目"
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
          label="国家级  重点资助"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'countryKeyFunding',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入国家级  重点资助'
                  }
                ]
              }
            ]"
            placeholder="请输入国家级  重点资助"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="国家级  一般资助"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'countryGeneralFunding',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入国家级  一般资助'
                  }
                ]
              }
            ]"
            placeholder="请输入国家级  一般资助"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="国家级  立项"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'countryProject',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入国家级  立项'
                  }
                ]
              }
            ]"
            placeholder="请输入国家级  立项"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="省部级（大区）  重点资助"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'provincialKeyFunding',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入省部级（大区）  重点资助'
                  }
                ]
              }
            ]"
            placeholder="请输入省部级（大区）  重点资助"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="省部级（大区）  一般资助"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'provincialGeneralFunding',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入省部级（大区）  一般资助'
                  }
                ]
              }
            ]"
            placeholder="请输入省部级（大区）  一般资助"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="省部级（大区）  立项"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'provincialProject',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入省部级（大区）  立项'
                  }
                ]
              }
            ]"
            placeholder="请输入省部级（大区）  立项"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="市局级  重点资助"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'cityKeyFunding',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入市局级  重点资助'
                  }
                ]
              }
            ]"
            placeholder="请输入市局级  重点资助"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="市局级  一般资助"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'cityGeneralFunding',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入市局级  一般资助'
                  }
                ]
              }
            ]"
            placeholder="请输入市局级  一般资助"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="市局级  立项"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'cityProject',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入市局级  立项'
                  }
                ]
              }
            ]"
            placeholder="请输入市局级  立项"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="校级  重点资助"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'schoolKeyFunding',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入校级  重点资助'
                  }
                ]
              }
            ]"
            placeholder="请输入校级  重点资助"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="校级  一般资助"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'schoolGeneralFunding',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入校级  一般资助'
                  }
                ]
              }
            ]"
            placeholder="请输入校级  一般资助"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="校级  立项"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'schoolProject',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入校级  立项'
                  }
                ]
              }
            ]"
            placeholder="请输入校级  立项"
            addonAfter="分"
          />
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
          //console.log(fieldsValue);
          {
            this.axios
              .post(
                "/scoreLongitudinaltopicsproject/updateByPrimaryKey",
                this.qs.stringify({
                  ...values
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

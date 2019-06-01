<template>
  <div>
    <a-button type="primary" @click="showModal">修改</a-button>
    <a-modal
      title="指导学生比赛（毕业设计）获奖"
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
          label="国际级  一等（特等）奖"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'internationalFirstDigit',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入国际级  一等（特等）奖'
                  }
                ]
              }
            ]"
            placeholder="请输入国际级  一等（特等）奖"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="国际级  二等奖"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'internationalSecondDigit',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入国际级  二等奖'
                  }
                ]
              }
            ]"
            placeholder="请输入国际级  二等奖"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="国际级  三等奖"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'internationalThirdDigit',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入国际级  三等奖'
                  }
                ]
              }
            ]"
            placeholder="请输入国际级  三等奖"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="国家级  一等（特等）奖"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'countryFirstDigit',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入国家级  一等（特等）奖'
                  }
                ]
              }
            ]"
            placeholder="请输入国家级  一等（特等）奖"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="国家级  二等奖"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'countrySecondDigit',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入国家级  二等奖'
                  }
                ]
              }
            ]"
            placeholder="请输入国家级  二等奖"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="国家级  三等奖"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'countryThirdDigit',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入国家级  三等奖'
                  }
                ]
              }
            ]"
            placeholder="请输入国家级  三等奖"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="省部级（大区）  一等（特等）奖"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'provincialFirstDigit',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入省部级（大区）  一等（特等）奖'
                  }
                ]
              }
            ]"
            placeholder="请输入省部级（大区）  一等（特等）奖"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="省部级（大区）  二等奖"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'provincialSecondDigit',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入省部级（大区）  二等奖'
                  }
                ]
              }
            ]"
            placeholder="请输入省部级（大区）  二等奖"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="省部级（大区）  三等奖"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'provincialThirdDigit',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入省部级（大区）  三等奖'
                  }
                ]
              }
            ]"
            placeholder="请输入省部级（大区）  三等奖"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="市局级  一等（特等）奖"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'cityFirstDigit',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入市局级  一等（特等）奖'
                  }
                ]
              }
            ]"
            placeholder="请输入市局级  一等（特等）奖"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="市局级  二等奖"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'citySecondDigit',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入市局级  二等奖'
                  }
                ]
              }
            ]"
            placeholder="请输入市局级  二等奖"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="市局级  三等奖"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'cityThirdDigit',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入市局级  三等奖'
                  }
                ]
              }
            ]"
            placeholder="请输入市局级  三等奖"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="校级  一等（特等）奖"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'schoolFirstDigit',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入校级  一等（特等）奖'
                  }
                ]
              }
            ]"
            placeholder="请输入校级  一等（特等）奖"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="校级  二等奖"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'schoolSecondDigit',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入校级  二等奖'
                  }
                ]
              }
            ]"
            placeholder="请输入校级  二等奖"
            addonAfter="分"
          />
        </a-form-item>
        <a-form-item
          label="校级  三等奖"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'schoolThirdDigit',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '请输入校级  三等奖'
                  }
                ]
              }
            ]"
            placeholder="请输入校级  三等奖"
            addonAfter="分"
          />
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
                "/scoreGuidecontest/updateByPrimaryKey",
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

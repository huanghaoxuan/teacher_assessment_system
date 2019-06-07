<template>
  <div>
    <a-button type="primary" @click="showModal">新建</a-button>
    <a-modal
      title="正在新添加教材建设内容"
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
          label="教材名称"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'name',
              { rules: [{ required: true, message: '教材名称不能为空' }] }
            ]"
            placeholder="请输入教材名称'"
          />
        </a-form-item>

        <a-form-item
          label="出版社"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'press',
              { rules: [{ required: true, message: '出版社不能为空' }] }
            ]"
            placeholder="请输入出版社'"
          />
        </a-form-item>

        <a-form-item
          label="出版时间"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-date-picker
            v-decorator="[
              'publicationTime',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '出版时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入出版时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="教材字数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'textbooksNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '教材字数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入教材字数"
            addonAfter="万字"
          />
        </a-form-item>

        <a-form-item
          label="本人贡献"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'character',
              { rules: [{ required: true, message: '本人贡献不能为空' }] }
            ]"
            placeholder="请输入本人贡献'"
          >
            <a-radio value="主编">
              主编
            </a-radio>
            <a-radio value="副主编">
              副主编
            </a-radio>
            <a-radio value="参编">
              参编
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="是否"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-checkbox-group
            v-decorator="[
              'yesorno',
              { rules: [{ required: true, message: '是否不能为空' }] }
            ]"
            placeholder="请输入是否"
            style="width: 100%;"
          >
            <a-row>
              <a-col :span="24">
                <a-checkbox value="规划教材">
                  规划教材
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="获奖教材">
                  获奖教材
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="教指委指定教材">
                  教指委指定教材
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="应用教材">
                  应用教材
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="校企合作编写教材">
                  校企合作编写教材
                </a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
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
          var yesornoStr = "";
          for (let index = 0; index < values.yesorno.length; index++) {
            yesornoStr = yesornoStr + values.yesorno[index] + "、";
          }
          const fieldsValue = {
            ...values,
            publicationTime: values["publicationTime"].format("YYYY-MM-DD")
          };
          //console.log(fieldsValue);
          {
            this.axios
              .post(
                "/teachingconstructionTextbookconstruction/insert",
                this.qs.stringify({
                  classTeacher: this.$store.state.teacherid,
                  ...fieldsValue,
                  status: "未审核",
                  yesorno: yesornoStr
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

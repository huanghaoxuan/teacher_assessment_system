<template>
  <div>
    <a-button type="primary" @click="showModal">修改</a-button>
    <a-modal
      title="正在修改辅导员内容"
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
          label="所带班级评为校级先进"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'schoolLevel',
              {
                rules: [
                  { required: true, message: '所带班级评为校级先进不能为空' }
                ]
              }
            ]"
            placeholder="请输入所带班级评为校级先进'"
          />
        </a-form-item>

        <a-form-item
          label="所带班级评为省级先进"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'provinceLevel',
              {
                rules: [
                  { required: true, message: '所带班级评为省级先进不能为空' }
                ]
              }
            ]"
            placeholder="请输入所带班级评为省级先进"
          />
        </a-form-item>

        <a-form-item
          label="所带班级/党团组织"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'caucusLaval',
              {
                rules: [
                  { required: true, message: '所带班级/党团组织不能为空' }
                ]
              }
            ]"
            placeholder="请输入所带班级/党团组织"
          />
        </a-form-item>

        <a-form-item
          label="开始时间"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-date-picker
            v-decorator="[
              'startTime',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '开始时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入开始时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="结束时间"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-date-picker
            v-decorator="[
              'endTime',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '结束时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入结束时间"
            style="width:100%"
          />
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
        this.form.setFieldsValue({ startTime: null, endTime: null });
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
          const fieldsValue = {
            ...values,
            startTime: values["startTime"].format("YYYY-MM-DD"),
            endTime: values["endTime"].format("YYYY-MM-DD")
          };
          //console.log(fieldsValue);
          {
            this.axios
              .post(
                "/publicaffairsCounselor/updateByPrimaryKey",
                this.qs.stringify({
                  id: this.editData.id,
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

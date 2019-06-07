<template>
  <div>
    <a-button type="primary" @click="showModal">修改</a-button>
    <a-modal
      title="正在修改课堂实习指导内容"
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
          label="实习名称"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'name',
              { rules: [{ required: true, message: '实习名称不能为空' }] }
            ]"
            placeholder="请输入实验实习名称'"
          />
        </a-form-item>

        <a-form-item
          label="学分"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'credits',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '学分输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入学分'"
            addonAfter="分"
          />
        </a-form-item>

        <a-form-item
          label="时长"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'hours',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*(.[0-9]+)?)$/,
                    required: true,
                    message: '时长输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入时长'"
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
            placeholder="请输入学生人数'"
            addonAfter="人"
          />
        </a-form-item>

        <a-form-item
          label="循环次数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'loopsNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '循环次数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入循环次数"
            addonAfter="次"
          />
        </a-form-item>

        <a-form-item
          label="指导内容"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'guidanceContent',
              { rules: [{ required: true, message: '指导内容不能为空' }] }
            ]"
            placeholder="请输入指导内容"
          >
            <a-radio value="参观引导">
              参观引导
            </a-radio>
            <a-radio value="穿插讲解">
              穿插讲解
            </a-radio>
            <a-radio value="现场答疑">
              现场答疑
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="实习报告"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-select
            v-decorator="[
              'internshipReport',
              { rules: [{ required: true, message: '实习报告不能为空' }] }
            ]"
            placeholder="请输入实习报告"
          >
            <a-select-option value="是">
              是
            </a-select-option>
            <a-select-option value="否">
              否
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="是否批改"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-select
            v-decorator="[
              'hasCorrecting',
              { rules: [{ required: true, message: '是否批改不能为空' }] }
            ]"
            placeholder="请输入是否批改"
          >
            <a-select-option value="是">
              是
            </a-select-option>
            <a-select-option value="否">
              否
            </a-select-option>
          </a-select>
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
          //console.log(values);
          {
            this.axios
              .post(
                "/teacheringworkInternshipguide/updateByPrimaryKey",
                this.qs.stringify({
                  id: this.editData.id,
                  classTeacher: this.$store.state.teacherid,
                  ...values,
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

<template>
  <div>
    <a-button type="primary" @click="showModal">修改</a-button>
    <a-modal
      title="正在修改课堂教学内容"
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
          label="课程名称"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'name',
              { rules: [{ required: true, message: '课程名称不能为空' }] }
            ]"
            placeholder="请输入课程名称'"
          />
        </a-form-item>
        <a-form-item
          label="课程性质"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'character',
              { rules: [{ required: true, message: '课程性质不能为空' }] }
            ]"
          >
            <a-radio value="通识基础">
              通识基础
            </a-radio>
            <a-radio value="专业基础">
              专业基础
            </a-radio>
            <a-radio value="专业主干">
              专业主干
            </a-radio>
            <a-radio value="专业方向">
              专业方向
            </a-radio>
            <a-radio value="素质类选修课">
              素质类选修课
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="授课形式"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'type',
              { rules: [{ required: true, message: '授课形式不能为空' }] }
            ]"
          >
            <a-radio value="讲授为主">
              讲授为主
            </a-radio>
            <a-radio value="理论和实践对半">
              理论和实践对半
            </a-radio>
            <a-radio value="实践为主">
              实践为主
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="是否"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'yesorno',
              { rules: [{ required: true, message: '是否不能为空' }] }
            ]"
          >
            <a-radio value="新开课">
              新开课
            </a-radio>
            <a-radio value="整合课">
              整合课
            </a-radio>
            <a-radio value="否">
              否
            </a-radio>
          </a-radio-group>
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
            placeholder="请输入学分"
            addonAfter="分"
          />
        </a-form-item>

        <a-form-item
          label="学时"
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
                    message: '学时有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入学时"
            addonAfter="小时"
          />
        </a-form-item>

        <a-form-item
          label="授课班个数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'classesNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '授课班个数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入授课班个数'"
            addonAfter="个"
          />
        </a-form-item>

        <a-form-item
          label="平行班个数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'parallelClassesNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '平行班个数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入平行班个数'"
            addonAfter="个"
          />
        </a-form-item>

        <a-form-item
          label="作业次数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'homeworkNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '作业次数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入作业次数'"
            addonAfter="次"
          />
        </a-form-item>

        <a-form-item
          label="批改次数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'correctingNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '批改次数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入批改次数'"
            addonAfter="次"
          />
        </a-form-item>

        <a-form-item
          label="答疑次数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'answeringNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '答疑次数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入答疑次数'"
            addonAfter="次"
          />
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
      console.log(this.editData);
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
                "/teacheringworkClassroomteaching/updateByPrimaryKey",
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
  },
  mounted() {}
};
</script>

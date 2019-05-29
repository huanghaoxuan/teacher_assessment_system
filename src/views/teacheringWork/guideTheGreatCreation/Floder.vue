<template>
  <div>
    <a-button type="primary" @click="showModal">新建</a-button>
    <a-modal
      title="正在新添加指导大创内容"
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
          label="项目级别"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'level',
              { rules: [{ required: true, message: '项目级别不能为空' }] }
            ]"
            placeholder="请输入项目级别"
          >
            <a-radio value="省级">
              省级
            </a-radio>
            <a-radio value="院级">
              院级
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="选题来源"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'source',
              { rules: [{ required: true, message: '选题来源不能为空' }] }
            ]"
            placeholder="请输入选题来源"
          >
            <a-radio value="教师">
              教师
            </a-radio>
            <a-radio value="学生">
              学生
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="项目状况"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'projectStatus',
              { rules: [{ required: true, message: '项目状况不能为空' }] }
            ]"
            placeholder="请输入项目状况"
          >
            <a-radio value="在研">
              在研
            </a-radio>
            <a-radio value="结题">
              结题
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="结题等级"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'titleLevel',
              { rules: [{ required: true, message: '结题等级不能为空' }] }
            ]"
            placeholder="请输入结题等级"
          >
            <a-radio value="在研">
              在研
            </a-radio>
            <a-radio value="结题">
              结题
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="学生年级"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'studentGrade',
              { rules: [{ required: true, message: '学生年级不能为空' }] }
            ]"
            placeholder="请输入学生年级"
          >
            <a-radio value="一年级">
              一年级
            </a-radio>
            <a-radio value="二年级">
              二年级
            </a-radio>
            <a-radio value="三年级">
              三年级
            </a-radio>
            <a-radio value="四年级">
              四年级
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="学生人数"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
            placeholder="请输入学生人数"
            addonAfter="人"
          />
        </a-form-item>

        <a-form-item
          label="项目影响"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'effect',
              { rules: [{ required: true, message: '项目影响不能为空' }] }
            ]"
            placeholder="请输入项目影响"
          >
            <a-radio value="院级">
              院级
            </a-radio>
            <a-radio value="媒体">
              媒体
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="指导人数"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'mentorsNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '指导人数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入指导人数"
            addonAfter="人"
          />
        </a-form-item>

        <a-form-item
          label="指导等级"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'mentorsLevel',
              { rules: [{ required: true, message: '指导等级不能为空' }] }
            ]"
            placeholder="请输入指导等级"
          >
            <a-radio value="项目负责人">
              项目负责人
            </a-radio>
            <a-radio value="主要贡献者">
              主要贡献者
            </a-radio>
            <a-radio value="参与者">
              参与者
            </a-radio>
          </a-radio-group>
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
                "/teacheringworkGuidethegreatcreation/insert",
                this.qs.stringify({
                  classTeacher: this.$store.state.teacherid,
                  status: "未审核",
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
                  console.log(res.data);
                  //每条数据需要一个唯一的key值
                  this.visible = true;
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

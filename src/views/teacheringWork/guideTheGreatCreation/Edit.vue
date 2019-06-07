<template>
  <div>
    <a-button type="primary" @click="showModal">修改</a-button>
    <a-modal
      title="正在修改毕业设计指导内容"
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
          label="项目级别"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
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
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
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
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'projectStatus',
              { rules: [{ required: true, message: '项目状况不能为空' }] }
            ]"
            placeholder="请输入项目状况"
            @change="titleLevelDisabledChange"
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
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="['titleLevel']"
            placeholder="请输入结题等级"
            :disabled="titleLevelDisabled"
          >
            <a-radio value="优秀">
              优秀
            </a-radio>
            <a-radio value="良好">
              良好
            </a-radio>
            <a-radio value="通过">
              通过
            </a-radio>
            <a-radio value="不通过">
              不通过
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="学生年级"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
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
            placeholder="请输入学生人数"
            addonAfter="人"
          />
        </a-form-item>

        <a-form-item
          label="项目影响"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
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
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
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
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
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
      form: this.$form.createForm(this),
      titleLevelDisabled: true
    };
  },
  methods: {
    titleLevelDisabledChange(e) {
      if (e.target.value == "在研") {
        this.form.setFieldsValue({ titleLevel: null });
        this.titleLevelDisabled = true;
      } else if (e.target.value == "结题") {
        this.titleLevelDisabled = false;
      }
    },
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
                "/teacheringworkGuidethegreatcreation/updateByPrimaryKey",
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

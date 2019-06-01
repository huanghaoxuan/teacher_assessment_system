<template>
  <div>
    <a-button type="primary" @click="showModal">修改</a-button>
    <a-modal
      title="正在修改教学获奖内容"
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
          label="获奖名称"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'name',
              { rules: [{ required: true, message: '获奖名称不能为空' }] }
            ]"
            placeholder="请输入获奖名称'"
          />
        </a-form-item>

        <a-form-item
          label="获奖类型"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'type',
              { rules: [{ required: true, message: '获奖类型不能为空' }] }
            ]"
            placeholder="请输入获奖类型"
          >
            <a-radio value="竞赛奖">
              竞赛奖
            </a-radio>
            <a-radio value="政府成果奖">
              政府成果奖
            </a-radio>
            <a-radio value="非政府成果奖">
              非政府成果奖
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="获奖级别"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'level',
              { rules: [{ required: true, message: '获奖级别不能为空' }] }
            ]"
            placeholder="请输入获奖级别"
          >
            <a-radio value="国家级">
              国家级
            </a-radio>
            <a-radio value="省部级">
              省部级
            </a-radio>
            <a-radio value="大区级">
              大区级
            </a-radio>
            <a-radio value="市局级">
              市局级
            </a-radio>
            <a-radio value="院级">
              院级
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="获奖等级"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'grade',
              { rules: [{ required: true, message: '获奖等级不能为空' }] }
            ]"
            placeholder="请输入获奖等级"
          >
            <a-radio value="特等奖">
              特等奖
            </a-radio>
            <a-radio value="一等奖">
              一等奖
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
          label="指导形式"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'character',
              { rules: [{ required: true, message: '指导形式不能为空' }] }
            ]"
            placeholder="请输入指导形式"
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
          label="参赛人数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'participantsNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '参赛人数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入参赛人数'"
            addonAfter="人"
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

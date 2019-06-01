<template>
  <div>
    <a-button type="primary" @click="showModal">新建</a-button>
    <a-modal
      title="正在新添加指导竞赛内容"
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
          label="竞赛名称"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'name',
              { rules: [{ required: true, message: '竞赛名称不能为空' }] }
            ]"
            placeholder="请输入竞赛名称'"
          />
        </a-form-item>

        <a-form-item
          label="竞赛级别"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-select
            v-decorator="[
              'level',
              { rules: [{ required: true, message: '竞赛级别不能为空' }] }
            ]"
            placeholder="请输入竞赛级别"
          >
            <a-select-option value="国际">
              国际
            </a-select-option>
            <a-select-option value="全国">
              全国
            </a-select-option>
            <a-select-option value="大区">
              大区
            </a-select-option>
            <a-select-option value="省级">
              省级
            </a-select-option>
            <a-select-option value="市级">
              市级
            </a-select-option>
            <a-select-option value="院级">
              院级
            </a-select-option>
            <a-select-option value="系级">
              系级
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="特等奖人数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'prizePersonsNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '特等奖人数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入特等奖人数'"
            addonAfter="人"
          />
        </a-form-item>

        <a-form-item
          label="一等奖人数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'firstPersonsNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '一等奖人数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入一等奖人数'"
            addonAfter="人"
          />
        </a-form-item>

        <a-form-item
          label="二等奖人数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'secondPersonsNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '二等奖人数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入二等奖人数'"
            addonAfter="人"
          />
        </a-form-item>

        <a-form-item
          label="三等奖人数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'thirdPersonsNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '三等奖人数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入三等奖人数'"
            addonAfter="人"
          />
        </a-form-item>

        <a-form-item
          label="优秀奖人数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'outstandingAwardsNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '优秀奖人数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入优秀奖人数'"
            addonAfter="人"
          />
        </a-form-item>

        <a-form-item
          label="指导形式"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'source',
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
            <a-radio value="参与指导">
              参与指导
            </a-radio>
            <a-radio value="培训指导">
              培训指导
            </a-radio>
            <a-radio value="组织管理">
              组织管理
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="指导教师人数"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'instructorsNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '指导教师人数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入指导教师人数"
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
            placeholder="若为 ' 2018 — 2019 学年 '请输入 2018"
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
          //console.log(values);
          {
            this.axios
              .post(
                "/teacheringworkGuidecontest/insert",
                this.qs.stringify({
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

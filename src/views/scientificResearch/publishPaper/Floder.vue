<template>
  <div>
    <a-button type="primary" @click="showModal">新建</a-button>
    <a-modal
      title="正在新添加发表论文内容"
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
          label="论文名称"
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
          label="发表期刊"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'journals',
              { rules: [{ required: true, message: '发表期刊不能为空' }] }
            ]"
            placeholder="请输入发表期刊'"
          />
        </a-form-item>

        <a-form-item
          label="发表时间"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-date-picker
            v-decorator="[
              'publicationDate',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '发表时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入发表时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="期刊级别"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-select
            v-decorator="[
              'level',
              { rules: [{ required: true, message: '期刊级别不能为空' }] }
            ]"
            placeholder="请输入期刊级别"
          >
            <a-select-option value="北大核心">
              北大核心
            </a-select-option>
            <a-select-option value="南大核心">
              南大核心
            </a-select-option>
            <a-select-option value="知网查询">
              知网查询
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="收录情况"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'collectionInformation',
              { rules: [{ required: true, message: '收录情况不能为空' }] }
            ]"
            placeholder="请输入收录情况"
          >
            <a-radio value="SCI">
              SCI
            </a-radio>
            <a-radio value="EI">
              EI
            </a-radio>
            <a-radio value="其他">
              其他
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="任务角色"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-select
            v-decorator="[
              'character',
              { rules: [{ required: true, message: '任务角色不能为空' }] }
            ]"
            placeholder="请输入任务角色"
          >
            <a-select-option value="独立发表">
              独立发表
            </a-select-option>
            <a-select-option value="第一作者">
              第一作者
            </a-select-option>
            <a-select-option value="第二作者">
              第二作者
            </a-select-option>
            <a-select-option value="第三作者">
              第三作者
            </a-select-option>
            <a-select-option value="通讯作者">
              通讯作者
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="论文种类"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'type',
              { rules: [{ required: true, message: '论文种类不能为空' }] }
            ]"
            placeholder="请输入论文种类"
          >
            <a-radio value="科研">
              科研
            </a-radio>
            <a-radio value="教改">
              教改
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
          const fieldsValue = {
            ...values,
            publicationDate: values["publicationDate"].format("YYYY-MM-DD")
          };
          //console.log(fieldsValue);
          {
            this.axios
              .post(
                "/scientificresearchPublishpaper/insert",
                this.qs.stringify({
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

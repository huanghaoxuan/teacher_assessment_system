<template>
  <div>
    <a-button type="primary" @click="showModal">修改</a-button>
    <a-modal
      title="正在修改申请专利内容"
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
          label="专利名称"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-input
            v-decorator="[
              'name',
              { rules: [{ required: true, message: '专利名称不能为空' }] }
            ]"
            placeholder="请输入专利名称'"
          />
        </a-form-item>

        <a-form-item
          label="专利类型"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-select
            v-decorator="[
              'tpye',
              { rules: [{ required: true, message: '专利类型不能为空' }] }
            ]"
            placeholder="请输入专利类型'"
          >
            <a-select-option value="发明专利授权">
              发明专利授权
            </a-select-option>
            <a-select-option value="国家已受理发明专利">
              国家已受理发明专利
            </a-select-option>
            <a-select-option value="实用新型专利">
              实用新型专利
            </a-select-option>
            <a-select-option value="外观设计专利">
              外观设计专利
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="申请时间"
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
                    message: '申请时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入申请时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="是否受理"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'hasProcessing',
              { rules: [{ required: true, message: '是否受理不能为空' }] }
            ]"
            placeholder="请输入是否受理"
          >
            <a-radio value="是">
              是
            </a-radio>
            <a-radio value="否">
              否
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="是否获授权"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'hasAuthorized',
              { rules: [{ required: true, message: '是否获授权不能为空' }] }
            ]"
            placeholder="请输入是否获授权"
          >
            <a-radio value="是">
              是
            </a-radio>
            <a-radio value="否">
              否
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="是否获专利"
          :label-col="{ span: 9 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-radio-group
            v-decorator="[
              'hasPatent',
              { rules: [{ required: true, message: '是否获专利不能为空' }] }
            ]"
            placeholder="请输入是否获专利"
          >
            <a-radio value="是">
              是
            </a-radio>
            <a-radio value="否">
              否
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
import moment from "moment";
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
        this.form.setFieldsValue({
          publicationDate: moment(this.editData.publicationDate, "YYYY-MM-DD")
        });
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
            publicationDate: values["publicationDate"].format("YYYY-MM-DD")
          };
          //console.log(fieldsValue);
          {
            this.axios
              .post(
                "/scientificresearchPatentapplication/updateByPrimaryKey",
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

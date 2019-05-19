<template>
  <div>
    <a-button type="primary" @click="showModal">新建</a-button>
    <a-modal
      title="正在新添加课堂实训指导内容"
      :visible="visible"
      @ok="handleOk"
      okText="确认添加"
      cancelText="取消"
      :maskClosable="false"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item
          label="实训名称"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'name',
              { rules: [{ required: true, message: '实训名称不能为空' }] }
            ]"
            placeholder="请输入实验实训名称'"
          />
        </a-form-item>

        <a-form-item
          label="学分"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'credits',
              { rules: [{ required: true, message: '学分不能为空' }] }
            ]"
            placeholder="请输入学分'"
          />
        </a-form-item>

        <a-form-item
          label="时长"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'hours',
              { rules: [{ required: true, message: '时长不能为空' }] }
            ]"
            placeholder="请输入时长'"
          />
        </a-form-item>

        <a-form-item
          label="学生人数"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'studentNumber',
              { rules: [{ required: true, message: '学生人数不能为空' }] }
            ]"
            placeholder="请输入学生人数'"
          />
        </a-form-item>

        <a-form-item
          label="循环次数"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'loopsNumber',
              { rules: [{ required: true, message: '循环次数不能为空' }] }
            ]"
            placeholder="请输入循环次数"
          />
        </a-form-item>

        <a-form-item
          label="实训类型"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'trainingType',
              { rules: [{ required: true, message: '实训类型不能为空' }] }
            ]"
            placeholder="请输入实训类型"
          >
            <a-radio value="实操类">
              实操类
            </a-radio>
            <a-radio value="设计类">
              设计类
            </a-radio>
            <a-radio value="实战类">
              实战类
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="成果形式"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'internshipReport',
              { rules: [{ required: true, message: '成果形式不能为空' }] }
            ]"
            placeholder="请输入成果形式"
          >
            <a-radio value="实物">
              实物
            </a-radio>
            <a-radio value="作品">
              作品
            </a-radio>
            <a-radio value="论文">
              论文
            </a-radio>
            <a-radio value="程序">
              程序
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="是否批改"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
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
          <a-input-number
            v-decorator="[
              'input-number',
              { rules: [{ required: true, message: '学年输入有误' }] }
            ]"
            placeholder="请输入学年'"
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
      ModalText: "Content of the modal",
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
                "/fruitClassTeaching/commitClassTeaching",
                this.qs.stringify({}),
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

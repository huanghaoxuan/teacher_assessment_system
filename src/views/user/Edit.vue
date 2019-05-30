<template>
  <div>
    <a-button type="primary" @click="showModal">修改</a-button>
    <a-modal
      title="正在修改个人信息"
      :visible="visible"
      @ok="handleOk"
      okText="确认修改"
      cancelText="取消"
      :maskClosable="false"
      :confirmLoading="confirmLoading"
      width="60%"
      @cancel="handleCancel"
    >
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item
          label="姓名"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'name',
              { rules: [{ required: true, message: '姓名不能为空' }] }
            ]"
            placeholder="请输入姓名'"
          />
        </a-form-item>

        <a-form-item
          label="性别"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'sex',
              { rules: [{ required: true, message: '性别不能为空' }] }
            ]"
          >
            <a-radio value="男">
              男
            </a-radio>
            <a-radio value="女">
              女
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="出生年月"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-date-picker
            v-decorator="[
              'birthday',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '出生年月不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入出生年月"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="学历"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-select
            v-decorator="[
              'academicQualifications',
              { rules: [{ required: true, message: '学历不能为空' }] }
            ]"
            placeholder="请输入学历"
          >
            <a-select-option value="无">
              其他
            </a-select-option>
            <a-select-option value="小学">
              小学
            </a-select-option>
            <a-select-option value="初中">
              初中
            </a-select-option>
            <a-select-option value="高中/职中/中专">
              高中/职中/中专
            </a-select-option>
            <a-select-option value="大学专科">
              大学专科
            </a-select-option>
            <a-select-option value="大学本科">
              大学本科
            </a-select-option>
            <a-select-option value="硕士研究生">
              硕士研究生
            </a-select-option>
            <a-select-option value="博士研究生">
              博士研究生
            </a-select-option>
            <a-select-option value="博士后">
              博士后
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="学位"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-select
            v-decorator="[
              'academicDegrees',
              { rules: [{ required: true, message: '学位不能为空' }] }
            ]"
            placeholder="请输入学位"
          >
            <a-select-option value="无">
              无
            </a-select-option>
            <a-select-option value="大专文凭（副学士学位）">
              大专文凭（副学士学位）
            </a-select-option>
            <a-select-option value="学士学位">
              学士学位
            </a-select-option>
            <a-select-option value="硕士学位">
              硕士学位
            </a-select-option>
            <a-select-option value="博士学位">
              博士学位
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="职务"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'duties',
              { rules: [{ required: true, message: '职务不能为空' }] }
            ]"
            placeholder="请输入职务'"
          />
        </a-form-item>

        <a-form-item
          label="政治面貌"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-select
            v-decorator="[
              'politicalLandscape',
              { rules: [{ required: true, message: '政治面貌不能为空' }] }
            ]"
            placeholder="请输入政治面貌"
          >
            <a-select-option value="中共党员">
              中共党员
            </a-select-option>
            <a-select-option value="中共预备党员">
              中共预备党员
            </a-select-option>
            <a-select-option value="共青团员">
              共青团员
            </a-select-option>
            <a-select-option value="民革党员">
              民革党员
            </a-select-option>
            <a-select-option value="民盟盟员">
              民盟盟员
            </a-select-option>
            <a-select-option value="民建会员">
              民建会员
            </a-select-option>
            <a-select-option value="民进会员">
              民进会员
            </a-select-option>
            <a-select-option value="农工党党员">
              农工党党员
            </a-select-option>
            <a-select-option value="致公党党员">
              致公党党员
            </a-select-option>
            <a-select-option value="九三学社社员">
              九三学社社员
            </a-select-option>
            <a-select-option value="台盟盟员">
              台盟盟员
            </a-select-option>
            <a-select-option value="无党派人士">
              无党派人士
            </a-select-option>
            <a-select-option value="群众">
              群众
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="工号"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'classTeacher',
              { rules: [{ required: true, message: '工号不能为空' }] }
            ]"
            placeholder="请输入工号'"
            :disabled="true"
          />
        </a-form-item>

        <a-form-item
          label="所在系部"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-select
            v-decorator="[
              'departmentDept',
              { rules: [{ required: true, message: '所在系部不能为空' }] }
            ]"
            placeholder="请输入所在系部"
          >
            <a-select-option value="电子与计算机工程学院">
              电子与计算机工程学院
            </a-select-option>
            <a-select-option value="建筑与艺术设计学院">
              建筑与艺术设计学院
            </a-select-option>
            <a-select-option value="土木与交通工程学院">
              土木与交通工程学院
            </a-select-option>
            <a-select-option value="机械与电气工程学院">
              机械与电气工程学院
            </a-select-option>
            <a-select-option value="制药与化学工程学院">
              制药与化学工程学院
            </a-select-option>
            <a-select-option value="经济管理学院">
              经济管理学院
            </a-select-option>
            <a-select-option value="基础部">
              基础部
            </a-select-option>
            <a-select-option value="党政办">
              党政办
            </a-select-option>
            <a-select-option value="保卫处">
              保卫处
            </a-select-option>
            <a-select-option value="组织人事部">
              组织人事部
            </a-select-option>
            <a-select-option value="教务处">
              教务处
            </a-select-option>
            <a-select-option value="学生处">
              学生处
            </a-select-option>
            <a-select-option value="团委">
              团委
            </a-select-option>
            <a-select-option value="财务与资产管理处">
              财务与资产管理处
            </a-select-option>
            <a-select-option value="后勤管理处">
              后勤管理处
            </a-select-option>
            <a-select-option value="质量保证部">
              质量保证部
            </a-select-option>
            <a-select-option value="发展合作处">
              发展合作处
            </a-select-option>
            <a-select-option value="图档信息中心">
              图档信息中心
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="进校时间"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-date-picker
            v-decorator="[
              'enterSchoolTime',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '进校时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入进校时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="高校工龄"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'universityYear',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '高校工龄输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入高校工龄"
            addonAfter="年"
          />
        </a-form-item>

        <a-form-item
          label="本科毕业学校"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'undergraduateGraduationSchool',
              { rules: [{ required: true, message: '本科毕业学校不能为空' }] }
            ]"
            placeholder="请输入本科毕业学校'"
          />
        </a-form-item>

        <a-form-item
          label="获得最高学历的院校或机构"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'academicQualificationsSchool',
              {
                rules: [
                  {
                    required: true,
                    message: '获得最高学历的院校或机构不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入获得最高学历的院校或机构'"
          />
        </a-form-item>

        <a-form-item
          label="获得最高学位的院校或机构"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'academicDegreesSchool',
              {
                rules: [
                  {
                    required: true,
                    message: '获得最高学位的院校或机构不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入获得最高学位的院校或机构'"
          />
        </a-form-item>

        <a-form-item
          label="身份证号码"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'idcard',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '身份证号码输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入身份证号码"
          />
        </a-form-item>

        <a-form-item
          label="申报学科"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-cascader
            v-decorator="[
              'willDiscipline',
              { rules: [{ required: true, message: '申报学科不能为空' }] }
            ]"
            placeholder="请输入申报学科'"
            :options="disciplineOptions"
            expandTrigger="hover"
          />
        </a-form-item>

        <a-form-item
          label="拟报职称"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-cascader
            v-decorator="[
              'willProfessionalTitles',
              { rules: [{ required: true, message: '拟报职称不能为空' }] }
            ]"
            placeholder="请输入拟报职称'"
            :options="professionalTitlesOptions"
            expandTrigger="hover"
          />
        </a-form-item>

        <a-form-item
          label="所学专业"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'studyProfessional',
              { rules: [{ required: true, message: '所学专业不能为空' }] }
            ]"
            placeholder="请输入所学专业'"
          />
        </a-form-item>

        <a-form-item
          label="工作时间"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'jobYear',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '工作时间有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入工作时间"
            addonAfter="年"
          />
        </a-form-item>

        <a-form-item
          label="教师资格证"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-checkbox-group
            v-decorator="[
              'teacherQualificationCertificate',
              { rules: [{ required: true, message: '教师资格证不能为空' }] }
            ]"
            placeholder="请输入教师资格证'"
            style="width: 100%;"
          >
            <a-row>
              <a-col :span="24">
                <a-checkbox value="幼儿园教师资格证">
                  幼儿园教师资格证
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="小学教师资格证">
                  小学教师资格证
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="初级中学教师资格证">
                  初级中学教师资格证
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="高级中学教师资格证">
                  高级中学教师资格证
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="中等职业学校教师资格证">
                  中等职业学校教师资格证
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="中等职业学校实习指导教师资格证">
                  中等职业学校实习指导教师资格证
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="高等学校教师资格证">
                  高等学校教师资格证
                </a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </a-form-item>

        <a-form-item
          label="岗前培训"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-radio-group
            v-decorator="[
              'preJobTraining',
              { rules: [{ required: true, message: '岗前培训不能为空' }] }
            ]"
            placeholder="请输入岗前培训'"
          >
            <a-radio value="通过">
              通过
            </a-radio>
            <a-radio value="不通过">
              不通过
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          label="普通话考试"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-select
            v-decorator="[
              'putonghuaExam',
              { rules: [{ required: true, message: '普通话考试不能为空' }] }
            ]"
            placeholder="请输入普通话考试"
          >
            <a-select-option value="无">
              无
            </a-select-option>
            <a-select-option value="一级甲等">
              一级甲等
            </a-select-option>
            <a-select-option value="一级乙等">
              一级乙等
            </a-select-option>
            <a-select-option value="二级甲等">
              二级甲等
            </a-select-option>
            <a-select-option value="二级乙等">
              二级乙等
            </a-select-option>
            <a-select-option value="三级甲等">
              三级甲等
            </a-select-option>
            <a-select-option value="三级乙等">
              三级乙等
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          label="最高学历取得时间"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-date-picker
            v-decorator="[
              'academicQualificationsTime',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '最高学历取得时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入最高学历取得时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="最高学位取得时间"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-date-picker
            v-decorator="[
              'academicDegreesTime',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '最高学位取得时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入最高学位取得时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="现专业技术职务"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'professionalTechnologyDuties',
              {
                rules: [
                  {
                    required: true,
                    message: '现专业技术职务不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入现专业技术职务"
          />
        </a-form-item>

        <a-form-item
          label="现专业技术职务取得时间"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-date-picker
            v-decorator="[
              'professionalTechnologyDutiesTime',
              {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: '现专业技术职务取得时间不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入现专业技术职务取得时间"
            style="width:100%"
          />
        </a-form-item>

        <a-form-item
          label="现从事专业研究方向"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'professionalStudyDirection',
              {
                rules: [
                  {
                    required: true,
                    message: '现从事专业研究方向不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入现从事专业研究方向"
          />
        </a-form-item>

        <a-form-item
          label="现从事专业研究方向年限"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'professionalStudyDirectionYear',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '现从事专业研究方向年限输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入现从事专业研究方向年限'"
            addonAfter="年"
          />
        </a-form-item>

        <a-form-item
          label="继续教育情况"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'continuingEducationSituation',
              {
                rules: [
                  {
                    required: true,
                    message: '继续教育情况不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入继续教育情况"
          />
        </a-form-item>

        <a-form-item
          label="工程实践经历"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'engineeringPracticeExperience',
              {
                rules: [
                  {
                    required: true,
                    message: '工程实践经历不能为空'
                  }
                ]
              }
            ]"
            placeholder="请输入工程实践经历"
          />
        </a-form-item>

        <a-form-item
          label="指导学生实践轮数"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'guidanceStudentPracticeNumber',
              {
                rules: [
                  {
                    pattern: /(^[\-0-9][0-9]*([0-9]+)?)$/,
                    required: true,
                    message: '指导学生实践轮数输入有误（请输入数字）'
                  }
                ]
              }
            ]"
            placeholder="请输入指导学生实践轮数'"
            addonAfter="轮"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
const disciplineOptions = [
  {
    value: "(01)哲学",
    label: "哲学",
    children: [
      {
        value: "(0101)哲学",
        label: "哲学",
        children: [
          {
            value: "(010101)马克思主义哲学",
            label: "马克思主义哲学"
          },
          {
            value: "(010102)中国哲学",
            label: "中国哲学"
          },
          {
            value: "(010103)外国哲学",
            label: "外国哲学"
          },
          {
            value: "(010104)逻辑学",
            label: "逻辑学"
          },
          {
            value: "(010105)伦理学",
            label: "伦理学"
          },
          {
            value: "(010106)美学",
            label: "美学"
          },
          {
            value: "(010107)宗教学",
            label: "宗教学"
          },
          {
            value: "(010108)科学技术学",
            label: "科学技术学"
          }
        ]
      }
    ]
  },
  {
    value: "(02)经济学",
    label: "经济学",
    children: [
      {
        value: "(0201)理论经济学",
        label: "理论经济学",
        children: [
          {
            value: "(020101)政治经济学",
            label: "政治经济学"
          },
          {
            value: "(020102)经济思想史",
            label: "经济思想史"
          },
          {
            value: "(020103)经济史",
            label: "经济史"
          },
          {
            value: "(020104)西方经济学",
            label: "西方经济学"
          },
          {
            value: "(020105)世界经济",
            label: "世界经济"
          },
          {
            value: "(020106)人口、资源与环境经济学",
            label: "人口、资源与环境经济学"
          }
        ]
      },
      {
        value: "(0202)应用经济学",
        label: "应用经济学",
        children: [
          {
            value: "(020201)国民经济学",
            label: "国民经济学"
          },
          {
            value: "(020202)区域经济学",
            label: "区域经济学"
          },
          {
            value: "(020203)财政学（含：税收学）",
            label: "财政学（含：税收学）"
          },
          {
            value: "(020204)金融学（含：保险学）",
            label: "金融学（含：保险学）"
          },
          {
            value: "(020205)产业经济学",
            label: "产业经济学"
          },
          {
            value: "(020206)国际贸易学",
            label: "国际贸易学"
          },
          {
            value: "(020207)劳动经济学",
            label: "劳动经济学"
          },
          {
            value: "(020208)统计学",
            label: "统计学"
          },
          {
            value: "(020209)数量经济学",
            label: "数量经济学"
          },
          {
            value: "(020210)国防经济",
            label: "国防经济"
          }
        ]
      }
    ]
  },
  {
    value: "(03)法学",
    label: "法学",
    children: [
      {
        value: "(0301)法学",
        label: "法学",
        children: [
          {
            value: "(030101)法学理论",
            label: "法学理论"
          },
          {
            value: "(030102)法律史",
            label: "法律史"
          },
          {
            value: "(030103)宪法学与行政法学",
            label: "宪法学与行政法学"
          },
          {
            value: "(030104)刑法学",
            label: "刑法学"
          },
          {
            value: "(030105)民商法学(含：劳动法学、社会保障法学)",
            label: "民商法学(含：劳动法学、社会保障法学)"
          },
          {
            value: "(030106)诉讼法学",
            label: "诉讼法学"
          },
          {
            value: "(030107)经济法学",
            label: "经济法学"
          },
          {
            value: "(030108)环境与资源保护法学",
            label: "环境与资源保护法学"
          },
          {
            value: "(030109)国际法学(含：国际公法、国际私法、国际经济法)",
            label: "国际法学(含：国际公法、国际私法、国际经济法)"
          },
          {
            value: "(030110)军事法学",
            label: "军事法学"
          }
        ]
      },
      {
        value: "(0302)政治学",
        label: "政治学",
        children: [
          {
            value: "(030201)政治学理论",
            label: "政治学理论"
          },
          {
            value: "(030202)中外政治制度",
            label: "中外政治制度"
          },
          {
            value: "(030203)科学社会主义与国际共产主义运动",
            label: "科学社会主义与国际共产主义运动"
          },
          {
            value: "(030204)中共党史(含：党的学说与党的建设)",
            label: "中共党史(含：党的学说与党的建设)"
          },
          {
            value: "(030206)国际政治",
            label: "国际政治"
          },
          {
            value: "(030207)国际关系",
            label: "国际关系"
          },
          {
            value: "(030208)外交学",
            label: "外交学"
          }
        ]
      },
      {
        value: "(0303)社会学",
        label: "社会学",
        children: [
          {
            value: "(030301)社会学",
            label: "社会学"
          },
          {
            value: "(030302)人口学",
            label: "人口学"
          },
          {
            value: "(030303)人类学",
            label: "人类学"
          },
          {
            value: "(030304)民俗学（含：中国民间文学）",
            label: "民俗学（含：中国民间文学）"
          }
        ]
      },
      {
        value: "(0304)民族学",
        label: "民族学",
        children: [
          {
            value: "(030401)民族学",
            label: "民族学"
          },
          {
            value: "(030402)马克思主义民族理论与政策",
            label: "马克思主义民族理论与政策"
          },
          {
            value: "(030403)中国少数民族经济",
            label: "中国少数民族经济"
          },
          {
            value: "(030404)中国少数民族史",
            label: "中国少数民族史"
          },
          {
            value: "(030405)中国少数民族艺术",
            label: "中国少数民族艺术"
          }
        ]
      },
      {
        value: "(0305)马克思主义理论",
        label: "马克思主义理论",
        children: [
          {
            value: "(030501)马克思主义基本原理",
            label: "马克思主义基本原理"
          },
          {
            value: "(030502)马克思主义发展史",
            label: "马克思主义发展史"
          },
          {
            value: "(030503)马克思主义中国化研究",
            label: "马克思主义中国化研究"
          },
          {
            value: "(030504)国外马克思主义研究",
            label: "国外马克思主义研究"
          },
          {
            value: "(030505)思想政治教育",
            label: "思想政治教育"
          }
        ]
      }
    ]
  },
  {
    value: "(04)教育学",
    label: "教育学",
    children: [
      {
        value: "(0401)教育学",
        label: "教育学",
        children: [
          {
            value: "(040101)教育学原理",
            label: "教育学原理"
          },
          {
            value: "(040102)课程与教学论",
            label: "课程与教学论"
          },
          {
            value: "(040103)教育史",
            label: "教育史"
          },
          {
            value: "(040104)比较教育学",
            label: "比较教育学"
          },
          {
            value: "(040105)学前教育学",
            label: "学前教育学"
          },
          {
            value: "(040106)高等教育学",
            label: "高等教育学"
          },
          {
            value: "(040107)成人教育学",
            label: "成人教育学"
          },
          {
            value: "(040108)职业技术教育学",
            label: "职业技术教育学"
          },
          {
            value: "(040109)特殊教育学",
            label: "特殊教育学"
          },
          {
            value: "(040110)教育技术学（可授教育学、理学学位）",
            label: "教育技术学（可授教育学、理学学位）"
          }
        ]
      },
      {
        value: "(0402)心理学(可授教育学、理学学位）",
        label: "心理学(可授教育学、理学学位）",
        children: [
          {
            value: "(040201)基础心理学",
            label: "基础心理学"
          },
          {
            value: "(040202)发展与教育心理学",
            label: "发展与教育心理学"
          },
          {
            value: "(040203)应用心理学",
            label: "应用心理学"
          }
        ]
      },
      {
        value: "(0403)体育学",
        label: "体育学",
        children: [
          {
            value: "(040301)体育人文社会学",
            label: "体育人文社会学"
          },
          {
            value: "(040302)运动人体科学(可授教育学、理学、医学学位)",
            label: "运动人体科学(可授教育学、理学、医学学位)"
          },
          {
            value: "(040303)体育教育训练学",
            label: "体育教育训练学"
          },
          {
            value: "(040304)民族传统体育学",
            label: "民族传统体育学"
          }
        ]
      }
    ]
  },
  {
    value: "(05)文学",
    label: "文学",
    children: [
      {
        value: "(0501)中国语言文学",
        label: "中国语言文学",
        children: [
          {
            value: "(050101)文艺学",
            label: "文艺学"
          },
          {
            value: "(050102)语言学及应用语言学",
            label: "语言学及应用语言学"
          },
          {
            value: "(050103)汉语言文字学",
            label: "汉语言文字学"
          },
          {
            value: "(050104)中国古典文献学",
            label: "中国古典文献学"
          },
          {
            value: "(050105)中国古代文学",
            label: "中国古代文学"
          },
          {
            value: "(050106)中国现当代文学",
            label: "中国现当代文学"
          },
          {
            value: "(050107)中国少数民族语言文学（分语族）",
            label: "中国少数民族语言文学（分语族）"
          },
          {
            value: "(050108)比较文学与世界文学",
            label: "比较文学与世界文学"
          }
        ]
      },
      {
        value: "(0502)外国语言文学",
        label: "外国语言文学",
        children: [
          {
            value: "(050201)英语语言文学",
            label: "英语语言文学"
          },
          {
            value: "(050202)俄语语言文学",
            label: "俄语语言文学"
          },
          {
            value: "(050203)法语语言文学",
            label: "法语语言文学"
          },
          {
            value: "(050204)德语语言文学",
            label: "德语语言文学"
          },
          {
            value: "(050205)日语语言文学",
            label: "日语语言文学"
          },
          {
            value: "(050206)印度语言文学",
            label: "印度语言文学"
          },
          {
            value: "(050207)西班牙语语言文学",
            label: "西班牙语语言文学"
          },
          {
            value: "(050208)阿拉伯语语言文学",
            label: "阿拉伯语语言文学"
          },
          {
            value: "(050209)欧洲语言文学",
            label: "欧洲语言文学"
          },
          {
            value: "(050210)亚非语言文学",
            label: "亚非语言文学"
          },
          {
            value: "(050211)外国语言学及应用语言学",
            label: "外国语言学及应用语言学"
          }
        ]
      },
      {
        value: "(0503)新闻传播学",
        label: "新闻传播学",
        children: [
          {
            value: "(050301)新闻学",
            label: "新闻学"
          },
          {
            value: "(050302)传播学",
            label: "传播学"
          }
        ]
      },
      {
        value: "(0504)艺术学",
        label: "艺术学",
        children: [
          {
            value: "(050401)艺术学",
            label: "艺术学"
          },
          {
            value: "(050402)音乐学",
            label: "音乐学"
          },
          {
            value: "(050403)美术学",
            label: "美术学"
          },
          {
            value: "(050404)设计艺术学",
            label: "设计艺术学"
          },
          {
            value: "(050405)戏剧戏曲学",
            label: "戏剧戏曲学"
          },
          {
            value: "(050406)电影学",
            label: "电影学"
          },
          {
            value: "(050407)广播电视艺术学",
            label: "广播电视艺术学"
          },
          {
            value: "(050408)舞蹈学",
            label: "舞蹈学"
          }
        ]
      }
    ]
  },
  {
    value: "(06)历史学",
    label: "历史学",
    children: [
      {
        value: "(0601)历史学",
        label: "历史学",
        children: [
          {
            value: "(060101)史学理论及史学史",
            label: "史学理论及史学史"
          },
          {
            value: "(060102)考古学及博物馆学",
            label: "考古学及博物馆学"
          },
          {
            value: "(060103)历史地理学",
            label: "历史地理学"
          },
          {
            value: "(060104)历史文献学(含∶敦煌学、古文字学)",
            label: "历史文献学(含∶敦煌学、古文字学)"
          },
          {
            value: "(060105)专门史",
            label: "专门史"
          },
          {
            value: "(060106)中国古代史",
            label: "中国古代史"
          },
          {
            value: "(060107)中国近现代史",
            label: "中国近现代史"
          },
          {
            value: "(060108)世界史",
            label: "世界史"
          }
        ]
      }
    ]
  },
  {
    value: "(07)理学",
    label: "理学",
    children: [
      {
        value: "(0701)数学",
        label: "数学",
        children: [
          {
            value: "(070101)基础数学",
            label: "基础数学"
          },
          {
            value: "(070102)计算数学",
            label: "计算数学"
          },
          {
            value: "(070103)概率论与数理统计",
            label: "概率论与数理统计"
          },
          {
            value: "(070104)应用数学",
            label: "应用数学"
          },
          {
            value: "(070105)运筹学与控制论",
            label: "运筹学与控制论"
          }
        ]
      },
      {
        value: "(0702)物理学",
        label: "物理学",
        children: [
          {
            value: "(070201)理论物理",
            label: "理论物理"
          },
          {
            value: "(070202)粒子物理与原子核物理",
            label: "粒子物理与原子核物理"
          },
          {
            value: "(070203)原子与分子物理",
            label: "原子与分子物理"
          },
          {
            value: "(070204)等离子体物理",
            label: "等离子体物理"
          },
          {
            value: "(070205)凝聚态物理",
            label: "凝聚态物理"
          },
          {
            value: "(070206)声学",
            label: "声学"
          },
          {
            value: "(070207)光学",
            label: "光学"
          },
          {
            value: "(070208)无线电物理",
            label: "无线电物理"
          }
        ]
      },
      {
        value: "(0703)化学",
        label: "化学",
        children: [
          {
            value: "(070301)无机化学",
            label: "无机化学"
          },
          {
            value: "(070302)分析化学",
            label: "分析化学"
          },
          {
            value: "(070303)有机化学",
            label: "有机化学"
          },
          {
            value: "(070304)物理化学(含∶化学物理)",
            label: "物理化学(含∶化学物理)"
          },
          {
            value: "(070305)高分子化学与物理",
            label: "高分子化学与物理"
          }
        ]
      },
      {
        value: "(0704)天文学",
        label: "天文学",
        children: [
          {
            value: "(070401)天体物理",
            label: "天体物理"
          },
          {
            value: "(070402)天体测量与天体力学",
            label: "天体测量与天体力学"
          }
        ]
      },
      {
        value: "(0705)地理学",
        label: "地理学",
        children: [
          {
            value: "(070501)自然地理学",
            label: "自然地理学"
          },
          {
            value: "(070502)人文地理学",
            label: "人文地理学"
          },
          {
            value: "(070503)地图学与地理信息系统",
            label: "地图学与地理信息系统"
          }
        ]
      },
      {
        value: "(0706)大气科学",
        label: "大气科学",
        children: [
          {
            value: "(070601)气象学",
            label: "气象学"
          },
          {
            value: "(070602)大气物理学与大气环境",
            label: "大气物理学与大气环境"
          }
        ]
      },
      {
        value: "(0707)海洋科学",
        label: "海洋科学",
        children: [
          {
            value: "(070701)物理海洋学",
            label: "物理海洋学"
          },
          {
            value: "(070702)海洋化学",
            label: "海洋化学"
          },
          {
            value: "(070703)海洋生物学",
            label: "海洋生物学"
          },
          {
            value: "(070704)海洋地质",
            label: "海洋地质"
          }
        ]
      },
      {
        value: "(0708)地球物理学",
        label: "地球物理学",
        children: [
          {
            value: "(070801)固体地球物理学",
            label: "固体地球物理学"
          },
          {
            value: "(070802)空间物理学",
            label: "空间物理学"
          }
        ]
      },
      {
        value: "(0709)地质学",
        label: "地质学",
        children: [
          {
            value: "(070901)矿物学、岩石学、矿床学",
            label: "矿物学、岩石学、矿床学"
          },
          {
            value: "(070902)地球化学",
            label: "地球化学"
          },
          {
            value: "(070903)古生物学与地层学(含：古人类学)",
            label: "古生物学与地层学(含：古人类学)"
          },
          {
            value: "(070904)构造地质学",
            label: "构造地质学"
          },
          {
            value: "(070905)第四纪地质学",
            label: "第四纪地质学"
          }
        ]
      },
      {
        value: "(0710)生物学",
        label: "生物学",
        children: [
          {
            value: "(071001)植物学",
            label: "植物学"
          },
          {
            value: "(071002)动物学",
            label: "动物学"
          },
          {
            value: "(071003)生理学",
            label: "生理学"
          },
          {
            value: "(071004)水生生物学",
            label: "水生生物学"
          },
          {
            value: "(071005)微生物学",
            label: "微生物学"
          },
          {
            value: "(071006)神经生物学",
            label: "神经生物学"
          },
          {
            value: "(071007)遗传学",
            label: "遗传学"
          },
          {
            value: "(071008)发育生物学",
            label: "发育生物学"
          },
          {
            value: "(071009)细胞生物学",
            label: "细胞生物学"
          },
          {
            value: "(071010)生物化学与分子生物学",
            label: "生物化学与分子生物学"
          },
          {
            value: "(071011)生物物理学",
            label: "生物物理学"
          },
          {
            value: "(071012)生态学",
            label: "生态学"
          }
        ]
      },
      {
        value: "(0711)系统科学",
        label: "系统科学",
        children: [
          {
            value: "(071101)系统理论",
            label: "系统理论"
          },
          {
            value: "(071102)系统分析与集成",
            label: "系统分析与集成"
          }
        ]
      },
      {
        value: "(0712)科学技术史(分学科，可授理学、工学、农学、医学学位)",
        label: "科学技术史(分学科，可授理学、工学、农学、医学学位)"
      }
    ]
  },
  {
    value: "(08)工学",
    label: "工学",
    children: [
      {
        value: "(0801)力学（可授工学、理学学位）",
        label: "力学（可授工学、理学学位）",
        children: [
          {
            value: "(080101)一般力学与力学基础",
            label: "一般力学与力学基础"
          },
          {
            value: "(080102)固体力学",
            label: "固体力学"
          },
          {
            value: "(080103)流体力学",
            label: "流体力学"
          },
          {
            value: "(080104)工程力学",
            label: "工程力学"
          }
        ]
      },
      {
        value: "(0802)机械工程",
        label: "机械工程",
        children: [
          {
            value: "(080201)机械制造及其自动化",
            label: "机械制造及其自动化"
          },
          {
            value: "(080202)机械电子工程",
            label: "机械电子工程"
          },
          {
            value: "(080203)机械设计及理论",
            label: "机械设计及理论"
          },
          {
            value: "(080204)车辆工程",
            label: "车辆工程"
          }
        ]
      },
      {
        value: "(0803)光学工程",
        label: "光学工程"
      },
      {
        value: "(0804)仪器科学与技术",
        label: "仪器科学与技术",
        children: [
          {
            value: "(080401)精密仪器及机械",
            label: "精密仪器及机械"
          },
          {
            value: "(080402)测试计量技术及仪器",
            label: "测试计量技术及仪器"
          }
        ]
      },
      {
        value: "(0805)材料科学与工程",
        label: "材料科学与工程",
        children: [
          {
            value: "(080501)材料物理与化学",
            label: "材料物理与化学"
          },
          {
            value: "(080502)材料学",
            label: "材料学"
          },
          {
            value: "(080503)材料加工工程",
            label: "材料加工工程"
          }
        ]
      },
      {
        value: "(0806)冶金工程",
        label: "冶金工程",
        children: [
          {
            value: "(080601)冶金物理化学",
            label: "冶金物理化学"
          },
          {
            value: "(080602)钢铁冶金",
            label: "钢铁冶金"
          },
          {
            value: "(080603)有色金属冶金",
            label: "有色金属冶金"
          }
        ]
      },
      {
        value: "(0807)动力工程及工程热物理",
        label: "动力工程及工程热物理",
        children: [
          {
            value: "(080701)工程热物理",
            label: "工程热物理"
          },
          {
            value: "(080702)热能工程",
            label: "热能工程"
          },
          {
            value: "(080703)动力机械及工程",
            label: "动力机械及工程"
          },
          {
            value: "(080704)流体机械及工程",
            label: "流体机械及工程"
          },
          {
            value: "(080705)制冷及低温工程",
            label: "制冷及低温工程"
          },
          {
            value: "(080706)化工过程机械",
            label: "化工过程机械"
          }
        ]
      },
      {
        value: "(0808)电气工程",
        label: "电气工程",
        children: [
          {
            value: "(080801)电机与电器",
            label: "电机与电器"
          },
          {
            value: "(080802)电力系统及其自动化",
            label: "电力系统及其自动化"
          },
          {
            value: "(080803)高电压与绝缘技术",
            label: "高电压与绝缘技术"
          },
          {
            value: "(080804)电力电子与电力传动",
            label: "电力电子与电力传动"
          },
          {
            value: "(080805)电工理论与新技术",
            label: "电工理论与新技术"
          }
        ]
      },
      {
        value: "(0809)电子科学与技术（可授工学、理学学位）",
        label: "电子科学与技术（可授工学、理学学位）",
        children: [
          {
            value: "(080901)物理电子学",
            label: "物理电子学"
          },
          {
            value: "(080902)电路与系统",
            label: "电路与系统"
          },
          {
            value: "(080903)微电子学与固体电子学",
            label: "微电子学与固体电子学"
          },
          {
            value: "(080904)电磁场与微波技术",
            label: "电磁场与微波技术"
          }
        ]
      },
      {
        value: "(0810)信息与通信工程",
        label: "信息与通信工程",
        children: [
          {
            value: "(081001)通信与信息系统",
            label: "通信与信息系统"
          },
          {
            value: "(081002)信号与信息处理",
            label: "信号与信息处理"
          }
        ]
      },
      {
        value: "(0811)控制科学与工程",
        label: "控制科学与工程",
        children: [
          {
            value: "(081101)控制理论与控制工程",
            label: "控制理论与控制工程"
          },
          {
            value: "(081102)检测技术与自动化装置",
            label: "检测技术与自动化装置"
          },
          {
            value: "(081103)系统工程",
            label: "系统工程"
          },
          {
            value: "(081104)模式识别与智能系统",
            label: "模式识别与智能系统"
          },
          {
            value: "(081105)导航、制导与控制",
            label: "导航、制导与控制"
          }
        ]
      },
      {
        value: "(0812)计算机科学与技术（可授工学、理学学位）",
        label: "计算机科学与技术（可授工学、理学学位）",
        children: [
          {
            value: "(081201)计算机系统结构",
            label: "计算机系统结构"
          },
          {
            value: "(081202)计算机软件与理论",
            label: "计算机软件与理论"
          },
          {
            value: "(081203)计算机应用技术",
            label: "计算机应用技术"
          }
        ]
      },
      {
        value: "(0813)建筑学",
        label: "建筑学",
        children: [
          {
            value: "(081301)建筑历史与理论",
            label: "建筑历史与理论"
          },
          {
            value: "(081302)建筑设计及其理论",
            label: "建筑设计及其理论"
          },
          {
            value: "(081303)城市规划与设计(含：风景园林规划与设计）",
            label: "城市规划与设计(含：风景园林规划与设计）"
          },
          {
            value: "(081304)建筑技术科学",
            label: "建筑技术科学"
          }
        ]
      },
      {
        value: "(0814)土木工程",
        label: "土木工程",
        children: [
          {
            value: "(081401)岩土工程",
            label: "岩土工程"
          },
          {
            value: "(081402)结构工程",
            label: "结构工程"
          },
          {
            value: "(081403)市政工程",
            label: "市政工程"
          },
          {
            value: "(081404)供热、供燃气、通风及空调工程",
            label: "供热、供燃气、通风及空调工程"
          },
          {
            value: "(081405)防灾减灾工程及防护工程",
            label: "防灾减灾工程及防护工程"
          },
          {
            value: "(081406)桥梁与隧道工程",
            label: "桥梁与隧道工程"
          }
        ]
      },
      {
        value: "(0815)水利工程",
        label: "水利工程",
        children: [
          {
            value: "(081501)水文学及水资源",
            label: "水文学及水资源"
          },
          {
            value: "(081502)水力学及河流动力学",
            label: "水力学及河流动力学"
          },
          {
            value: "(081503)水工结构工程",
            label: "水工结构工程"
          },
          {
            value: "(081504)水利水电工程",
            label: "水利水电工程"
          },
          {
            value: "(081505)港口、海岸及近海工程",
            label: "港口、海岸及近海工程"
          }
        ]
      },
      {
        value: "(0816)测绘科学与技术",
        label: "测绘科学与技术",
        children: [
          {
            value: "(081601)大地测量学与测量工程",
            label: "大地测量学与测量工程"
          },
          {
            value: "(081602)摄影测量与遥感",
            label: "摄影测量与遥感"
          },
          {
            value: "(081603)地图制图学与地理信息工程",
            label: "地图制图学与地理信息工程"
          }
        ]
      },
      {
        value: "(0817)化学工程与技术",
        label: "化学工程与技术",
        children: [
          {
            value: "(081701)化学工程",
            label: "化学工程"
          },
          {
            value: "(081702)化学工艺",
            label: "化学工艺"
          },
          {
            value: "(081703)生物化工",
            label: "生物化工"
          },
          {
            value: "(081704)应用化学",
            label: "应用化学"
          },
          {
            value: "(081705)工业催化",
            label: "工业催化"
          }
        ]
      },
      {
        value: "(0818)地质资源与地质工程",
        label: "地质资源与地质工程",
        children: [
          {
            value: "(081801)矿产普查与勘探",
            label: "矿产普查与勘探"
          },
          {
            value: "(081802)地球探测与信息技术",
            label: "地球探测与信息技术"
          },
          {
            value: "(081803)地质工程",
            label: "地质工程"
          }
        ]
      },
      {
        value: "(0819)矿业工程",
        label: "矿业工程",
        children: [
          {
            value: "(081901)采矿工程",
            label: "采矿工程"
          },
          {
            value: "(081902)矿物加工工程",
            label: "矿物加工工程"
          },
          {
            value: "(081903)安全技术及工程",
            label: "安全技术及工程"
          }
        ]
      },
      {
        value: "(0820)石油与天然气工程",
        label: "石油与天然气工程",
        children: [
          {
            value: "(082001)油气井工程",
            label: "油气井工程"
          },
          {
            value: "(082002)油气田开发工程",
            label: "油气田开发工程"
          },
          {
            value: "(082003)油气储运工程",
            label: "油气储运工程"
          }
        ]
      },
      {
        value: "(0821)纺织科学与工程",
        label: "纺织科学与工程",
        children: [
          {
            value: "(082101)纺织工程",
            label: "纺织工程"
          },
          {
            value: "(082102)纺织材料与纺织品设计",
            label: "纺织材料与纺织品设计"
          },
          {
            value: "(082103)纺织化学与染整工程",
            label: "纺织化学与染整工程"
          },
          {
            value: "(082104)服装设计与工程",
            label: "服装设计与工程"
          }
        ]
      },
      {
        value: "(0822)轻工技术与工程",
        label: "轻工技术与工程",
        children: [
          {
            value: "(082201)制浆造纸工程",
            label: "制浆造纸工程"
          },
          {
            value: "(082202)制糖工程",
            label: "制糖工程"
          },
          {
            value: "(082203)发酵工程",
            label: "发酵工程"
          },
          {
            value: "(082204)皮革化学与工程",
            label: "皮革化学与工程"
          }
        ]
      },
      {
        value: "(0823)交通运输工程",
        label: "交通运输工程",
        children: [
          {
            value: "(082301)道路与铁道工程",
            label: "道路与铁道工程"
          },
          {
            value: "(082302)交通信息工程及控制",
            label: "交通信息工程及控制"
          },
          {
            value: "(082303)交通运输规划与管理",
            label: "交通运输规划与管理"
          },
          {
            value: "(082304)载运工具运用工程",
            label: "载运工具运用工程"
          }
        ]
      },
      {
        value: "(0824)船舶与海洋工程",
        label: "船舶与海洋工程",
        children: [
          {
            value: "(082401)船舶与海洋结构物设计制造",
            label: "船舶与海洋结构物设计制造"
          },
          {
            value: "(082402)轮机工程",
            label: "轮机工程"
          },
          {
            value: "(082403)水声工程",
            label: "水声工程"
          }
        ]
      },
      {
        value: "(0825)航空宇航科学与技术",
        label: "航空宇航科学与技术",
        children: [
          {
            value: "(082501)飞行器设计",
            label: "飞行器设计"
          },
          {
            value: "(082502)航空宇航推进理论与工程",
            label: "航空宇航推进理论与工程"
          },
          {
            value: "(082503)航空宇航制造工程",
            label: "航空宇航制造工程"
          },
          {
            value: "(082504)人机与环境工程",
            label: "人机与环境工程"
          }
        ]
      },
      {
        value: "(0826)兵器科学与技术",
        label: "兵器科学与技术",
        children: [
          {
            value: "(082601)武器系统与运用工程",
            label: "武器系统与运用工程"
          },
          {
            value: "(082602)兵器发射理论与技术",
            label: "兵器发射理论与技术"
          },
          {
            value: "(082603)火炮、自动武器与弹药工程",
            label: "火炮、自动武器与弹药工程"
          },
          {
            value: "(082604)军事化学与烟火技术",
            label: "军事化学与烟火技术"
          }
        ]
      },
      {
        value: "(0827)核科学与技术",
        label: "核科学与技术",
        children: [
          {
            value: "(082701)核能科学与工程",
            label: "核能科学与工程"
          },
          {
            value: "(082702)核燃料循环与材料",
            label: "核燃料循环与材料"
          },
          {
            value: "(082703)核技术及应用",
            label: "核技术及应用"
          },
          {
            value: "(082704)辐射防护及环境保护",
            label: "辐射防护及环境保护"
          }
        ]
      },
      {
        value: "(0828)农业工程",
        label: "农业工程",
        children: [
          {
            value: "(082801)农业机械化工程",
            label: "农业机械化工程"
          },
          {
            value: "(082802)农业水土工程",
            label: "农业水土工程"
          },
          {
            value: "(082803)农业生物环境与能源工程",
            label: "农业生物环境与能源工程"
          },
          {
            value: "(082804)农业电气化与自动化",
            label: "农业电气化与自动化"
          }
        ]
      },
      {
        value: "(0829)林业工程",
        label: "林业工程",
        children: [
          {
            value: "(082901)森林工程",
            label: "森林工程"
          },
          {
            value: "(082902)木材科学与技术",
            label: "木材科学与技术"
          },
          {
            value: "(082903)林产化学加工工程",
            label: "林产化学加工工程"
          }
        ]
      },
      {
        value: "(0830)环境科学与工程（可授工学、理学、农学学位）",
        label: "环境科学与工程（可授工学、理学、农学学位）",
        children: [
          {
            value: "(083001)环境科学",
            label: "环境科学"
          },
          {
            value: "(083002)环境工程",
            label: "环境工程"
          }
        ]
      },
      {
        value: "(0831)生物医学工程（可授工学、理学、医学学位）",
        label: "生物医学工程（可授工学、理学、医学学位）"
      },
      {
        value: "(0832)食品科学与工程（可授工学、农学学位）",
        label: "食品科学与工程（可授工学、农学学位）",
        children: [
          {
            value: "(083201)食品科学",
            label: "食品科学"
          },
          {
            value: "(083202)粮食、油脂及植物蛋白工程",
            label: "粮食、油脂及植物蛋白工程"
          },
          {
            value: "(083203)农产品加工及贮藏工程",
            label: "农产品加工及贮藏工程"
          },
          {
            value: "(083204)水产品加工及贮藏工程",
            label: "水产品加工及贮藏工程"
          }
        ]
      }
    ]
  },
  {
    value: "(09)农学",
    label: "农学",
    children: [
      {
        value: "(0901)作物学",
        label: "作物学",
        children: [
          {
            value: "(090101)作物栽培学与耕作学",
            label: "作物栽培学与耕作学"
          },
          {
            value: "(090102)作物遗传育种",
            label: "作物遗传育种"
          }
        ]
      },
      {
        value: "(0902)园艺学",
        label: "园艺学",
        children: [
          {
            value: "(090201)果树学",
            label: "果树学"
          },
          {
            value: "(090202)蔬菜学",
            label: "蔬菜学"
          },
          {
            value: "(090203)茶学",
            label: "茶学"
          }
        ]
      },
      {
        value: "(0903)农业资源利用",
        label: "农业资源利用",
        children: [
          {
            value: "(090301)土壤学",
            label: "土壤学"
          },
          {
            value: "(090302)植物营养学",
            label: "植物营养学"
          }
        ]
      },
      {
        value: "(0904)植物保护",
        label: "植物保护",
        children: [
          {
            value: "(090401)植物病理学",
            label: "植物病理学"
          },
          {
            value: "(090402)农业昆虫与害虫防治",
            label: "农业昆虫与害虫防治"
          },
          {
            value: "(090403)农药学(可授农学、理学学位）",
            label: "农药学(可授农学、理学学位）"
          }
        ]
      },
      {
        value: "(0905)畜牧学",
        label: "畜牧学",
        children: [
          {
            value: "(090501)动物遗传育种与繁殖",
            label: "动物遗传育种与繁殖"
          },
          {
            value: "(090502)动物营养与饲料科学",
            label: "动物营养与饲料科学"
          },
          {
            value: "(090503)草业科学",
            label: "草业科学"
          },
          {
            value: "(090504)特种经济动物饲养（含：蚕、蜂等）",
            label: "特种经济动物饲养（含：蚕、蜂等）"
          }
        ]
      },
      {
        value: "(0906)兽医学",
        label: "兽医学",
        children: [
          {
            value: "(090601)基础兽医学",
            label: "基础兽医学"
          },
          {
            value: "(090602)预防兽医学",
            label: "预防兽医学"
          },
          {
            value: "(090603)临床兽医学",
            label: "临床兽医学"
          }
        ]
      },
      {
        value: "(0907)林学",
        label: "林学",
        children: [
          {
            value: "(090701)林木遗传育种",
            label: "林木遗传育种"
          },
          {
            value: "(090702)森林培育",
            label: "森林培育"
          },
          {
            value: "(090703)森林保护学",
            label: "森林保护学"
          },
          {
            value: "(090704)森林经理学",
            label: "森林经理学"
          },
          {
            value: "(090705)野生动植物保护与利用",
            label: "野生动植物保护与利用"
          },
          {
            value: "(090706)园林植物与观赏园艺",
            label: "园林植物与观赏园艺"
          },
          {
            value: "(090707)水土保持与荒漠化防治",
            label: "水土保持与荒漠化防治"
          }
        ]
      },
      {
        value: "(0908)水产",
        label: "水产",
        children: [
          {
            value: "(090801)水产养殖",
            label: "水产养殖"
          },
          {
            value: "(090802)捕捞学",
            label: "捕捞学"
          },
          {
            value: "(090803)渔业资源",
            label: "渔业资源"
          }
        ]
      }
    ]
  },
  {
    value: "(10)医学",
    label: "医学",
    children: [
      {
        value: "(1001)基础医学(可授医学、理学学位)",
        label: "基础医学(可授医学、理学学位)",
        children: [
          {
            value: "(100101)人体解剖与组织胚胎学",
            label: "人体解剖与组织胚胎学"
          },
          {
            value: "(100102)免疫学",
            label: "免疫学"
          },
          {
            value: "(100103)病原生物学",
            label: "病原生物学"
          },
          {
            value: "(100104)病理学与病理生理学",
            label: "病理学与病理生理学"
          },
          {
            value: "(100105)法医学",
            label: "法医学"
          },
          {
            value: "(100106)放射医学",
            label: "放射医学"
          },
          {
            value: "(100107)航空、航天与航海医学",
            label: "航空、航天与航海医学"
          }
        ]
      },
      {
        value: "(1002)临床医学",
        label: "临床医学",
        children: [
          {
            value: "(100201",
            disciplineName:
              "内科学(含：心血管病、血液病、呼吸系病、消化系病、内分泌与代谢病、肾病、风湿病、传染病)",
            label:
              "内科学(含：心血管病、血液病、呼吸系病、消化系病、内分泌与代谢病、肾病、风湿病、传染病)"
          },
          {
            value: "(100202)儿科学",
            label: "儿科学"
          },
          {
            value: "(100203)老年医学",
            label: "老年医学"
          },
          {
            value: "(100204)神经病学",
            label: "神经病学"
          },
          {
            value: "(100205)精神病与精神卫生学",
            label: "精神病与精神卫生学"
          },
          {
            value: "(100206)皮肤病与性病学",
            label: "皮肤病与性病学"
          },
          {
            value: "(100207)影像医学与核医学",
            label: "影像医学与核医学"
          },
          {
            value: "(100208)临床检验诊断学",
            label: "临床检验诊断学"
          },
          {
            value: "(100209)护理学",
            label: "护理学"
          },
          {
            value: "(100210",
            disciplineName:
              "外科学(含：普外、骨外、泌尿外、胸心外、神外、整形、烧伤、野战外)",
            label:
              "外科学(含：普外、骨外、泌尿外、胸心外、神外、整形、烧伤、野战外)"
          },
          {
            value: "(100211)妇产科学",
            label: "妇产科学"
          },
          {
            value: "(100212)眼科学",
            label: "眼科学"
          },
          {
            value: "(100213)耳鼻咽喉科学",
            label: "耳鼻咽喉科学"
          },
          {
            value: "(100214)肿瘤学",
            label: "肿瘤学"
          },
          {
            value: "(100215)康复医学与理疗学",
            label: "康复医学与理疗学"
          },
          {
            value: "(100216)运动医学",
            label: "运动医学"
          },
          {
            value: "(100217)麻醉学",
            label: "麻醉学"
          },
          {
            value: "(100218)急诊医学",
            label: "急诊医学"
          }
        ]
      },
      {
        value: "(1003)口腔医学",
        label: "口腔医学",
        children: [
          {
            value: "(100301)口腔基础医学",
            label: "口腔基础医学"
          },
          {
            value: "(100302)口腔临床医学",
            label: "口腔临床医学"
          }
        ]
      },
      {
        value: "(1004)公共卫生与预防医学(可授医学、理学学位)",
        label: "公共卫生与预防医学(可授医学、理学学位)",
        children: [
          {
            value: "(100401)流行病与卫生统计学",
            label: "流行病与卫生统计学"
          },
          {
            value: "(100402)劳动卫生与环境卫生学",
            label: "劳动卫生与环境卫生学"
          },
          {
            value: "(100403)营养与食品卫生学",
            label: "营养与食品卫生学"
          },
          {
            value: "(100404)少儿卫生与妇幼保健学",
            label: "少儿卫生与妇幼保健学"
          },
          {
            value: "(100405)卫生毒理学",
            label: "卫生毒理学"
          },
          {
            value: "(100406)军事预防医学",
            label: "军事预防医学"
          }
        ]
      },
      {
        value: "(1005)中医学",
        label: "中医学",
        children: [
          {
            value: "(100501)中医基础理论",
            label: "中医基础理论"
          },
          {
            value: "(100502)中医临床基础",
            label: "中医临床基础"
          },
          {
            value: "(100503)中医医史文献",
            label: "中医医史文献"
          },
          {
            value: "(100504)方剂学",
            label: "方剂学"
          },
          {
            value: "(100505)中医诊断学",
            label: "中医诊断学"
          },
          {
            value: "(100506)中医内科学",
            label: "中医内科学"
          },
          {
            value: "(100507)中医外科学",
            label: "中医外科学"
          },
          {
            value: "(100508)中医骨伤科学",
            label: "中医骨伤科学"
          },
          {
            value: "(100509)中医妇科学",
            label: "中医妇科学"
          },
          {
            value: "(100510)中医儿科学",
            label: "中医儿科学"
          },
          {
            value: "(100511)中医五官科学",
            label: "中医五官科学"
          },
          {
            value: "(100512)针灸推拿学",
            label: "针灸推拿学"
          },
          {
            value: "(100513)民族医学(含：藏医学、蒙医学等)",
            label: "民族医学(含：藏医学、蒙医学等)"
          }
        ]
      },
      {
        value: "(1006)中西医结合",
        label: "中西医结合",
        children: [
          {
            value: "(100601)中西医结合基础",
            label: "中西医结合基础"
          },
          {
            value: "(100602)中西医结合临床",
            label: "中西医结合临床"
          }
        ]
      },
      {
        value: "(1007)药学(可授医学、理学学位)",
        label: "药学(可授医学、理学学位)",
        children: [
          {
            value: "(100701)药物化学",
            label: "药物化学"
          },
          {
            value: "(100702)药剂学",
            label: "药剂学"
          },
          {
            value: "(100703)生药学",
            label: "生药学"
          },
          {
            value: "(100704)药物分析学",
            label: "药物分析学"
          },
          {
            value: "(100705)微生物与生化药学",
            label: "微生物与生化药学"
          },
          {
            value: "(100706)药理学",
            label: "药理学"
          }
        ]
      },
      {
        value: "(1008)中药学",
        label: "中药学"
      }
    ]
  },
  {
    value: "(11)军事学",
    label: "军事学",
    children: [
      {
        value: "(1101)军事思想及军事历史",
        label: "军事思想及军事历史",
        children: [
          {
            value: "(110101)军事思想",
            label: "军事思想"
          },
          {
            value: "(110102)军事历史",
            label: "军事历史"
          }
        ]
      },
      {
        value: "(1102)战略学",
        label: "战略学",
        children: [
          {
            value: "(110201)军事战略学",
            label: "军事战略学"
          },
          {
            value: "(110202)战争动员学",
            label: "战争动员学"
          }
        ]
      },
      {
        value: "(1103)战役学",
        label: "战役学",
        children: [
          {
            value: "(110301)联合战役学",
            label: "联合战役学"
          },
          {
            value: "(110302)军种战役学(含∶第二炮兵战役学)",
            label: "军种战役学(含∶第二炮兵战役学)"
          }
        ]
      },
      {
        value: "(1104)战术学",
        label: "战术学",
        children: [
          {
            value: "(110401)合同战术学",
            label: "合同战术学"
          },
          {
            value: "(110402)兵种战术学",
            label: "兵种战术学"
          }
        ]
      },
      {
        value: "(1105)军队指挥学",
        label: "军队指挥学",
        children: [
          {
            value: "(110501)作战指挥学",
            label: "作战指挥学"
          },
          {
            value: "(110502)军事运筹学",
            label: "军事运筹学"
          },
          {
            value: "(110503)军事通信学",
            label: "军事通信学"
          },
          {
            value: "(110504)军事情报学",
            label: "军事情报学"
          },
          {
            value: "(110505)密码学",
            label: "密码学"
          },
          {
            value: "(110506)军事教育训练学(含∶军事体育学)",
            label: "军事教育训练学(含∶军事体育学)"
          }
        ]
      },
      {
        value: "(1106)军制学",
        label: "军制学",
        children: [
          {
            value: "(110601)军事组织编制学",
            label: "军事组织编制学"
          },
          {
            value: "(110602)军队管理学",
            label: "军队管理学"
          }
        ]
      },
      {
        value: "(1107)军队政治工作学",
        label: "军队政治工作学"
      },
      {
        value: "(1108)军事后勤学与军事装备学",
        label: "军事后勤学与军事装备学",
        children: [
          {
            value: "(110801)军事后勤学",
            label: "军事后勤学"
          },
          {
            value: "(110802)后方专业勤务",
            label: "后方专业勤务"
          },
          {
            value: "(110803)军事装备学",
            label: "军事装备学"
          }
        ]
      }
    ]
  },
  {
    value: "(12)管理学",
    label: "管理学",
    children: [
      {
        value: "(1201)管理科学与工程(可授管理学、工学学位)",
        label: "管理科学与工程(可授管理学、工学学位)"
      },
      {
        value: "(1202)工商管理",
        label: "工商管理",
        children: [
          {
            value: "(120201)会计学",
            label: "会计学"
          },
          {
            value: "(120202)企业管理（含：财务管理、市场营销、人力资源管理）",
            label: "企业管理（含：财务管理、市场营销、人力资源管理）"
          },
          {
            value: "(120203)旅游管理",
            label: "旅游管理"
          },
          {
            value: "(120204)技术经济及管理",
            label: "技术经济及管理"
          }
        ]
      },
      {
        value: "(1203)农林经济管理",
        label: "农林经济管理",
        children: [
          {
            value: "(120301)农业经济管理",
            label: "农业经济管理"
          },
          {
            value: "(120302)林业经济管理",
            label: "林业经济管理"
          }
        ]
      },
      {
        value: "(1204)公共管理",
        label: "公共管理",
        children: [
          {
            value: "(120401)行政管理",
            label: "行政管理"
          },
          {
            value: "(120402)社会医学与卫生事业管理(可授管理学、医学学位)",
            label: "社会医学与卫生事业管理(可授管理学、医学学位)"
          },
          {
            value: "(120403)教育经济与管理（可授管理学、教育学学位）",
            label: "教育经济与管理（可授管理学、教育学学位）"
          },
          {
            value: "(120404)社会保障",
            label: "社会保障"
          },
          {
            value: "(120405)土地资源管理",
            label: "土地资源管理"
          }
        ]
      },
      {
        value: "(1205)图书馆、情报与档案管理",
        label: "图书馆、情报与档案管理",
        children: [
          {
            value: "(120501)图书馆学",
            label: "图书馆学"
          },
          {
            value: "(120502)情报学",
            label: "情报学"
          },
          {
            value: "(120503)档案学",
            label: "档案学"
          }
        ]
      }
    ]
  }
];

const professionalTitlesOptions = [
  {
    value: "教师系列",
    label: "教师系列",
    children: [
      {
        value: "助教",
        label: "助教"
      },
      {
        value: "讲师",
        label: "讲师"
      },
      {
        value: "副教授",
        label: "副教授"
      },
      {
        value: "教授",
        label: "教授"
      }
    ]
  },
  {
    value: "实验系列",
    label: "实验系列",
    children: [
      {
        value: "实验员",
        label: "实验员"
      },
      {
        value: "实验师",
        label: "实验师"
      },
      {
        value: "高级实验师",
        label: "高级实验师"
      }
    ]
  },
  {
    value: "教育管理研究系列",
    label: "教育管理研究系列",
    children: [
      {
        value: "研究实习员",
        label: "研究实习员"
      },
      {
        value: "助理研究员",
        label: "助理研究员"
      },
      {
        value: "副研究员",
        label: "副研究员"
      },
      {
        value: "研究员",
        label: "研究员"
      }
    ]
  },
  {
    value: "思政系列",
    label: "思政系列",
    children: [
      {
        value: "思政助教",
        label: "思政助教"
      },
      {
        value: "思政讲师",
        label: "思政讲师"
      },
      {
        value: "思政副教授",
        label: "思政副教授"
      },
      {
        value: "思政教授",
        label: "思政教授"
      }
    ]
  }
];
export default {
  props: {
    editData: {}
  },
  data() {
    return {
      visible: false,
      confirmLoading: false,
      form: this.$form.createForm(this),
      disciplineOptions,
      professionalTitlesOptions
    };
  },
  methods: {
    showModal() {
      this.visible = true;
      console.log(this.editData);
      setTimeout(() => {
        this.form.setFieldsValue(this.editData);
        this.form.setFieldsValue({
          teacherQualificationCertificate: [],
          willDiscipline: [],
          willProfessionalTitles: []
        });
      }, 0);
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
          var teacherQualificationCertificateStr = "";
          for (
            let index = 0;
            index < values.teacherQualificationCertificate.length;
            index++
          ) {
            teacherQualificationCertificateStr =
              teacherQualificationCertificateStr +
              values.teacherQualificationCertificate[index] +
              "、";
          }
          const fieldsValue = {
            ...values,
            birthday: values["birthday"].format("YYYY-MM-DD"),
            enterSchoolTime: values["enterSchoolTime"].format("YYYY-MM-DD"),
            academicQualificationsTime: values[
              "academicQualificationsTime"
            ].format("YYYY-MM-DD"),
            academicDegreesTime: values["academicDegreesTime"].format(
              "YYYY-MM-DD"
            ),
            professionalTechnologyDutiesTime: values[
              "professionalTechnologyDutiesTime"
            ].format("YYYY-MM-DD"),
            teacherQualificationCertificate: teacherQualificationCertificateStr,
            willDiscipline: willDiscipline[willDiscipline.length - 1],
            willProfessionalTitles: [willProfessionalTitles.length - 1]
          };
          console.log(fieldsValue);
          {
            this.axios
              .post(
                "/userinformation/updateByPrimaryKey",
                this.qs.stringify({
                  id: this.editData.id,
                  ...fieldsValue
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

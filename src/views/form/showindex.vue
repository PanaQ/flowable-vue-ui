<template>
  <div class="showform-container">
    <div class="form-title">
      <span>查看表单</span>
      <!-- <button
                    class="btn"
                    @click="exit()"
                >退出查看</button> -->

    </div>

    <el-row>
      <el-col :span="4" class="left">
        <!-- 展示一些信息 -->
        <ul>
          <li><span>表单名</span>:{{ formdata.formname }}</li>
          <!-- <li><span>所属人</span>:{{}}</li>
                    <li><span>版本号</span>:{{}}</li>
                    <li><span>最后修改时间</span>:{{}}</li> -->
        </ul>
      </el-col>
      <el-col :span="20" class="right">
        <fm-generate-form
          ref="generateForm"
          :data="jsonData"
          :remote="remoteFuncs"
          :value="values"/>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { getFormList } from '../../api/flowable'

export default {
  data() {
    return {

      formdata: {
        formname: '11111',
        formjson: {}

      },
      jsonData: {
        'list': [
          {
            'type': 'input',
            'name': '单行文本',
            'icon': 'icon-input',
            'options': {
              'width': '100%',
              'defaultValue': '',
              'required': false,
              'dataType': 'string',
              'pattern': '',
              'placeholder': '',
              'remoteFunc': 'func_1540908864000_94322'
            },
            'key': '1540908864000_94322',
            'model': 'input_1540908864000_94322',
            'rules': [
              {
                'type': 'string',
                'message': '单行文本格式不正确'
              }
            ]
          }
        ],
        'config': {
          'labelWidth': 100,
          'labelPosition': 'top',
          'size': 'small'
        }
      },
      values: {},
      remoteFuncs: {}
    }
  },
  created() {
    this.getFormList()
  },
  methods: {
    newform() {
      // 进行路由的跳转
      this.$router.push({ path: '/flowable-modeler/showindex' })
    },
    serach(data) {
      // 进行查看，预览。
      // 进行传输一个id
      this.$router.push({ path: '/flowable-modeler/serachform' })
    },
    edit() {
      // 能编辑修改的状态

    },
    getFormList() {
      // 传modelid获取数据
      getFormList().then(response => {
        console.log(response.data)
        this.formdata = response.data
        this.jsonData = this.formdata.jsonform
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.showform-container{
    height: 100%;
  background-color: #fff;
  .form-title {
    padding-left: 20px;
    height: 60px;
    line-height: 60px;
    font-family: "Titillium Web", sans-serif;
    color: #1a1a1a;
    font-size: 20px;
    background-color: #e8edf0;
    border-bottom: 1px solid #2f2f2f;
  }
  .btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    float: right;
    background-color: #2980b9;
    color: #ffffff;
    border-color: #ffffff;
    font-size: 15px;
    margin-top: 13px;
    margin-right: 20px;
  }
  .el-row,.right,.left{
      height:100%;
      border-left:1px solid #2f2f2f;
  }

  .left{
      ul{
          margin:10px;
          color:black;
          list-style:none;
          li {
              display:inline-block;
            //   border:1px solid red;
              font-size:20px;
          }
      }
  }
  .right{
      padding: 20px 30px;
  }

}
</style>

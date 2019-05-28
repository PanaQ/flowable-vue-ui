<template>
  <div class="newform-container">
    <div class="form-title">
      <span>修改表单</span>

      <button
        class="btn"
        @click="saveform()"
      >保存表单</button>

    </div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="表单名称" required >
        <el-input v-model="form.name" style="width:214px" disabled/>
      </el-form-item>
    </el-form>

    <template>
      <fm-making-form ref="makingform" style="height: 500px;" preview >
        <template slot="action"/>
      </fm-making-form>
    </template>

  </div>
</template>

<script>
import { modelList } from '../../api/flowable'
export default {
  data() {
    return {
      form: {
        name: '',
        model: ''
      },
      model: []
    }
  },
  created() {
    // 一个请求出去获取所有的模型列表数据
    this.getmodelList()
  },
  methods: {
    getmodelList() {
      modelList().then(response => {
        //    console.log(response.data);
        this.model = response.data.data
      })
    },
    saveform() {
      var data = {
        formname: '',
        modelid: '',
        formjson: {}
      }

      console.log(this.getJSON)

      if (typeof (this.$refs.makingform.getJSON()) === 'undefined') {
        console.log(this.$refs.makingform.getJSON())
      } else {
        data.formname = this.form.name
        data.modelid = this.form.model
        data.formjson = this.$refs.makingform.getJSON()

        console.log(JSON.stringify(data))

        // saveFormList(data).then(response => {

        // })

        // 进行路由的跳转
        this.$router.push({ path: '/flowable-modeler/forms' })
      }
    }
  }
}
</script>
<style  lang="scss" scoped>
.newform-container {
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
  .el-form{
    // border: 1px solid red;
    padding: 10px 20px;
  }
}
</style>


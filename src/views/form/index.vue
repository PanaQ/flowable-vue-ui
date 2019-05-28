<template>
  <div class="form-container">

    <div class="form-title">
      <span>表单</span>
      <button
        class="btn"
        @click="newform()"
      >创建表单</button>

    </div>

    <el-row>
      <el-col :span="4">
        <div class="left">
          <a>表单</a>

        </div>
      </el-col>
      <el-col :span="20">
        <div class="right" >

          <el-card v-for="(item,index) in model" :key="index" class="box-card">
            <div
              slot="header"
              class="clearfix"
            >
              <span>{{ item.name }}</span>
              <i
                class="el-icon-search"
                @click="serach(item)"
              />
              <i
                class="el-icon-edit"
                @click="edit(item)"
              />
            </div>
            <div class="text item">
              <!-- 创建的用户 -->
              <!-- 最后修改时间 -->
              <!-- <p>{{item.description}}</p> -->
              <p> {{ item.lastUpdated }}</p>
            </div>
          </el-card>

        </div>
      </el-col>
    </el-row>

    <!-- <el-input
      v-model="input"
      placeholder="请输入表单名"
      class="input-name"
    ></el-input>
    <fm-making-form
      ref="makingform"
      style="height: 500px;"
      preview
    >
      <template slot="action">
      </template>
    </fm-making-form>

    <el-button
      type="primary"
      @click="getjson()"
    >保存表单</el-button> -->

  </div>

</template>

<script>
import { modelList } from '../../api/flowable'

export default {
  data() {
    return {
      model: []

    }
  },
  created() {
    this.getmodelList()
  },
  methods: {
    newform() {
      // 进行路由的跳转
      var type = 0
      this.$router.push({ path: `/flowable-modeler/newforms/${type}` })
    },
    edit() {
      // 能编辑修改的状态
      var type = 1
      this.$router.push({ path: `/flowable-modeler/newforms/${type}` })
    },
    serach(data) {
      // 进行查看，预览。
      // 进行传输一个id
      this.$router.push({ path: '/flowable-modeler/serachform' })
    },

    getmodelList() {
      modelList().then(response => {
        console.log(response.data)
        this.model = response.data.data
      })
    }
  }
}
</script>
<style  lang="scss" scoped>
.form-container {
  // padding: 30px 20px;
  background-color: #fff;
  height: 100%;
  .input-name {
    margin-bottom: 40px;
  }

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
  .el-row {
    height: 100%;
    .el-col {
      height: 100%;
    }
    .left {
      height: 100%;
    //   border: 2px solid rebeccapurple;

      a {
        display: block;
        color: #373e48;
        font-size: 17px;
        margin: 10px 5px 10px 20px;
        padding-left: 10px;
        border-left: 3px solid #2980b9;
      }
    }
    .right {
      height: 100%;
      border-left: 2px solid #2f2f2f;

      .box-card {
        width: 340px;
        height: 200px;
        float:left;
        margin:10px 15px;

        i.el-icon-search{
          margin-left:200px;
        }
        i{
          margin-right: 20px;
          font-size: 16px;
          cursor: pointer;
          &:hover{
            color: #2980b9;
          }

        }
      }
    }
  }
}
</style>


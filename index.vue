<template>
  <el-container class="app-container">
    <el-aside width="200px">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
      >
        <el-menu-item
          index="1"
          class="addbutton"
          @click="dialogVisible = true;newappname=''"
        >
          <span>添加应用</span>
          <i class="el-icon-plus"></i>
        </el-menu-item>
        <template v-for="(item) in appList">
          <el-menu-item
            :index="item.appid"
            @click="handleClick(item.appid)"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.appname}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>






    <el-main>

    </el-main>


  </el-container>
</template>

<script>
// import {MakingForm} from 'form-making'
// Vue.component(MakingForm.name, MakingForm)
export default {
  data() {
    return {
      activeName: 'second',
      dialogVisible: false,
      key() {
        return this.$route.fullPath
      },
      newappname: '',
    };
  },
  methods: {
    handleClick(index) {
      console.log(index);
    },
    newapp() {
      this.dialogVisible = false;
      console.log(this.newappname);
      this.appList.push({ appid: '004', appname: this.newappname });
      this.newappname = '';
    },

  }
};
</script>




<style  lang="scss" scoped>
.app-container {
  padding: 0px;
  height: 100%;
  .el-dialog {
    height: 30%;
  }
  .el-aside {
  }
  .el-main {
    border: 1px solid darkblue;
  }

  .formcard{
    float: left;
    // border: 1px solid black;
    height: 50px;
    width: 100px;
    text-align: center;
    line-height: 50px;
    background-color: #94C9FF;
    color: white;
    border-radius: 4px;
    margin: 10px 0px;
    margin-right: 30px;
    cursor: pointer;
  }
}
</style>




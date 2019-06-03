<template>
  <el-container class="home-container">
    <el-header>
      <img
        class="logo"
        src="https://cn.vuejs.org/images/logo.png"
      >
      <ul class="first-ul">
        <li @click="logout">
          退出
        </li>
        <li @click="toMyApp()">
          应用工厂
        </li>
        <li>
          模板中心
        </li>
      </ul>

      <ul>
        <li>
          更多应用 <i class="el-icon-s-grid"/>
        </li>
        <li>
          应用a
        </li>
        <li>
          应用b
        </li>
        <li @click="toMyWork()">
          我的工作
        </li>
      </ul>

    </el-header>
    <el-main>
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558405772&di=11822e4ad8640babec5cd8422c8d97d2&imgtype=jpg&er=1&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2015%2F0107%2F995a49af2048c5e25578ca421826b081.jpg"
        alt=""
      >
      <br>
      <el-input
        placeholder="请输入搜索内容"
        style="width:500px"
      >
        <i slot="suffix" class="el-input__icon el-icon-search"/>
      </el-input>
      <br>
      <div/>
    </el-main>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    toMyWork() {

    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    toMyApp() {
      this.$router.push({
        path: '/app'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home-container {
  height: 100%;
  .el-header,
  .el-footer {
    color: #333;
    line-height: 50px;
    border-bottom: 1px solid #999999;
  }
  .el-header {
    img {
      float: left;
      height: 30px;
      line-height: 60px;
      margin-top: 10px;
    }
    ul {
      list-style: none;
      font: 15px verdana, arial, sans-serif; /* 设置文字大小和字体样式 */

      li {
        float: right; /* 往左浮动 */
        list-style: none; /* 将默认的列表符号去掉 */
        padding: 0; /* 将默认的内边距去掉 */
        margin: 0; /* 将默认的外边距去掉 */
        display: inline;
        // line-height: 30px;
        padding: 0px 12px;
        &:hover {
          cursor: pointer;
          color: powderblue;
        }
      }
    }
    .first-ul li {
      border-right: 2px solid rgb(79, 82, 79);
      &:last-child {
        border-left: 2px solid rgb(79, 82, 79);
      }
    }
  }

  .el-main {
    // background-color: #e9eef3;
    color: #333;
    text-align: center;
    height: 100%;
    img {
      margin-top: 50px;
      height: 300px;
    }
    .el-input{
      margin-top: 20px;
    }
  }

  body > .el-container {
    margin-bottom: 40px;
  }
}
</style>

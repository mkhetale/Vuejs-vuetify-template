<template>
  <div class="header">
    <el-row>
      <el-col :span="3">
        <div class="logo">
          <img src="../../assets/logo.png">
          projectname
        </div>
      </el-col>
      <el-col :span="21">
        <div class="menu">
          <el-menu :default-active="urlPath" :router="isRouter" mode="horizontal">
            <el-menu-item index="/">Home</el-menu-item>
            <el-menu-item index="/user">Users</el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'nxt-header',
  created() {
    this.urlPath = this.$route.path;
  },
  data() {
    return {
      isRouter: true,
      urlPath: '',
    };
  },
};
</script>
<style>
  .header {
    min-height: 60px;
    background-color: #EFF2F7;
  }
  .logo {
    display: flex;
    align-items: center;
    height: 60px;
  }
  .logo img {
    display: block;
    width: 2em;
    height: 2em;
    margin: 0 auto;
  }
  .menu {
    margin-left: 20px;
  }
</style>

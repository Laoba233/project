<template>
  <div id="home">
    <el-container style="height: 100%; border: 1px solid #eee">
      <!-- //左边 -->
      <div class="left">
        <!-- 是否展开菜单 -->
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          :default-openeds="['1', '2']" :collapse="isCollapse">

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">在线测试</span>
            </template>
            <el-menu-item-group>
              <el-menu-item-group>
                <router-link to="/Tomak">
                  <el-menu-item>制作试卷</el-menu-item>
                </router-link>
                <router-link to="/Arrge">
                  <el-menu-item>安排测试</el-menu-item>
                </router-link>
                <router-link to="/Exama">
                  <el-menu-item>试卷管理</el-menu-item>
                </router-link>
                <router-link to="/Cresu">
                  <el-menu-item>查看成绩</el-menu-item>
                </router-link>
                <router-link to="/Markg">
                  <el-menu-item>批阅试卷</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">基础数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item-group>
                <router-link to="/Smant">
                  <el-menu-item>学生管理</el-menu-item>
                </router-link>
                <router-link to="/Tmant">
                  <el-menu-item>老师管理</el-menu-item>
                </router-link>
                <router-link to="/Cmant">
                  <el-menu-item>班级管理</el-menu-item>
                </router-link>
                <router-link to="/Cpasd">
                  <el-menu-item>修改密码</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>


      <!-- //右边 -->
      <el-container style="background-color: yellow">
        <el-header>
          <el-tooltip class="tooltip" effect="dark" :content="isCollapse?'展开':'收起'" placement="right">
            <el-button @click="isCollapse=!isCollapse" :icon="isCollapse?'el-icon-caret-right':'el-icon-caret-left'"
              style="color:#fff;border: 0;" />
          </el-tooltip>
          <div class="right-down">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
          </div>
        </el-header>

        <el-main>
          <router-view />
        </el-main>

      </el-container>
    </el-container>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };

</script>

<style lang="less" scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .el-menu-item-group /deep/a {
    text-decoration: none;
  }

  .el-header {
    padding: 0px !important;
  }

  .right-down{
    float: right;
    margin-right:20px; 
  }

  .el-button {
    background-color: black !important;
    padding: 24px 10px 22px 10px !important;
  }
  .el-button:hover{
    background-color: black !important;
  }
  
</style>

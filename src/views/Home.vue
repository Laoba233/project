<template>
  <div id="home">
      <el-container style="height: 100%; border: 1px solid #eee">
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <!-- 是否展开菜单 -->
            <el-menu :default-openeds="['1', '2']"  >
     
               <!-- 在线测试 -->
              <el-submenu index="1">
                
                <template slot="title"><i class="el-icon-menu"></i>在线测试</template>
                <el-menu-item-group>
                    <router-link to="/Tomak"><el-menu-item >制作试卷</el-menu-item></router-link>
                    <router-link to="/Arrge"><el-menu-item>安排测试</el-menu-item></router-link>
                    <router-link to="/Exama"><el-menu-item>试卷管理</el-menu-item></router-link>
                    <router-link to="/Cresu"><el-menu-item>查看成绩</el-menu-item></router-link>
                    <router-link to="/Markg"><el-menu-item>批阅试卷</el-menu-item></router-link>
                </el-menu-item-group>
              </el-submenu>

              <!-- 基础数据 -->
              <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>基础数据</template>
                <el-menu-item-group>
                    <router-link to="/Smant"><el-menu-item>学生管理</el-menu-item></router-link>
                    <router-link to="/Tmant"><el-menu-item>老师管理</el-menu-item></router-link>
                    <router-link to="/Cmant"><el-menu-item>班级管理</el-menu-item></router-link>
                    <router-link to="/Cpasd"><el-menu-item>修改密码</el-menu-item></router-link>
                </el-menu-item-group>
              </el-submenu>

            </el-menu>
          </el-aside>
          
          <el-container>

            <el-header >
              <span>头部小标题</span>
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
  .el-menu-item-group /deep/a{
    text-decoration: none;
  }
</style>
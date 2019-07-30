<template>
  <div class="home">
    <h1>后台管理页面</h1>
    <div>
     <router-link to="/Smant">学生管理</router-link>|
     <router-link to="/Tmant">老师管理</router-link>|
      <router-link to="/Cmant">班级管理</router-link>|
      <router-link to="/Cpasd">修改密码</router-link>|
      <router-link to="/Tomak">制作试卷</router-link>|
     <router-link to="/Arrge">安排测试</router-link>|
      <router-link to="/Exama">试卷管理</router-link>|
      <router-link to="/Cresu">查看成绩</router-link>|
      <router-link to="/Markg">批阅试卷</router-link>
     
    </div>
    <router-view />
  </div>
</template>
 
<script>
</script>

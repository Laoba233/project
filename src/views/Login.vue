<template>
  <div class="box">
    <el-form status-icon label-width="100px" class="demo-ruleForm">
      <el-form-item>
        <h1>考试管理系统</h1>
      </el-form-item>
      <el-form-item>
        <el-input v-model="phone" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="pwd" placeholder="密码" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked">记住密码</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登入</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: false,
        phone: '',
        pwd: ''
      };
    },
    methods: {
      submitForm() {
        if (this.phone == "" && this.pwd == "") {
          this.$message.error("手机号或密码不能为空")
        } else {
         

        }
      },
    }
  }

</script>

<style>
  body {
    padding: 0px;
    margin: 0px;
  }

  .box {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-image: url(../assets/bjt.webp);
  }

  h1 {
    margin-left: 15px;
    color: white;
  }

  .el-form {
    padding: 50px 80px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .el-form-item__content {
    margin-left: 0px !important;
  }

  .el-button {
    width: 100%;
  }

</style>

<template>
  <div id="bg">
    <el-form status-icon label-width="100px" class="demo-ruleForm">
      <el-form-item>
        <h2>考试管理系统</h2>
      </el-form-item>
      <el-form-item>
        <el-input v-model="userMobile" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="userPassword" placeholder="密码" autocomplete="off" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked" class="dispwd">记住密码</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" :loading="long">登入</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  // 引用工具类
  import Base from "@/util/Base64";
  import Cookie from "@/util/Cookie";

  export default {
    data() {
      return {
        checked: false, //记住密码
        displayPwd: false, //显示隐藏密码
        long: false, //登入状态
        userMobile: "", //账号
        userToken: '', //存储令牌
        uid: '', //用户id
        userPassword: "" //密码
      };
    },
    created() {
      //获取存入的账号密码
      let CokPon = Cookie.getCookie("phone");
      let CokPwd = Cookie.getCookie("passWord");
      //如果cookie有账号密码就把他渲染到页面上来
      if (CokPon && CokPwd) {
        //把获取的账号密码解密
        let phone = Base.decode(CokPon);
        let password = Base.decode(CokPwd);
        this.checked = true;
        this.userMobile = phone;
        this.userPassword = password;
      }
    },
    methods: {
      submitForm() {
        /**
         *登入提交
         */
        let _this = this;

        if (_this.userMobile == "" && _this.userPassword == "") {
          _this.long = true;
          setTimeout(function () {
            /**
             * 给个加载时间
             */
            _this.$message.error("手机号或密码不能为空");
            _this.long = false;
          }, 2000);
        } else {
          _this.axios
            .get("/api/OAuth/authenticate", {
              params: {
                userMobile: _this.userMobile,
                userPassword: _this.userPassword
              }
            })
            .then(function(res){
              console.log(res.data)
              _this.long = true;
              if (_this.checked) {
                //获取输入的账号密码并且加密
                let phone = Base.encode(_this.userMobile);
                let password = Base.encode(_this.userPassword);
                //把加密的账号密码存入cookie中
                Cookie.setCookie("phone", phone);
                Cookie.setCookie("passWord", password);
                _this.userToken = res.data.token_type + ' ' + res.data.access_token; //将后台返回的令牌存储起来
                _this.uid = res.data.profile.userUid //后台返回用户Id
                _this.userToken = res.data.token_type + ' ' + res.data.access_token; //将后台返回的令牌存储起来
                sessionStorage.setItem('token', _this.userToken) //存储操作
                sessionStorage.setItem('uid', _this.uid)
                sessionStorage.setItem('user', res.data.profile.userName)
              } else {
                //存入空值
                Cookie.removeCookie("phone"); //移除cookie账号
                Cookie.removeCookie("passWord"); //移除cookie密码
              }
              setTimeout(function () {
                _this.$router.push("/HomPa");
                _this.$message.success("登入成功");
              }, 2000);
            })
            .catch(function(err) {
              console.log(err)
              _this.long = true;
              setTimeout(function () {
                _this.$message.error("手机号或密码不正确");
                _this.long = false;
              }, 2000);
            });
        }
      }
    }
  };

</script>

<style lang="less" scoped>
  #bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0) url("../assets/bg.jpg") no-repeat scroll 100% 100%;
    background-size: auto;
    background-size: cover;

    /deep/.el-form-item__content {
      margin-left: 0px !important;

      h2 {
        margin-left: 15px;
        color: white;
      }
    }

    .el-form {
      padding: 50px 00px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .el-button {
      width: 100%;
    }

    .dispwd {
      color: black !important;
    }
  }

</style>

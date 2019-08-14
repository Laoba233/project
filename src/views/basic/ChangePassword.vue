<template>
  <div id="CPwd">
    <el-breadcrumb>
      <el-breadcrumb-item>
        <a>基础数据</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>修改密码</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="旧密码" prop="oldPass">
        <el-input type="text" v-model="ruleForm.oldPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="新密码" prop="pass">
        <el-input type="text" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" show-password></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      var checkPass = (rule, value, callback) => {
        if (value !== this.ruleForm.pass) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          oldPass: "", //旧密码
          pass: "", //新密码
          checkPass: "" //确认密码
        },
        rules: {

          oldPass: [{
              required: true,
              message: "请输入密码",
              trigger: "blur"
            }, //trigger触发方式
          ],
          pass: [{
              required: true,
              message: "请输入密码",
              trigger: "blur"
            }, //required是否必填
          ],
          checkPass: [{
              required: true,
              message: "请再次输入密码",
              trigger: "blur"
            },
            {
              validator: checkPass,
              trigger: "blur"
            }
          ]
        }
      }

    },
    methods: {
      /**
       * 提交修改
       */

      submitForm(formName) {

        var _this = this;
        _this.$refs[formName].validate(valid => {
          if (valid) {
            this.$confirm('确认修改密码?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              _this.axios
              .get('/api/User/ModifyPassword',{
                params:{
                  uid:sessionStorage.getItem('uid'),
                  oldPassword:_this.ruleForm.oldPass,
                  newPassword:_this.ruleForm.pass
                }
              })
              .then(res =>{
                console.log(res)
               let code=res.data.code;//保存状态码
                if(code ==1){
                  _this.$router.push("/");
                 _this.$message.success("修改成功，返回登录！");
                }else if(code==-3){
                  _this.$message.error("旧密码不正确！");
                }else if(code==0){
                  _this.$message("新旧密码一样！");
                }else if(code==-1){
                  _this.$message.error("系统错误！");
                }else if(code==-2){
                  _this.$message.error("参数错误！");
                }
              })
              .catch(err =>{
                console.log(err)
              })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };

</script>


<style lang="less" scoped>
  #CPwd {
    .el-breadcrumb {
      margin-bottom: 15px;
    }
  }

</style>

<template>
	<div class="login">
    <h2>Login</h2>
    	<el-form
        :model="loginObj"
        :rules="rules"
        ref="login">
        <el-form-item label="User Id" prop="userId">
          <el-input type="text" placeholder="User Id" v-model="loginObj.userId"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" placeholder="Password" v-model="loginObj.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="success"
            v-loading="loading"
            @click="submitForm('login')">
           Login
          </el-button>
        </el-form-item>
  		</el-form>
	</div>
</template>
<script>
  import Auth from '@/libs/Auth';
  import Message from '@/libs/Message';
  import userApi from '@/api/userApi';
  import * as rules from '@/helpers/validator';

  export default {
    created() {
      Auth.removeToken();
    },
    data() {
      return {
        loginObj: {
          checked: '',
        },
        loading: false,
        rules: {
          userId: [rules.required],
          password: [rules.required],
        },
      };
    },
    methods: {
      // Validates login form before submitting
      submitForm(loginForm) {
        this.$refs[loginForm].validate((valid) => {
          if (valid) {
            this.doLogin(this.loginObj);
          }
          return true;
        });
      },
      doLogin(obj) {
        this.loading = true;
        userApi.login(obj)
          .then((response) => {
            this.loading = false;
            if (response.data.success) {
              const token = response.data.token;
              Auth.setToken(token);
              this.$router.push(this.$route.query.redirect);
            }
          })
          .catch((error) => {
            this.loading = false;
            Message.error(error.response.data.description);
          });
      },
    },
  };
</script>
<style scoped>
  .login {
    position: relative;
    background: #EFF2F7;
    max-width: 300px;
    height: 350px;
    margin: auto;
    margin-top: 100px;
    padding: 30px;
    padding-top: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.12);
  }
  .login h2 {
    text-align: center;
  }
  .el-button {
    width: 300px;
  }
</style>

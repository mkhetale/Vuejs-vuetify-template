<template>
  <div>
    <!-- Header -->
    <nxt-header></nxt-header>
    <!-- Body -->
    <div class="form-container">
      <h3>{{ edit ? 'Update' : 'Create'}} user</h3>
      <el-row type="flex" :gutter="20" justify="center">
        <el-col :span="10">
          <el-form
            label-position="right"
            label-width="100px"
            :model="user"
            :rules="rules"
            ref="userForm">
            <el-form-item label="First name" prop="firstName">
              <el-input v-model="user.firstName"></el-input>
            </el-form-item>
            <el-form-item label="Last name" prop="lastName">
              <el-input v-model="user.lastName"></el-input>
            </el-form-item>
            <el-form-item label="User Id" prop="userId">
              <el-input v-model="user.userId"></el-input>
            </el-form-item>
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item label="Sex" prop="sex">
              <el-radio-group size="small" v-model="user.sex">
                <el-radio-button label="male">Male</el-radio-button>
                <el-radio-button label="female">Female</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Date of birth"  prop="dob">
              <el-date-picker
                type="date"
                placeholder="Pick a date"
                v-model="user.dob"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="Activity type">
              <el-checkbox-group v-model="user.activity">
                <el-checkbox label="Online activities" name="type"></el-checkbox>
                <el-checkbox label="Promotion activities" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="User role" prop="type">
              <el-select v-model="user.type" placeholder="Select role">
                <el-option label="Data entry" value="dataentry"></el-option>
                <el-option label="Credit underwriter" value="approver"></el-option>
                <el-option label="Admin" value="admin"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Email id" prop="emailId">
              <el-input v-model="user.emailId"></el-input>
            </el-form-item>
            <el-form-item label="Mobile no" prop="mobileNo">
              <el-input v-model="user.mobileNo"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                :loading="loading"
                type="success"
                @click="saveUser">
                {{ edit ? 'Update' : 'Create'}}
              </el-button>
            </el-form-item>
            <el-form-item>
              <el-button
                :loading="loading"
                type="warning"
                @click="populate">
                  Populate
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import userApi from '@/api/userApi';
  import * as rules from '@/helpers/validator';
  import Header from '@/components/common/Header';
  import Message from '@/libs/Message';

  export default {
    components: {
      'nxt-header': Header,
    },
    data() {
      return {
        user: {
          firstName: '',
          lastName: '',
          userId: '',
          password: '',
          sex: 'male',
          dob: '',
          activity: [],
          type: 'admin',
          emailId: '',
          mobileNo: '',
        },
        edit: false,
        loading: false,
        rules: {
          firstName: [rules.required],
          lastName: [rules.required],
          userId: [rules.required],
          password: [rules.required],
          sex: [rules.required],
          dob: [rules.date],
          emailId: [rules.emailId],
          mobileNo: [rules.required, rules.mobileNo],
          type: [rules.required],
        },
      };
    },
    created() {
      const id = this.$route.params.id;
      if (id) {
        this.edit = true;
        this.getUser(id);
        delete this.rules.password;
      }
    },
    methods: {
      getUser(id) {
        userApi.get(id)
          .then((response) => {
            const user = response.data;
            delete user.userName;
            delete user.createdAt;
            delete user.updatedAt;
            delete user.password;
            this.user = user;
          })
          .catch((error) => {
            Message.error(error.response.data.error);
          });
      },
      saveUser() {
        this.$refs.userForm.validate((valid) => {
          if (valid) {
            if (this.edit) {
              this.editUser();
            } else {
              this.newUser();
            }
          }
          return true;
        });
      },
      editUser() {
        this.loading = true;
        const id = this.$route.params.id;
        if (this.user.password === '') {
          delete this.user.password;
        }
        userApi.edit(this.user, id)
          .then(() => {
            this.loading = false;
            this.$router.push('/user');
          })
          .catch((error) => {
            this.loading = false;
            Message.error(error.response.data.error);
          });
      },
      newUser() {
        this.loading = true;
        userApi.create(this.user)
          .then(() => {
            this.loading = false;
            this.$router.push('/user');
          })
          .catch((error) => {
            this.loading = false;
            Message.error(error.response.data.error);
          });
      },
      populate() {
        this.user.firstName = 'Name';
        this.user.lastName = 'Last';
        this.user.userId = 'userId';
        this.user.password = '123456';
        this.user.sex = 'male';
        this.user.dob = '';
        this.user.activity = [];
        this.user.type = 'dataentry';
        this.user.emailId = 'test@test.com';
        this.user.mobileNo = '1234567891';
      },
    },
  };
</script>
<style>
  .form-container {
    margin-top: 40px;
  }
  .form-container h3 {
    text-align: center;
  }
</style>

<template>
  <div>
    <!-- Header -->
    <nxt-header></nxt-header>
    <!-- Body -->
    <div class="table-container">
      <el-row :gutter="10" type="flex" justify="center">
        <el-col :span="18">
          <div class="top">
            <h3>
              Users
              <el-button
                type="primary"
                icon="plus"
                size="small"
                @click="goToAdd">
                  Add user
              </el-button>
            </h3>
          </div>
          <el-input
            placeholder="Search User"
            icon="search"
            @change="loadUsers"
            v-model="searchString">
          </el-input>
          <br/>
          <br/>
          <el-table
          :data="users"
          v-loading="loading"
          element-loading-text="Getting users..."
          style="width: 100%">
            <el-table-column
              label="No"
              sortable
              width="180">
              <template scope="scope">
              {{ scope.$index + params.offset + 1 }}
              </template>
            </el-table-column>
            <el-table-column
              prop="userId"
              label="User Id"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="firstName"
              label="First Name"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="lastName"
              sortable
              label="Last Name">
            </el-table-column>
            <el-table-column
              label="Actions">
              <template scope="scope">
                <el-button
                  type="warning"
                  size="small"
                  icon="edit"
                  @click="editUser(scope.row.userId)"> Edit </el-button>
                <el-button
                  type="danger"
                  size="small"
                  icon="delete"
                  @click="deleteUser(scope.row.userId, scope.$index)"> Delete </el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            layout="prev, pager, next"
            :total="Number(userTotal)"
            :page-size="params.limit"
            :current-page="currentPage"
            @current-change="pageChange">
          </el-pagination>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import userApi from '@/api/userApi';
  import Header from '@/components/common/Header';
  import Message from '@/libs/Message';

  export default {
    components: {
      'nxt-header': Header,
    },
    data() {
      return {
        users: [],
        loading: false,
        searchString: '',
        userTotal: 0,
        currentPage: 1,
        params: {
          limit: 5,
          offset: 0,
        },
      };
    },
    created() {
      this.loadUsers();
    },
    methods: {
      getUsers(params) {
        this.loading = true;
        userApi.search(params)
          .then((response) => {
            // get the resource count from the header
            this.userTotal = response.headers['query-count'];
            this.users = response.data;
            this.loading = false;
          })
          .catch((error) => {
            this.loading = false;
            // Since there was an error blank out the users
            this.users = [];
            Message.error(error.response.data.error);
          });
      },
      goToAdd() {
        this.$router.push('/user/add');
      },
      editUser(id) {
        this.$router.push(`/user/edit/${id}`);
      },
      deleteUser(id, idx) {
        this.loading = true;
        userApi.delete(id)
          .then(() => {
            this.loading = false;
            this.users.splice(idx, 1);
            Message.info('Deleted successfully');
          })
          .catch(() => {
            this.loading = false;
            Message.error('Error deleting');
          });
      },
      pageChange(newPage) {
        const params = {};
        params.limit = this.params.limit;
        params.offset = (newPage - 1) * params.limit;
        this.params.offset = params.offset;
        params.global = this.searchString;
        this.getUsers(params);
      },
      loadUsers() {
        const params = {};
        this.currentPage = 1;
        params.limit = this.params.limit;
        params.offset = this.params.offset;
        params.global = this.searchString;
        this.getUsers(params);
      },
    },
  };
</script>
<style>
  .table-container {
    margin-top: 40px;
  }
  .top .el-button {
    float: right;
  }
</style>

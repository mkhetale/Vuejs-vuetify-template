<template>
  <div>
    <!-- Header -->
    <nxt-header></nxt-header>
    <!-- Body -->
    <div class="counters">
      <el-row type="flex" justify="center" :gutter="30">
        <el-col :span="6">
          <nxt-counter :loading="loading" :count="counts.appointment" title="Appointments"></nxt-counter>
        </el-col>
        <el-col :span="6">
          <nxt-counter :loading="loading" :count="counts.doctor" title="Doctors"></nxt-counter>
        </el-col>
        <el-col :span="6">
          <nxt-counter :loading="loading" :count="counts.patient" title="Patients"></nxt-counter>
        </el-col>
      </el-row>
    </div>
    <!-- Footer -->
  </div>
</template>

<script>
// import reportApi from '@/api/reportApi';
import Header from '@/components/common/Header';
import Counter from '@/components/home/Counter';

export default {
  name: 'Dashboard',
  components: {
    'nxt-header': Header,
    'nxt-counter': Counter,
  },
  data() {
    return {
      counts: {},
      loading: false,
    };
  },
};
</script>
<style>
  .counters {
    margin-top: 40px;
    text-align: center;
  }
</style>

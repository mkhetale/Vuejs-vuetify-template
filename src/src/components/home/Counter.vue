<template>
  <el-card v-loading="loading" :header="title">
    <div>
      <h3>{{count}}</h3>
    </div>
  </el-card>
</template>
<script>
export default {
  name: 'nxt-counter',
  props: {
    count: {
      type: Number,
      default: 0,
    },
    title: String,
    loading: Boolean,
  },
};
</script>

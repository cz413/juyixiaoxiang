<script setup>

import Top from "../components/commons/Top.vue";
import Bottom from "../components/commons/Bottom.vue";
</script>

<template>
  <Top/>

    <div class="cooperate-title">
      衡阳抗战纪念馆
    </div>
    <el-row class="show">
      <el-col :span="15">
        <img src="../assets/images/cooperate/1.jpg" alt="failed" width="800px">
      </el-col>
      <el-col :span="8">
        <img src="../assets/images/cooperate/3.jpg" alt="failed" height="600px">
      </el-col>
    </el-row>
    <div class="cooperate-title">
      衡阳保卫战纪念馆
    </div>
    <el-row class="show">
      <el-col :span="15">
        <img src="../assets/images/cooperate/2.jpg" alt="failed" width="800px">
      </el-col>
      <el-col :span="8">
        <img src="../assets/images/cooperate/4.jpg" alt="failed" height="535px" width="440px">
      </el-col>
    </el-row>

  <Bottom/>
</template>

<style scoped>
  .cooperate-title {
    font-size: 30px;
    font-weight: bold;
    margin-left: 100px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .show {
    padding: 0 100px;
  }
</style>

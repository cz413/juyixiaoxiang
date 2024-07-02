<script setup>

import Top from "../components/commons/Top.vue";
import Bottom from "../components/commons/Bottom.vue";
</script>

<template>
  <Top/>
    <el-row class="show">
      <el-col :span="8">
        <div class="cooperator">
          <img src="../assets/images/cooperate/3.jpg" alt="failed">
        </div>
      </el-col>
      <el-col :span="15">
<!--        <img src="../assets/images/cooperate/1.jpg" alt="failed" width="800px">-->
        <div class="cooperate-title">陆家新屋</div>
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
    height: 700px;
    background-image: url("../assets/images/cooperate/5.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
    .cooperator {
      img{
        margin-top: 50px;
        margin-left: 100px;
        height: 600px;
        border-radius: 30px;
      }
    }
    @import url("../assets/font.css");
    .cooperate-title{
      font-family: Alimama;
      color: #fff;
      margin-top: 250px;
      font-size: 60px;
    }
  }
</style>

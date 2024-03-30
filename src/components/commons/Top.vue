
<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-top"
        mode="horizontal"
        :ellipsis="false"
        background-color="#E93628"
        text-color="#fff"
        active-text-color="#fff"
    >
      <el-menu-item index="0" id="name">
        <img src="../../assets/images/logo-removebg-preview.png" alt="failed">剧绎潇湘工作坊
      </el-menu-item>
      <div class="flex-grow"/>
        <el-menu-item index="1" @click="clickToHome">首页</el-menu-item>
        <el-menu-item index="2" @click="clickToTeam">工作坊</el-menu-item>
        <el-menu-item index="3" @click="clickToScreenplay">剧本</el-menu-item>
        <el-menu-item index="4" @click="clickToFeedback">剧本反馈</el-menu-item>
        <el-menu-item index="5">史实介绍</el-menu-item>
        <el-menu-item index="6">合作单位</el-menu-item>
    </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";

//使用路径变量
const router = useRouter();
const activeIndex = ref('1')

const clickToHome=()=>{
  router.push({
    path:'main'
  })
}

const clickToFeedback=()=>{
  router.push({
    path:'feedback'
  })
}

const clickToTeam=()=>{
  router.push({
    path:'team'
  })
}

const clickToScreenplay=()=>{
  router.push({
    path:'screenplay'
  })
}

</script>

<style scoped lang="less">
.el-menu-item{
  font-size:16px !important;
  img {
    height: 60px;
    margin-top: 6px;
    margin-right: 10px;
  }
}

.el-menu-top {
  padding: 0 80px;
  height:70px;
  line-height: 70px;

  #name {
    background-color: transparent !important;
    border: none !important;
    color: white !important;
    cursor: inherit !important;
    pointer-events: inherit !important;
  }
}

.flex-grow {
  flex-grow: 1;
}
</style>


<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-top"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
        background-color="#E93628"
        text-color="#fff"
        active-text-color="#fff"
    >
      <el-menu-item index="0" id="name">
        剧绎潇湘
      </el-menu-item>
      <div class="flex-grow"/>
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">工作坊</el-menu-item>
        <el-menu-item index="3">剧本</el-menu-item>
        <el-menu-item index="4">剧本反馈</el-menu-item>
        <el-menu-item index="5">史实介绍</el-menu-item>
        <el-menu-item index="6">合作单位</el-menu-item>
    </el-menu>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')

</script>

<style scoped lang="less">

.el-menu-top {
  padding: 0 80px;

  #name {
    font-weight: bold;
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
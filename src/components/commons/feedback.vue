<script setup>
import { ref } from 'vue'
import {UserFilled} from "@element-plus/icons-vue";

const value = ref(3.7)
const name = ref('陈同学')
</script>

<template>
  <div class="feedback-area">
    <el-row>
      <div class="feedback-rate">
        <el-rate
            v-model="value"
            disabled
            size="large"
            text-color="#ff9900"
            score-template="{value} points"
            class="rate"
        />
      </div>
    </el-row>

    <el-row class="feedback-content">
      <span>非常感谢剧绎潇湘团队为我们呈现了如此精彩的历史故事！</span>
    </el-row>

    <el-row>
      <el-col :span="3" class="feedback-from">
        <el-avatar :icon="UserFilled" />
      </el-col>
      <el-col :span="8" class="feedback-name">
        {{name}}
      </el-col>
    </el-row>


  </div>
</template>

<style scoped>

  .feedback-area {
    height: 243px;
    width: 330px;
    min-width: 330px;
    border:1px solid black;
    border-radius: 10px;
    margin-right: 40px;
    margin-bottom: 20px;
  }

  .rate {
    font-size: 40px;
  }

  .feedback-rate {
    margin-left: 10px;
  }

  .feedback-content {
    height: 150px;
    margin: auto 10px;
  }

  .feedback-from {
    margin-left: 10px;
    margin-right: 10px;

  }

  .feedback-name {
    margin-top: 7px;
  }


</style>

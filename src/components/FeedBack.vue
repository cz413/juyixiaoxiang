<script setup>
import Top from "../components/commons/Top.vue";
import { ref } from 'vue'
import Bottom from "../components/commons/Bottom.vue";
import {UserFilled} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import Opinion from "../components/commons/Opinion.vue";

//使用路径变量
const router = useRouter();

const value = ref(5)
const name = ref('陈同学')
const src = "../assets/audio/test.mp3"
const textarea = ref('')

const handleButtonClick=()=>{
  // 处理按钮点击事件
}

</script>

<template>
  <Top></Top>

  <el-row class="feedback-info">
    <el-col :span="8">
      <div class="info">
        <el-row class="title">
          剧本反馈
        </el-row>
        <el-row class="second-title">
          用户现场评价
        </el-row>
      </div>
    </el-col>
  </el-row>

  <div class="feedback-text">
    <el-scrollbar>
      <el-row>
        <div class="scrollbar-content">
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
        </div>
      </el-row>
    </el-scrollbar>
  </div>

  <div class="feedback-text">
    <el-scrollbar>
      <el-row>
        <div class="scrollbar-content">
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
              <m-audio :src="src" text="播放"></m-audio>
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
              <m-audio :src="src" text="播放"></m-audio>
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
              <m-audio :src="src" text="播放"></m-audio>
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
              <m-audio :src="src" text="播放"></m-audio>
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
        </div>
      </el-row>
    </el-scrollbar>
  </div>

  <div class="feedback-text video">
    <el-scrollbar>
      <el-row>
        <div class="scrollbar-content">
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
        </div>
      </el-row>
    </el-scrollbar>
  </div>

  <div class="collection">
    <el-row>
      <span class="collection-title">
        留下您的评价
      </span>
    </el-row>
    <el-row>
      <el-input
          v-model="textarea"
          :rows="10"
          type="textarea"
          placeholder="留下您的评价"
          resize="none"
          class="collection-input"
      >
      </el-input>
    </el-row>
    <el-row>
      <el-col :span="1" :offset="23">
        <el-button class="collection-inputButton">
          提交
        </el-button>
      </el-col>
    </el-row>

    <div class="collection-opinion">
      <el-scrollbar height="500px">
        <Opinion></Opinion>
        <Opinion></Opinion>
        <Opinion></Opinion>
        <Opinion></Opinion>
        <Opinion></Opinion>
        <Opinion></Opinion>
        <Opinion></Opinion>
        <Opinion></Opinion>
      </el-scrollbar>
    </div>

  </div>

  <Bottom></Bottom>
</template>

<style scoped>

  /*#region用户评价反馈展示*/
  .feedback-info {
    padding: 0 80px;
  }

  .feedback-info .title {
    font-size: 40px;
    font-weight: bold;
    margin-top: 70px;
    margin-bottom: 10px;
  }

  .feedback-info .second-title {
    margin-bottom: 20px;
  }

  .feedback-text {
    padding:0 80px;
    margin-bottom: 50px;
  }

  .scrollbar-content {
    display: flex;
  }

  .scroll-button #left {
    margin-right: 20px;
  }

  .feedback-area {
    height: 243px;
    width: 330px;
    min-width: 330px;
    border:1px solid black;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
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

  .video {
    margin-bottom: 50px;
  }

  /*#endregion*/

  /*#region收集反馈部分*/
  .collection {
    padding: 0 80px;
  }

  .collection .collection-title {
    font-size: 40px;
    font-weight: bold;
    margin-top: 70px;
    margin-bottom: 20px;
  }

  .el-textarea {
    --el-input-bg-color: rgb(242,243,244);
  }

  .collection .collection-inputButton {
    background-color: #E93628;
    margin-top: 20px;
    color:white;
  }

  .collection .collection-opinion {
    margin-top: 20px;
  }



</style>

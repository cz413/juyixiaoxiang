<script setup>
import Top from "../components/commons/Top.vue";
import {onMounted, ref} from 'vue'
import Bottom from "../components/commons/Bottom.vue";
import {UserFilled} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import Opinion from "../components/commons/Opinion.vue";

//使用路径变量
const router = useRouter();
onMounted(()=>{
  window.scrollTo(0, 0);
})

const value = ref(5)
const name = ref('陈同学')
const src = "../assets/audio/test.mp3"
const textarea = ref('')
const colors = ref(['#99A9BF', '#FF1493', '#E93628'])

const handleButtonClick=()=>{
  // 处理按钮点击事件
}

</script>

<template>
  <Top></Top>
  <el-row class="wordcloud">
    <div class="title">
      反馈分析
    </div>
    <div>
      <img src="../assets/images/wordcloud.png" alt="failed">
    </div>
  </el-row>
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
                    :colors="colors"
                />
              </div>
            </el-row>
            <el-row class="feedback-content">
              <span>我觉得衡阳保卫战好像就在我眼前</span>
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
                    :colors="colors"
                />
              </div>
            </el-row>
            <el-row class="feedback-content">
              <span>我觉得历史离我很近</span>
            </el-row>
            <el-row>
              <el-col :span="3" class="feedback-from">
                <el-avatar :icon="UserFilled" />
              </el-col>
              <el-col :span="8" class="feedback-name">
                项同学
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
                    :colors="colors"
                />
              </div>
            </el-row>
            <el-row class="feedback-content">
              <span>我觉得战士们都很伟大</span>
            </el-row>
            <el-row>
              <el-col :span="3" class="feedback-from">
                <el-avatar :icon="UserFilled" />
              </el-col>
              <el-col :span="8" class="feedback-name">
                谢同学
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
                    :colors="colors"
                />
              </div>
            </el-row>
            <el-row class="feedback-content">
              <span>我觉得他们的故事应该被更多人知道</span>
            </el-row>
            <el-row>
              <el-col :span="3" class="feedback-from">
                <el-avatar :icon="UserFilled" />
              </el-col>
              <el-col :span="8" class="feedback-name">
                张同学
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
                    :colors="colors"
                />
              </div>
            </el-row>
            <el-row class="feedback-content">
              <span>我觉得每一个人物都有属于他自己的力量</span>
            </el-row>
            <el-row>
              <el-col :span="3" class="feedback-from">
                <el-avatar :icon="UserFilled" />
              </el-col>
              <el-col :span="8" class="feedback-name">
                吴同学
              </el-col>
            </el-row>
          </div><div class="feedback-area">
            <el-row>
              <div class="feedback-rate">
                <el-rate
                    v-model="value"
                    disabled
                    size="large"
                    text-color="#ff9900"
                    score-template="{value} points"
                    class="rate"
                    :colors="colors"
                />
              </div>
            </el-row>
            <el-row class="feedback-content">
              <span>我觉得现在的我们更应该好好努力,报效祖国</span>
            </el-row>
            <el-row>
              <el-col :span="3" class="feedback-from">
                <el-avatar :icon="UserFilled" />
              </el-col>
              <el-col :span="8" class="feedback-name">
                李同学
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
                    :colors="colors"
                />
              </div>
            </el-row>
            <el-row class="feedback-content">
              <m-audio :src="src" text="播放" ></m-audio>
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
                    :colors="colors"
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
                    :colors="colors"
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
                    :colors="colors"
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
            <el-row class="feedback-content">
              <video width="270px" height="210px" controls>
                <source src="../assets/audio/1.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
              </video>
            </el-row>
          </div><div class="feedback-area">
            <el-row class="feedback-content">
              <video width="270px" height="210px" controls>
                <source src="../assets/audio/2.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
              </video>
            </el-row>
          </div><div class="feedback-area">
            <el-row class="feedback-content">
              <video width="270px" height="210px" controls>
                <source src="../assets/audio/3.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
              </video>
            </el-row>
          </div><div class="feedback-area">
            <el-row class="feedback-content">
              <video width="270px" height="210px" controls>
                <source src="../assets/audio/4.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
              </video>
            </el-row>
          </div><div class="feedback-area">
            <el-row class="feedback-content">
              <video width="270px" height="210px" controls>
                <source src="../assets/audio/5.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
              </video>
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

  .wordcloud img {
    height: 400px;
    margin-top: 60px;
    margin-left: 300px;
  }

  .wordcloud .title {
    font-size: 40px;
    font-weight: bold;
    margin-top: 30px;
    margin-left: 80px;
    margin-bottom: 10px;
  }

  /*#region用户评价反馈展示*/
  .feedback-info {
    padding: 0 80px;
  }

  .feedback-info .title {
    font-size: 40px;
    font-weight: bold;
    margin-top: 40px;
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
    font-size: 17px;
    font-weight: bold;
    height: 243px;
    width: 330px;
    min-width: 330px;
    border:1px solid black;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-right: 40px;
    margin-bottom: 20px;
    background-image: url("../assets/images/background.jpg");
    background-size: cover; /* 让背景图片尽可能填满整个 div */
    background-position: center; /* 将背景图片居中 */
  }

  .rate {
    font-size: 40px;
  }

  .feedback-rate {
    margin-left: 30px;
    margin-top: 20px;
  }

  .feedback-content {
    height: 106px;
    margin: auto 30px;
  }

  .feedback-from {
    margin-left: 27px;
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

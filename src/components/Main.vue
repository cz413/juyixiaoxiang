
<template>
  <Top></Top>

  <div class="container">
    <el-row class="teamInfo">
      <el-col :span="8">
        <div class="info">
          <div class="title">
            剧绎潇湘
          </div>
          <div class="brief">
            剧绎潇湘工作坊致力于用“剧本演绎”赋能中小学生红色教育，用剧本演绎这一全新的红色教育方式，
            创新教育模式、传承红色精神、发扬红色文化、盘活红色资源、为地方文旅注入新活力、承担培根
            铸魂的时代使命。工作坊将整合湖南红色资源，将红色资源的红色故事打造成独特的“剧本演绎”，
            用剧本演绎讲好湖南的红色故事，打造红色教育新模式，形成红色剧本矩阵。
            工作坊由湖南师范大学、中南大学、中南财经政法大学联合创立，湖南师范大学新闻与传播学院主营，
            涵盖了戏剧影视文学、汉语言文学、美术学、播音与主持艺术、广播电视编导、财政学、软件工程等
            不同专业，学科交叉，专业实力过硬，综合实力强。
          </div>
          <el-button @click="clickToTeam" class="learn-more">
            了解更多
          </el-button>
        </div>
      </el-col>
      <el-col :span="8" :offset="7">
        <img class="logo" src="../assets/images/logo.jpg" alt="failed">
      </el-col>
    </el-row>

    <div class="contentInfo">
      <el-row>
        <el-col :span="8">
          <img src="../assets/images/cover.png" alt="failed">
        </el-col>
        <el-col :span="9" :offset="7">
          <div>
            <div class="contentInfo-title">
              剧本简介
            </div>
            <div class="contentInfo-brief">
              大梦谁先觉，平生我自知。中华儿女从连天战火中醒来，在战争的洪流里，
              没有人可以独善其身。兵连祸结，白骨露野，时代的尘埃落在每个人身上都
              是一座大山。在等待援军明日到达的四十七天里，当兵临城下，沸反盈天，
              是步步为营，保存实力等待东山再起；还是顺应内心，只做自己认为正确的
              事？是听从命运安排，退守以避险；还是担起家国责任，捐躯赴国难？当你
              主动摒弃后来者的上帝视角时，当你以全新的身份站在历史的岔路口时，当
              你和他们一样迷茫时，你是否还能做出正确的选择？
            </div>
            <el-button @click="clickToScreenplay" class="contentInfo-learn-more">
              了解更多
            </el-button>
          </div>
        </el-col>

      </el-row>
    </div>
  </div>

  <div class="feedback-brief">
    <el-row>
      <span class="feedback-title">
        用户情感反馈
      </span>
    </el-row>
    <el-row>
      <span class="feedback-introduction">
        来看看用户对我们的评价吧!
      </span>
    </el-row>
    <el-row>
      <el-button class="feedback-more" @click="clickToFeedback">
        查看更多
      </el-button>
    </el-row>
    <el-scrollbar>
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
                  :colors="colors"
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
        </div> <div class="feedback-area">
          <el-row>
            <div class="feedback-rate">
              <el-rate
                  v-model="value"
                  disabled
                  size="large"
                  text-color="#ff9900"
                  score-template="{value} points"
                  :colors="colors"
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
        </div> <div class="feedback-area">
          <el-row>
            <div class="feedback-rate">
              <el-rate
                  v-model="value"
                  disabled
                  size="large"
                  text-color="#ff9900"
                  score-template="{value} points"
                  :colors="colors"
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
        </div> <div class="feedback-area">
          <el-row>
            <div class="feedback-rate">
              <el-rate
                  v-model="value"
                  disabled
                  size="large"
                  text-color="#ff9900"
                  score-template="{value} points"
                  :colors="colors"
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
                  :colors="colors"
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
        </div> <div class="feedback-area">
          <el-row>
            <div class="feedback-rate">
              <el-rate
                  v-model="value"
                  size="large"
                  text-color="#ff9900"
                  score-template="{value} points"
                  :colors="colors"
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
    </el-scrollbar>

    <el-row class="scroll-button">
      <el-col>
        <el-button circle size="large" id="left">
          <img src="../assets/images/left.png" alt="">
        </el-button>
        <el-button circle size="large">
          <img src="../assets/images/right.png" alt="">
        </el-button>
      </el-col>
    </el-row>
  </div>

  <Bottom></Bottom>
</template>

<script setup>
import Top from "../components/commons/Top.vue";
import { ref } from 'vue'
import Bottom from "../components/commons/Bottom.vue";
import {UserFilled} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

//使用路径变量
const router = useRouter();

const value = ref(3.7)
const name = ref('陈同学')
const src = "../assets/audio/test.mp3"
const colors = ref(['#99A9BF', '#FF1493', '#E93628'])

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

<style scoped>

/*#region团队介绍部分*/
.container {
  padding: 0 80px;

}

.container .teamInfo {
  margin-top: 70px;
}

.container .title {
  font-size: 40px;
  font-weight: bold;
  margin-top: 70px;
}

.container .brief {
  margin: 20px 0;
}

.container .learn-more {
  background-color:#E93628;
  color:white;
}

.container .logo {
  height: 480px;
  width: 480px;
}
/*#endregion团队介绍*/

/*region剧本介绍*/
.container .contentInfo img{
  margin-top: 80px;
  width: 480px;
  height: 550px;
}

.container .contentInfo .contentInfo-title {
  font-size: 40px;
  font-weight: bold;
  margin-top: 200px;
}

.container .contentInfo .contentInfo-brief {
  margin-top: 20px;
}

.container .contentInfo .contentInfo-learn-more {
  margin-top: 20px;
  background-color:#E93628;
  color:white;
}

/*endregion剧本介绍*/

/*#region评价反馈*/
.feedback-brief {
  padding: 0 80px;
  margin-top: 40px;
}

.feedback-brief .feedback-title {
  font-size: 40px;
  font-weight: bold;
  margin-top: 70px;
}

.feedback-brief .feedback-introduction {
  margin: 10px 0;
}

.feedback-brief .feedback-more {
  background-color:#E93628;
  color:white;
  margin-bottom: 30px;
}

.scrollbar-content {
  display: flex;
}

.scroll-button {
  margin-top: 15px;
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

/*#endregion*/
</style>

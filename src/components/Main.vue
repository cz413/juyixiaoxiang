
<template>
  <Top></Top>

  <div class="container">
    <el-row class="teamInfo">
      <el-col :span="1">
        <div class="bottom-title left">沉浸式思政</div>
      </el-col>
      <el-col :span="7">
        <div class="info">
          <div class="title">
            <img src="../assets/images/main/logo.png" alt="">
          </div>
          <div class="creator">
            <button>
              剧绎潇湘工作坊 x 衡阳抗战纪念馆
            </button>
          </div>
          <div class="statement">
            <img src="../assets/images/main/联合出品.png" alt="">
          </div>
        </div>
      </el-col>
      <el-col :span="7" :offset="7">
<!--        <img class="logo" src="../assets/images/logo.jpg" alt="failed">-->
        <div class="brief">
          <div>
            剧绎潇湘工作坊致力于用“剧本演绎”赋能中小学生红色教育，用剧本演绎这一全新的红色教育方式，
          创新教育模式、传承红色精神、发扬红色文化、盘活红色资源、为地方文旅注入新活力、承担培根
          铸魂的时代使命。工作坊将整合湖南红色资源，将红色资源的红色故事打造成独特的“剧本演绎”，
          用剧本演绎讲好湖南的红色故事，打造红色教育新模式，形成红色剧本矩阵。
          工作坊由湖南师范大学、中南大学、中南财经政法大学联合创立，湖南师范大学新闻与传播学院主营，
          涵盖了戏剧影视文学、汉语言文学、美术学、播音与主持艺术、广播电视编导、财政学、软件工程等
          不同专业，学科交叉，专业实力过硬，综合实力强。
          </div>
          <button @click="clickToTeam" class="learn-more">
            了解更多&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>
          </button>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="bottom-title right">创新型课堂</div>
      </el-col>
    </el-row>

    <div class="contentInfo">
      <el-row>
        <el-col :span="6" :offset="3">
          <img src="../assets/images/cover.png" alt="failed" id="cover">
        </el-col>
        <el-col :span="8" :offset="4">
          <div>
            <div class="contentInfo-title">
              <img src="../assets/images/main/剧本简介.png" alt="">
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
          </div>
        </el-col>
        <el-col :span="2">
          <button @click="clickToScreenplay" class="learn-more">
            了解更多&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>
          </button>
        </el-col>
      </el-row>
    </div>
  </div>

  <div class="feedback-brief">
    <el-row class="feedback-title">
        <el-col :span="6" :offset="4">———————</el-col>
        <el-col :span="4">
          <div>用户评价</div>
          <div style="font-size: 24px">User evaluation</div>
        </el-col>
        <el-col :span="6">———————</el-col>
    </el-row>
    <el-row>
      <el-col :span="2">
        <button class="scrollbar-left" @click="scrollbarLeft">
          <img src="../assets/images/main/jiantou2.png" alt="">
        </button>
      </el-col>
      <el-col :span="20">
        <el-scrollbar class="scrollbar-container" ref="myScrollbar" horizontal>
          <div class="scrollbar-flex-container">
            <feedback v-for="(item,index) in feedbacks"
                      class="feedback-item"
                      :name="item.name"
                      :value="item.value"
                      :content="item.content"
            >


            </feedback>
          </div>
        </el-scrollbar>
      </el-col>
      <el-col :span="2">
        <button class="scrollbar-right" @click="scrollbarRight">
          <img src="../assets/images/main/jiantou.png" alt="">
        </button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3" :offset="21">
        <el-button class="feedback-more learn-more" @click="clickToFeedback">
          查看更多&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>
        </el-button>
      </el-col>
    </el-row>

  </div>

  <Bottom_Flag></Bottom_Flag>

<!--  <Bottom></Bottom>-->
</template>

<script setup>
import Top from "../components/commons/Top.vue";
import { ref } from 'vue'
import Bottom from "../components/commons/Bottom.vue";
import {UserFilled} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import feedback from "../components/commons/feedback.vue";
import Bottom_Flag from "../components/commons/Bottom_Flag.vue";

//使用路径变量
const router = useRouter();

const value = ref(3.7)
const name = ref('陈同学')
const src = "../assets/audio/test.mp3"
const colors = ref(['#99A9BF', '#FF1493', '#E93628'])
const myScrollbar = ref(null)
const feedbacks = [
  {
    name:'舒同学',
    value:5,
    content:"“感谢剧绎潇湘团队为我们呈现了如此精彩的历史故事！”"
  },
  {
    name:'姜同学',
    value:5,
    content:"“非常珍贵的剧本杀经历，让我一夜之间长大了很多......”"
  },
  {
    name:'舒妈妈',
    value:5,
    content:"“感谢剧绎潇湘团队，感谢衡阳，在这样的宣传下我孩子逐渐懂了许多红色知识！”"
  },
  {
    name:'舒老师',
    value:5,
    content:"“感谢剧绎潇湘的精良制作，让我们达到了教学合一的效果”"
  },
  {
    name:'澈同学',
    value:5,
    content:"“这次打本实在感觉太爽！剧本颜值高，内容好，强推!!”"
  },
  {
    name:'陈同学',
    value:5,
    content:"“非常有趣的打本经历，我彷佛走进了历史，与历史人物一起经历历史”"
  },
]

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

//滚动条向右滚动事件
const scrollbarRight = () => {
  const scrollWrapper = myScrollbar.value?.$el.querySelector('.el-scrollbar__wrap');
  if (!scrollWrapper) return;

  let startTime = null;
  const duration = 500; // 滚动动画持续时间，单位毫秒
  const startScrollLeft = scrollWrapper.scrollLeft;
  const targetScrollLeft = startScrollLeft+100;

  const animateScroll = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const elapsedTime = currentTime - startTime;

    // 使用ease-out动画效果计算当前滚动位置
    const progress = Math.min(elapsedTime / duration, 1);
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(1 - progress, 3); // cubic easing
    const currentScrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * easeProgress;

    scrollWrapper.scrollLeft = currentScrollLeft;

    if (elapsedTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
}

const scrollbarLeft = () => {
  const scrollWrapper = myScrollbar.value?.$el.querySelector('.el-scrollbar__wrap');
  if (!scrollWrapper) return;

  let startTime = null;
  const duration = 500; // 滚动动画持续时间，单位毫秒
  const startScrollLeft = scrollWrapper.scrollLeft;
  const targetScrollLeft = startScrollLeft-100;

  const animateScroll = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const elapsedTime = currentTime - startTime;

    // 使用ease-out动画效果计算当前滚动位置
    const progress = Math.min(elapsedTime / duration, 1);
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(1 - progress, 3); // cubic easing
    const currentScrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * easeProgress;

    scrollWrapper.scrollLeft = currentScrollLeft;

    if (elapsedTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
}


</script>

<style scoped>
.container {
  position: relative;
}
/*#region团队介绍部分*/
.container .teamInfo {
  height: 690px;
  background-image: url("../assets/images/main/background1.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .info{
    width: 800px;
    text-align: center;
  }
  @import url("../assets/font.css");
  .bottom-title {
    font-family: Alimama;
    color: white;
    width: 100px;
    font-size: 18px;
    margin-top: 630px;
  }
  .left{
    margin-left: 20px;
  }
  .right {
    margin-right: 20px;
  }
}

@import url("../assets/font.css");
.container .teamInfo .info .creator button{
  font-family: Alimama;
  background-color: rgb(157, 42, 24);
  color: white;
  border: 0;
  border-radius: 10px;
  width: 500px;
  font-size: 16px;
  padding-top:5px;
  padding-bottom: 5px;
  letter-spacing: 10px;
  margin-top: 40px;
}

.container .title {
  img{
    height: 350px;
  }
}

.container .teamInfo .info .statement {
  margin-top: 40px;
  img{
    height: 25px;
  }
}

.container .brief {
  padding-top: 120px;
  margin-left: 60px;
  width: 300px;
  font-size: 16px;
  button{
    margin-top: 40px;
  }
}

.learn-more {
  background-image: url("../assets/images/main/learn_more.png");
  background-size: 100% 100%;
  border-radius: 14px;
  border: 0;
  padding: 5px 15px;
  color:white;
  cursor: pointer;
}

.learn-more:hover {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}

.container .logo {
  height: 480px;
  width: 480px;
}
/*#endregion团队介绍*/

/*region剧本介绍*/
.container .contentInfo {
  height: 740px;
  background-image: url("../assets/images/main/background2.png");
  #cover{
    border-radius: 20px;
    margin-top: 100px;
    height: 550px;
  }
  button{
    margin-top: 650px;
  }
}


.container .contentInfo .contentInfo-title {
  font-size: 40px;
  font-weight: bold;
  margin-top: 80px;
  img{
    height: 200px;
  }
}

.container .contentInfo .contentInfo-brief {
  margin-top: 60px;
  margin-left: 20px;
  width: 400px;
  color: white;
  font-size: 16px;
  line-height: 1.5;
}


/*endregion剧本介绍*/

/*#region评价反馈*/
.feedback-brief {
  height: 700px;
  background-image: linear-gradient(to bottom, rgb(255, 219, 212), rgb(255, 255, 255));
}

.feedback-brief .feedback-title {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  padding-top:40px;
  color: rgb(120,21,13);
  margin-bottom: 60px;
}

.feedback-brief .feedback-introduction {
  margin: 10px 0;
}

.feedback-brief .feedback-more {
  background-color:#E93628;
  color:white;
  margin-top: 30px;
  margin-bottom: 30px;
}

.feedback-brief .scrollbar-container {
  height: 450px;
}

.feedback-brief .scrollbar-flex-container {
  display: flex;
}

.feedback-brief .scrollbar-left{
  margin-left: 40%;
  margin-top: 100%;
  border:none;
  background: rgba(255,255,255,0);
  img {
    width: 20px;
  }
}

.feedback-brief .scrollbar-right{
  margin-left: 30%;
  margin-top: 100%;
  border:none;
  background: rgba(255,255,255,0);
  img{
    width: 60px;
  }
}

.feedback-item:nth-child(odd) {
  margin-top: 140px;
}



/*#endregion*/
</style>

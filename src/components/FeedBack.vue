<script setup>
import Top from "../components/commons/Top.vue";
import {onMounted, ref} from 'vue'
import Bottom from "../components/commons/Bottom.vue";
import {ArrowLeftBold, ArrowRightBold, UserFilled} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import Opinion from "../components/commons/Opinion.vue";
import feedback from "../components/commons/feedback.vue";
import Bottom_Flag from "../components/commons/Bottom_Flag.vue";

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
const vedioUrlList = ref([
  {
    index:1,
    src:"../assets/audio/1.mp4"
  },{
    index:2,
    src:"../assets/audio/2.mp4"
  },{
    index:3,
    src:"../assets/audio/3.mp4"
  },{
    index:4,
    src:"../assets/audio/4.mp4"
  },{
    index:5,
    src:"../assets/audio/5.mp4"
  },
])

const handleButtonClick=()=>{
  // 处理按钮点击事件
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

<template>
  <Top></Top>
<!--  <el-row class="wordcloud">-->
<!--    <div class="title">-->
<!--      反馈分析-->
<!--    </div>-->
<!--    <div>-->
<!--      <img src="../assets/images/wordcloud.png" alt="failed">-->
<!--    </div>-->
<!--  </el-row>-->
<!--  <el-row class="feedback-info">-->
<!--    <el-col :span="8">-->
<!--      <div class="info">-->
<!--        <el-row class="title">-->
<!--          剧本反馈-->
<!--        </el-row>-->
<!--        <el-row class="second-title">-->
<!--          用户现场评价-->
<!--        </el-row>-->
<!--      </div>-->
<!--    </el-col>-->
<!--  </el-row>-->

<!--  <div class="feedback-text">-->
<!--    <el-scrollbar>-->
<!--      <el-row>-->
<!--        <div class="scrollbar-content">-->
<!--          <div class="feedback-area">-->
<!--            <el-row>-->
<!--              <div class="feedback-rate">-->
<!--                <el-rate-->
<!--                    v-model="value"-->
<!--                    disabled-->
<!--                    size="large"-->
<!--                    text-color="#ff9900"-->
<!--                    score-template="{value} points"-->
<!--                    class="rate"-->
<!--                    :colors="colors"-->
<!--                />-->
<!--              </div>-->
<!--            </el-row>-->
<!--            <el-row class="feedback-content">-->
<!--              <span>我觉得衡阳保卫战好像就在我眼前</span>-->
<!--            </el-row>-->
<!--            <el-row>-->
<!--              <el-col :span="3" class="feedback-from">-->
<!--                <el-avatar :icon="UserFilled" />-->
<!--              </el-col>-->
<!--              <el-col :span="8" class="feedback-name">-->
<!--                {{name}}-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--          </div>-->
<!--          <div class="feedback-area">-->
<!--            <el-row>-->
<!--              <div class="feedback-rate">-->
<!--                <el-rate-->
<!--                    v-model="value"-->
<!--                    disabled-->
<!--                    size="large"-->
<!--                    text-color="#ff9900"-->
<!--                    score-template="{value} points"-->
<!--                    class="rate"-->
<!--                    :colors="colors"-->
<!--                />-->
<!--              </div>-->
<!--            </el-row>-->
<!--            <el-row class="feedback-content">-->
<!--              <span>我觉得历史离我很近</span>-->
<!--            </el-row>-->
<!--            <el-row>-->
<!--              <el-col :span="3" class="feedback-from">-->
<!--                <el-avatar :icon="UserFilled" />-->
<!--              </el-col>-->
<!--              <el-col :span="8" class="feedback-name">-->
<!--                项同学-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--          </div>-->
<!--          <div class="feedback-area">-->
<!--            <el-row>-->
<!--              <div class="feedback-rate">-->
<!--                <el-rate-->
<!--                    v-model="value"-->
<!--                    disabled-->
<!--                    size="large"-->
<!--                    text-color="#ff9900"-->
<!--                    score-template="{value} points"-->
<!--                    class="rate"-->
<!--                    :colors="colors"-->
<!--                />-->
<!--              </div>-->
<!--            </el-row>-->
<!--            <el-row class="feedback-content">-->
<!--              <span>我觉得战士们都很伟大</span>-->
<!--            </el-row>-->
<!--            <el-row>-->
<!--              <el-col :span="3" class="feedback-from">-->
<!--                <el-avatar :icon="UserFilled" />-->
<!--              </el-col>-->
<!--              <el-col :span="8" class="feedback-name">-->
<!--                谢同学-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--          </div>-->
<!--          <div class="feedback-area">-->
<!--            <el-row>-->
<!--              <div class="feedback-rate">-->
<!--                <el-rate-->
<!--                    v-model="value"-->
<!--                    disabled-->
<!--                    size="large"-->
<!--                    text-color="#ff9900"-->
<!--                    score-template="{value} points"-->
<!--                    class="rate"-->
<!--                    :colors="colors"-->
<!--                />-->
<!--              </div>-->
<!--            </el-row>-->
<!--            <el-row class="feedback-content">-->
<!--              <span>我觉得他们的故事应该被更多人知道</span>-->
<!--            </el-row>-->
<!--            <el-row>-->
<!--              <el-col :span="3" class="feedback-from">-->
<!--                <el-avatar :icon="UserFilled" />-->
<!--              </el-col>-->
<!--              <el-col :span="8" class="feedback-name">-->
<!--                张同学-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--          </div>-->
<!--          <div class="feedback-area">-->
<!--            <el-row>-->
<!--              <div class="feedback-rate">-->
<!--                <el-rate-->
<!--                    v-model="value"-->
<!--                    disabled-->
<!--                    size="large"-->
<!--                    text-color="#ff9900"-->
<!--                    score-template="{value} points"-->
<!--                    class="rate"-->
<!--                    :colors="colors"-->
<!--                />-->
<!--              </div>-->
<!--            </el-row>-->
<!--            <el-row class="feedback-content">-->
<!--              <span>我觉得每一个人物都有属于他自己的力量</span>-->
<!--            </el-row>-->
<!--            <el-row>-->
<!--              <el-col :span="3" class="feedback-from">-->
<!--                <el-avatar :icon="UserFilled" />-->
<!--              </el-col>-->
<!--              <el-col :span="8" class="feedback-name">-->
<!--                吴同学-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--          </div><div class="feedback-area">-->
<!--            <el-row>-->
<!--              <div class="feedback-rate">-->
<!--                <el-rate-->
<!--                    v-model="value"-->
<!--                    disabled-->
<!--                    size="large"-->
<!--                    text-color="#ff9900"-->
<!--                    score-template="{value} points"-->
<!--                    class="rate"-->
<!--                    :colors="colors"-->
<!--                />-->
<!--              </div>-->
<!--            </el-row>-->
<!--            <el-row class="feedback-content">-->
<!--              <span>我觉得现在的我们更应该好好努力,报效祖国</span>-->
<!--            </el-row>-->
<!--            <el-row>-->
<!--              <el-col :span="3" class="feedback-from">-->
<!--                <el-avatar :icon="UserFilled" />-->
<!--              </el-col>-->
<!--              <el-col :span="8" class="feedback-name">-->
<!--                李同学-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--          </div>-->
<!--        </div>-->
<!--      </el-row>-->
<!--    </el-scrollbar>-->
<!--  </div>-->

<!--  <div class="feedback-text">-->
<!--    <el-scrollbar>-->
<!--      <el-row>-->
<!--        <div class="scrollbar-content">-->
<!--          <div class="feedback-area">-->
<!--            <el-row>-->
<!--              <div class="feedback-rate">-->
<!--                <el-rate-->
<!--                    v-model="value"-->
<!--                    disabled-->
<!--                    size="large"-->
<!--                    text-color="#ff9900"-->
<!--                    score-template="{value} points"-->
<!--                    class="rate"-->
<!--                    :colors="colors"-->
<!--                />-->
<!--              </div>-->
<!--            </el-row>-->
<!--            <el-row class="feedback-content">-->
<!--              <m-audio :src="src" text="播放" ></m-audio>-->
<!--            </el-row>-->
<!--            <el-row>-->
<!--              <el-col :span="3" class="feedback-from">-->
<!--                <el-avatar :icon="UserFilled" />-->
<!--              </el-col>-->
<!--              <el-col :span="8" class="feedback-name">-->
<!--                {{name}}-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--          </div>-->
<!--          <div class="feedback-area">-->
<!--            <el-row>-->
<!--              <div class="feedback-rate">-->
<!--                <el-rate-->
<!--                    v-model="value"-->
<!--                    disabled-->
<!--                    size="large"-->
<!--                    text-color="#ff9900"-->
<!--                    score-template="{value} points"-->
<!--                    class="rate"-->
<!--                    :colors="colors"-->
<!--                />-->
<!--              </div>-->
<!--            </el-row>-->
<!--            <el-row class="feedback-content">-->
<!--              <m-audio :src="src" text="播放"></m-audio>-->
<!--            </el-row>-->
<!--            <el-row>-->
<!--              <el-col :span="3" class="feedback-from">-->
<!--                <el-avatar :icon="UserFilled" />-->
<!--              </el-col>-->
<!--              <el-col :span="8" class="feedback-name">-->
<!--                李同学-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--          </div>-->
<!--          <div class="feedback-area">-->
<!--            <el-row>-->
<!--              <div class="feedback-rate">-->
<!--                <el-rate-->
<!--                    v-model="value"-->
<!--                    disabled-->
<!--                    size="large"-->
<!--                    text-color="#ff9900"-->
<!--                    score-template="{value} points"-->
<!--                    class="rate"-->
<!--                    :colors="colors"-->
<!--                />-->
<!--              </div>-->
<!--            </el-row>-->
<!--            <el-row class="feedback-content">-->
<!--              <m-audio :src="src" text="播放"></m-audio>-->
<!--            </el-row>-->
<!--            <el-row>-->
<!--              <el-col :span="3" class="feedback-from">-->
<!--                <el-avatar :icon="UserFilled" />-->
<!--              </el-col>-->
<!--              <el-col :span="8" class="feedback-name">-->
<!--                吴同学-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--          </div>-->
<!--          <div class="feedback-area">-->
<!--            <el-row>-->
<!--              <div class="feedback-rate">-->
<!--                <el-rate-->
<!--                    v-model="value"-->
<!--                    disabled-->
<!--                    size="large"-->
<!--                    text-color="#ff9900"-->
<!--                    score-template="{value} points"-->
<!--                    class="rate"-->
<!--                    :colors="colors"-->
<!--                />-->
<!--              </div>-->
<!--            </el-row>-->
<!--            <el-row class="feedback-content">-->
<!--              <m-audio :src="src" text="播放"></m-audio>-->
<!--            </el-row>-->
<!--            <el-row>-->
<!--              <el-col :span="3" class="feedback-from">-->
<!--                <el-avatar :icon="UserFilled" />-->
<!--              </el-col>-->
<!--              <el-col :span="8" class="feedback-name">-->
<!--                向同学-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--          </div>-->
<!--        </div>-->
<!--      </el-row>-->
<!--    </el-scrollbar>-->
<!--  </div>-->

<!--  <div class="feedback-text video">-->
<!--    <el-scrollbar>-->
<!--      <el-row>-->
<!--        <div class="scrollbar-content">-->
<!--          <div class="feedback-area">-->
<!--            <el-row class="feedback-content">-->
<!--              <video width="270px" height="210px" controls>-->
<!--                <source src="../assets/audio/1.mp4" type="video/mp4">-->
<!--                Your browser does not support HTML5 video.-->
<!--              </video>-->
<!--            </el-row>-->
<!--          </div><div class="feedback-area">-->
<!--            <el-row class="feedback-content">-->
<!--              <video width="270px" height="210px" controls>-->
<!--                <source src="../assets/audio/2.mp4" type="video/mp4">-->
<!--                Your browser does not support HTML5 video.-->
<!--              </video>-->
<!--            </el-row>-->
<!--          </div><div class="feedback-area">-->
<!--            <el-row class="feedback-content">-->
<!--              <video width="270px" height="210px" controls>-->
<!--                <source src="../assets/audio/3.mp4" type="video/mp4">-->
<!--                Your browser does not support HTML5 video.-->
<!--              </video>-->
<!--            </el-row>-->
<!--          </div><div class="feedback-area">-->
<!--            <el-row class="feedback-content">-->
<!--              <video width="270px" height="210px" controls>-->
<!--                <source src="../assets/audio/4.mp4" type="video/mp4">-->
<!--                Your browser does not support HTML5 video.-->
<!--              </video>-->
<!--            </el-row>-->
<!--          </div><div class="feedback-area">-->
<!--            <el-row class="feedback-content">-->
<!--              <video width="270px" height="210px" controls>-->
<!--                <source src="../assets/audio/5.mp4" type="video/mp4">-->
<!--                Your browser does not support HTML5 video.-->
<!--              </video>-->
<!--            </el-row>-->
<!--          </div>-->
<!--        </div>-->

<!--      </el-row>-->
<!--    </el-scrollbar>-->
<!--  </div>-->



  <el-row>
    <el-col :span="1"></el-col>
    <el-col :span="20">
      <div style="padding-right: 20px">
        <video controls>
          <source src="../assets/audio/2.mp4" type="video/mp4">
          </source>
        </video>
      </div>
    </el-col>
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

<!--  <Bottom></Bottom>-->

  <Bottom_Flag></Bottom_Flag>
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


   .scrollbar-container {
    height: 350px;
  }

  .scrollbar-flex-container {
    display: flex;
  }

  .video-scrollbar-left{
    margin-left: 40%;
    margin-top: 20vw;
    border:none;
    background: rgba(255,255,255,0);
    img {
      width: 20px;
    }
  }

  .video-scrollbar-right{
    margin-left: 30%;
    margin-top: 20vw;
    border:none;
    background: rgba(255,255,255,0);
    img{
      width: 60px;
    }
  }

   .scrollbar-left{
    margin-left: 40%;
    margin-top: 100%;
    border:none;
    background: rgba(255,255,255,0);
    img {
      width: 20px;
    }
  }

 .scrollbar-right{
    margin-left: 30%;
    margin-top: 100%;
    border:none;
    background: rgba(255,255,255,0);
    img{
      width: 60px;
    }
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

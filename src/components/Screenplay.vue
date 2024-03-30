<script setup>
  import {ref} from "vue";
  import Top from "../components/commons/Top.vue";
  import Bottom from "../components/commons/Bottom.vue";
  import {onMounted} from "vue";

  const imgCards = ref([
    new URL("../assets/images/roles/role1.jpg", import.meta.url),
    new URL("../assets/images/roles/role2.jpg", import.meta.url),
    new URL("../assets/images/roles/role3.jpg", import.meta.url),
    new URL("../assets/images/roles/role4.jpg", import.meta.url),
    new URL("../assets/images/roles/role5.jpg", import.meta.url),
    new URL("../assets/images/roles/role6.jpg", import.meta.url),
  ]);

  const imgItems = ref([
      new URL("../assets/images/items/item1.jpg",import.meta.url),
      new URL("../assets/images/items/item2.jpg",import.meta.url),
      new URL("../assets/images/items/item3.jpg",import.meta.url),
      new URL("../assets/images/items/item4.jpg",import.meta.url),
      new URL("../assets/images/items/item5.jpg",import.meta.url),
      new URL("../assets/images/items/item6.jpg",import.meta.url),
      new URL("../assets/images/items/item7.jpg",import.meta.url),
      new URL("../assets/images/items/item8.jpg",import.meta.url),
      new URL("../assets/images/items/item9.jpg",import.meta.url),
      new URL("../assets/images/items/item10.jpg",import.meta.url),
      new URL("../assets/images/items/item11.jpg",import.meta.url),
      new URL("../assets/images/items/item12.jpg",import.meta.url),
  ])

  const items= ref([
    { timestamp: '2024-01-01', content: 'Event 1' },
    { timestamp: '2024-03-15', content: 'Event 2' },
    { timestamp: '2024-06-30', content: 'Event 3' },
    // Add more events as needed
  ])

  onMounted(()=>{
    window.scrollTo(0, 0);
  })

</script>

<template>
  <Top></Top>

  <div class="container">
    <el-row>
      <el-col :span="8" class="cover">
        <img src="../assets/images/cover.png" alt="failed">
      </el-col>
      <el-col :span="14" :offset="2" class="introduction">
        <div class="title">
          《四十七天·衡阳》
        </div>
        <div class="brief">
          大梦谁先觉，平生我自知。中华儿女从连天战火中醒来，在战争的洪流里，
          没有人可以独善其身。兵连祸结，白骨露野，时代的尘埃落在每个人身上都是一
          座大山。在等待援军明日到达的四十七天里，当兵临城下，沸反盈天，是步步为
          营，保存实力等待东山再起；还是顺应内心，只做自己认为正确的事？是听从命
          运安排，退守以避险；还是担起家国责任，捐躯赴国难？当你主动摒弃后来者的
          上帝视角时，当你以全新的身份站在历史的岔路口时，当你和他们一样迷茫时，
          你是否还能做出正确的选择？<br>
          这是一种全新的红色教育方式。它以衡阳保卫战这一历史事件为背景，并有
          机选取、结合了时下流行的狼人杀、剧本杀等游戏元素进行设计。在这款游戏中，
          每位玩家会沉浸式扮演一个此事件中的人物，重返历史现场，通过演绎、搜证、
          解谜、推理、讨论等互动环节一步步完善自己的逻辑链，推动剧情发展，重现衡
          阳保卫战这一旷日持久、全民皆兵的伟大战役。战争不会给你时间思考，每一次
          选择都是你内心的回答。
        </div>
      </el-col>
    </el-row>
    <el-row>
      <div class="process">游戏过程</div>
        <el-steps style="max-width: 1400px;" :active="0">
          <el-step title="伽蓝之音"
                   description="根据方先觉中将在衡阳保卫战之前来到福严寺求签事件改编。
                                各玩家在福严寺住持智圆法师的指引之下，随机抽取命运签。
                                玩家可能抽到自己的命运签。签上箴言会预示和指引人物的命
                                运，当然，不接受命运的安排也是一种选择。" />
          <el-step title="战前准备"
                   description="玩家可根据现有的信息，如身份铭牌上人物个性、命运签以及
                   主持人介绍的战况自行推理。在随后的讨论环节中，玩家之间可进行单人陈述以
                   及交叉问询来表明立场、获取信任、互通有无，可以结成联盟，也可保持质疑、
                   各自为政。每一份付出的信任可能收获利益，也可能付出代价。请慎重选择是否
                   将自己抽中的命运签分享给他人。" />
          <el-step title="四十七天"
                   description="正式战争环节" />
          <el-step title="搜证环节"
                   description="正式战争中，每天都会有搜证机会，搜证场景、地点多种多样
                   ，如防空洞、战壕等等，根据前一天战绩进行抽取。拥有的信息及资源越多，越
                   有利。隐藏S级搜证地点是“总部”，其中有对最终结局的暗示。" />
          <el-step title="解密环节"
                   description="触发一定的情节可获得相应的谜题，解谜玩家可选择单人解谜
                   或共享解谜，解谜成功可获得相应的信息及资源。同样，每一份付出的信任可能
                   收获利益，也可能付出代价。谜题设置来源于史实，如面对日军某次进攻，需依
                   据线索及战况设计出“虎形巢”地形击退日军。" />
          <el-step title="讨论环节"
                   description="见上文“战前准备”" />
          <el-step title="电报环节"
                   description="玩家根据判断公投出当天电报内容的撰写者。电报内容不公开，每一次选择都至关重要。" />
          <el-step title="空投环节"
                   description="不定期投放物资，以触发的剧情、电报内容等为投放依据" />
        </el-steps>
    </el-row>

    <el-row>
      <el-col :span="11">
        <div class="roles">
          <div class="catalog">人物卡</div>
          <el-carousel :interval="4000" type="card" height="450px" indicator-position="outside">
            <el-carousel-item v-for="(item,index) in imgCards" :key="index">
              <img :src="item" alt="failed">
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="11" :offset="2">
        <div class="items">
          <div class="catalog">道具卡</div>
          <el-carousel :interval="4000" type="card" height="450px" indicator-position="outside">
            <el-carousel-item v-for="(item,index) in imgItems" :key="index">
              <img :src="item" alt="failed">
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>


  </div>

  <Bottom></Bottom>
</template>

<style scoped>

  .container {
    margin: 0 80px;
  }

  .container .cover img{
    margin-top: 80px;
    width: 380px;
    height: 450px;
  }

  .container .introduction {
    margin-top: 140px;
  }

  .container .title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .process {
    margin-top: 40px;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
  }


  /*#region角色卡片轮播图*/

  .roles {
    margin-top: 80px;
    width: 650px;
    text-align: center;
  }

  .items {
    margin-top: 80px;
    width: 650px;
    text-align: center;
  }

  .container .el-carousel__item img {
    width: 350px;
    height: 450px;
  }

  .el-carousel__item {
    width: 400px;
    margin: 0;
  }

  .roles span {
    font-size: 25px;
  }

  .catalog {
    margin-left: 70px;
    font-size: 28px;
    margin-bottom: 20px;
  }




  /*#endregion*/

  .horizontal-timeline {
    max-width: 100%;
    overflow-x: auto;
  }


</style>

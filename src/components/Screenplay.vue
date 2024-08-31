<script setup>
  import {ref} from "vue";
  import Top from "../components/commons/Top.vue";
  import Bottom from "../components/commons/Bottom.vue";
  import {onMounted} from "vue";
  import Bottom_Flag from "../components/commons/Bottom_Flag.vue";

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
    </el-row>
  </div>
  <div class="container">
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

    <div class="roles">
      <div class="catalog">人物卡</div>
      <el-carousel :interval="4000" type="card" height="450px" indicator-position="outside">
        <el-carousel-item v-for="(item,index) in imgCards" :key="index">
          <img :src="item" alt="failed">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="items">
      <div class="catalog">道具卡</div>
      <el-carousel :interval="4000" type="card" height="450px" indicator-position="outside">
        <el-carousel-item v-for="(item,index) in imgItems" :key="index">
          <img :src="item" alt="failed">
        </el-carousel-item>
      </el-carousel>
    </div>

  </div>

  <Bottom_Flag></Bottom_Flag>

<!--  <Bottom></Bottom>-->
</template>

<style scoped>

  .container {
    padding: 0 80px;
    background-image: linear-gradient(to bottom, rgb(255, 219, 212), rgb(255, 255, 255));
  }
  .contentInfo {
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
  .contentInfo .contentInfo-title {
    font-size: 40px;
    font-weight: bold;
    margin-top: 80px;
    img{
      height: 200px;
    }
  }
  .contentInfo .contentInfo-brief {
    margin-top: 60px;
    margin-left: 20px;
    width: 400px;
    color: white;
    font-size: 16px;
    line-height: 1.5;
  }

  .process {
    font-size: 30px;
    margin-top: 40px;
    margin-bottom: 15px;
  }


  /*#region角色卡片轮播图*/

  .roles {
    margin:0 auto;
    margin-top: 80px;
    width: 950px;
    text-align: center;
  }

  .items {
    margin: 0 auto;
    margin-top: 80px;
    width: 950px;
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
    font-size: 28px;
    margin-bottom: 20px;
  }




  /*#endregion*/

  .horizontal-timeline {
    max-width: 100%;
    overflow-x: auto;
  }


</style>

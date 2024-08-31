<script setup>
import {onMounted, ref} from 'vue'
import Top from "../components/commons/Top.vue";
import Bottom_Flag from "../components/commons/Bottom_Flag.vue";


onMounted(()=>{
  window.scrollTo(0, 0);
})

</script>

<template>
  <Top></Top>

  <div class="team">
    <div class="team-teamates">
      团队介绍
    </div>
    <el-row class="position">
      队长
    </el-row>

    <el-row>
      <el-col :span="4">
        <img src="../assets/images/team/person1.png" alt="failed">
      </el-col>
      <el-col :span="20">
       <div class="teamate-introduction">
         <div class="teamate-name">项和烽</div>
         曾连任学生会主席六年，十三年班长、三年广播站 站长，有丰富领导经验；<br>
         湘江诗会、岳麓区文化馆诗会导演；<br>
         湖南卫视、长沙市少儿春晚实习导演；<br>
         全省“我的韶山行”红色研学活动学生负责人；<br>
         第一作者的红色教育调研报告纳入出版社出版；<br>
         创立院系公众号；<br>
         在中国青年网、湖北日报、红网等平台发布评论及新闻；<br>
         作品在全媒体平台累计触达超2000w人次；<br>
         作为团队负责人获大学生广告艺术大赛、湖南省青 年艺术节等国家级、省级奖项十余项<br>
       </div>
      </el-col>
    </el-row>
    <el-row class="position">
      编剧组
    </el-row>
    <el-row>
      <el-col :span="4">
        <img src="../assets/images/team/person2.png" alt="failed">
      </el-col>
      <el-col :span="20">
        <div class="teamate-introduction">
          <div class="teamate-name">林妙言</div>
          湖南师范大学戏剧影视文学专业本科生；<br>
          校融媒体中心文字组组长；<br>
          梅溪湖大剧院金牌剧评人；<br>
          湖南大剧院“艺评”约稿人；<br>
          全域旅游推介会宣传片编剧；<br>
          自编自导自演戏剧《兔子小姐》；<br>
          编剧湖湘文化微电影《种辣椒》<br>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="4">
        <img src="../assets/images/team/person3.png" alt="failed">
      </el-col>
      <el-col :span="20">
        <div class="teamate-introduction">
          <div class="teamate-name">易璇</div>
          湖南师范大学汉语言文学专业本科生；<br>
          文学院新媒体部副部长；<br>
          校党委宣传部优秀记者；<br>
          曾在安徽人民广播电台编辑部实习；<br>
          原创作品《我被语文课本预言的一生》<br>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="4">
        <img src="../assets/images/team/person4.png" alt="failed">
      </el-col>
      <el-col :span="20">
        <div class="teamate-introduction">
          <div class="teamate-name">彭煜淇</div>
          湖南师范大学汉语言文学专业本科生，专业前10%；<br>
          曾在湘江剧院实习；<br>
          获大学生写作与演讲大赛二等奖；<br>
          在《儿童文学》《爱格》等刊物发表文章<br>
        </div>
      </el-col>
    </el-row>

    <el-row class="position">
      演绎组
    </el-row>
    <el-row>
      <el-col :span="4">
        <img src="../assets/images/team/person5.png" alt="failed">
      </el-col>
      <el-col :span="20">
        <div class="teamate-introduction">
          <div class="teamate-name">周雍城</div>
          湖南师范大学播音与主持艺术专业本科生；<br>
          湖南省党史陈列馆讲解员；<br>
          湖南省十佳主持人；<br>
          湖南师范大学2022级开学典礼新生代表；<br>
          湖南省青年艺术节朗诵组金奖；<br>
          湖南省语委“湘语时光”朗诵大赛2023年年度总冠军；<br>
          获中华经典诵读大赛、湖南省经典诵读大赛国家级、省级奖项十余项。<br>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <img src="../assets/images/team/person6.png" alt="failed">
      </el-col>
      <el-col :span="20">
        <div class="teamate-introduction">
          <div class="teamate-name">李静怡</div>
          湖南师范大学播音与主持专业本科生；<br>
          湖南师范大学开学典礼新生代表，并接受湖南经视采访；<br>
          原创作品播放量累计5000w+；<br>
          湘江新区“语你共舞，风华正茂”诗会总导演；<br>
          曾于郴州电视台《新闻联播》栏目担任实习导演；<br>
          曾于中国烟草集团湖南省分公司，李宁体育湖南有限公司等知名公司有过市场运营实习经验；<br>
          获互联网加大学生创新创业大赛国家二等奖，湖南省二等奖等数十项学科竞赛奖项。<br>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <img src="../assets/images/team/person7.png" alt="failed">
      </el-col>
      <el-col :span="20">
        <div class="teamate-introduction">
          <div class="teamate-name">张思颖</div>
          湖南师范大学播音与主持艺术专业本科生；<br>
          湖南省共青团宣传片演员；<br>
          连续两年担任湖南师范大学开学典礼主持人；<br>
          曾在常德市广播电台广播组实习；<br>
          湖南师范大学普通话推广大使；<br>
          获全国大学生广告艺术大赛、湖南省⾼校“青春学习堂”短视频⼤赛等国家级省级奖项十余项<br>
        </div>
      </el-col>
    </el-row>

    <el-row class="position">
      市场财政组
    </el-row>
    <el-row>
      <el-col :span="4">
        <img src="../assets/images/team/person8.png" alt="failed">
      </el-col>
      <el-col :span="20">
        <div class="teamate-introduction">
          <div class="teamate-name">吴伊凡</div>
          中南财经政法大学财政学专业本科生；<br>
          曾于中国工商银行金银湖分行实习；<br>
          财政政策科普志愿服务队队长；<br>
          “博文杯”开展财政相关课题顺利结项；<br>
          担任互联网+比赛、市场调研分析大赛财政组成员；<br>
          获商业精英品牌策划大赛、商业精英流通业经营模拟赛国家级、省级奖项<br>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <img src="../assets/images/team/person9.png" alt="failed">
      </el-col>
      <el-col :span="20">
        <div class="teamate-introduction">
          <div class="teamate-name">张籍月</div>
          湖南师范大学统计学专业本科生 专业第二；<br>
          在国际会议AMMSAC发表论文以共同一作身份发表论文；<br>
          参与山东省经济普查统计工作；<br>
          英语六级600+；<br>
          获美国大学生数学建模大赛、市场调研分析大赛等十余项奖项<br>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <img src="../assets/images/team/person12.png" alt="failed">
      </el-col>
      <el-col :span="20">
        <div class="teamate-introduction">
          <div class="teamate-name">何建邦</div>
          湖南师范大学统计学专业本科生 专业前10%；<br>
          在国际会议AMMSAC发表论文以共同一作身份发表论文；<br>
          曾于中国银行佛山分行实习；<br>
          参与广东省经济普查工作；<br>
          获美国大学生数学建模大赛、市场调研分析大赛等十余项奖项<br>
        </div>
      </el-col>
    </el-row>

    <el-row class="position">
      美工组
    </el-row>
    <el-row>
      <el-col :span="4">
        <img src="../assets/images/team/person10.png" alt="failed">
      </el-col>
      <el-col :span="20">
        <div class="teamate-introduction">
          <div class="teamate-name">郭可纯</div>
          湖南师范大学美术学专业本科生 专业第三<br>
          国企湖南中烟卷烟厂烟盒设计比赛一等奖<br>
          画加平台金牌画师<br>
          约稿次数400+<br>
          原创作品入选教育科学美术展区<br>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <img src="../assets/images/team/person11.png" alt="failed">
      </el-col>
      <el-col :span="20">
        <div class="teamate-introduction">
          <div class="teamate-name">胡丹丹</div>
          湖南师范大学美术学院美术学专业本科生 专业前10% <br>
          校美院团委宣传部设计部负责人<br>
          画世界平台认证画师<br>
          原创设计稿被网易游戏采用<br>
          设计海报多次被校公众号采用<br>
        </div>
      </el-col>
    </el-row>

  </div>

  <div class="activities">
    <div class="activities-title">
      动态
    </div>
      <el-timeline style="max-width: 400px">
        <el-timeline-item center timestamp="2024/2/26" placement="top">
          <el-card>
            <h4>团队成员在衡阳保卫战纪念馆调研</h4>
            <img src="../assets/images/activities/activity9.png" alt="">
          </el-card>
        </el-timeline-item>
        <el-timeline-item center timestamp="2024/1/20" placement="top">
          <el-card>
            <h4>团队成员向衡阳抗战纪念碑鞠躬</h4>
            <img src="../assets/images/activities/activity8.png" alt="">
          </el-card>
        </el-timeline-item>
        <el-timeline-item center timestamp="2024/1/19" placement="top">
          <el-card>
            <h4>衡阳抗战纪念馆讲解员为团队成员细心讲解</h4>
            <img src="../assets/images/activities/activity7.png" alt="">
          </el-card>
        </el-timeline-item>
        <el-timeline-item center timestamp="2023/7/20" placement="top">
          <el-card>
            <h4>团队成员参观衡阳‘抗战纪念馆'</h4>
            <img src="../assets/images/activities/activity6.png" alt="">
          </el-card>
        </el-timeline-item>
        <el-timeline-item center timestamp="2023/7/15" placement="top">
          <el-card>
            <h4>团队负责人跟随师生共同研学</h4>
            <img src="../assets/images/activities/activity5.png" alt="">
          </el-card>
        </el-timeline-item>
        <el-timeline-item center timestamp="2023/7/12" placement="top">
          <el-card>
            <h4>团队负责人与韶山教育局研学相关负责人友好交流</h4>
            <img src="../assets/images/activities/activity4.png" alt="">
          </el-card>
        </el-timeline-item>
        <el-timeline-item center timestamp="2023/7/12" placement="top">
          <el-card>
            <h4>韶山思政基地思政大课堂负责人为调研团队介绍研学相关情况</h4>
            <img src="../assets/images/activities/activity3.png" alt="">
          </el-card>
        </el-timeline-item>
        <el-timeline-item center timestamp="2023/7/11" placement="top">
          <el-card>
            <h4>团队负责人对研学学术进行深度采访</h4>
            <img src="../assets/images/activities/activity2.png" alt="">
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2023/7/9" placement="top">
          <el-card>
            <h4>团队到达韶山进行实地调研</h4>
            <img src="../assets/images/activities/activity1.png" alt="">
          </el-card>
        </el-timeline-item>
      </el-timeline>

  </div>

  <Bottom_Flag></Bottom_Flag>

<!--  <Bottom></Bottom>-->
</template>

<style scoped>

  .position {
    margin-top: 20px;
    font-size: 22px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
  }

  .team {
    padding: 0 80px;
  }

  .team img {
    height: 272px;
  }

  .team .team-teamates  {
    font-size: 30px;
    font-weight: bold;
    margin-top: 40px;
  }

  .teamate-name {
    height: 30px;
    line-height: 30px;
    color: rgb(176,39,66);
    font-weight: bold;
    font-size: 18px;
  }

  .teamate-introduction {
    background-color: rgb(250,235,220);
    color: rgb(176,39,66);
    padding: 10px 20px;
    height: 250px;
  }

  .activities {
    padding: 0 80px;
  }

  .activities .activities-title {
    font-size: 30px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .activities img {
    width: 350px;
  }
</style>

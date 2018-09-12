<template>
  <div class="introduce">
    <div class="slideshow2">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-slide">
          <p class="p" ref="p">
            纳<br/>
            新<br/>
            了<br/>
            欢迎加入EPI<br/>
            Welcome to EPI</p>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <h4 class="shake">目录</h4>
          <div class="catalog">
            <p id="p1">EPI实验室简介</p>
            <p id="p2">取得成就</p>
            <p id="p3">毕业生就业</p>
            <p id="p4">纳新介绍</p>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <h4 class="shake">EPI实验室简介</h4>
          <img src="./epi.png" class="epi"/>
          <p class="introduceP">
            &nbsp;&nbsp;&nbsp;&nbsp; EPI实验室成立于2011年，隶属于西安邮电大学电子工程学院，分为软件和硬件，软件下设Web、Java、c++等，硬件下设单片机和模拟电路两个实践训练实验室，与美国德州仪器公司共建大学生课外工程实践训练平台和大学生创新中心。<br/>
            &nbsp;&nbsp;&nbsp;&nbsp; 2011年被评为省级人才培养模式创新实验区，2011年和2012年被评为全国电子专业人才设计与技能大赛优秀组织单位，2013年至2016年被评为全国软件和信息技术专业人才大赛优秀组织单位。<br/>
            &nbsp;&nbsp;&nbsp;&nbsp; 中心每年承担西安邮电大学大学生电子设计竞赛、全国大学生电子设计竞赛、陕西省大学生光电设计竞赛及全国软件和信息技术专业人才大赛的赛前培训工作；TI单片机LAUTCHPAD培训；TI Tiva Cortex M4 LaunchPad等培训工作。</p>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <h4 class="shake">取得成就</h4>
          <p class="introduceP">学生在全国大学生电子设计竞赛模拟电子系统专题邀请赛、全国大学生电子设计竞赛等赛事中获省级以上奖励400余项。其中，2015年获全国大学生电子设计竞赛国家级二等奖4项、省级一等奖5项、二等奖9项、三等奖4项，创历史最好成绩。 2017年获全国大学生电子设计竞赛国家级二等奖2项、省级一等奖1项、二等奖2项、三等奖3项。获批国家级、省级大学生创新创业计划项目16项、大学生创新创业孵化基地项目3项</p>
          <img src="./introduceP.jpg" class="introduceImg"/>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <h4 class="shake">毕业生就业</h4>
          <img src="./job1.jpg" class="job"/>
          <img src="./job.jpg" class="job"/>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <h4 class="shake">纳新介绍</h4>
          <div class="new">
            <p>EPI实验室设置了硬件部和软件部两个大方向。</p>
            <div>
              <h5>软件部：
                <span>软件部内设人工智能，后端，c++，前端，linux运维等学习小组。</span>
              </h5>
              <div class="chart">点此填写软件报名表</div>
              <div>
                <p></p>
                <img src="./img/ruan.jpg" class="img"/>
              </div>
              <h5>硬件部：
                <span>硬件部内设无人机，电源/信号，FPGA，单片机， 智能小车等学习小组。</span>
              </h5>
              <div class="chart">点此填写硬件报名表</div>
              <div>
                <p></p>
                <img src="./img/ying.jpg" class="img"/>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      num: 5,
      swiperOption: {
        notNextTick: true,
        autoplay: 3000,
        direction: 'vertical',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        scrollbar: '.swiper-scrollbar',
        mousewheelControl: true,
        observeParents: true,
        debugger: true
      }
    }
  },
  mounted () {
    var that = this
    setInterval(function () {
      var r = Math.round(Math.random() * 255)
      var g = Math.round(Math.random() * 255)
      var b = Math.round(Math.random() * 255)
      var color = 'rgba(' + r + ', ' + g + ', ' + b + ',' + 1 + ')'
      that.$refs.p.style.color = color
    }, 100)
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style type="text/css" scoped>
  .introduce{
    height: 13.5rem;
  }
  .shake {
    width: 5.5rem;
    height: 2rem;
    margin: 0 auto;
    animation: shake-crazy 3s infinite;
    text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;
    font-family:Verdana, Geneva, sans-serif;
    font-weight:bold;
    color:white;
  }
  @keyframes shake-crazy {
    0% {
      transform: translate(0px, 0px) rotate(0deg);
      color: orange;
    }
    10% {
      transform: translate(1px, 2px) rotate(-1deg);
      color: orange;
    }
    20% {
      transform: translate(2px, 4px) rotate(-3deg);
      color: orange;
    }
    30% {
      transform: translate(3px, 1px) rotate(4deg);
      color: orange;
    }
    40% {
      transform: translate(-2px, 0px) rotate(9deg);
      color: orange;
    }
    50% {
      transform: translate(1px, 3px) rotate(-4deg);
      color: orange;
    }
    60% {
      transform: translate(3px, 0px) rotate(-10deg);
      color: orange;
    }
    70% {
      transform: translate(2px, 3px) rotate(7deg);
      color: orange;
    }
    80% {
      transform: translate(3px, 2px) rotate(9deg);
      color: orange;
    }
    90% {
      transform: translate(0px, 3px) rotate(5deg);
      color: orange;
    }
  }
  .swiper-slide{
    width: 7.5rem;
    height: 13.5rem;
    color: #fefefe;
    overflow-y: hidden;
  }
  .p{
    font-size: .5rem;
    line-height: 1rem;
    padding-top: 3rem;
    font-weight: bold;
  }
  .catalog{
    width: 7rem;
    height: 10rem;
    background-image: url("catalog.jpg");
    background-size: 7rem 10rem;
    margin: 0 auto;
    position: relative;
  }
  h5,h4{
    font-size: .75rem;
    line-height: 2rem;
  }
  #p1{
    font-size: .52rem;
    width: .6rem;
    color: cornflowerblue;
    position: absolute;
    left: .5rem;
    top: 5rem;
    text-align: center;
  }
  #p2{
    font-size: .52rem;
    width: .6rem;
    color: greenyellow;
    position: absolute;
    left: 2.2rem;
    top: 4.5rem;
    text-align: center;
  }
  #p3{
    font-size: .52rem;
    width: .6rem;
    color: mediumslateblue;
    position: absolute;
    left: 4rem;
    top: 5rem;
    text-align: center;
  }
  #p4{
    font-size: .52rem;
    width: .6rem;
    color: palevioletred;
    position: absolute;
    left: 5.5rem;
    top: 4.8rem;
    text-align: center;
  }
  .epi{
    width: 2rem;
    border-radius: 50%;
  }
  .introduceP{
    font-size: .36rem;
    line-height: .5rem;
    width: 6.6rem;
    margin: 0 auto;
    text-align: left;
    color: #fefefe;
  }
  .introduceImg{
    width: 7.5rem;
    margin-top: .5rem;
  }
  .job{
    width: 7.5rem;
    margin-bottom: 1rem;
  }
  .new p{
    font-size: .36rem;
    line-height: .5rem;
  }
  .new h5{
    text-align: left;
    color: yellow;
    font-size: .42rem;
    line-height: .7rem;
  }
  .new h5 span{
    color: #fff;
  }
  .img{
    width: 2.5rem;
    height: 2.5rem;
  }
  .chart{
    color: blue;
    text-decoration: underline;
    font-size: .36rem;
    float: left;
    line-height: 2.5rem;
  }
</style>

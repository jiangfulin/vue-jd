<template>
  <div>
    <div class="header">
      <ul class="header-content">
        <li class="header-item">推荐</li>
        <li class="header-item">新闻</li>
        <li class="header-item">娱乐</li>
        <li class="header-item">体育</li>
        <li class="header-item">图片</li>
        <li class="header-item">采集</li>
      </ul>
    </div>

    <div class="banner-content">
      <img class="banner" src="../img/1513058729197.jpg" alt="">
      <p class="banner-title">2017网易时尚跨界盛典</p>

    </div>
    <div class="news-content">
      <ul>
        <li class="news-item">
          <div class="item-inner">
            <img class="news-img" src="../img/1513058729197.jpg" alt="">
            <p class="news-title">
              天津市人民政府副市长、办公厅党组成员杜强被查
            </p>
            <span class="time">1小时前</span>
            <span class="num">99次</span>
          </div>
        </li>
        <li class="news-item">
          <div class="item-inner">
            <img class="news-img" src="../img/1513058729197.jpg" alt="">
            <p class="news-title">
              天津市人民政府副市长、办公厅党组成员杜强被查
            </p>
            <span class="time">1小时前</span>
            <span class="num">99次</span>
          </div>
        </li>
        <li class="news-item">
          <div class="item-inner">
            <img class="news-img" src="../img/1513058729197.jpg" alt="">
            <p class="news-title">
              天津市人民政府副市长、办公厅党组成员杜强被查
            </p>
            <span class="time">1小时前</span>
            <span class="num">99次</span>
          </div>
        </li>
        <li class="news-item">
          <div class="item-inner">
            <img class="news-img" src="../img/1513058729197.jpg" alt="">
            <p class="news-title">
              天津市人民政府副市长、办公厅党组成员杜强被查
            </p>
            <span class="time">1小时前</span>
            <span class="num">99次</span>
          </div>
        </li>
      </ul>
    </div>
  </div>


</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {},
  }
</script>
<style scoped lang="scss">
  @function px2rem($px) {
    $rem: 37.5px;
    @return ($px/$rem)+rem;
  }
  .header{
    height:px2rem(40px);
    width:100%;
    background: red;
    padding-left: px2rem(23px);
    .header-item{
      font-size: px2rem(16px);
      color:#ffcdce;
      float: left;
      margin-right: px2rem(20px);
      line-height: px2rem(40px);
      &:nth-child(2){
        color:#fff;
        font-size: px2rem(17px);
      }
    }
  }
  .banner-content{
    position: relative;
    .banner{
      width:100%;
      height:px2rem(190px);
      display: block;
    }
    .banner-title{
      font-size: px2rem(16px);
      color:#fff;
      position: absolute;
      left:px2rem(15px);
      bottom:px2rem(15px);
    }
  }
  .news-content{
    .news-item{
      width: 100%;
      height:px2rem(90px);
      padding-left:px2rem(15px);
      padding-right: px2rem(15px);
      box-sizing: border-box;
    }
    .item-inner{
      overflow: hidden;
      position: relative;
      border-bottom:px2rem(1px) solid #e5e5e5;
      height:100%;
    }
    .news-img{
      float: left;
      width: px2rem(95px);
      height:px2rem(70px);
      margin-top: px2rem(10px);
      display: block;
      margin-right: px2rem(15px);
    }
    .news-title {
      color: #404040;
      font-size: px2rem(17px);
      margin-top: px2rem(16px);
      line-height: px2rem(20px);
    }
    .time{
      position: absolute;
      left: px2rem(108px);
      bottom:px2rem(17px);
      color:#888;
      font-size: px2rem(12px);
    }
    .num{
      position: absolute;
      color:#888;
      font-size: px2rem(12px);
      right: px2rem(4px);
      bottom:17px;
      &:before{
        content:'';
        display: block;
        position: absolute;
        width: px2rem(21px);
        height:px2rem(20px);
        background-size:contain ;
        top:px2rem(-3px);
        left:px2rem(-23px);
        background-image: url("../img/1513058729197.jpg");
      }
    }

  }

</style>

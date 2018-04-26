<template>
  <div class="scroll-wrapper">
    <div class="scroll-news">
      <router-link to="/home" class="news-tit">
        <img src="../img/jd-news-tit.png" alt="">
      </router-link>
      <div class="news-content">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(news,index) in newsData" :key="index">
            <span class="red">{{news.hot}}</span>
            <span class="info">{{news.news}}</span>
          </swiper-slide>
        </swiper>
      </div>
      <router-link to="/home" class="news-more">
        更多
      </router-link>
    </div>

  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper';

  export default {
    data() {
      return {
        newsData: [
          {hot: '热', news: '试了九把剃须刀,这把最好用'},
          {hot: '热', news: '网吧low的配置为什么那么快'},
          {hot: '热', news: '坑爹的笔记本,害的我好惨！'},
          {hot: '热门', news: '无屏,这才是手机的究极形态'},
        ],
        swiperOption: {
          direction: 'vertical',
          speed:500,
          height: 30,
          autoplay: {
            autoplay: true,
            delay: 2000
          },
          loop: true

        }
      }
    },
    methods: {},
    computed: {},
    components: {
      swiper,
      swiperSlide
    },
  }
</script>
<style scoped lang="scss">
  @import "../style/mixin";

  .scroll-wrapper {
    background: #f6f6f6;
  }

  .scroll-news {
    box-sizing: border-box;
    position: relative;
    height: px2rem(30px);
    z-index: 1;
    background: #fff;
    border-radius: px2rem(6px);
    margin: px2rem(-1px) px2rem(8px) px2rem(5px);
    padding: 0 px2rem(5px);
    .news-tit {
      @include wh(px2rem(73px), px2rem(16px));
      @include LAbsolute(px2rem(8px), px2rem(7px));
      img {
        @include wh(100%, 100%)
      }
    }
    .news-more {
      @include RAbsolute(px2rem(8px), px2rem(7px));
      line-height: px2rem(16px);
    }
    .news-content{
      padding: 0 px2rem(42px) 0 px2rem(80px);
      height: px2rem(30px);
      line-height: px2rem(30px);
      overflow: hidden;
      span{
        display: inline-block;
        height:px2rem(30px);
      }
      .red{
        color:red;
        padding: 0 px2rem(2px);
      }
      .info{

      }
    }
  }

</style>

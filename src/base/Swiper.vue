<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,index) in dataImg" :key="index">
      <img :src="slide.src">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper';

  export default {
    data() {
      return {
        dataImg: [
          {src: require('../img/swiper/banner1.jpg')},
          {src: require('../img/swiper/banner2.jpg')},
          {src: require('../img/swiper/banner3.jpg')},
          {src: require('../img/swiper/banner4.jpg')},
          {src: require('../img/swiper/banner5.jpg')},
          {src: require('../img/swiper/banner6.jpg')},
          {src: require('../img/swiper/banner7.jpg')}
        ],
        swiperOption: {
          autoplay: {
            autoplay: true,
            delay: 2000
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style  lang="scss">
  @import "../style/mixin";
  img {
    width: 100%;
    display: block;
    height:px2rem(183px);
  }
  .swiper-pagination{
    .swiper-pagination-bullet{
      border:1px solid #fff;
      background: none;
      opacity: 1;
      width: 6px;
      height:6px;
    }
    .swiper-pagination-bullet-active{
      background: #fff !important;
    }
  }

</style>

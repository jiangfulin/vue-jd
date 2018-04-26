<template>
  <div class="home">
    <header-base></header-base>
    <div class="banner">
      <Swiper></Swiper>
    </div>
    <Floor :floor="floor1"></Floor>
    <Appcenter></Appcenter>
    <Floor :floor="floor2"></Floor>
    <Scroll-news></Scroll-news>
    <Seckill></Seckill>
  </div>
</template>
<script>
  import headerBase from '../base/headerBase.vue';
  import Swiper from '../base/Swiper.vue';
  import Floor from '../base/Floor.vue';
  import Appcenter from '../base/Appcenter.vue';
  import ScrollNews from '../base/Scroll-news.vue';
  import Seckill from '../base/Seckill.vue'

  export default {
    data() {
      return {
        floor1: require('../img/floor/floor1.jpg'),
        floor2:require('../img/floor/floor2.jpg')
      }
    },

    methods: {},
    computed: {},
    components: {
      headerBase,
      Swiper,
      Floor,
      Appcenter,
      ScrollNews,
      Seckill
    },
  }
</script>
<style scoped lang="scss">
  @import "../style/mixin";

  .home {
    height: 300vh;
    width: 100%;
    background: #f6f6f6;
    .banner {
      height: px2rem(183px)
    }
  }

</style>

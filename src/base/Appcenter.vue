<template>
  <div class="appcenter">
    <div class="floor floor1">
      <router-link :to="{name:item.path}"
                   v-for="(item,index) in floor1"
                   :key="index"
      >
        <img :src="item.src" alt="">
        <span>{{item.name}}</span>
      </router-link>
    </div>
    <div class="floor floor2">
      <router-link :to="{name:item.path}"
                   v-for="(item,index) in floor2"
                   :key="index"
      >
        <img :src="item.src" alt="">
        <span>{{item.name}}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        floor1: [
          {src: require('../img/banner/banner1.png'), path: 'home', name: '京东超市'},
          {src: require('../img/banner/banner2.png'), path: 'home', name: '全球购'},
          {src: require('../img/banner/banner3.png'), path: 'home', name: '京东服饰'},
          {src: require('../img/banner/banner4.png'), path: 'home', name: '京东生鲜'},
          {src: require('../img/banner/banner5.png'), path: 'home', name: '京东到家'}
        ],
        floor2: [
          {src: require('../img/banner/banner6.png'), path: 'home', name: '充值消费'},
          {src: require('../img/banner/banner7.png'), path: 'home', name: '领京豆'},
          {src: require('../img/banner/banner8.png'), path: 'home', name: '领劵'},
          {src: require('../img/banner/banner9.png'), path: 'home', name: '赚钱'},
          {src: require('../img/banner/banner10.png'), path: 'home', name: '物流查询'},
        ]
      }
    },
    methods: {},
    computed: {},
    components: {},
  }
</script>
<style scoped lang="scss">
  @import "../style/mixin";

  .appcenter {
    @include wh(100%, px2rem(162px));
    background: #fff;
    box-sizing: border-box;
    padding: px2rem(4px) 0 px2rem(18px);
    .floor {
      display: flex;
      width: 100%;
      margin: px2rem(6px) 0;
      a {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        justify-content: center;
        img {
          @include wh(px2rem(40px), px2rem(40px));
          margin-bottom: px2rem(4px);
        }
        span {
          line-height: px2rem(14px);
          height:px2rem(14px)
        }
      }
    }
  }

</style>

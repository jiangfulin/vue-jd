<template>
  <div class="seckill">
    <div class="seckill-tit">
      <router-link to="/home" class="left seckill-link">
        <strong class="seckill-name">京东秒杀</strong>
        <strong class="seckill-now"><em>8</em>点场</strong>
        <div class="seckill-timer">
          <Seckill-timer :setTime="''"></Seckill-timer>
        </div>
      </router-link>
      <router-link to="/home" class="right more-link">
        京选轮番秒  <i class="iconfont icon-arrow-right"></i>
      </router-link>

    </div>
  </div>
</template>
<script>
  import SeckillTimer  from './Seckill-timer.vue'
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {

    },
    components: {
      SeckillTimer
    },
  }
</script>
<style scoped lang="scss">
  @import "../style/mixin";

  .seckill {
    background: #fff;
    .seckill-tit {
      height: px2rem(34px);
      line-height: px2rem(34px);
      .seckill-link {
        width: 70%;
        .seckill-name {
          color: #f02b2b;
          font-weight: 700;
          font-size: px2rem(15px);
          margin: 0 px2rem(4px);

        }
        .seckill-now {
          font-size: 12px;
          em {
            font-size: 13px;
            font-style: normal;
          }

          color: #232326;
        }
        .seckill-timer {
          display: inline-block;
        }
      }
      .more-link {
        _width: 30%;
        color:#f23030;
        margin-right: px2rem(10px);
        i{
          color:#f23030;
          font-size: 10px;
        }
      }
    }

  }

</style>

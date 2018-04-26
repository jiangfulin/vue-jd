<template>
    <div class="footer">
      <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/category">
        <i class="iconfont icon-icon04"></i>
        <span>分类</span>
      </router-link>
      <router-link to="/find">
        <i class="iconfont icon-iconfontzhizuobiaozhun023103"></i>
        <span>发现</span>
      </router-link>
      <router-link to="/cart">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </router-link>
      <router-link to="/myInfo">
        <i class="iconfont icon-wode"></i>
        <span>我的</span>
      </router-link>


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
  @import "../style/mixin";
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    z-index: 1000;
    @include wh(100%,px2rem(50px));
    display: flex;
    box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
    a{
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
      &.router-link-active{
        i,span{
          color:#E9483E;
        }

      }
    }

  }

</style>

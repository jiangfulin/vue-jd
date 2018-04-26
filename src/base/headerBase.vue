<template>
  <div class="header-box" ref="headerbox">
    <div class="search-wrapper">
      <div class="search-box">
        <span class="search-icon-logo"></span>
        <Icon class="search-icon" type="ios-search"></Icon>
        <div class="search-input">
          <input type="text" placeholder="MO&Co.超级新品日，新品低至8折">
        </div>
      </div>

      <div class="login-btn">登录</div>
    </div>


  </div>


</template>
<script>
  export default {
    data() {
      return {}
    },
    mounted() {
      //滚动搜索框背景颜色改变
      window.onscroll = () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let opacity = 0.8 * (scrollTop / 144);
        if (opacity <= 0.9) {
          this.$refs.headerbox.style.background = `rgba(222,24,27,${opacity})`
        }

      }
    },
    methods: {},
    computed: {},
    components: {},
  }
</script>
<style scoped lang="scss">
  @import "../style/mixin";

  .header-box {
    @include wh(100%, px2rem(50px));
    position: fixed;
    top:0;
    z-index: 1000;
    background: rgba(224, 60, 55, 0);

    @include center();
    .search-wrapper {

      @include wh(px2rem(355px), px2rem(30px));
      .search-box {
        background: #fff;
        border-radius: px2rem(15px);
        position: relative;
        @include wh(px2rem(320px), px2rem(30px));
        .search-icon-logo {
          display: block;
          float: left;
          position: relative;
          margin: px2rem(5px) 0 0 px2rem(15px);
          @include bis("../img/data_image_png;base….png");
          @include wh(px2rem(20px), px2rem(20px));
          &:after {
            content: "";
            @include wh(1px, 100%);
            @include RAbsolute(px2rem(-10px), 0);
            border-right: px2rem(1px) solid #f0f0f0;
          }
        }
        .search-icon {
          font-size: px2rem(20px);
          font-weight: bold;
          float: left;
          display: inline-block;
          margin: px2rem(5px) px2rem(10px) 0 px2rem(20px);
          color: #CACBCA;
        }
        .search-input {
          @include RAbsolute(0, 0);
          @include wh(100%, px2rem(30px));
          padding: 0 px2rem(13px) 0 px2rem(80px);
          input {
            outline: none;
            font-size: px2rem(12px);
            @include wh(100%, 100%)
          }

        }

      }
      .login-btn {
        color: #fff;
        font-weight: bold;
        height: px2rem(30px);
        line-height:px2rem(30px);
        @include RAbsolute(px2rem(10px), px2rem(10px));
        font-size: px2rem(13px);
      }
    }

  }

</style>

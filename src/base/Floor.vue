<template>
  <div class="floor">
    <img :src="floor" alt="">
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: ['floor'],
    methods: {},
    computed: {},
    components: {},
  }
</script>
<style scoped lang="scss">
  @import "../style/mixin";

  .floor {
    position: relative;
    margin-top: px2rem(-12px);
    z-index: 1;

    @include wh(100%, px2rem(115px));
    img {
      @include wh(100%, 100%);
      border-radius: px2rem(10px);
    }
  }

</style>

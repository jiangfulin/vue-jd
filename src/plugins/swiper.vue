<template>
  <div class="banner">
    <div class="bannerInner">
      <div v-for="(slide,index) in swiperSlides">
        <div><img src="" alt=""></div>
        
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        swiperSlides: []
      }
    },
    methods: {},
    computed: {},
    components: {},
  }
</script>
<style scoped lang="less">

</style>

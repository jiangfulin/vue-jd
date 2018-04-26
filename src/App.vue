<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './base/Tab.vue'
  export default {
    name: 'App',
    components:{
      Tab
    }

  }
</script>

<style>
  @import "style/_main.scss";

  #app {
    max-width: 670px;
    overflow-x:hidden ;
  }


</style>

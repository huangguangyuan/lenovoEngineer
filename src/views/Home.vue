<template>
  <div class="home">
    <router-view></router-view>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import proList from '@/components/proList.vue'
import footBar from '@/components/footBar.vue'

export default {
  name: 'home',
  components: {
    proList,
    footBar
  }
}
</script>

<style scoped lang="scss">
  .home{background-color: #f7f7f7;}
</style>




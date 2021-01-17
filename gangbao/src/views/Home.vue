<template>
  <div class="home">
    <top-bar></top-bar>
    <foot-bg></foot-bg>
  </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import FootBg from '../components/FootBg'
export default {
  name: 'Home',
  components: {
    // HelloWorld,
    TopBar,
    FootBg
  }
}
</script>
<style lang="scss">
  .home{
    height: 1000px;
  }
</style>

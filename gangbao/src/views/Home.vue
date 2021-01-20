<template>
  <div class="home">
    <top-bar :shopNumber='shopNumber'></top-bar>
    Home
    <router-view></router-view>
    <foot-bg></foot-bg>
  </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import FootBg from '../components/FootBg'
export default {
  name: 'Home',
  components: {
    TopBar,
    FootBg
  },
  data () {
    return {
      shopNumber: 1
    }
  },
  methods: {
    addShop () {
      this.shopNumber += 3
    }
  }

}
</script>
<style lang="scss">
  // .home{
  //   height: 1000px;
  // }
</style>

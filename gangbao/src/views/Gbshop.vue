<template>
  <div class="Gbshop">
    <top-bar></top-bar>
    <foot-bg></foot-bg>
  </div>
</template>
<script>
import TopBar from '../components/TopBar.vue'
import FootBg from '../components/FootBg.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld,
    TopBar,
    FootBg
  }
}
</script>

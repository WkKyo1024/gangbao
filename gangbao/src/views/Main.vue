<template>
  <div @click="add()">Main主页面 点击购物车加1</div>
</template>

<script>
export default {
  methods: {
    add () {
      this.$parent.shopNumber++
    }
  }
}
</script>

<style lang="scss">

</style>

<template>
  <div class="Gbshop" @click="add3">
    gbshop 点击触发父路由的方法
  </div>
</template>
<script>
export default {
  name: 'Gbshop',
  methods: {
    add3 () {
      this.$parent.addShop()
    }
  }
}
</script>

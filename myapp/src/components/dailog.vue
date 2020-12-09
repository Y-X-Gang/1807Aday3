<template>
<div class="dailog" v-if="isShow">
  我是弹框
  <button @click="offDailog">关闭</button>
</div>
</template>

<script>
export default {
  name: 'Dailog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  watch: {
    show(newData) {
      this.isShow = newData
    }
  },
  methods: {
    offDailog() {
      this.$emit('offDailog')
    }
  }
}
</script>

<style scoped>
.dailog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5)
}
</style>


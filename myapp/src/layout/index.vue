<template>
    <div class="layout">
        <header class="header">头</header>
        <div class="body">
            <router-view/>
        </div>
        <footer class="footer">
            <div class="footer-item" v-for="(item, idx) in typeList" :key="idx" @click="toRoute(item)">
                {{item.text}}
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Layout',
    data() {
        return {
            typeList: []
        }
    },
    created(){
        // 获取
        this.typeList = this.$router.options.routes.filter((item => item.name === 'layout'))[0].children
    },
    methods: {
        toRoute(item) {

            this.$router.push(item.path)
        }
    }
}
</script>


<style scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header {
  width: 100%;
  display: flex;
  height: 4rem;
  background: red;
  align-items: center
}
.body {
  flex: 1;
  overflow-y: auto
  
}
.footer {
  width: 100%;
  height: 3.53rem;
  border-top: 0.1rem solid #ccc;
  align-items: center;
  display: flex;
}
.footer-item {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>


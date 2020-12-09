<template>
<div class="main">
    <div v-for="(item, idx) in list" :key="idx" @click="toDetail(item)"> 
        <div><img :src="item.img" alt=""></div>
        <p>{{item.name}}</p>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'mains',
    data() {
        return {
            list: []
        }
    },
    created(){
        this.getList()
    },
    methods: {
        getList() {
            axios({
                url: '/api/getList'
            }).then(res => {

                this.list = res.data.data.list
            })
        },
        toDetail(item) {
            this.$router.push(`/detail/${item.id}`)
        }
    }
}
</script>


<style scoped>
    .main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between
    }
</style>


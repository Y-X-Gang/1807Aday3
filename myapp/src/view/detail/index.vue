<template>
    <div>
        {{id}}
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'detail',
    data(){
        return {
            id: ''
        }
    },
    created(){
        this.id = this.$route.params.id
        this.getDetail()
    },
    methods: {
        getDetail() {
            axios({
                url: '/api/getDetail',
                method: 'post',
                data: {
                    id: 11111111111111111111111111
                }
            })
        }
    }
}
</script>


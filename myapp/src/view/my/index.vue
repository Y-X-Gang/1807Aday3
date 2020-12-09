<template>
    <div>
        <Dailog :show="isshow" @offDailog="changeIsShow" />
        <button @click="changeIsShow">打开弹框</button>
    </div>
</template>
<script>
import Dailog from '@/components/dailog.vue'

export default {
    name: 'my',
    components: {
        Dailog
    },
    data() {
        return {
            isshow: false
        }
    },
    methods: {
        changeIsShow() {
            this.isshow = !this.isshow
        }
    }

}
</script>


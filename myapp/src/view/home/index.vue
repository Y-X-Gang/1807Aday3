<template>
    <div>
        <button @click="toDetail">详情</button>
    </div>
</template>

<script>
export default {
    name: 'detail',
    methods: {
        toDetail() {
            this.$router.push('/detail')
        }
    }
}
</script>


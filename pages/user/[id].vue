<template>
<div>
    <h3>命名路由</h3>
</div>
</template>
<script setup>

const route = useRoute()
console.log(route.params.id);

</script>
<style scoped lang='scss'>
</style>

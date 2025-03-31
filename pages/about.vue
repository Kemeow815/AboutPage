<template>
    <div>
        <nuxt-link to="/">首页</nuxt-link>
        <testtime />
    </div>
</template>
<script setup>
useHead({
  meta: [
    {
      name: 'description',
      content: "my custom"
    }
  ],
//   titleTemplate(titleChunk){
//     return titleChunk ? '个人中心 - '+ `${titleChunk}` : 'Site Title';
//   }

  titleTemplate:`个人中心 - %s`,
})

definePageMeta({
    path:"/about1", // 指定路由的名称
    layout: 'space' // 命名布局
})

console.log(add(1,4));


</script>
<style scoped lang='scss'>
h1{
  color: red;
}
</style>

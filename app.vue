<template>
  <div>
    <nuxt-layout>
      <nuxt-page></nuxt-page>
    </nuxt-layout>
  </div>
</template>

<script setup>
import { ref } from 'vue';

useHead({
  title: '白日作梦｜张成威',
  meta: [
    { name: 'author',content: "张成威"},
    { name: 'description', content: '这里是张成威的个人主页（zhangchengwei.work），————知不足而奋进，望远山而前行' },
    { name: 'keywords', content: '白日作梦,张成威,about.zhangchengwei.work,个人作品,想法,个人主页,个人网站,博客' }
  ]
})

//  获取全局配置信息
let Config = useRuntimeConfig()
// console.log(Config.public.baseURL);

</script>

<style scoped lang="scss">
p {
  color: $mycolor;
}
</style>
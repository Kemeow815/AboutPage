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
  title: '喵落阁｜克喵爱吃卤面',
  meta: [
    { name: 'author',content: "克喵爱吃卤面"},
    { name: 'description', content: '这里是克喵爱吃卤面的个人主页（home.kemiaosw.top），————愿你看清一切真相后，依旧热爱你的家人和朋友。' },
    { name: 'keywords', content: '喵落阁,克喵爱吃卤面,home.kemiaosw.top,个人作品,想法,个人主页,个人网站,博客' }
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
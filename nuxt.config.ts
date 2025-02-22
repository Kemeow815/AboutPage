// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // 初始化样式
  css: ["~/assets/css/style.css", "~/assets/css/public.css", "~/assets/css/animation.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/base.scss" as *;'
        }
      }
    }
  },

  // 确保配置为 SSG 模式
  // ssr: false, // 关闭 SSR，仅使用 SSG

  // 运行时的一些全局变量
  // 获取：let Config = useRuntimeConfig(); console.log(Config.count);
  runtimeConfig: {
    // 这里定义的参数只能在服务期间获取到
    count: "1",

    // public可以在客户端和服务端获取到
    public: {
      baseURL: "localhost:8080"
    }
  },



  // 开发环境下的配置
  $development: {

  },

  // 生产环境下的配置
  $production: {

  },


  // 动态程序需要运行在node服务器上
  // pnpm build


  // 直接生成静态网页，部署在静态文件服务器上‘
  // 但是会有一些限制，不然编译不过
  // npx nuxi generate
})

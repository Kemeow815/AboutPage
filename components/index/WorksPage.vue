<template>
    <div class="WorksPage" id="works">
        <div class="container container-box">
            <div class="title-box">
                <h2>我的作品</h2>
                <p>一切为了得心应手</p>
            </div>

            <div class="project">
                <a class="item" v-for="(item, index) in data" :key="index" :href="item.link">
                    <div class="view-img">
                        <div class="open-box">
                            <img class="logo" :src="item.logo" alt="">
                            <p>打开</p>
                        </div>
                        <img class="banner" :src="item.banner" alt="">
                    </div>
                    <div class="introduction">
                        <p class="name">{{ item.name }}</p>
                        <p class="describe">{{ item.describe }}</p>
                        <p class="tag">
                            <span v-for="(itemTag, indexTag) in item.tag" :key="indexTag">{{ itemTag }}</span>
                            <span v-if="item.Beta" class="HighlightTags"
                                :style="{ color: item.Beta.color, background: item.Beta.bgColor }">{{ item.Beta.title
                                }}</span>
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

import MusicLogo from './assets/images/works/Music/logo.png';
import MusicBanner from './assets/images/works/Music/music.png';

import NuxtLogo from './assets/images/works/Nuxt/nuxt.png';
// import PicBanner from './assets/images/works/Pic/banner.jpg';

import HomeLogo from './assets/images/works/Home/home.png';
// import ZebraBanner from './assets/images/works/Zebra/banner.png';

import dailyLogo from './assets/images/works/news/logo.png';
// import duoyuBanner from './assets/images/works/duoyu/banner.png';

// import WallpaperBanner from './assets/images/works/duoyu/banner.jpg';

import montorLogo from './assets/images/works/montor/logo.png';
// import moreBanner from './assets/images/works/more/banner.jpg';

import memosLogo from './assets/images/works/memos/logo.png';
// import bilibiliAutoWidescreenBanner from './assets/images/works/bilibili/bilibili-AutoWidescreen.png';

import TGLogo from './assets/images/works/TG/logo.png';
// import StardewValleyBanner from './assets/images/works/StardewValley/banner.webp';

const data = ref([
    {
        name: "克喵的音乐页",
        describe: "基于 HeoMusic 修改的音乐播放器",
        logo: MusicLogo,
        banner: MusicBanner,
        tag: ['Music', '音乐播放器'],
        Beta: {
            color: '#6c38c0',
            bgColor: '#efebf8',
            title: 'Music'
        },
        link: "https://music.kemiao.online"
    },
    {
        name: "克喵的博客",
        describe: "基于Nuxt3重构的个人博客，支持评论、RSS订阅等功能。",
        logo: NuxtLogo,
        banner: 'https://s2.loli.net/2025/04/19/aoxepgYuJdAVqKm.png',
        tag: ['小程序', '网站', '线上应用'],
        Beta: {
            color: '#f7c959',
            bgColor: '#faf3da',
            title: '博客'
        },
        link: "https://blog-v3.kemeow.top"
    },
    {
        name: "克喵的主页",
        describe: "基于梦爱吃鱼大佬的主页",
        logo: HomeLogo,
        banner: 'https://s2.loli.net/2025/04/22/47GJgqoTbCELAIX.png',
        tag: ['主页', '网站'],
        Beta: {
            color: '#5a9cf8',
            bgColor: '#eef5fe',
            title: '主页'
        },
        link: "https://www.zebra.duoyu.link/"
    },
    {
        name: "每日热榜",
        describe: "基于 dailyhot api 的每日热榜。",
        logo: dailyLogo,
        banner: 'https://s2.loli.net/2025/04/19/KqLPd1UuxBkzaQS.png',
        tag: ['热榜', '网站'],
        Beta: {
            color: '#919398',
            bgColor: '#f4f4f5',
            title: '热榜'
        },
        link: "https://dailyhot.kemeow.cn/",
    },
    {
        name: "memos说说",
        describe: "基于memos的说说页面",
        logo: memosLogo,
        banner: 'https://s2.loli.net/2025/04/22/S78ANHKUfnGM34v.png',
        tag: ['memos', '说说'],
        Beta: {
            color: '#51b23c',
            bgColor: '#eef4ed',
            title: 'memos说说'
        },
        link: "https://memos.kemiaosw.top/"
    },
    {
        name: "克喵的电报动态说说",
        describe: "基于电报的说说页面",
        logo: TGLogo,
        banner: 'https://s2.loli.net/2025/04/22/MOsAVIKhT2wSEGm.png',
        tag: ['Telegram', '说说'],
        Beta: {
            color: '#51b23c',
            bgColor: '#eef4ed',
            title: 'TG说说'
        },
        link: "https://shuoshuo.kemiao.online/"
    },
    // {
    //     name: "多鱼壁纸",
    //     describe: "你的专注浏览器起始页",
    //     logo: duoyuLogo,
    //     banner: WallpaperBanner,
    //     tag: ['小程序'],
    //     Beta: {
    //         color: '#919398',
    //         bgColor: '#f4f4f5',
    //         title: '学习项目'
    //     },
    //     link: "#"
    // },
    {
        name: "网站监控",
        describe: "对我部分网站的监控页",
        logo: montorLogo,
        banner: 'https://s2.loli.net/2025/04/22/uYwhcpf5jF1bd37.png',
        tag: ['网站监控'],
        Beta: {
            color: '#21853c',
            bgColor: '#eef65d',
            title: '网站监控'
        },
        link: "https://montor.kemeow.cn/"
    }
])
</script>
<style scoped lang='scss'>
.WorksPage {
    width: 100%;
    min-height: 100vh;
    padding: 100px 0;
    border-top: 1px solid #eee;
    background-color: #fafafa;


    .container-box {
        // height: 100%;
        // animation: bianda 2s linear forwards;


        .project {
            margin-top: 3rem;
            display: flex;
            flex-wrap: wrap;

            a {
                border-radius: 10px;
                overflow: hidden;
                width: calc(33.33% - 2rem);
                display: block;
                transition: all 0.5s ease;
                box-shadow: rgba(0, 0, 0, 0.05) 0 6px 10px;
                margin: 1rem;



                .view-img {
                    width: 100%;
                    height: 180px;
                    overflow: hidden;
                    background-color: #334d69;
                    position: relative;

                    &::after {
                        display: block;
                        content: "";
                        width: 100%;
                        height: 100%;
                        background-color: rgba(255, 255, 255, 0.05);
                        position: absolute;
                        top: 0;
                        left: 0;
                    }



                    .banner {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: center;
                        transition: all 0.5s ease;
                    }

                    .open-box {
                        position: absolute;
                        top: 0;
                        left: 0;

                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        z-index: 20;
                        color: #fff;
                        opacity: 0;
                        transition: all 0.5s ease;

                        .logo {
                            width: 75px;
                            height: 75px;
                            border-radius: 18px;
                            background-color: #fff;
                            padding: 10px;
                            box-sizing: border-box;
                        }

                        p {
                            margin-top: 1rem;
                        }
                    }
                }

                .view-img::after {
                    content: "";
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    // background-color: rgba(255, 255, 255, 0.03);
                    transition: all 0.5s ease;
                    z-index: 10;
                }

                .introduction {
                    width: 100%;
                    padding: 1rem 1rem 20px 1rem;
                    box-sizing: border-box;

                    p {
                        font-family: "微软雅黑";
                    }


                    .name {
                        font-size: 18px;
                        color: #000;
                        font-weight: 900;
                        font-family: "Times New Roman", Times, serif;
                    }

                    .describe {
                        font-size: 14px;
                        margin-top: 4px;
                        color: #555;
                        display: -webkit-box;
                        overflow: hidden;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;

                    }

                    .tag {
                        font-size: 12px;
                        margin-top: 10px;
                        color: #999;
                        position: relative;

                        span {
                            margin-right: 10px;
                        }

                        .HighlightTags {
                            position: absolute;
                            right: 0;
                            color: #6c38c0;
                            background-color: #efebf8;
                            border-radius: 3px;
                            padding: 0 6px;
                        }
                    }
                }

            }
        }

        .project a:hover {
            box-shadow: rgba(0, 0, 0, 0.15) 0 6px 10px;
        }

        .project a:hover .view-img .banner {
            transform: scale(1.05);
            opacity: 1;
        }

        .project a:hover .view-img::after {
            // opacity: 0;
            backdrop-filter: blur(3px);
        }

        .project a:hover .open-box {
            opacity: 1;
        }
    }
}


@media (max-width: 992px) {
    .project a {
        width: calc(50% - 2rem) !important;
    }
}

@media (max-width: 768px) {
    .project a {
        width: 100% !important;
    }
}



// @keyframes bianda{
//     0%{
//         border-radius: 20px;
//         width: 1230px;
//     }
//     100%{
//         border-radius: 0px;
//         width: 100%;
//     }
// }
</style>

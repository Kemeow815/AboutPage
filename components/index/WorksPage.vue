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

import ThinKingLogo from './assets/images/works/ThinKing/logo.png';
import ThinKingBanner from './assets/images/works/ThinKing/banner.png';

import PicLogo from './assets/images/works/Pic/logo.png';
// import PicBanner from './assets/images/works/Pic/banner.jpg';

import ZebraLogo from './assets/images/works/Zebra/logo.png';
import ZebraBanner from './assets/images/works/Zebra/banner.png';

import duoyuLogo from './assets/images/works/duoyu/logo.png';
import duoyuBanner from './assets/images/works/duoyu/banner.png';

import WallpaperBanner from './assets/images/works/duoyu/banner.jpg';

import moreGithub from './assets/images/works/more/github.png';
import moreBanner from './assets/images/works/more/banner.jpg';

import bilibiliLogo from './assets/images/works/bilibili/bilibili.png';
import bilibiliAutoWidescreenBanner from './assets/images/works/bilibili/bilibili-AutoWidescreen.png';

const data = ref([
    {
        name: "ThinKing 笔记知识管理平台",
        describe: "让创意与思维流畅连接，助你高效管理知识与灵感。",
        logo: ThinKingLogo,
        banner: ThinKingBanner,
        tag: ['全平台', '线上应用'],
        Beta: {
            color: '#6c38c0',
            bgColor: '#efebf8',
            title: 'Beta'
        },
        link: "https://www.note.zhangchengwei.work/home"
    },
    {
        name: "多鱼图床",
        describe: "用于上传图片、文件、压缩包等，转为网络链接供于下载或预览",
        logo: PicLogo,
        banner: 'https://picserver.duoyu.link/picfile/image/202306/07-1686097251837.jpg',
        tag: ['小程序', '网站', '线上应用'],
        Beta: {
            color: '#f7c959',
            bgColor: '#faf3da',
            title: '重构中'
        },
        link: "https://www.pic.duoyu.link/login.html"
    },
    {
        name: "斑马在线剪贴板",
        describe: "免费文本、图片、文件临时分享",
        logo: ZebraLogo,
        banner: ZebraBanner,
        tag: ['小程序', '网站', '线上应用'],
        Beta: {
            color: '#5a9cf8',
            bgColor: '#eef5fe',
            title: '开发中'
        },
        link: "https://www.zebra.duoyu.link/"
    },
    {
        name: "多鱼起始页",
        describe: "你的专注浏览器起始页，一键打开、收藏、管理，提升工作效率。",
        logo: duoyuLogo,
        banner: duoyuBanner,
        tag: ['Chrome插件', '线上应用'],
        Beta: {
            color: '#919398',
            bgColor: '#f4f4f5',
            title: '计划中'
        },
        link: "#",
    },
    {
        name: "b站自动宽屏",
        describe: "B站播放页自动点击宽屏",
        logo: bilibiliLogo,
        banner: bilibiliAutoWidescreenBanner,
        tag: ['Tampermonkey插件', 'bilibili'],
        Beta: {
            color: '#51b23c',
            bgColor: '#eef4ed',
            title: 'v1.0.3'
        },
        link: "https://greasyfork.org/zh-CN/scripts/531057-bilibili-b%E7%AB%99%E6%92%AD%E6%94%BE%E9%A1%B5%E8%87%AA%E5%8A%A8%E5%AE%BD%E5%B1%8F"
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
        name: "我的其它作品",
        describe: "一些早期 / 开发中 / 实验性的作品",
        logo: moreGithub,
        banner: moreBanner,
        tag: ['more'],
        link: "https://github.com/izcw"
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

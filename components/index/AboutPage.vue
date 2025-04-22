<template>
    <div class="AboutPage" id="about" ref="ObservePageRef">
        <div class="container container-box">
            <div class="title-box">
                <h2>关于我</h2>
            </div>
            <div class="display-view" :style="{ transform: `scale(${backsize})` }">

                <div class="Play-content" :class="{ 'Play-content-back': macPower }" v-show="macPower"
                    style="z-index: 20;">
                    <div v-show="!PowerStatus" style="width: 100%;height: 100%;">
                        <p class="typewriter scrollwriter p-text">
                            <span v-html="typewriter"></span><span class="cursorText" v-show="typewriterStatus">｜</span>
                        </p>
                    </div>
                    <img v-show="PowerStatus" class="startingup" src="/assets/images/mac-Bootanimation.jpg" alt="">

                    <!-- <video
                        src="https://picserver.duoyu.link/picfile/video/202307/24-1690170106993.mp4" loop autoplay muted
                        poster="/assets/images/bg3.png" preload="none"></video> -->
                </div>

                <img src="/assets/images/mac.png" style="z-index: 30;" class="mac-img" alt="">
                <img src="/assets/images/mac-off.png" style="z-index: -1;" class="mac-img" alt="">
            </div>

            <div style="display: flex;">
                <div class="keyboard-box" @click="RestartBoot">
                    <div class="keyboard-top">
                        <div class="keyboard-center">
                            重启
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';


// 检测是否滑到当前页面-----
const ObservePageRef = ref(null); // 引用 works 元素
const isInViewport = ref(false); // 是否在视口内
onMounted(() => {
    ObservePage(ObservePageRef, isInViewport, 40)
})


// 页面滚动-----
const pageHeight = ref(0);
const scrolledHeight = ref(0)
const backsize = ref(1)

function handleScroll() {
    if (import.meta.client) {
        pageHeight.value = window.innerHeight; // 页面高度
        scrolledHeight.value = window.scrollY; // 已滚动的高度
    }

    // console.log(pageHeight.value + "一页高度");
    // console.log(scrolledHeight.value * 0.001 + "滚动高度");

    if (scrolledHeight.value * 0.001 + 0.5 >= 1 && scrolledHeight.value * 0.001 + 0.5 <= 1.5) {
        backsize.value = scrolledHeight.value * 0.001 + 0.6
    }

    // 检测是否滚动了一页高度
    if (scrolledHeight.value >= pageHeight.value) {
        // console.log('页面已滑动一页高度');
        // 在此处执行您想要的操作
    }
}

onMounted(() => {
    if (import.meta.client) {
        handleScroll()
        window.addEventListener('scroll', handleScroll);
    }
});
onUnmounted(() => {
    if (import.meta.client) {
        window.removeEventListener('scroll', handleScroll);
    }
});


// 打字机
const typewriter = ref(''); // 初始化空字符串
const typewriterStatus = ref(true); // 控制光标显示
// 定义要打印的文本，包括 HTML 格式
const printText = `嗨，很高兴见到你啊！
这里是我的个人主页
里面展示我的所有<span class="HighlightText">作品</span>
以及<span class="HighlightText">联系</span>我的方式

我的网名是<span class="HighlightText">克喵爱吃卤面</span>
我是一个大二在读牛马，专业<span class="HighlightText">自动化技术与应用</span>

还是一名<span class="HighlightText">白日梦想家</span>。

我喜欢分享开源项目、资源和生活记录。
这个网站是我的个人主页~

好了！就说这么多吧，欢迎常来<span class="HighlightText">☺</span>`;


// 监听屏幕打印字，始终滚动至底部
watch(typewriter, () => {
    if (import.meta.client) {
        var container = document.querySelector('.scrollwriter');
        container.scrollTop = container.scrollHeight;
    }
})

// 调用 typeWriter 函数开始打字
// onMounted(() => {
//     RestartBoot()
// })

let macPower = ref(false)
let PowerStatus = ref(false)
let RestartBoot = () => {
    macPower.value = false
    setTimeout(() => {
        PowerStatus.value = true
        macPower.value = true
    }, 500)
    setTimeout(() => {
        PowerStatus.value = false
        typewriter.value = ''
        typeWriter(printText, typewriter, typewriterStatus);

    }, 1500)
}

let frequency = ref(0)
watch(isInViewport, () => {
    if (isInViewport.value && frequency.value <= 0) {
        RestartBoot()
        frequency.value++
    }
})


</script>
<style scoped lang='scss'>
.AboutPage {
    width: 100%;
    padding: 100px 0 200px 0;
    background-color: #fff;
    // border-top: 1px solid #eee;

    .container-box {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;



        p {
            color: #000;
            font-size: 16px;
            text-align: center;
            line-height: 36px;
        }


    }
}


// 显示器
.display-view {
    width: 208px;
    height: 280px;
    position: relative;
    margin: 6rem 0;


    .Play-content {
        width: calc(100% - 48px);
        height: 120px;
        margin: 31px 24px;
        border-radius: 10px;

        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        overflow: hidden;
        // background-color: #fff;


        video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        .startingup {
            opacity: 0;
            animation: aniStartingup 1s forwards;
        }

        .p-text {
            width: 100%;
            height: 100%;
            font-size: 12px;
            padding: 10px;
            box-sizing: border-box;
            color: #475667;
            line-height: 21px;
            overflow: hidden;
        }
    }

    .Play-content-back {
        background-color: rgba(191, 223, 249, 0.5);
        animation: aniPlayback 1s forwards;
        animation-delay: 1s;

    }

    .mac-img {
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
}

@keyframes aniStartingup {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes aniPlayback {
    0% {
        background-color: rgba(191, 223, 249, 0.5);
    }

    100% {
        background-color: rgba(191, 223, 249, 1);
    }
}

// 键盘
.keyboard-box {
    width: auto;
    min-width: 45px;
    height: 50px;
    border-radius: 20%;
    background-color: #716a57;
    background: linear-gradient(to right, #bab5a4, #716a57, #716a57, #bab5a4);
    position: relative;
    box-shadow: 0 10px 10px #999;
    cursor: pointer;
    user-select: none;
    margin: 1px;
    white-space: nowrap;
    padding: 0 8px;

    .keyboard-top {
        width: calc(100% - 8px);
        height: calc(100% - 8px);
        border-radius: 20%;
        position: absolute;
        top: -6px;
        left: 4px;
    }

    .keyboard-center {
        width: 100%;
        height: 100%;
        border-radius: 20%;
        box-shadow: inset 0px 0px 4px #fff;
        background-color: #b4b09f;
        background-image: radial-gradient(#b1aa97, #bab6a6, #b1aa97);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #43453d;
    }
}

.keyboard-box:hover .keyboard-top {
    top: -5px;
}

.keyboard-box:hover {
    box-shadow: 0 9px 10px #999;
}

.keyboard-box:active .keyboard-top {
    top: -3px;
}

.keyboard-box:active {
    box-shadow: 0 6px 10px #999;
}
</style>

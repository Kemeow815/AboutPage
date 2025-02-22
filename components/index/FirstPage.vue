<template>
    <div class="FirstPage" id="index">
        <div class="FirstPage-box">
            <div class="container container-box">
                <img class="logo" src="/assets/images/logo.png" alt="">
                <h1>白日作梦｜张成威</h1>
                <h2 class="typewriter">
                    <span v-html="typewriter"></span><span class="cursorText" v-show="typewriterStatus">｜</span>
                </h2>
                <p>/*&ensp;这里是张成威·Zhang Chengwei&ensp;的个人网站主页&ensp;*/</p>
            </div>

            <a href="#about" class="down-btn" draggable="false">
                <img src="/assets/icon/downward.png" class="btn-inside" alt="">
                <img src="/assets/icon/downward2.png" class="btn-outer" alt="">
            </a>
        </div>
    </div>

</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 页面滚动
// const pageHeight = ref(0);
// const scrolledHeight = ref(0)
// const backsize = ref(40)

// function handleScroll() {
//     if (import.meta.client) {
//         pageHeight.value = window.innerHeight; // 页面高度
//         scrolledHeight.value = window.scrollY; // 已滚动的高度
//     }

//     console.log(pageHeight.value + "一页高度");
//     console.log(scrolledHeight.value + "滚动高度");

//     // 检测是否滚动了一页高度
//     if (scrolledHeight.value >= pageHeight.value) {
//         console.log('页面已滑动一页高度');
//         // 在此处执行您想要的操作
//     }
// }

// onMounted(() => {
//     if (import.meta.client) {
//         handleScroll()
//         window.addEventListener('scroll', handleScroll);
//     }
// });
// onUnmounted(() => {
//     if (import.meta.client) {
//         window.removeEventListener('scroll', handleScroll);
//     }
// });



// 打字机
const typewriter = ref(''); // 初始化空字符串
const typewriterStatus = ref(true); // 控制光标显示
// 定义要打印的文本，包括 HTML 格式
const printText = `知不足而奋进 望远山而前行`;

// 调用 typeWriter 函数开始打字
onMounted(() => {
    setTimeout(() => {
        typeWriter(printText, typewriter, typewriterStatus);
    }, 800)
})
</script>
<style scoped lang='scss'>
.FirstPage {
    // padding-top: 100px;
    width: 100%;
    height: calc(100vh - 250px);
    background-color: #7247cb;
    background-image: linear-gradient(45deg, mediumpurple 25%, transparent 25%, transparent 75%, mediumpurple 75%), linear-gradient(-45deg, mediumpurple 25%, transparent 25%, transparent 75%, mediumpurple 75%);
    background-size: 128px 128px;
    background-attachment: fixed;
    animation: background-scrolling 4s infinite linear;
    box-shadow:inset 0 0 5px #503693;

    .FirstPage-box {
        width: 100%;
        height: 100%;
        position: relative;


        .container-box {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;


            .logo {
                width: 100px;
                // margin-bottom: 3rem;
            }

            h1 {
                font-size: 40px;
                margin-bottom: 3rem;
                white-space: nowrap;
            }

            h2 {
                font-size: 20px;
                margin-bottom: 3rem;
            }

            p {
                font-size: 14px;
            }
        }


        // 向下箭头
        .down-btn {
            user-select:none;
            
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: #fdf553;
            box-sizing: border-box;

            position: absolute;
            bottom: -50px;
            left: 0;
            right: 0;
            margin: 0 auto;
            padding: 10px;
            z-index: 9999;

            .btn-inside {
                position: absolute;
                width: 60px;
                height: 60px;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                animation: amplifyImage 3s infinite;
            }

            .btn-outer {
                width: 100%;
                height: 100%;
                animation: rotateImage 10s linear infinite;
            }
        }
    }




}

@keyframes amplifyImage {
    0% {
        transform: scale(0.95);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(0.95);
    }
}

@keyframes rotateImage {
    from {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(360deg)
    }
}

/* 背景*/
@keyframes background-scrolling {
    100% {
        background-position: 128px 128px;
    }
}
</style>

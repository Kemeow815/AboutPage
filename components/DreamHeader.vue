<template>
    <header>
        <div class="container container-box">
            <div class="title">
                <a href="/"><img class="logo" style="width: 30px;" src="https://s2.loli.net/2025/04/21/OMNycVpidhQt92r.png" alt="">
                    <h3>喵落阁｜克喵爱吃卤面</h3>
                </a>
            </div>

            <div class="Large-Display">
                <nuxt-link to="/">首页</nuxt-link>
                <a v-for="(item, index) in data" :key="index" :href="item.link">{{ item.title }}</a>
                <!-- <nuxt-link to="/language">简体CN</nuxt-link> -->
                <!-- <nuxt-link to="/language">☀☆</nuxt-link> -->
            </div>
            <div class="Small-Display" @click="moreNav()">
                <img src="@/assets/icon/menu.png" alt="">
            </div>
        </div>
    </header>
    <div class="ExpandPanel" v-show="morenavView">
        <div class="mask" @click="moreNav()">

        </div>
        <div class="box" :class="[morenavView ? 'morenavView' : 'morenavClose']">
            <div class="Small-Display" @click="moreNav()">
                <img src="@/assets/icon/close.png" alt="">
            </div>
            <div class="nav">
                <nuxt-link to="/" @click="moreNav()">首页</nuxt-link>
                <a v-for="(item, index) in data" :key="index" :href="item.link" @click="moreNav()">{{ item.title }}</a>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';

const data = ref([
    {
        title: "关于",
        link: "#about"
    },
    {
        title: "作品",
        link: "#works"
    },
    {
        title: "更多",
        link: "#more"
    }
])

let morenavView = ref(false)
let moreNav = () => {
    morenavView.value = !morenavView.value
}

watch(morenavView, (newValue) => {
    if (newValue) {
        // 禁止滚动
        document.body.style.overflow = 'hidden';
    } else {
        // 恢复滚动
        document.body.style.overflow = '';
    }
});
</script>
<style scoped lang='scss'>
header {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 999;

    background-color: #ffffffcb;
    backdrop-filter: blur(20px);
    border-bottom: 1px solid #eee;
    // box-shadow: 0 5px 10px #f5f5f5;

    .container-box {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title a {
            display: flex;
            align-items: center;

            img {
                margin-right: 10px;
            }
        }

        h3 {
            color: #000;

        }

        a {
            color: #000;
            padding: 26px 1.8rem;
            display: inline-block;
            font-weight: bold;

            &:hover,
            &:active {
                color: #6c49c4;
            }
        }





    }
}

.Small-Display {
    display: none;
    color: #333;

    img {
        width: 26px;
        padding: 4px;
        cursor: pointer;
    }
}

.ExpandPanel {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    // opacity: 0;
    transition: all 0.3s ease;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);

    .mask {
        width: 100%;
        height: 100%;
    }

    .box {
        padding: 1.5rem;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 99999;
        width: 300px;
        height: 100%;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .nav {
            border-top: 1px solid #eee;
            margin-top: 1rem;
            padding-top: 1rem;
            box-sizing: border-box;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            a {
                color: #000;
                padding: 1rem;

                &:hover,
                &:active {
                    color: #6c49c4;
                }
            }
        }
    }
}

// .openPanel {
//     display: block;
// }

.morenavView {
    animation: aninavView 0.3s forwards;
    right: -100%;
}

.morenavClose {
    right: 0;
    animation: aninavClose 0.3s forwards;
}

@media (max-width: 768px) {
    .Large-Display {
        display: none;
    }

    .Small-Display {
        display: block !important;
    }
}


@keyframes aninavView {
    0% {
        right: -100%;
        opacity: 0;
    }

    100% {
        right: 0;
        opacity: 1;
    }
}

@keyframes aninavClose {
    0% {
        right: 0;
        opacity: 1;
    }

    100% {
        right: -100%;
        opacity: 0;
    }
}
</style>

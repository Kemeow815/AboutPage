<template>
    <div v-if="isLoading" id="loading-screen" :class="{ 'blurEffectEnd': blurEffectEndStatus }">
        <div id="await-box" :class="{ 'await-boxEnd': blurEffectEndStatus }">
            <img src="https://s2.loli.net/2025/04/21/OMNycVpidhQt92r.png" alt="">
            <p>加载中...</p>
        </div>
        <div class="spinner">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isLoading = ref(true);
const blurEffectEndStatus = ref(false);

onMounted(() => {
    document.body.style.overflow = 'hidden'; // 禁止页面滚动
    blurEffectEndStatus.value = true

    let dom = document.querySelectorAll(".item");
    dom.forEach((item) => {
        item.classList.add('spinEnd');
    });

    setTimeout(()=>{
        document.body.style.overflow = '';// 恢复页面滚动
    },400)

    setTimeout(() => {
        isLoading.value = false;
    }, 800)

});
</script>

<style scoped lang='scss'>
#loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;


    #await-box {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            width: 100px;
        }
    }

    .await-boxEnd {
        animation: awaitbox 0.3s forwards;
    }
}

@keyframes awaitbox {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.blurEffectEnd {
    animation: blurEffectEnd 0.8s forwards;
}

@keyframes blurEffectEnd {
    0% {
        backdrop-filter: blur(10px);
        background-color: rgba(255, 255, 255, 0.1);

    }

    100% {
        backdrop-filter: blur(0px);
        background-color: rgba(255, 255, 255, 0);
    }
}

.spinner {
    width: 100%;
    height: 100%;
    display: flex;

    .item {
        width: 100%;
        height: 100%;
        background-color: #6c49c4;
    }

    .spinEnd {
        animation: spinEnd 0.3s forwards;
    }

    @for $i from 1 to 11 {
        .item:nth-child(#{$i}) {
            animation-delay: #{$i * 0.03}s;
        }
    }
}

@keyframes spinEnd {
    0% {
        height: 100%;
    }

    100% {
        height: 0px;
    }
}
</style>

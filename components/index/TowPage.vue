<template>
    <div class="TowPage">
    </div>
</template>
<script setup>

</script>
<style scoped lang='scss'>
.TowPage {
    width: 100%;
    height: calc(250px - 79.5px);
    // opacity: 0.5;
    // background-image: url(~/assets/images/640.webp);
    // background-image: url(~/assets/images/header3.png);
    background-repeat: no-repeat;
    background-repeat: repeat-x;
    background-size: cover;
    /* 横向平铺 */
    animation: moveBackground 20s linear infinite;
    /* 应用动画 */
}

/* 定义动画效果 */
@keyframes moveBackground {
    from {
        background-position: 0 0;
        /* 向左移动 */

    }

    to {
        background-position: 100% 0;
        /* 从右边开始 */

    }
}
</style>

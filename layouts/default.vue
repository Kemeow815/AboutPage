<template>
    <div class="Home-box">
        <LoadingScreen />
        <main>
            <indexFirstPage />
            <indexTowPage />
            <DreamHeader />
            <!-- <indexTestPage /> -->
            <indexAboutPage />
            <indexWorksPage />
            <slot></slot>
        </main>
        <DreamFooter />
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

</script>
<style scoped lang='scss'>
.Home-box {
    position: relative;
}
</style>

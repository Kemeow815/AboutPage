// 检测元素是否进入窗口
import { ref, onMounted, onUnmounted } from 'vue';

export function ObservePage(ObservePageRef, isInViewport, thresholdValue = 50) {
    // 将 thresholdValue 转换为 0 到 1 之间的比例
    const threshold = thresholdValue / 100;

    // 检查 threshold 是否在 0 和 1 之间
    if (threshold < 0 || threshold > 1) {
        console.error('Threshold value must be between 0 and 100.');
        return;
    }

    // 创建 Intersection Observer 实例
    const observer = new IntersectionObserver((entries) => {
        // entries 是一个 IntersectionObserverEntry 的数组
        entries.forEach((entry) => {
            if (entry.intersectionRatio >= threshold) {
                // 如果元素的可见比例大于等于 threshold
                console.log(`元素进入视口的 ${thresholdValue}% 以上`);
                isInViewport.value = true;
            } else {
                // 如果元素的可见比例小于 threshold
                console.log('元素离开视口');
                isInViewport.value = false;
            }
        });
    }, {
        threshold: threshold // 使用经过处理的 threshold 值
    });

    // 开始观察 ObservePageRef 元素
    if (ObservePageRef.value) {
        observer.observe(ObservePageRef.value);
    }

    // 组件卸载时停止观察
    onUnmounted(() => {
        if (ObservePageRef.value) {
            observer.unobserve(ObservePageRef.value);
        }
    });
}

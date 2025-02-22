// 打字机.js

import { ref } from 'vue';
let timerId
export function typeWriter(text, typewriter, typewriterStatus) {
    const length = text.length;
    let currentIndex = 0;
    clearTimeout(timerId);

    function displayNextChar() {
        if (currentIndex >= length) {
            setTimeout(() => {
                typewriterStatus.value = false; // 停止光标闪烁
            }, 1000)
            return;
        }

        let currentChar = text[currentIndex];

        if (currentChar === '<') {
            // 处理 HTML 标签
            let tag = '';
            while (currentChar !== '>' && currentIndex < length) {
                tag += currentChar;
                currentIndex++;
                currentChar = text[currentIndex];
            }
            tag += '>'; // 添加结束符 '>'
            typewriter.value += tag; // 添加标签内容
        } else if (currentChar === '\n') {
            // 换行符
            typewriter.value += '<br>';
        } else {
            // 普通字符
            typewriter.value += currentChar;
        }

        currentIndex++;
        timerId = setTimeout(displayNextChar, 200); // 每个字符延迟100ms
    }

    displayNextChar();
}

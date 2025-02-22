<template>
    <footer>
        <div class="container" id="more">
            <div class="title-box">
                <h2>想要了解更多？</h2>
                <p>你需要的都在这里&emsp;</p>
            </div>
            <div class="mylinks_div">
                <a class="item" href="https://www.zhangchengwei.work" target="_blank" rel="张成威的网络日志">
                    <div class="mylinks">
                        <img src="@/assets/images/icon/blog.png" alt="" class="item_mylinks_img">
                        <img src="@/assets/images/icon/blog2.png" alt="" class="item_mylinks_img2">
                        <p>BLOG</p>
                    </div>
                </a>
                <div class="item HoverPrompt">
                    <div class="PromptBox">
                        <div>
                            <img src="@/assets/images/WeChat.png" alt="">
                            <p>请通过微信与我联系</p>
                        </div>
                    </div>
                    <div class="mylinks">
                        <img src="@/assets/images/icon/cv.png" alt="" class="item_mylinks_img">
                        <img src="@/assets/images/icon/cv2.png" alt="" class="item_mylinks_img2">
                        <p>简历</p>
                    </div>
                </div>
                <a class="item" href="https://github.com/izcw" target="_blank" rel="Github">
                    <div class="mylinks">
                        <img src="@/assets/images/icon/github.png" alt="" class="item_mylinks_img">
                        <img src="@/assets/images/icon/github2.png" alt="" class="item_mylinks_img2">
                        <p>Github</p>
                    </div>
                </a>
            </div>
            <div class="account">
                <img src="@/assets/images/official.jpg" alt="微信公众号搜索:程序员张某"
                    title="微信公众号搜索:程序员张某">
            </div>
        </div>

        <div class="nav">
            <a href="https://www.zhangchengwei.work" rel="©2022-2025 张成威" title="©2022-2025 张成威">©2025 张成威</a>
            <a href="mailto:zhangchengwei.work@outlook.com">我的邮箱</a>
        </div>

        <div
            style="margin: 0px auto; padding-bottom:3rem; display: flex; flex-wrap: wrap; justify-content: center;font-size: 12px;">
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=45098102000465"
                title="桂公网安备 45098102000465号"
                style="text-decoration: none; display: flex; flex-direction: row; align-items: center; justify-content: center;"><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAC2VBMVEUAAAD+/ODz6Kr//+PeqFfYrn3x167oxnyaaVzhs2ifaFXbrGLkvFnpyF7v2X/kwm3cp1nhsGfqw3rZqG3ntVzjrFPt3oDjvGnfr2fbnFGti3q0lH7ktoLryXn9v1T4znr/74bnvGz034v+2I/ktoDz6ZLkwY/Dfz7buoftzYbq2IPr0pjs3bLv6KPRrnbKhFv79ND488n/+dDZr4Lx38f/+cH/95f42oL7/97s2Y3++uzw1rvTk3DmuloAAHkBAm7uzWYAAGXktV3qvFr/0ljksE7fo0rWHxhrdocAAIAABHf143Pyy27w1GwGA2jtymHpwWDqxV/qyVyTeFrrwFflwFPislP+xVLpsErbmUfVkEbysETemUTpgj7ThT3XdTg5FDjdhTXWZTDaTCm7TCbTOCLXPiD9LA/QFg3UAwnOAQOEj5kcPpdyhZSptJEACJFpfo4AG44XMInFvYfTvIejmYSVkINyeoJzdoK9un6SjX7FrnwAEHp8enny2HjWwHjKtnhcX3jYzHeNhnfu2HWUjHWsonPNwnH70m9WTm8AAW//723pym3dtmn/0mbnxGa0o2ZeWWb8zGT/4mPtwmJuYmL/22D/vmB5ZGC9kF7/2l0MAF3uyFqnjVn4xFjYnli0mVi5i1jiqVfyyVbmtlbXkVNUOFPlvFLpt1LNrFKjfVLuvlBgHlDsuU/ouU9ONU/ov05ODk7/2E02Gk3jqkqEaUr/tUngjkf7n0bXikb6xERCJETdn0LckUG1gD/ooD3Ulj3jkz3TZT3WjjzOeDqBWDr3pDnglTlMADnbbTf2gjbkbzaTYDZpAjbplzTtcTTEazPXXzOeXzDscS3MPi38jizJWSrVSCrrXynzfCjVdCjZRyjTQCbFUiTlYCPXPSHLPSHWMR/wXh7iRh7GPh3PLBrSIRrWGhfMJxPGJxPRDBG/ABG2ABCxDg7BDAvEGArZAAbJAALPAABwPJeHAAAAPXRSTlMACEIaxqxp+/v59/X08Ozs6+fm5eTk4eDb0tHLx8TDwb68urKxq5+cmJWTjIN8b11cWkxIQUE1MCknIRwUAZA0XgAAAXFJREFUGNNigAJmNmkpNmYGZGDKynXp6NZVHKxGCDHGmQlnLty73NuWsJARrlV+ffDNzNTkrB15y5Shohacmydefeb+9HbGu+keu4UswYJmrZ5zH2U+fP4q9eONSvtmc5CYtVyV177HH9zvp7l/SmvqqlWwAgrqHSv1XHAq69qB0O0Z59vty1x0gIIa56rzp+5KeZIUf3Ln5Bl2xdFqQEHhRJ8c+5TY6w8u3jl9yK+o7rgEUBAw7iPbcu3epCfdjY9Nf+1XEB4nDhRU2TOppPDE2/cvXyRfOVvT0BGmCRSU2buoL9vL0XHjmtmOduWznLbIAgXZ5y896FMf7DFhZWNnxZT9ka58QEHD5W5Rt+ZN2xQe7dLtkhgVFsQEcr0Bb2jcYQdnV1sH35jIHn6wGIOJYFDgkpDAAH9nN1vffgGIoJJ3i5OTs2vAihg3W1sHb1VIaGrxrFu8OmJtRMicDf5iurAAtdFXZ5EUFWFR1DYG8wEUrIUMZ1ticAAAAABJRU5ErkJggg==">
                <p
                    style="margin: 0px 0px 0px 5px; color: rgb(147, 147, 147); height: 20px; line-height: 20px; white-space: nowrap; word-break: break-all;">
                    桂公网安备 45098102000465号
                </p>
            </a>
            <a target="_blank" href="https://beian.miit.gov.cn/" title="桂ICP备2022009640号-1"
                style="display: inline-block; text-decoration: none; padding-left: 1em; margin: 0px 0px 0px 5px; color: rgb(147, 147, 147); height: 20px; line-height: 20px;">桂ICP备2022009640号-1</a>
        </div>
    </footer>
</template>
<script setup>
</script>
<style scoped lang='scss'>
footer {
    background-color: #fafafa;
    border-top: 1px solid #eee;
    padding: 100px 0 1rem 0;

    .nav {
        display: flex;
        justify-content: center;

        a {
            font-size: 12px;
            line-height: 24px;
            color: #666;
            margin: 0 6px;
            line-height: 20px;
            white-space: nowrap;
        }

    }


    .mylinks_div {
        width: fit-content;
        border: 1px solid #eee;
        display: flex;
        justify-content: center;
        margin: 3rem auto 1rem auto;

        .mylinks {
            width: 30px;
            height: 30px;
            border: 1px solid #eee;
            padding: 10px;
            margin: 10px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                width: 22px;
                height: 22px;
            }

            .item_mylinks_img2 {
                display: none;
            }

            p {
                font-size: 12px;
                text-align: center;
                color: #515151;
                line-height: 18px;
                padding: 0;
                margin: 0;
                font-weight: bold;
            }
        }

        .mylinks:hover,
        .mylinks:active {
            border: 1px solid #000;

            p {
                color: #000;
            }

            .item_mylinks_img {
                display: none;
            }

            .item_mylinks_img2 {
                display: block;
            }
        }
    }

    .account {
        width: 280px;
        margin: 0 auto;
        padding-bottom: 3rem;

        img {
            width: 100%;
        }
    }
}


// 悬浮提示框
.HoverPrompt {
    position: relative;

    .PromptBox {
        position: absolute;
        top: -220px;
        left: calc(-50% - 25px);
        width: 200px;
        height: 220px;
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
        border-radius: 10px;
        padding: 10px;
        box-sizing: border-box;
        display: none;
        transition: all 0.5s ease;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            img {
                width: 100%;
            }

            p {
                font-size: 12px;
                color: #000;
            }
        }

    }
}

.HoverPrompt:hover .PromptBox,
.HoverPrompt:active .PromptBox {
    display: block;
}
</style>

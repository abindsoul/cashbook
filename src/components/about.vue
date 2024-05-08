<!-- 关于 -->
<template>
    <div id="about" class="about">
        <h2 class="about-title">关于本站</h2>
        <p>本站是一个简单便携的记账网站</p>
        <p>数据都储存在你使用的浏览器内</p>
        <p>更换浏览器使用需要重新添加</p>
        <p style="color:red">清理浏览器浏览记录可能会导致数据丢失</p>
        <h4 class="about-title-go">点击下方链接前往:</h4>
        <ul class="about-list">
            <li><a href="https://afreesoul.top" target="_blank">作者博客</a></li>
            <li><a href="http://okxdm.com" target="_blank">引导简页</a></li>
            <li><a href="mailto:l7342500@gmail.com" target="_blank">联系作者</a></li>
        </ul>
        <footer>
            <p>Copyright © 2023 afreesoul All Rights Reserved.</p>
            <p style="color:red">开源项目,仅供学习交流，禁止一切商用,倒卖行为</p>
        </footer>
    </div>
</template>

<script >
</script>
<style scoped  lang="scss">
#about {
    margin-top: 30px;

    .about-title {
        padding-bottom: 15px;
    }

    .about-title-go {
        padding: 15px 0;

    }

    p {
        padding: 5px 0;
    }

    .about-list {
        list-style: none;

        li {
            padding: 5px 0;

            a {
                text-decoration: none;
                color: black;
            }
        }
    }
}
</style>
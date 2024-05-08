<!-- 收支导航 -->
<template>
    <div id="billings-nav" class="billings-nav">
        <ul class="billings-nav-list">
            <li><router-link to="/">收支</router-link></li>
            <li><router-link to="/billingsIncome">收入</router-link></li>
            <li><router-link to="/billingsPay">支出</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
</script>
<style scoped  lang="scss">
#billings-nav {
    margin-top: 15px;

    .billings-nav-list {
        display: flex;
        list-style: none;
        justify-content: space-between;
        align-items: center;

        li {
            min-width: 65px;
            width: 100%;
            height: 100%;
            text-align: center;
            background-color: transparent;
            transition: all 0.3s;



            &:hover {
                background-color: #fff;
                box-shadow: 3px 3px 3px 1px #ccc;

            }

            a {
                text-decoration: none;
                color: black;
                display: block;
                padding: 15px 10px;

            }
        }
    }
}
</style>
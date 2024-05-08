<!--  -->
<template>
    <!--  -->
    <div class="biList">
        <ul>
            <li v-for="(item, index) in filteredMoeny" :key="index" ref="lis" :class="{ 'green-bac': item.useIsPay }">
                <span @dblclick="changeInput(item, index)">『{{ item.usetText }}』
                    <small>「{{ item.usTime }}」</small>
                    <input v-on:keyup.enter="setChInputText(item)" v-show="item.useIsInput" type="text"
                        v-model.trim="chInputText" ref="inputFs">
                </span>
                <span>
                    ￥
                    <small v-if="item.useIsPay">-</small>
                    <small v-else>+</small>
                    {{ item.usMoney }}
                    <small style="z-index: 9;" @click="del(item)">✖</small>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'biList',
    components: {},
    data() {
        return {}
    },
    computed: {},
    watch: {},
    created() { },
    mounted() { },
    methods: {}
}
</script>
<style lang="scss" scoped></style>
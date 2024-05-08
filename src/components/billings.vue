<!-- 收支明细 -->
<template>
    <div id="billings">
        <billingsSlot>
            <template #title>
                <h2>收支明细</h2>
                <input v-model="search" type="text" placeholder="search Text" maxlength="10">
            </template>
            <template #list>
                <!-- 明细列表 -->
                <li v-for="(item, index) in filteredMoeny" :key="index" ref="lis"
                    :class="{ 'green-bac': item.useIsPay }">
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
            </template>
        </billingsSlot>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { myMixin } from '../mixins'
import billingsSlot from './billingsSlot.vue'
export default {
    components: {
        billingsSlot,
    },
    mixins: [myMixin],
    computed: {
        ...mapGetters([
            'useList',
        ]),
        filteredMoeny() {// 搜索功能
            return this.useList.filter(item => {
                return item.usetText.match(this.search);
            },)
        }
    },
}
</script>
<style scoped lang="scss"></style>../mixins
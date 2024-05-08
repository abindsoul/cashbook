<!-- 收入明细 -->
<template>
    <div id="billingsIncome">
        <billingsSlot>
            <template v-slot:title>
                <h2>收入明细</h2>
                <input v-model="search" type="text" placeholder="search Text" maxlength="10">
            </template>
            <template v-slot:list>
                <ul>
                    <li v-for="(item, index) in filteredMoeny" :key="index" :class="{ 'green-bac': item.useIsPay }">
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
            </template>
        </billingsSlot>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { myMixin } from '../mixins'
import billingsSlot from './billingsSlot.vue'
export default {
    components: { billingsSlot },
    mixins: [myMixin],
    computed: {
        ...mapGetters([
            'incomeList',
        ]),
        filteredMoeny() {
            return this.incomeList.filter(item => {
                return item.usetText.match(this.search);
            },)
        }
    },

}
</script>
<style scoped lang="scss">
.billings-card {
    margin-top: 15px;
    max-height: 530px;
    overflow-y: auto;
}
</style>
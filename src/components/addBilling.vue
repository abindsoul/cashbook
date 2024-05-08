<!-- 添加收支记录 -->
<template>
    <div id="addBilling" class="addBilling" @click.stop>
        <h2>添加收支记录</h2>
        <div class="addForm">
            <form>
                <label class="addLabel" for="use">Text</label>
                <input class="addText" ref="inputFs" v-model.trim="inputMoney.inputText" required type="text" name="use"
                    placeholder="请输入开支用途" maxlength="15">
                <label class="addLabel" for="money">Money <small>*支出金额前必须写入-,如:-500表示支出了500,收入金额直接填入数字即可</small></label>
                <input class="addText" @focus="onFocus($event)" v-model="inputMoney.intMoney" required type="number"
                    name="money" placeholder="请输入开支数额" maxlength="10">
                <button class="addBtn" @click.prevent.stop="addBilling">添加</button>
            </form>
        </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex';
const negReg = /^(\-)\d+(\.\d+)?$/;
const offReg = /^(\+)\d+(\.\d+)?$/;

export default {
    data() {
        return {
            inputMoney: {
                intputTime: '',
                inputText: '',
                intMoney: 0,
                inputIsPay: false,
                inputIsInput: false,
            },

        }
    },
    methods: {
        //获取焦点
        getFocus() {
            this.$refs.inputFs.focus();
        },
        //input焦点选择当前框内所有值
        onFocus(event) {
            event.currentTarget.select();
        },
        ...mapActions([
            'saveUseList',//进行本地存储以及添加
            'getUseList',//读取本地存储的数据
        ]),
        // 添加新的开支记录
        addBilling() {
            // 判断是否为空
            if (this.inputMoney.inputText == ''
                ||
                this.inputMoney.intMoney == 0) {
                alert('请输入正确的金额');
                return;
            } else if (negReg.test(this.inputMoney.intMoney)) {//判断-号
                this.inputMoney.inputIsPay = true;
                this.inputMoney.intMoney = this.inputMoney.intMoney * -1;
                this.inputMoney.intputTime = this.getTime();
                this.saveUseList(this.inputMoney)
                this.initialize();
            } else if (offReg.test(this.inputMoney.intMoney)) {//判断+号
                let money = this.inputMoney.intMoney.split('+')[1] * 1
                this.inputMoney.intMoney = money;
                this.inputMoney.intputTime = this.getTime();
                this.saveUseList(this.inputMoney)
                this.initialize();
            } else {
                this.inputMoney.intputTime = this.getTime();
                this.saveUseList(this.inputMoney)
                this.initialize();
            }


        },
        initialize() {
            //初始化输入的数据
            this.inputMoney.inputText = '';
            this.inputMoney.intMoney = 0;
            this.inputMoney.inputIsPay = false;
        },
        getTime() {//获取时间
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();
            return year + '/' + month + '/' + day + '/' + hour + ':' + minute + ':' + second;
        }
    },
    // 初始化数据
    mounted() {
        let useList = JSON.parse(localStorage.getItem('useList' || ''))
        if (useList === null) {
            useList = [];
            this.getUseList(useList)

        } else {
            this.getUseList(useList)
        }
    }
}

</script>
<style scoped lang="scss">
#addBilling {
    text-align: left;

    h2 {
        padding: 15px 0;
    }

    .addForm {
        .addLabel {
            display: block;
            padding: 15px 0;
            font-weight: 600;
        }

        .addText {
            display: block;
            margin: 15px 0;
            width: 100%;
            height: 30px;
            padding: 15px;
            outline: none;
            border: 1px solid #ccc;
        }

        .addBtn {
            width: 100%;
            background-color: #007bff;
            color: #fff;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 18px;
            padding: 15px 0;
            margin: 15px 0;

            &:hover {
                background-color: #0069d9;
            }
        }
    }
}
</style>
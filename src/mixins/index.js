import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export const myMixin = {
    data() {
        return {
            search: '',
            chInputText: '',
            isHaveChangeInput: false,
        }
    },
    methods: {
        ...mapMutations([
            'setDelMoney'
        ]),
        ...mapActions([
            'toChangeUseList',
        ]),
        // 删除项
        del(item) {
            this.setDelMoney(item.usTime);
        },
        // 显示隐藏输入框
        changeInput(item, index) {
            if (this.isHaveChangeInput) {
                console.log('请先修改完当前项');
                return;
            } else {
                this.isHaveChangeInput = true;
                item.useIsInput = !item.useIsInput;
                if (item.useIsInput) {
                    this.chInputText = item.usetText;
                    this.$nextTick(() => {
                        this.$refs.inputFs[index].focus()
                    })
                }
            }

        },

        // 提交输入框内容
        setChInputText(item) {
            if (this.chInputText == '') {
                return;
            } else {
                let text = {
                    usTime: item.usTime,
                    usetText: this.chInputText,
                    useIsInput: false,
                };
                this.toChangeUseList(text);
                this.iniChInputText();
            };

        },
        iniChInputText() {
            // 初始化输入框内容
            this.chInputText = '';
            this.isHaveChangeInput = false;
        }

    },
}
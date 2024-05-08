import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allMoney: 0, // 总金额
    allPay: 0, // 总支出
    allIncome: 0, // 总收入
    payList: [],//支出列表
    incomeList: [],//收入列表
    //资金使用列表
    useList: [
    ],
    pay: 0,//支出金额
    income: 0,//收入金额
  },
  getters: {
    // 余额
    allMoney: state => state.allIncome - state.allPay,
    // 总支出
    allPay: (state) => {
      let sum = 0;
      state.useList.forEach(item => {
        if (item.useIsPay) {
          sum += item.usMoney * 1;
        }
      }
      )
      state.allPay = sum;
      return sum;
    },
    //总收入 
    allIncome: (state) => {
      let sum = 0;
      state.useList.forEach(item => {
        if (!item.useIsPay) {
          sum += item.usMoney * 1;

        }
      }
      )
      state.allIncome = sum;
      return sum;

    },
    //支出列表
    payList: (state) => {
      return state.useList.filter(item => item.useIsPay)
    },
    //收入列表
    incomeList: (state) => {
      return state.useList.filter(item => !item.useIsPay)
    },
    //资金使用列表
    useList: state => state.useList,
    //资金使用
    useMoney: state => state.useMoney,
    //支出金额
    pay: state => state.pay,
    //收入金额
    income: state => state.income,


  },
  mutations: {
    // 读取资金使用列表
    setUseList(state, value) {
      state.useList = value
    },
    // 资金使用
    setuseMoney(state, value) {
      let useMoney = {
        usTime: null,
        usetText: null,
        usMoney: null,
        useIsPay: null,
      }
      useMoney.usTime = value.intputTime;
      useMoney.usetText = value.inputText;
      useMoney.usMoney = value.intMoney;
      useMoney.useIsPay = value.inputIsPay;
      useMoney.useIsInput = value.inputIsInput;
      state.useList.unshift(useMoney);
    },
    //删除金额
    setDelMoney(state, value) {
      for (let i = 0; i < state.useList.length; i++) {
        if (state.useList[i].usTime == value) {
          state.useList.splice(i, 1)
        }
      }
      localStorage.setItem('useList', JSON.stringify(state.useList))
    },
    // 修改列表
    changeUselist(state, value) {
      state.useList.filter((item) => {
        if (item.usTime == value.usTime) {
          item.usetText = value.usetText;
          item.useIsInput = value.useIsInput;
        }
      });
      localStorage.setItem('useList', JSON.stringify(state.useList))
    },
    //删库跑路
    delUseList(state) {
      state.useList = [];
      localStorage.setItem('useList', JSON.stringify(state.useList))
    }
  },
  actions: {
    // 储存资金使用列表
    saveUseList({ commit }, value) {
      commit('setuseMoney', value)
      localStorage.setItem('useList', JSON.stringify(this.state.useList))
    },
    //获取资金使用列表
    getUseList({ commit }, value) {
      commit('setUseList', value)
    },
    //修改资金列表
    toChangeUseList({ commit }, value) {
      commit('changeUselist', value)
    },
    // 删库跑路
    rmAll({ commit }, value) {
      localStorage.clear()
      commit('delUseList', value)
    }
  },

})

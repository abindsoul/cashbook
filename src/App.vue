<template>
  <div id="app">
    <div class="container" @click="closeShow">
      <nav>
        <h1>小金库</h1>
      </nav>
      <div class="balance-box">
        <Balance></Balance>
      </div>
      <div class="billings-box">
        <billings-nav></billings-nav>
      </div>

    </div>
    <div class="add-billing-box" :class="{ active: isShow }">
      <div class="move" @click="show">
        <add-billing ref="toAdd"></add-billing>
      </div>

    </div>
  </div>
</template>
<script>
import Balance from './components/balance.vue'
import BillingsNav from './components/billingsNav.vue'
import AddBilling from './components/addBilling.vue';

export default {
  components: {
    Balance,
    'add-billing': AddBilling,
    'billings-nav': BillingsNav,
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
      this.$refs.toAdd.getFocus();//触发子组件获取焦点函数

    },
    closeShow() {
      if (this.isShow === true) {
        this.isShow = false;

      } else {
        return;
      }
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.active {
  left: 35px !important;

  @media screen and (max-width: 640px) {
    left: 0px !important;
  }
}

::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}

#app {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f6f6f6;
  height: auto;

  @media screen and (max-width: 640px) {
    position: relative;

  }
}

.container {
  position: relative;
  width: 35%;
  // min-height: 80vh;
  margin: 0 auto;
  padding: 35px;
  z-index: 1;
  overflow: hidden;

  @media screen and (min-width: 992px) and (max-width:1200px) {
    width: 65%;
  }

  @media screen and (min-width: 640px) and (max-width:992px) {
    width: 75%;

  }

  @media screen and (max-width: 640px) {
    width: 95%;
  }

  nav {
    letter-spacing: 0.1rem;

    h1 {
      font-size: 2em;
    }
  }

  .balance-box {
    margin-top: 35px;

  }


}

.add-billing-box {
  width: 350px;
  position: fixed;
  top: 50%;
  left: -325px;
  transform: translateY(-50%);
  z-index: 999;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 1px 1px 10px #ccc;
  transition: all 0.5s;

  .move {
    position: relative;
    width: 100%;
    height: 100%;


    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -20px;
      transform: translateY(-50%);
      width: 10px;
      height: 100px;
      background-color: rgb(20, 20, 18);
      border-radius: 5px;
    }

    &:hover::after {
      background-color: #eee7e7;
      box-shadow: 1px 1px 10px #fff;
    }
  }
}
</style>

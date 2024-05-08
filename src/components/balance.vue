<template>
  <div id="balance">
    <div class="title">
      <h2>资产剩余</h2>
      <span @click="rmRf" title="点击会删除所有数据,慎点">卍</span>
    </div>
    <div class="balance-content">
      <h1 :class="{ red: isBurden }">￥{{ allMoney }}</h1>
      <div class="balance-content-item">
        <div class="income">
          <h3>总收入</h3>
          <p>+￥{{ allIncome }}</p>
        </div>
        <div class="pay">
          <h3>总支出</h3>
          <p>-￥{{ allPay }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'allMoney',//资产剩余
      'allPay',//总支出
      'allIncome',//总收入
    ]),
    isBurden() {
      return this.allMoney < 0;
    }

  },
  methods: {
    rmRf() {
      if (confirm('确定要删除所有数据吗?')) {
        this.$store.dispatch('rmAll');
      }
    }
  }
}



</script>

<style scoped lang="scss">
#balance {
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 20px;

      &:hover {
        cursor: pointer;
        animation: rotate 1s linear infinite;
      }

    }
  }

  .balance-content {
    margin-top: 15px;

    .red {
      color: red !important;
    }

    .balance-content-item {
      margin-top: 15px;
      padding: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 1px 1px 3px #ccc;
      background-color: #fff;
      text-align: center;
      transition: box-shadow 0.3s;

      &:hover {
        box-shadow: 2px 2px 5px #ccc;

      }

      p {
        padding-top: 5px;
        font-size: 1.2rem;
      }

      .income {
        flex: 1;
        border-right: 1px solid #ccc;
      }

      .pay {
        flex: 1;

        p {
          color: red;
        }
      }
    }
  }
}

// 旋转动画
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>

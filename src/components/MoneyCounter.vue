<template>
    <div>
        <h3 :style="changeCounterColor">{{((currency == "$" || currency == "£" ? currency : ''))}} {{counterData.toFixed(2)}} {{(currency !== "$" && currency !== "£") ? currency : ''}}</h3>
    </div>
</template>
<script>
export default {
  name: 'MoneyCounter',
  props: {
    counterData: Number
  },
  data () {
    return {
      currency: JSON.parse(window.localStorage.getItem('vue-loan-calc-data')).currency ? JSON.parse(window.localStorage.getItem('vue-loan-calc-data')).currency : '$'
    }
  },
  computed: {
    changeCounterColor () {
      let currentColor

      const green = '#008800'
      const red = '#AA0000'

      if (this.$route.name === 'loans' && this.counterData > 0) {
        currentColor = green
      } else if (this.$route.name === 'debts' && this.counterData > 0) {
        currentColor = red
      } else {
        if (this.counterData > 0) {
          currentColor = green
        } else if (this.counterData < 0) {
          currentColor = red
        }
      }
      return {
        color: currentColor
      }
    }
  }
}
</script>
<style scoped>
    h3{
      margin-top: 4px;
    }
    @media (max-width: 450px){
    h3{
        font-size: 16px;
    }
    }
</style>

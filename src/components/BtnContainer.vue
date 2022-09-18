<template>
    <div class="button-container color background-color container">
        <TitleDiv />
        <h3>Total balance:</h3>
        <MoneyCounter :counterData="loadData"/>
        <ButtonLink link="/loans" name='Loans'/>
        <ButtonLink link="/debts" name='Debts'/>
        <OutsideLink link="https://github.com/Piotrullllo/vue-loan-calculator" name="Project's Github site"/>
    </div>
  </template>

<script>
import TitleDiv from '@/components/TitleDiv.vue'
import ButtonLink from '@/components/ButtonLink.vue'
import MoneyCounter from '@/components/MoneyCounter.vue'
import OutsideLink from './OutsideLink.vue'

export default {
  name: 'BtnContainer',
  components: {
    TitleDiv,
    ButtonLink,
    MoneyCounter,
    OutsideLink
},
  computed: {
    loadData () {
      let downloadedData

      if (window.localStorage.getItem('vue-loan-calc-data') === null) {
        downloadedData = {
          loans: [],
          debts: []
        }
      } else downloadedData = JSON.parse(window.localStorage.getItem('vue-loan-calc-data'))

      let countedBalance = 0

      downloadedData.loans.forEach(loan => { countedBalance += Number(loan.money) })
      downloadedData.debts.forEach(debt => { countedBalance -= Number(debt.money) })

      return countedBalance
    }
  }
}
</script>

<style scoped>
    .button-container{
        padding-bottom: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 400px;
        border-radius: 10px;
    }
    h3{
      margin: 4px 0;
    }
    @media (max-width: 450px){
        .button-container{
            width: 90%;
        }
        h3{
          font-size: 16px;
        }
    }
</style>

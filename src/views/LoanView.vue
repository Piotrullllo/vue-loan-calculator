<template>
    <EntriesContainer @rem-entry="removeEntry" :loans="preparedLoans" :debts="preparedDebts" :countDat="counterData"/>
    <FormInputs @entry-info="publishEntry"/>
</template>

<script>
import FormInputs from '@/components/FormInputs.vue'
import EntriesContainer from '@/components/EntriesContainer.vue'

export default {
  name: 'LoanView',
  data () {
    return {
      preparedLoans: [],
      preparedDebts: [],
      counterData: 0,
    }
  },
  components: {
    FormInputs,
    EntriesContainer
  },
  methods: {
    publishEntry (obj) {
      let localhostData

      if (window.localStorage.getItem('vue-loan-calc-data') === null) {
        localhostData = {
          loans: [],
          debts: [],
          currency: '$'
        }
      } else localhostData = JSON.parse(window.localStorage.getItem('vue-loan-calc-data'))

      obj.id = null

      if (obj.route === 'loans') {
        localhostData.loans.push(obj)
      } else if (obj.route === 'debts') {
        localhostData.debts.push(obj)
      }

      window.localStorage.setItem('vue-loan-calc-data', JSON.stringify(localhostData))

      this.addIDs()
      this.loadEntries()
    },
    addIDs () {
      const data = JSON.parse(window.localStorage.getItem('vue-loan-calc-data'))

      data.loans.forEach(loan => {
        loan.id = data.loans.indexOf(loan)
      })

      data.debts.forEach(debt => {
        debt.id = data.debts.indexOf(debt)
      })

      window.localStorage.setItem('vue-loan-calc-data', JSON.stringify(data))
    },
    removeEntry (entry) {
      let localhostData

      if (window.localStorage.getItem('vue-loan-calc-data') === null) {
        localhostData = {
          loans: [],
          debts: [],
          currency: '$'
        }
      } else localhostData = JSON.parse(window.localStorage.getItem('vue-loan-calc-data'))

      if (entry.route === 'loans') {
        localhostData.loans = localhostData.loans.filter(loan => { return loan.id !== entry.id })
      } else {
        localhostData.debts = localhostData.debts.filter(debt => { return debt.id !== entry.id })
      }

      window.localStorage.setItem('vue-loan-calc-data', JSON.stringify(localhostData))

      this.loadEntries()
    },
    loadEntries () {
      if (window.localStorage.getItem('vue-loan-calc-data') === null) {
        this.downloadedData = {
          loans: [],
          debts: [],
          currency: '$'
        }
      } else this.downloadedData = JSON.parse(window.localStorage.getItem('vue-loan-calc-data'))

      if (this.downloadedData) {
        this.preparedLoans = [...this.downloadedData.loans]
        this.preparedDebts = [...this.downloadedData.debts]
      }

      this.reloadCounter()
    },
    reloadCounter () {
      this.counterData = 0

      if (this.$route.name === 'loans') {
        this.preparedLoans.forEach(loan => { this.counterData += Number(loan.money) })
      } else {
        this.preparedDebts.forEach(debt => { this.counterData += Number(debt.money) })
      }
    }
  },
  mounted: function () {
    this.loadEntries()
  }
}
</script>

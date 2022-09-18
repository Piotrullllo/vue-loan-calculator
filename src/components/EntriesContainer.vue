<template>
    <main class="background-color color container">
        <h3>{{$route.name[0].toUpperCase()+$route.name.substring(1)}} total:</h3>
        <MoneyCounter :counterData="countDat"/>
        <div v-if="$route.name === 'loans' && loans.length > 0">
            <SingleEntry @removed-entry="emitEntry" :key="loan.id" v-for="loan in loans" :entry="loan"/>
        </div>
        <div v-if="$route.name === 'debts' && debts.length > 0">
            <SingleEntry @removed-entry="emitEntry" :key="debt.id" v-for="debt in debts" :entry="debt"/>
        </div>
        <p v-if="$route.name === 'loans' && loans.length === 0 || $route.name === 'debts' && debts.length === 0">The {{$route.name}} list is empty...</p>
    </main>
</template>

<script>
import SingleEntry from './SingleEntry.vue'
import MoneyCounter from './MoneyCounter.vue'

export default {
  name: 'EntriesContainer',
  props: {
    loans: Array,
    debts: Array,
    countDat: Number
  },
  components: {
    SingleEntry,
    MoneyCounter
  },
  methods: {
    emitEntry (entry) {
      this.$emit('rem-entry', entry)
    }
  },
  emits: ['rem-entry']
}
</script>

<style scoped>
    main{
        width: 80%;
        padding: 10px 10px 20px;
        border-radius: 10px;
        margin: 50px auto 100px;
    }
    h3{
      margin-bottom: 4px;
    }
    @media (max-width: 650px){
        main{
            width: 100%;
            padding: 10px 0 20px;
            border-radius: 0;
            margin: 50px auto 150px;
        }
    }
    @media (max-width: 450px){
      h3{
        font-size: 18px;
      }
    }
</style>

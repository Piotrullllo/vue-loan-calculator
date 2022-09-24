<template>
    <main class="background-color color container">
        <h3>{{$route.name[0].toUpperCase()+$route.name.substring(1)}} total:</h3>
        <MoneyCounter :counterData="countDat"/>
        <div v-if="$route.name === 'loans' && loans.length > 0">
            <SingleEntry @removed-entry="askForRemoval" :key="loan.id" v-for="loan in loans" :entry="loan"/>
        </div>
        <div v-if="$route.name === 'debts' && debts.length > 0">
            <SingleEntry @removed-entry="askForRemoval" :key="debt.id" v-for="debt in debts" :entry="debt"/>
        </div>
        <p v-if="$route.name === 'loans' && loans.length === 0 || $route.name === 'debts' && debts.length === 0">The {{$route.name}} list is empty...</p>
    </main>
    <DeleteBox @remove="emitEntry" @abort="hideDeleteBox" :display="displayDelete" :entryData="entry"/> 
</template>

<script>
import SingleEntry from './SingleEntry.vue'
import MoneyCounter from './MoneyCounter.vue'
import DeleteBox from './DeleteBox.vue'

export default {
  name: 'EntriesContainer',
  props: {
    loans: Array,
    debts: Array,
    countDat: Number
  },
  data () {
    return{
      displayDelete: false,
      entry: {}
    }
  },
  components: {
    SingleEntry,
    MoneyCounter,
    DeleteBox
  },
  methods: {
    emitEntry (entry) {
      this.$emit('rem-entry', entry)
      this.hideDeleteBox()
    },
    askForRemoval (entry) {
      this.displayDelete = true
      document.body.classList.add("box-open");
      this.entry = entry
    },
    hideDeleteBox () {
      this.displayDelete = false
      document.body.classList.remove("box-open");
      this.entry = {}
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

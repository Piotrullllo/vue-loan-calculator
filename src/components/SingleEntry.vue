<template>
    <div class="entry-container" @click="editEntry" title="Click to edit entry">
        <div class="data-container">
            <p class="name">{{entry.name}}</p>
            <p class="money">{{((currency == "$" || currency == "£" ? currency : ''))}} {{(entry.money)}} {{(currency !== "$" && currency !== "£") ? currency : ''}}</p>
            <p class="date">Added: {{new Date(this.entry.date)}}</p>
        </div>
        <button class="btn remove-btn" @click="removeEntry" title="Remove entry">X</button>
    </div>
</template>

<script>
export default {
  name: 'SingleEntry',
  props: {
    entry: Object
  },
  data () {
    return {
        currency: JSON.parse(window.localStorage.getItem('vue-loan-calc-data')) ? JSON.parse(window.localStorage.getItem('vue-loan-calc-data')).currency : '$'
    }
  },
  methods: {
    editEntry (e) {
        e.preventDefault()
        if (e.target.classList.contains("remove-btn")) return;
        const id = this.entry.id
        const route = this.entry.route
        const name = this.entry.name
        const money = this.entry.money
        const date = this.entry.date

        const editedEntry = {
            id: id,
            route: route,
            name: name,
            money: money,
            date: date
        }

        this.$emit('edited-entry', editedEntry)
    },
    removeEntry (e) {
      e.preventDefault()

      const id = this.entry.id
      const route = this.entry.route
      const name = this.entry.name
      const money = this.entry.money

      const removedEntry = {
        id: id,
        route: route,
        name: name,
        money: money
      }

      this.$emit('removed-entry', removedEntry)
    }
  },
  emits: ['removed-entry', 'edited-entry'],
  mounted: function () {
    document.querySelectorAll('.entry-container').forEach(entry => {
        entry.addEventListener('mouseover', (e) => {
            if(e.target.classList.contains("remove-btn")){
                entry.classList.remove("entry-container-hover")
            }
            else {
                entry.classList.add("entry-container-hover")
            }
        })
    })

    document.querySelectorAll('.entry-container').forEach(entry => {
        entry.addEventListener('mouseleave', () => {
        entry.classList.remove("entry-container-hover")
    })
    })
  }
}
</script>

<style scoped>
    .name, .money{
        font-size: 18px;
        font-weight: 700;
    }
    .name{
        margin-top: 8px;
        margin-bottom: 0;
    }
    .money{
        margin-top: 2px;
        margin-bottom: 4px;
    }
    .date{
        font-size: 10px;
        margin-top: 0;
        margin-bottom: 8px;
    }
    .data-container{
        text-align: left;
        margin-left: 8px;
    }
    button{
        width: 50px;
        height: 50px;
        font-size: 25px;
        font-weight: 700;
        cursor: pointer
    }
    .entry-container{
        border-radius: 5px;
        padding: 5px 10px;
        margin: 15px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }
    @media (max-width: 500px){
        button{
            width: 32px;
            height: 32px;
            font-size: 16px;
        }
        .name, .money{
            font-size: 14px;
        }
        .data-container{
            margin-left: 4px;
        }
        .entry-container{
            padding: 5px 8px;
        }
    }
    @media (max-width: 375px){
        .name, .money{
            font-size: 10px;
        }
        .date{
            font-size: 8px;
        }
    }
</style>

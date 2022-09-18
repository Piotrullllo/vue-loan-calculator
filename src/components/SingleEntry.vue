<template>
    <div class="entry-container">
        <div class="data-container">
            <p class="name">{{entry.name}}</p>
            <p class="money">{{entry.money}}</p>
            <p class="date">Added: {{new Date(this.entry.date)}}</p>
        </div>
        <button class="btn" @click="removeEntry" title="Remove entry">X</button>
    </div>
</template>

<script>
export default {
  name: 'SingleEntry',
  props: {
    entry: Object
  },
  methods: {
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
  emits: ['removed-entry']
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
        color: dimgray;
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
        color: red;
        cursor: pointer
    }
    .entry-container{
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px 10px;
        margin: 15px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        -webkit-box-shadow: 4px 4px 12px 0px rgba(66, 68, 90, 1);
        -moz-box-shadow: 4px 4px 12px 0px rgba(66, 68, 90, 1);
        box-shadow: 4px 4px 12px 0px rgba(66, 68, 90, 1);
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

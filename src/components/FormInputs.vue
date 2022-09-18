<template>
    <form :class="[{'hide-form': isFormHidden}, 'form']" @submit="onSubmit">
        <a @click="hideForm" :title="isFormHidden ? 'Show form' : 'Hide form'" class="hide-button btn" href="javascript:void(0)"><span class="arrow" :style="isFormHidden ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)'">▼</span></a>
        <input class="name color input-background" id="firstInput" maxlength="40" v-model="name" type="text" required placeholder="Enter name">
        <input type="number" class="money color input-background" v-model="money" min="0.01" step="0.01" required placeholder="Enter amount">
        <input class="submit-btn btn" type="submit" value="Add to list">
    </form>
</template>

<script>
export default {
  name: 'FormInputs',
  data () {
    return {
      name: '',
      money: '',
      isFormHidden: false
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()

      if (!/[a-zA-Z]/.test(this.name)) {
        alert('Name must contain letters!')
        return
      } else if (this.name.length > 40) {
        alert('Name cannot be longer than 40 characters')
        return
      }

      if (this.money > 99999.99) {
        alert('Amount must be lower than 99999.99')
        return
      } else if (this.money <= 0) {
        alert('Amount cannot be equal or lower than 0')
        return
      }

      const newEntry = {
        name: this.name,
        money: this.money.toFixed(2),
        date: new Date(),
        route: this.$route.name
      }

      this.$emit('entry-info', newEntry)

      this.name = ''
      this.money = ''
      document.getElementById('firstInput').focus()
    },
    hideForm () {
      const settings = 'transform .3s'
      const elements = [document.querySelector('.arrow'), document.querySelector('form')]

      elements.forEach(element => {
        element.style.transition = settings
      })

      this.isFormHidden = !this.isFormHidden

      setTimeout(() => {
        elements.forEach(element => {
          element.style.transition = 'none'
        })
      }, 310)
    }
  },
  emits: ['entry-info']
}
</script>

<style scoped>
    .hide-button{
      display:flex;
      align-items: center;
      position:absolute;
      left: 50%;
      top: -41px;
      padding: 0 30px;
      height: 40px;
      transform: translateX(-50%);
      border-radius: 6px 6px 0 0;
      border-bottom: none;
    }
    form{
        position: fixed;
        bottom: 0;
        padding-top: 15px;
        padding-bottom: 10px;
        width: 100%;
        text-align: center;
    }
    input{
        margin: 5px;
        padding: 4px;
        font-size: 18px;
    }
    .name{
        width: 300px;
    }
    .money{
        width: 140px;
    }
    .submit-btn{
        width: 130px;
        cursor: pointer;
    }
    .arrow{
      display: block;
    }
    .hide-form{
      transform: translateY(67px);
    }
    @media (max-width: 650px){
        .name, .money, .submit-btn{
            margin: 5px 0;
            width: 90%;
            font-size: 14px;
            box-sizing: content-box;
        }
        .hide-form{
          transform: translateY(138px);
        }
    }
</style>

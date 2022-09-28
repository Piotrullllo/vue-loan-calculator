<template>
    <div class="gray-out" @click="outsideClick" v-if="display == true">
        <div class="edit-box background-color color container">
            <form>
                <h3>Edit entry:</h3>
                <label for="name">Name: </label>
                <input @input="validate" class="name color input-background" id="name" maxlength="40" type="text" v-model="name" required> <br>
                <label for="money">Amount:</label>
                <input @input="validate" type="number" class="money color input-background" id="money" v-model="money" min="0.01" step="0.01" required>
                <label for="route">Operation type:</label>
                <select v-model="route" name="route" class="color input-background" id="route">
                    <option value="loans">Loan</option>
                    <option value="debts">Debt</option>
                </select>
                <div class="buttons">
                    <button class="btn" type="button" @click="cancel">Cancel</button>
                    <button @click="save" class="btn save-btn">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'EditEditor',
  props: {
    display: Boolean,
    entryData: Object
  },
  data () {
    return {
        name: '',
        money: '',
        route: ''
    }
  },
  methods: {
    outsideClick (e) {
        if(e.target.classList.contains('gray-out'))this.cancel()
    },
    reloadData () {
        this.name = this.entryData.name
        this.money = this.entryData.money
        this.route = this.entryData.route
    },
    cancel () {
        this.$emit('cancel')
    },
    validate () {
        const saveButton = document.querySelector(".save-btn")
        const moneyValue = this.money
        if(!/[a-zA-Z]/.test(this.name) || this.name.length > 40){
            saveButton.disabled = true
        } else if(moneyValue == '' || moneyValue < 0.01 || moneyValue > 99999.99){
            saveButton.disabled = true
        } else {
            saveButton.disabled = false
        }
    },
    save (e) {
        e.preventDefault()
        const entry = {...this.entryData}
        if(entry.name === this.name && entry.money === Number(this.money).toFixed(2) && entry.route === this.route){
            this.cancel()
            return
        }
        entry.name = this.name
        entry.money = Number(this.money).toFixed(2)
        entry.route = this.route
        let entryPackage = {}
        entryPackage.new = entry
        entryPackage.old = this.entryData
        this.$emit('save-edit', entryPackage)
    }
  },
  watch: {
    $props: {
        handler () {
            this.reloadData();
        },
        deep: true,
        immediate: true
    }
  },
  emits: ['cancel', 'save-edit']
}
</script>
<style scoped>
    h3{
        margin-top: 24px;
        margin: 20px;
        margin-top: 0;
    }
    .gray-out{
        z-index: 9999;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(0,0,0,0.3);
    }
    label{
        display: block;
        margin-bottom: 6px;
    }
    input, select{
        width: 100%;
        box-sizing: border-box;
        border: 1px solid;
        border-radius: 5px;
        font-size: 14px;
        margin-bottom: 10px;
        padding: 4px;
    }
    .edit-box{
        overflow: hidden;
        padding: 15px 20px;
        border-radius: 10px;
        text-align: center;
        font-size: 16px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .btn{
        font-size: 20px;
        padding: 6px 12px;
        cursor: pointer;
    }
    .buttons{
        margin-top: 14px;
        display: flex;
        justify-content: space-evenly;
    }
    @media (max-width: 500px){
        .edit-box{
            width: calc(100% - 80px);
            padding: 20px 15px;
            font-size: 14px;
        }
        input, select{
            font-size: 14px;
        }
        .btn{
            font-size: 15px;
            padding: 6px 9px;
        }
    }
</style>

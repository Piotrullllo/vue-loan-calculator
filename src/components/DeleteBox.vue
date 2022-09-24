<template>
    <div class="gray-out" v-if="display == true">
        <div class="delete-box background-color color container">
            <p>Are you sure you want to delete "{{this.entryData.name}} - {{((currency == "$" || currency == "£" ? currency : ''))}}{{this.entryData.money}}{{(currency !== "$" && currency !== "£") ? currency : ''}}" entry?</p>
            <div class="buttons">
                <button @click="removeEntry" class="btn remove-btn">Yes</button>
                <button @click="abort" class="btn">No</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DeleteBox',
  props: {
    display: Boolean,
    entryData: Object
  },
  methods: {
    removeEntry () {
        this.$emit('remove', this.entryData)
    },
    abort () {
        this.$emit('abort')
    }
  },
  data () {
    return {
        currency: JSON.parse(window.localStorage.getItem('vue-loan-calc-data')) ? JSON.parse(window.localStorage.getItem('vue-loan-calc-data')).currency : '$'
    }
  }
}
</script>
<style scoped>
    p{
        margin: 0;
        margin-bottom: 15px;
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
    .delete-box{
        overflow: hidden;
        padding: 15px;
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
        display: flex;
        justify-content: space-evenly;
    }
    @media (max-width: 500px){
        .delete-box{
            width: 100%;
            font-size: 14px;
        }
        .btn{
            font-size: 14px;
            padding: 6px 9px;
        }
    }
</style>

<template>
    <main class="background-color color">
        <h3>Settings:</h3>
        <div class="setting-container">
            <label class="label" for="select-mode">Select theme:</label>
            <select class="color input-background select" @change="changeTheme" name="theme-mode" v-model="selectedCol" id="select-mode">
                <option value="dark">Dark theme</option>
                <option value="light">Light theme</option>
                <option value="system">Automatic</option>
            </select>
        </div>
        <div class="setting-container">
            <label class="label" for="select-curr">Select currency:</label>
            <select class="color input-background select" @change="changeCur" name="currency" v-model="selectedCur" id="select-curr">
                <option value="$">US Dollar</option>
                <option value="€">Euro</option>
                <option value="₡">Costa Rican Colón</option>
                <option value="£">British Pound Sterling</option>
                <option value="₪">Israeli New Sheqel</option>
                <option value="₹">Indian Rupee</option>
                <option value="¥">Japanese Yen</option>
                <option value="₦">Nigerian Naira</option>
                <option value="₱">Philippine Peso</option>
                <option value="zł">Polish Zloty</option>
                <option value="₲">Paraguayan Guarani</option>
                <option value="฿">Thai Baht</option>
                <option value="₴">Ukrainian Hryvnia</option>
                <option value="₫">Vietnamese Dong</option>
                <option value="₩">South Korean Won</option>
            </select>
        </div>
        <h3>About:</h3>
        <div class="setting-container">
            <p>App version:</p>
            <p class="version">1.1.1</p>
        </div>
    </main>
</template>
<script>
  export default {
    name: 'SettingsView',
    methods: {
        changeTheme (e) {
            window.localStorage.setItem('vue-loan-calc-theme', JSON.stringify(e.target.value));
            location.reload()
        },
        changeCur (e) {
            const currency = e.target.value;
            let data
            if (JSON.parse(window.localStorage.getItem('vue-loan-calc-data')) !== null){
                data = JSON.parse(window.localStorage.getItem('vue-loan-calc-data'))
            } else {
                data = {
                    loans: [],
                    debts: [],
                    currency: '$'
                }
            }

            data.currency = currency
            window.localStorage.setItem('vue-loan-calc-data', JSON.stringify(data))
        }
    },
    data () {
        return {
            selectedCol: JSON.parse(window.localStorage.getItem('vue-loan-calc-theme')) ? JSON.parse(window.localStorage.getItem('vue-loan-calc-theme')) : 'system',
            selectedCur: JSON.parse(window.localStorage.getItem('vue-loan-calc-data')) ? JSON.parse(window.localStorage.getItem('vue-loan-calc-data')).currency : '$'
        }
    }
  }
</script>
<style scoped>
body{
    width: 100vw;
    min-height: 100vh;
}
main{
    width: 100%;
    min-height: calc(100vh - 64px);
}
main h3{
    margin: 0;
    padding: 10px;
}
main h3:first-child{
    padding-top: 36px;
}
.setting-container{
    font-size: 18px;
    margin: 20px 60px;
    padding: 16px 12px;
    display: flex;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
p{
    margin: 0;
}
.select{
    border: 1px solid;
    border-radius: 5px;
    font-size: 16px;
    padding: 4px 6px;
}
@media(max-width: 500px){
    main{
        height: calc(100vh - 48px);
    }
    .setting-container{  
        display: block;
        padding: 0;
        padding-top: 5px;
        margin: 14px 26px;
        font-size: 14px;
    }
    .select{
        font-size: 13px;
        width: calc(100% - 20px);
        text-align: center;
        margin: 10px 0;
    }
    p{
        padding-bottom: 5px;
    }
    .version{
        padding-bottom: 10px;
    }
    main h3{
        font-size: 18px;
        padding: 5px;
    }
}
</style>
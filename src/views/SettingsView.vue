<template>
    <main class="background-color color">
        <h3>Settings:</h3>
        <div class="setting-container">
            <label class="label" for="select-mode">Select theme:</label>
            <select class="color input-background select" @change="changeTheme" name="theme-mode" v-model="selected" id="select-mode">
                <option value="dark">Dark theme</option>
                <option value="light">Light theme</option>
                <option value="system">Automatic</option>
            </select>
        </div>
        <h3>About:</h3>
        <div class="setting-container">
            <p>App version:</p>
            <p>1.1.0 (in development)</p>
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
        }
    },
    data () {
        return {
            selected: JSON.parse(window.localStorage.getItem('vue-loan-calc-theme')) ? JSON.parse(window.localStorage.getItem('vue-loan-calc-theme')) : 'system'
        }
    }
  }
</script>
<style scoped>
body{
    width: 100vw;
    height: 100vh;
}
main{
    width: 100%;
    height: calc(100vh - 64px);
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
    border-radius: 5px;
    font-size: 16px;
    padding: 4px 6px;
}
@media(max-width: 400px){
    main{
        height: calc(100vh - 48px);
    }
    .setting-container{  
        margin: 14px 26px;
        font-size: 14px;
    }
    .select{
        font-size: 13px;
    }
}
</style>
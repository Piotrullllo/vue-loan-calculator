<template>
    <header>
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>ue Loan Calculator</h1>
    </header>
</template>

<script>
export default {
  name: 'TitleDiv'
}
</script>

<style scoped>
    img{
        width: 40px;
        margin: -5px;
    }
    header{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: -16px;
    }
    @media (max-width: 400px){
        h1{
            font-size: 20px;
        }
        img{
            width: 20px;
        }
    }
</style>

<template>
    <nav class="navbar">
      <router-link v-if="this.$route.name !== 'settings'" class="option" to="/settings">Settings</router-link>
      <router-link v-if="this.$route.name === 'loans' || this.$route.name === 'debts'" class="option" to="/menu">Go back</router-link>
      <a @click="goBack" class="option"  v-if="this.$route.name == 'settings'" href="javascript:void(0)">Go back</a>
    </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    goBack () {
      history.back()
    }
  }
}
</script>

<style scoped>
nav {
  height: 64px;
  display: flex;
  justify-content: right;
}
nav .option {
  display: block;
  width: 60px;
  margin-right: 10px;
  padding: 23px 32px;
  text-decoration: none;
  border-radius: 0 0 5px 5px;
}

@media (max-width: 400px){
  nav{
    height: 48px;
  }
  nav .option{
    font-size: 12px;
    width: 50px;
    text-align: center;
    padding: 16px 16px !important;
  }
}
</style>

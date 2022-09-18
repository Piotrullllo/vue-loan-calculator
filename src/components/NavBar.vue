<template>
    <nav class="navbar">
        <router-link v-if="routeMode" class="option" to="/menu">Go back</router-link>
    </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    routeMode: Boolean
  }
}
</script>

<style scoped>
nav {
  display: flex;
  text-align: right;
  height: 64px;
}
nav .option {
  display: block;
  margin-left: auto;
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

<template>
  <NavBar :routeMode="checkForRoutes"/>
  <router-view/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  watch: {
    $route: {
      immediate: true,
      handler (to) {
        document.title = to.meta.title || 'Vue Loan Calculator'
      }
    }
  },
  computed: {
    checkForRoutes () {
      if (this.$route.name === 'loans' || this.$route.name === 'debts') return true
      else return false
    }
  },
  components: {
    NavBar
  }
}
</script>

<style>
body{
  background-color: #142d53;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.btn{
  -webkit-box-shadow: inset -3px -3px 10px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: inset -3px -3px 10px 0px rgba(66, 68, 90, 1);
  box-shadow: inset -3px -3px 10px 0px rgba(66, 68, 90, 1);
  border: 1px solid black;
  transition: color .25s, background-color .25s;
  border-radius: 6px;
  color: black;
  text-decoration: none;
  background-color: silver;
}
.btn:hover{
  -webkit-box-shadow: inset 3px 3px 10px 0px rgba(170, 172, 188, 1);
  -moz-box-shadow: inset 3px 3px 10px 0px rgba(170, 172, 188, 1);
  box-shadow: inset 3px 3px 10px 0px rgba(170, 172, 188, 1);
  background-color: dimgray;
  color: white;
}
</style>

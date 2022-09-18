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
  methods: {
    lightMode () {
      const root = document.querySelector(':root');
      root.style.setProperty('--background-color', 'silver');
      root.style.setProperty('--color', 'black');
      root.style.setProperty('--hover-color', 'white');
      root.style.setProperty('--background-hover', 'dimgray');
      root.style.setProperty('--border', 'black');
      root.style.setProperty('--nav-border', 'dimgray');
      root.style.setProperty('--shadow-color', 'rgb(66, 68, 90)');
      root.style.setProperty('--light-shadow', 'rgb(170, 170, 180)');
      root.style.setProperty('--date-color', 'dimgray');
      root.style.setProperty('--input-background', 'white');
    },
    darkMode () {
      const root = document.querySelector(':root');
      root.style.setProperty('--background-color', 'rgb(50, 50, 50)');
      root.style.setProperty('--color', 'rgb(200, 200, 200)');
      root.style.setProperty('--hover-color', 'black');
      root.style.setProperty('--background-hover', 'silver');
      root.style.setProperty('--border', 'rgb(200, 200, 200)');
      root.style.setProperty('--nav-border', 'silver');
      root.style.setProperty('--shadow-color', 'black');
      root.style.setProperty('--light-shadow', 'rgb(80, 80, 80)');
      root.style.setProperty('--date-color', 'gray');
      root.style.setProperty('--input-background', 'black');
    }
  },
  computed: {
    checkForRoutes () {
      if (this.$route.name === 'loans' || this.$route.name === 'debts') return true
      else return false
    }
  },
  mounted: function () {
    const theme = JSON.parse(window.localStorage.getItem('vue-loan-calc-theme'))

    if(theme !== null){
      theme == 'dark' ? this.darkMode() : this.lightMode()
    } else {
      window.matchMedia('(prefers-color-scheme: dark)').matches ? this.darkMode() : this.lightMode()
    }
  },
  components: {
    NavBar
  }
}
</script>

<style>
:root{
  --background-color: silver;
  --background-hover: dimgray;
  --input-background: white;
  --color: black;
  --hover-color: white;
  --border: black;
  --nav-border: dimgray;
  --shadow-color: rgb(66, 68, 90);
  --light-shadow: rgb(170, 170, 180);
  --date-color: dimgray;
  --color-red: red;
  --hover-red: rgb(215, 0, 0);
}

.background-color{
  background-color: var(--background-color);
}
.color{
  color: var(--color)
}
.input-background{
  background-color: var(--input-background);
  border-color: var(--background-color)
}
.date{
  color: var(--date-color)
}
.form{
  -webkit-box-shadow: inset 0px 10px 15px -10px var(--shadow-color);
  -moz-box-shadow: inset 0px 10px 15px -10px var(--shadow-color);
  box-shadow: inset 0px 10px 15px -10px var(--shadow-color);
  background-color: var(--background-color);
}
.remove-btn{
  color: var(--color-red) !important;
}
.remove-btn:hover{
  color: var(--hover-red) !important;
}
.entry-container{
  border: 1px solid var(--border);
  -webkit-box-shadow: 4px 4px 12px 0px var(--shadow-color);
  -moz-box-shadow: 4px 4px 12px 0px var(--shadow-color);
  box-shadow: 4px 4px 12px 0px var(--shadow-color);
}
.navbar{
  -webkit-box-shadow: inset 0px -10px 15px -10px var(--shadow-color);
  -moz-box-shadow: inset 0px -10px 15px -10px var(--shadow-color);
  box-shadow: inset 0px -10px 15px -10px var(--shadow-color);
  background-color: var(--background-color);
}
.navbar .option{
  color: var(--color);
  border-left: 1px solid var(--nav-border);
  border-right: 1px solid var(--nav-border);
  -webkit-box-shadow: inset 0 -3px 10px 0px var(--shadow-color);
  -moz-box-shadow: inset 0 -3px 10px 0px var(--shadow-color);
  box-shadow: inset 0 -3px 10px 0px var(--shadow-color);
}
.navbar .option:hover{
  -webkit-box-shadow: inset 0 -3px 10px 0px var(--light-shadow);
  -moz-box-shadow: inset 0 -3px 10px 0px var(--light-shadow);
  box-shadow: inset 0 -3px 10px 0px var(--light-shadow);
  background-color: var(--background-hover);
  color: var(--hover-color);
}
.container{
  -webkit-box-shadow: 8px 8px 28px 2px var(--shadow-color);
  -moz-box-shadow: 8px 8px 28px 2px var(--shadow-color);
  box-shadow: 8px 8px 28px 2px var(--shadow-color);
}

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
  -webkit-box-shadow: inset -3px -3px 10px 0px var(--shadow-color);
  -moz-box-shadow: inset -3px -3px 10px 0px var(--shadow-color);
  box-shadow: inset -3px -3px 10px 0px var(--shadow-color);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--color);
  text-decoration: none;
  background-color: var(--background-color);
}
.btn:hover{
  -webkit-box-shadow: inset 3px 3px 10px 0px var(--light-shadow);
  -moz-box-shadow: inset 3px 3px 10px 0px var(--light-shadow);
  box-shadow: inset 3px 3px 10px 0px var(--light-shadow);
  background-color: var(--background-hover);
  color: var(--hover-color);
}
.btn, nav .option{
  transition: color .25s, background-color .25s, box-shadow .25s;
}
</style>

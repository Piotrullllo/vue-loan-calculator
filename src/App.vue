<template>
  <NavBar/>
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
      root.style.setProperty('--input-background', 'white');
      root.style.setProperty('--dis-color', 'rgb(40, 40, 40)');
      root.style.setProperty('--dis-background', 'gray');
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
      root.style.setProperty('--input-background', 'black');
      root.style.setProperty('--dis-color', 'dimgray');
      root.style.setProperty('--dis-background', 'rgb(40, 40, 40)');
    }
  },
  mounted: function () {
    const theme = JSON.parse(window.localStorage.getItem('vue-loan-calc-theme'))

    if(theme !== null && theme !== 'system'){
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
  --color-red: red;
  --hover-red: rgb(215, 0, 0);
  --dis-color: rgb(40, 40, 40);
  --dis-background: gray;
}

body.box-open {
  overflow: hidden;
}
.entry-container-hover{
  color: var(--hover-color) !important;
  background-color: var(--background-hover) !important;
  border-color: var(--border) !important;
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
  background-color: var(--hover-red) !important;
  color: var(--hover-color) !important;
}
.entry-container, .setting-container{
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
.btn:disabled{
  background-color: var(--dis-background) !important;
  border-color: var(--dis-color) !important;
  color: var(--dis-color) !important;
  cursor: not-allowed !important;
}
.btn:hover:not([disabled]){
  -webkit-box-shadow: inset 3px 3px 10px 0px var(--light-shadow);
  -moz-box-shadow: inset 3px 3px 10px 0px var(--light-shadow);
  box-shadow: inset 3px 3px 10px 0px var(--light-shadow);
  background-color: var(--background-hover);
  color: var(--hover-color);
}
.btn, nav .option, .entry-container{
  transition: color .25s, background-color .25s, box-shadow .25s;
}
</style>

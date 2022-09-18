<template>
    <nav>
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
  -webkit-box-shadow: inset 0px -10px 15px -10px rgba(66, 68, 90, 1);
  -moz-box-shadow: inset 0px -10px 15px -10px rgba(66, 68, 90, 1);
  box-shadow: inset 0px -10px 15px -10px rgba(66, 68, 90, 1);
  background-color: silver;
  height: 64px;
}
nav .option {
  display: block;
  margin-left: auto;
  width: 60px;
  margin-right: 10px;
  padding: 23px 32px;
  color: black;
  text-decoration: none;
  border-left: 1px solid dimgrey;
  border-right: 1px solid dimgrey;
  transition: color .25s, background-color .25s;
  border-radius: 0 0 5px 5px;
  -webkit-box-shadow: inset 0 -3px 10px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: inset 0 -3px 10px 0px rgba(66, 68, 90, 1);
  box-shadow: inset 0 -3px 10px 0px rgba(66, 68, 90, 1);
}
nav .option:hover {
  -webkit-box-shadow: inset 0 -3px 10px 0px rgba(170, 172, 188, 1);
  -moz-box-shadow: inset 0 -3px 10px 0px rgba(170, 172, 188, 1);
  box-shadow: inset 0 -3px 10px 0px rgba(170, 172, 188, 1);
  background-color: dimgray;
  color: white;
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

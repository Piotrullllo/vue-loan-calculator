<template>
    <router-link class="btn" :to="link">{{name}}</router-link>
</template>

<script>
export default {
  name: 'ButtonLink',
  props: {
    name: String,
    link: String
  }
}
</script>

<style scoped>
    .btn{
        display: block;
        font-weight: 700;
        padding: 20px;
        margin: 10px 30px;
    }
    @media (max-width: 400px){
        .btn{
            padding: 10px;
        }
    }
</style>

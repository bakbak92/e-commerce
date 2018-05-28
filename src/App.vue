<template>
  <div id="app" class="mdl-js-layout">
    <iHeader></iHeader>
      <div class="content">
        <router-view></router-view></div>
      </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  export default {
    name: 'App',
    components: {
      iHeader: Header,
      iFooter: Footer
    },
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #424242;
  .content{
    padding: 0 2rem;
  }
}
.mdl-layout__container{
  position: initial;
}
</style>


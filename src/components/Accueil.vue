<template>
  <div>
      <h2>E commerce de wax</h2>
      <input type="text" name="" id="" v-model="choix.first">
      <button v-bind:disabled="good">valid</button>
  </div>
</template>
<script>
export default {
    name: 'Accueil',
    data () {
        return {
            choix: {
                first: ''
            },
            good: true
        }
    },
    watch: {
        choix: function(choix){
            if(choix.first === 'salut'){
                console.log("noon")
                this.good= false
            }
        }
    }
    
}
</script>
<style>

</style>

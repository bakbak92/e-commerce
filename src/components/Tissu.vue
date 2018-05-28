<template>
  <div>
      <h2>{{msg}}</h2>
      <router-link :to="`/`">retour</router-link>
  </div>
</template>
<script>
export default {
  name: 'Tissu',
  data () {
      return {
          msg: 'coucou'
      }
  }
}
</script>

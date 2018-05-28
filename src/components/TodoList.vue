<template>
  <div>
      <p>Liste</p>
      <ul>
          <li v-for="task in tasks" :key="task.id">{{task}}</li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'TodoList',
  data () {
      return{

      }
  },
  props: ['tasks']
}
</script>
<style>

</style>

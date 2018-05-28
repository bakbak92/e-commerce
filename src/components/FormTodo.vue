<template>
  <div>
      <form v-on:submit.prevent="addTodo">
          <p>Ajoute une tache</p>
          <input type="text" v-model="task">
      </form>
      <todo-list v-bind:tasks="tasks"></todo-list>
      <div v-if="tab === 1" class="blue">

      </div>
      <div v-if="tab === 2" class="green">

      </div>
      <div v-if="tab === 3" class="orange">

      </div>
      <button v-on:click="next">
          suivant
      </button>
      <button v-on:click="prev">
          precedent
      </button>

  </div>
</template>
<script>
import TodoList from './TodoList.vue'
export default {
  name:'FormTodo',
  components: {
      'todo-list': TodoList
  },
  data () {
      return {
          task : '',
          tasks: [],
          tab: 1
      }
  },
  methods: {
      addTodo: function() {
          this.tasks.push(this.task)
      },
      next: function() {
          this.tab ++
      }
  }
}
</script>
<style>
    .orange{
        background: orange;
        height: 50px;
    }
    .blue{
        background: blue;
        height: 50px;
    }
    .green{
        background: green;
        height: 50px;
    }
</style>

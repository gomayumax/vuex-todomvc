<template>
    <ul>
        <li v-for="todo in todoList">
            <input type="checkbox" v-model="todo.done">{{ todo.text }}
            <button @click="remove(todo)">delete</button>
        </li>
    </ul>
</template>

<script>
  export default {
    name: 'todo-list',
    computed: {
      todoList () {
        return this.$store.state.todoList
      }
    },
    methods: {
      remove: function (todo) {
        this.$store.commit('REMOVE', todo)
      }
    }
  }
</script>


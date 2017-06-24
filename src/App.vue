<template>
    <div id="app">
        <div>
            <input-form></input-form>
        </div>
        <div>
            <todo-list></todo-list>
        </div>

    </div>
</template>

<script>
  import InputForm from './components/InputForm'
  import TodoList from './components/TodoList'

  export default {
    name: 'app',
    components: {
      InputForm,
      TodoList
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

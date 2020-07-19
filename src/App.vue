<template>
  <div id="app">
    <CreateTodo/>
    <ListTodo/>
    <TodosCount/>
  </div>
</template>

<script>
import TodosCount from "./components/TodosCount.vue"
import CreateTodo from "./components/CreateTodo.vue"
import ListTodo from "./components/ListTodo.vue"


export default {
  name: 'App',
  components: {
    CreateTodo,
    TodosCount,
    ListTodo
  },
  mounted(){
    this.$store.dispatch("getTodos")
  }
}
</script> 

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  border: 2px solid #222;
  padding: 10px;
}

ul{
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 22px;
}
</style>

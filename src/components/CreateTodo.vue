<template>
  <input v-model="todo" @keyup.enter="saveToDo" type="text" placeholder="Type Todo Item">
</template>

<script>
export default {
  data:() => ({
    todo: ""
  }),
  methods: {
    saveToDo(){
      this.$store.commit("addTodo", this.todo)
    }
  }
}
</script>
export default {
  addTodo(state, payload){
    state.todos = [
      ...state.todos,
      payload
    ]
  },
  displayTodos(state, payload = []){
    state.todos = [
      ...state.todos,
      ...payload
    ]
  }
}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, payload){
      state.todos = [
        ...state.todos,
        payload
      ]
    }
  },
  getters:{
    todosCount(state){
      return state.todos.length
    }
  }
})

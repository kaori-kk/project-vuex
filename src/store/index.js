import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios"

Vue.use(Vuex)

const url = "https://5f1404f92710570016b37ae5.mockapi.io/todos"

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
    },
    displayTodos(state, payload = []){
      state.todos = [
        ...state.todos,
        ...payload
      ]
    }
  },
  getters:{
    todosCount(state){
      return state.todos.length
    }
  },
  actions: {
    addTodo({state, commit}, payload){
      Axios.post(url, { name: payload })
      .then(()=> {
        commit("addTodo", payload)
      })
    },
    getTodos({commit}){
      Axios.get(url).then(response => {
        commit("displayTodos", response.data.map(item => item.name))
      })
    }
  }
})

import Axios from "axios"

const url = "https://5f1404f92710570016b37ae5.mockapi.io/todos"

export default {
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
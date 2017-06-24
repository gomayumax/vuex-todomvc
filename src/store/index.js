/**
 * Created by m_ishikawa on 2017/06/24.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: []
  },
  mutations: {
    ADD (state, text) {
      state.todoList.push({
        text: text,
        done: false
      })
    },
    REMOVE (state, todo) {
      state.todoList.splice(state.todoList.indexOf(todo), 1)
    }
  }
})

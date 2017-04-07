import Vue from 'vue'
import Vuex from 'vuex'
import {ItemFactory} from './item-factory'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todos: ItemFactory.get(10),
        selectedDate: '2017-04-02'
    },
    getters: {
        todosBySelectedDate: (state, getters) => {
            return state.todos.filter(todo => todo.date === state.selectedDate)
        }
    },
    mutations: {
        changeSelectedDate (state, newDate) {
            state.selectedDate = newDate
        }
    }
})

export default store
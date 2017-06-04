import Vue from 'vue'
import Vuex from 'vuex'
import {ItemFactory} from './item-factory'
import io from "socket.io-client"

Vue.use(Vuex)

const socket = io("http://localhost:3000");

const store = new Vuex.Store({
    state: {
        todos: ItemFactory.get(10),
        selectedDate: '2017-04-02',
        messages: []
    },
    getters: {
        todosBySelectedDate: (state, getters) => {
            return state.todos.filter(todo => todo.date === state.selectedDate)
        }
    },
    mutations: {
        changeSelectedDate (state, newDate) {
            state.selectedDate = newDate
        },
        addMessage (state, newMessage) {
            state.messages.push(newMessage)
        }
    },
    actions: {
        emitMessage (context, payload) {
            socket.emit('chat message', payload.message);
        }
    }
})

socket.on('chat message', function(msg) {
    store.commit('addMessage', msg);
});

export default store
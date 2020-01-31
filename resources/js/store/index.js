import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            { body: 'Go to the store', done: false },
            { body: 'Buy groceries', done: true },
            { body: 'Finish homework', done: false },
        ]
    },

    mutations: {
        addTodo({ todos }, body) {
            todos.push({
                body,
                done: false
            });
        },

        updateBody({ todos }, { todo, value }) {
            todos.find(item => item.body === todo.body).body = value;
        },

        completeAll({ todos }) {
            todos.forEach(todo => todo.done = true);
        },

        toggleTodo(state, todo) {
            todo.done = ! todo.done
        },

        deleteTodo({ todos }, todo) {
            todos.splice(todos.indexOf(todo), 1)
        },
    },
});

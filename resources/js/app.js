import Vue from 'vue'

import store from './store'

Vue.component('todo', require('./components/Todo.vue').default);

import {mapState, mapMutations} from 'vuex';

const app = new Vue({
    el: '#app',

    store,

    computed: {
        ...mapState(['todos']),

        allComplete() {
            return this.todos.every(todo => todo.done);
        }
    },

    methods: {
        ...mapMutations(['completeAll']),

        addTodo(e) {
            let body = e.target.value;

            this.$store.commit('addTodo', body);

            e.target.value = '';
        }
    }
});

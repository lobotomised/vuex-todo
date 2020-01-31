<template>
    <li class="todo" :class="{ 'is-complete' : todo.done }">
        <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)"/>
        <label v-text="todo.body" v-show="!editable" @dblclick="editable = true"></label>
        <input type="text" v-show="editable" :value="todo.body" @keyup.enter="updateTodo">
        <button @click="deleteTodo(todo)">X</button>
    </li>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        props: ['todo'],
        data() {
            return {
                editable: false
            }
        },
        methods: {
            ...mapMutations(['deleteTodo', 'toggleTodo']),

            updateTodo(event) {
                this.$store.commit('updateBody', {
                    todo: this.todo,
                    value: event.target.value
                });

                this.editable = false;
            }
        }
    }
</script>

<style>
    .is-complete {
        color: grey;
    }
</style>

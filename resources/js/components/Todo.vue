<template>
    <li class="todo" :class="{ 'is-complete' : todo.done }">
        <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)" />
        <label v-text="todo.body"></label>
        <button @click="deleteTodo(todo)">X</button>
    </li>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        props: ['todo'],

        methods: mapMutations(['deleteTodo', 'toggleTodo'])
    }
</script>

<style>
    .is-complete {
        color: grey;
    }
</style>

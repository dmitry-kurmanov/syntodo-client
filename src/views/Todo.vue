<template>
    <div>
        Hello Todo!!!
    </div>
</template>

<script lang="ts">
    import * as Vue from 'vue'
    import {Component} from 'vue-property-decorator'

    @Component
    export default class Todo extends Vue {}
</script>
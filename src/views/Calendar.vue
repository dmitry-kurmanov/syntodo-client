<template>
    <input>
    </input>
</template>

<script>
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'
    import Flatpickr from "flatpickr"
    import 'flatpickr/dist/flatpickr.min.css'

    @Component
    export default class Calendar extends Vue {
        mounted() {
            new Flatpickr(this.$el, {});
        }
    }
</script>
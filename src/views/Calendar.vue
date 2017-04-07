<template>
    <input/>
</template>

<script>
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'
    import Flatpickr from "flatpickr"
    import 'flatpickr/dist/flatpickr.min.css'

    @Component
    export default class Calendar extends Vue {
        instance = null

        mounted() {
            this.instance = new Flatpickr(this.$el, {
                onChange: this.onChange,
                defaultDate: this.$store.state.selectedDate
            });
        }

        beforeDestroy() {
            this.instance.destroy()
        }

        onChange(selectedDates, dateStr, instance) {
            this.$store.commit('changeSelectedDate', dateStr)
        }
    }
</script>
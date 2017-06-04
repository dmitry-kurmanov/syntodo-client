<template>
    <div>
        <form action="">
            <input ref="messageInput" autocomplete="off" />
            <button @click="onEmitMessage">Send</button>
        </form>
        <div v-for="message in messages">
            {{ message }}
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'

    @Component
    export default class Chat extends Vue {
        get messages () {
            return this.$store.state.messages
        }

        onEmitMessage(e) {
            let input = this.$refs.messageInput;

            this.$store.dispatch('emitMessage', {
                message: input.value
            });

            input.value = ""
        }

        beforeDestroy() {
            this.instance.destroy()
        }
    }
</script>
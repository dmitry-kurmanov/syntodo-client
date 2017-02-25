import Vue from 'vue'
import App from './App.vue'
import router from './router'

var app = new Vue({
    el: '#app',
    router: router,
    components: {
        'app': App
    },
    render: function (createElement) {
        return createElement(
            'app'
        )
    }
});
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Todo from '../views/Todo.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    // scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/home', component: Home},
        { path: '/todo', component: Todo },
        { path: '/', redirect: '/home' }
    ]
})
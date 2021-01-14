import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage";

Vue.use(VueRouter) //регистрируем VueRouter для того, что бы Vue мог их использовать

//создадим массив из объектов router
const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/photo',
        component: () => import('./pages/PhotoPages') //lazy loading import
    }
]

//после инициализации объектов, их необходимо передать во VueRouter
export default new VueRouter({
    mode: 'history', //что бы маршруты работали через /
    routes //импортим в main.js
})
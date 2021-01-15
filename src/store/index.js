import Vue from 'vue';
import Vuex from 'vuex'
import photoModule from "@/store/photoModule";

Vue.use(Vuex)  //Все внешние дополнительные модули необходимо регистрировать

//создадим объект Vuex хранилище и по дефолту его экспортируем
//параметром передаеться объкт и производиться некоторая конфигурация
//сделаем составное хранилише из несокольких модулей

export default new Vuex.Store({
    //аналоги модулей в redux это редъюсеры
    modules:{
        photoModule
    }
})

//модуль который работает с фото
//казжый модуль имеет свое сотояние, мутации, экшены и геттеры
import axios from "axios";

export default {
    //в стейте храним данные, наши фото
    state: {
        photos: [],
        dialogVisible: false,
        currentPhoto: {}
    },

    //мутации это функции которые должны изменять состояние ОНИ всегда СИНХРОННЫ
    mutations: {
        //создаем для присваивания фото в массив
        setPhoto(state, payload){
            state.photos = payload  //присваиваем нашему массиву тот массив которые прилетел в payload
        },
        showDialog(state){
            state.dialogVisible = true
        },
        hideDialog(state){
            state.dialogVisible = false
        },
        setCurrentPhoto(state, payload){
            state.currentPhoto = payload
        }
    },

    //геттеры это аналог computed свойств. Это функции которые возвращают результат каких то вычислений
    getters: {
        //возврашет все фото. Принимает состоянние и из этого сотояния возврашаем массив фото
        getAllPhotos(state){
            return state.photos
        },
        getDialogVisible: (state) => state.dialogVisible,
        getCurrentPhoto: (state) => state.currentPhoto
    },

    //экшены это АСИНХРОННЫЕ функции которые работают с внешним API
    actions: {
        fetchPhotos(context){
                //добавляем лимит по фото с помощью query параметра
                axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
                    //у contex есть функцция commit которая параметром принимает название мутации, вторым параметром передаем даанные
                    //response.data = payload
                    .then(response => context.commit('setPhoto', response.data))
            }
    }
}
<template>
    <v-container>
        <!-- @addPhoto - название заимеченого события (PhotoForm строка 48), затем функция которая вызывается-->
        <!-- v-if v-else- аналог тернарного оператора -->
        <!-- v-show - для скрытия элементов. При скрытие компонент остаеться в DOM -->
        <PhotoForm v-if="photos.length < 11" @addPhoto="addPhoto"/>
        <div v-else>вы не можете добавить больше фото</div>

        <!--    v-for аналог map в React    -->
        <!--   привязываем пропс к компоненте  v-bind:photo="photo"  -->
        <!--   <v-row> что бы могли создавать колонки для форматирования-->
        <v-row>
            <Photo
                    v-bind:key="photo"
                    v-bind:photo="photo"
                    v-for="photo in photos"
                    @openPhoto="openPhoto"
            />
        </v-row>
        <!-- объект photo передаем, как пропс -->
        <PhotoDialog :photo="currentPhoto" v-model="dialogVisible"/>
    </v-container>
</template>

<script>
    import Photo from "@/components/photo/Photo";
    import PhotoForm from "@/components/photo/PhotoForm";
    import PhotoDialog from "@/components/photo/PhotoDialog";

    export default {
        name: "PhotoPage",
        components: {PhotoDialog, PhotoForm, Photo},
        //работа с данными, функция которая возвращает данные
        data: () => ({
            photos: [],
            currentPhoto: {},
            dialogVisible: false //прокидываем в компоненту PhotoDialog
        }),
        mounted() {
            this.fetchTodo()
        },
        //инкапсулируем логику в отдельную функцию
        methods: {
            fetchTodo() {
                //добавляем лимит по фото с помощью query параметра
                this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
                    .then(response => this.photos = response.data)
            },
            addPhoto(photo){
                //добавляем в массив photos, объект после нажатия кнопки "Добавить" (PhotoForm)
                //эту функццию нужно привязать к компонету PhotoForm
                this.photos.unshift(photo)
            },
            openPhoto(photo) {
                //полученую через параметры фотографию присваиваем этому объекту
                //фото будем сохранять в объект объявленый внутри компонента, строка 30
                this.currentPhoto = photo
                //при нажатии на фото меняем dialogVisible на true
                this.dialogVisible = true
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <v-container>
        <!-- @addPhoto - название заимеченого события (PhotoForm строка 48), затем функция которая вызывается-->
        <PhotoForm @addPhoto="addPhoto"/>
        <!--    v-for аналог map в React    -->
        <!--   привязываем пропс к компоненте  v-bind:photo="photo"  -->
        <!--   <v-row> что бы могли создавать колонки для форматирования-->
        <v-row>
            <Photo
                    v-bind:key="photo"
                    v-bind:photo="photo"
                    v-for="photo in photos"
            />
        </v-row>
    </v-container>
</template>

<script>
    import Photo from "@/components/photo/Photo";
    import PhotoForm from "@/components/photo/PhotoForm";

    export default {
        name: "PhotoPage",
        components: {PhotoForm, Photo},
        //работа с данными, функция которая возвращает данные
        data: () => ({
            photos: []
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
            }
        }
    }
</script>

<style scoped>

</style>
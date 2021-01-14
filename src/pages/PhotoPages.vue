<template>
    <v-container>
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

    export default {
        name: "PhotoPage",
        components: {Photo},
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
            }
        }
    }
</script>

<style scoped>

</style>
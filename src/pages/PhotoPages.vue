<template>
    <v-container>
        <!--    v-for аналог map в React    -->
        <!--   привязываем пропс к компоненте  v-bind:photo="photo"  -->
        <Photo
                v-bind:key="photo"
                v-bind:photo="photo"
                v-for="photo in photos"
        />
    </v-container>
</template>

<script>
    import Photo from "@/components/photo/Photo";

    export default {
        name: "PhotoPage",
        components: {Photo},
        //работа с данными, функция которая возвращает данные
        data: () => ({
            photos: [
                {id: 1, title: 'Foto 1'},
                {id: 2, title: 'Foto 2'},
                {id: 3, title: 'Foto 3'},
                {id: 4, title: 'Foto 4'},
                {id: 5, title: 'Foto 5'},
            ]
        })
    }
</script>

<style scoped>

</style>
<template>
    <!-- Указываем сколько колонок из 12 будет занимать отдельная фотография -->
    <v-col cols="4">
        <!-- каждая фотограяи будет в отдельной карточке -->
        <v-card>
            <v-card-title>{{photo.title}}</v-card-title>
            <v-card-text>
                <v-img
                        width="200px"
                        height="200px"
                        v-bind:src="photo.url"
                />
            </v-card-text>
        </v-card>
        <!-- Завернуть объет в две фигурные скобки называется интерполяция  -->
        {{ photo.id + photo.title }}
    </v-col>
</template>

<script>
    export default {
        name: "Photo",
        //Указываем пропсы которые будет прокидываться в этот компонет
        props: {
            photo: {
                //можем указать тип проспа и то что он обязательный
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
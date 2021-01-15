<template>
    <!-- Указываем сколько колонок из 12 будет занимать отдельная фотография -->
    <v-col cols="4">
        <!-- каждая фотограяи будет в отдельной карточке -->
        <v-card @click="openPhoto">
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
    import {mapMutations} from 'vuex'
    export default {
        name: "Photo",
        //Указываем пропсы которые будет прокидываться в этот компонет
        props: {
            photo: {
                //можем указать тип проспа и то что он обязательный
                type: Object,
                required: true
            }
        },
        methods: {
            ...mapMutations(['setCurrentPhoto', "showDialog", "hideDialog"]),
            openPhoto(){
                //поскольку управление видимостью окна находиться в родиьельском компоненту нам необходимо заэмитить событие через this
                //первый параметр название события, вторым текущее фото
                //this.$emit('openPhoto', this.photo)
                this.setCurrentPhoto(this.photo)
                this.showDialog()
            }
        }
    }
</script>

<style scoped>

</style>
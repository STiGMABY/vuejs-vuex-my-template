<template>
        <v-container fluid > <!--  fluid - файл растянеться на всю ширину-->
            <v-app-bar
                    color="teal"
                    dark
            >
                <v-spacer/>  <!--заполнит все пространство справа и сдвинет кнопки влево-->
                <v-btn outlined class="ml-5">
                    <router-link to="/">
                        Главная
                    </router-link>
                </v-btn>
                <v-btn outlined class="ml-5">
                    <router-link to="/photo">
                        Фотографии
                    </router-link>
                </v-btn>
            </v-app-bar>
        </v-container>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>


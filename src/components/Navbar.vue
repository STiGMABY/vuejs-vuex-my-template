<template>
        <v-container fluid > <!--  fluid - файл растянеться на всю ширину-->
            <v-app-bar
                    color="teal"
                    dark
            >
                <v-spacer/>  <!--заполнит все пространство справа и сдвинет кнопки влево-->
                <v-btn outlined class="ml-5">Логин</v-btn>
                <v-btn outlined class="ml-5">Главная</v-btn>
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


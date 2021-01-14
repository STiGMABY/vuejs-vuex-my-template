<template>
    <div>
        <!-- Завернуть объет в две фигурные скобки называется интерполяция  -->
        {{ photo.id + photo.title }}
    </div>
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
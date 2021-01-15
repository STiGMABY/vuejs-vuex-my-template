<template>
    <!-- dialogVisible = onChange -->
    <v-dialog
            v-model="$store.getters.getDialogVisible"
            max-width="600"
            @click:outside="$store.commit('hideDialog')"
    >
        <v-card>
            <v-card-title>{{full_title}}</v-card-title>
        </v-card>
        <v-card-text>
            <v-img
                    :src="$store.getters.getCurrentPhoto.url"
            />
        </v-card-text>
    </v-dialog>
</template>

<script>
    export default {
        //будем передавать props через массив, через зяпятую в массиве указываем пропсы
        //props: ['photo', 'dialogVisible'] - способ объявления через массив
        name: "PhotoDialog",
        //функция жизненного цикла, вызываеться в тот момент когда компонент был создан
        // created() {
        //     this.dialogVisible = this.value //присвоим dialogVisible, то что прилетело в value
        // },
        //отслеживыемые свойтсва. Они создаются в поле watch и это должна быть функция, которая называется так же,
        //как какой то пропс или переменная объявленая в data
        //Эта функция будет отрабатываться каждый раз когда это значение изменяеться
        // watch: {
        //     value(newValue) {
        //         console.log(newValue)
        //         //когда у нас изменяеться value(значение родительского компонента), мы изменяяем локальный dialogVisible
        //         //на значение того, что прилетело в value
        //         this.dialogVisible = newValue
        //     },
        //     //делааем dialogVisible отслеживаемым и отправляем туда newValue
        //     //эммитим событие input, v-mode и value как раз работают с этим событием
        //     dialogVisible(newValue) {
        //         this.$emit('input', newValue)
        //     }
        // },
        //Вычисляемые свойства
        //задаются во вкладке computed, которые дожны что то возвращать (результаты вычислений, конкотенаций и далее)
        computed: {
            full_title() {
                return `Название фото - ${this.$store.getters.constructor.title}` //использум в строке 8
            }
        }
    }
</script>

<style scoped>

</style>
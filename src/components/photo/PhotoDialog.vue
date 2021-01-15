<template>
    <!-- dialogVisible = onChange -->
    <v-dialog
            v-model="dialogVisible"
            max-width="600"
    >
        <v-card>
            <v-card-title>{{photo.title}}</v-card-title>
        </v-card>
        <v-card-text>
            <v-img
                    :src="photo.url"
            />
        </v-card-text>
    </v-dialog>
</template>

<script>
    export default {
        //будем передавать props через массив, через зяпятую в массиве указываем пропсы
        //props: ['photo', 'dialogVisible'] - способ объявления через массив

        //Пропсы через объект
        props: {
            photo: {
                type: Object,
                required: true
            },
            value: {
                type: Boolean,
                default: false
            }
        },
        name: "PhotoDialog",
        //функция жизненного цикла, вызываеться в тот момент когда компонент был создан
        created(){
            this.dialogVisible = this.value //присвоим dialogVisible, то что прилетело в value
        },
        data: () => ({
            dialogVisible: false
        }),
        //отслеживыемые свойтсва. Они создаются в поле watch и это должна быть функция, которая называется так же,
        //как какой то пропс или переменная объявленая в data
        //Эта функция будет отрабатываться каждый раз когда это значение изменяеться
        watch:{
            value(newValue){
                console.log(newValue)
                //когда у нас изменяеться value(значение родительского компонента), мы изменяяем локальный dialogVisible
                //на значение того, что прилетело в value
                this.dialogVisible = newValue
            },
            //делааем dialogVisible отслеживаемым и отправляем туда newValue
            //эммитим событие input, v-mode и value как раз работают с этим событием
            dialogVisible(newValue){
                this.$emit('input', newValue)
            }
        }
    }
</script>

<style scoped>

</style>
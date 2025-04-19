<template>
     <div class="flex flex-col gap-2 items-center">
        <img class="w-32" src="@/assets/img/mutlu.jpg" alt="">
        <h1 class="text-5xl 5xl:text-6xl tracking-wider text-white drop-shadow-md font-bold drop-shadow-md">Giriş</h1>
    </div>
    <form class="flex flex-col gap-7 px-2 sm:px-12 my-10" id="form_login" action="">
    <div class="flex flex-col gap-3">
        <input type="text" name="mail" id="mail" class="5xl:text-xl drop-shadow-md block p-2 5xl:p-3 bg-gray-100 w-full rounded-md border-2 border-solid" placeholder="E-posta">
    </div>
    <div class="flex flex-col gap-3">
        <input type="password" name="password" id="password"  class="5xl:text-xl drop-shadow-md block p-2 5xl:p-3 bg-gray-100 w-full rounded-md border-2 border-solid" placeholder="Şifre">
    </div>
    <button @click="login" class="w-full bg-green-600 text-xl 5xl:text-2xl font-medium tracking-wider text-white text-center py-2 5xl:py-3 rounded">Giriş Yap</button>
    <div class="text-center mt-4">
        <router-link :to="{name:'AdminForgotPassword'}" class="text-white font-medium tracking-wider text-xl 5xl:text-2xl drop-shadow-md">Şifremi Unuttum</router-link>
    </div>
    </form>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    setup(){
        const router = useRouter();

        function login(){
            router.push({name:'AdminDashboard'})
        }
        return{
            login
        }
    }

}
</script>

<style scoped>

</style>
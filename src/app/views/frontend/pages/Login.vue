<template>
 <div class="py-24 3xl:py-32  mb-40">
    <div class="w-5/6 sm:w-4/6 md:w-2/3 xl:w-[40%] 3xl:w-[32%] 4xl:w-1/3 mx-auto rounded border shadow-md">
        <div class="flex text-gray-700">
            <div @click="showLoginForm" class="flex-1 py-3 text-xl 4xl:text-2xl font-medium tracking-wider bg-gray-500 text-white text-center cursor-pointer border-e-2 border-b-2" id="btn_login">Giriş</div>
            <div @click="showRegisterForm" class="flex-1 py-3 text-xl 4xl:text-2xl font-medium tracking-wider text-center cursor-pointer border-b-2" id="btn_register">Kayıt Ol</div>
        </div>
        <form @submit.prevent="login" class="flex flex-col gap-7 5xl:gap-8 px-6 sm:px-12 py-12 4xl:py-16 mt-2 text-gray-700" id="form_login" action="">
            <div class="w-32 h-32 mb-6 mx-auto">
             <img src="@/assets/img/logo.png" alt="">
            </div>
            <div class="position-relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <i  class="text-sky-600 mdi mdi-email text-2xl 5xl:text-[1.6rem]"/>
                </div>
                <input v-model="email" type="email" name="mail" class="block w-full 4xl:text-lg rounded-md border-0 py-2.5 5xl:py-3 pl-11 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400" placeholder="E-posta">
            </div>
            <div class="position-relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <i class="text-sky-600 mdi mdi-lock text-2xl 5xl:text-[1.6rem]"/>
                </div>
                <input v-model="password" type="password" name="password" id="password" class="block w-full 4xl:text-lg rounded-md border-0 py-2.5 5xl:py-3 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400" placeholder="Şifre">
            </div>
            <div>
                <button class="w-full bg-green-600 text-white text-center py-2 rounded 4xl:text-lg  tracking-wider font-medium">Giriş Yap</button>
                <div v-if="isError" class="bg-red-100 text-red-600 p-2 tracking-wider text-center mt-2">E-posta veya şifre hatalı</div>
            </div>
            <!-- <div class="text-center mt-2">
                <router-link :to="{name:''}" class="text-sky-600 4xl:text-lg tracking-wider font-medium">Şifremi Unuttum</router-link>
            </div> -->
        </form>
        <form  @submit.prevent="register" class="flex flex-col gap-7 px-6 sm:px-12 py-10 4xl:py-16  text-gray-700 hidden" id="form_register">
          <div class="w-32 h-32 mb-6 mx-auto">
              <img src="@/assets/img/logo.png" alt="">
            </div>
            <div>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i  class="text-sky-600 mdi mdi-account text-2xl 5xl:text-[1.6rem]"/>
                    </div>
                    <input v-model="registerData.full_name" type="text" name="name" id="name" class="block w-full 4xl:text-lg rounded-md border-0 py-2.5 5xl:py-3 pl-11 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400" placeholder="Ad Soyad">
                </div>
            </div>
            <div>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i  class="text-sky-600 mdi mdi-email text-2xl 5xl:text-[1.6rem]"/>
                    </div>
                <input v-model="registerData.email" type="mail" name="mail" class="block w-full 4xl:text-lg rounded-md border-0 py-2.5 5xl:py-3 pl-11 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400" placeholder="E-posta">
                </div>
            </div>

            <div>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i class="text-sky-600 mdi mdi-cellphone text-2xl" /> 
                    </div>
                <input v-model="registerData.phone_number" type="phone" name="phone" class="block w-full 4xl:text-lg rounded-md border-0 py-2.5 5xl:py-3  pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400" v-mask="'05## ### ## ##'" placeholder="05__ ___ __ __" >
                </div>
            </div>
             <div>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i class="text-sky-600 mdi mdi-lock text-2xl 5xl:text-[1.6rem]"/>
                    </div>
                    <input v-model="registerData.password" type="password" name="password" class="block w-full 4xl:text-lg rounded-md border-0 py-2.5 5xl:py-3 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400" placeholder="Şifre">
                </div>
            </div>
             <div>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i class="text-sky-600 mdi mdi-lock text-2xl 5xl:text-[1.6rem]"/>
                    </div>
                <input v-model="registerData.password_confirmation" type="password" name="password_confirmation" id="password_confirmation" class="block w-full 4xl:text-lg rounded-md border-0 py-2.5 5xl:py-3 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400" placeholder="Şifre Tekrar">
                </div>
            </div>
            <button class="w-full bg-green-600 text-white text-center py-2 rounded 4xl:text-lg  tracking-wider font-medium">Kayıt Ol</button>
        </form>
    </div>
 </div>
</template>

<script>
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
import { useStore } from 'vuex';
export default {

setup(){
    const store = useStore();
    const router = useRouter();
    const email = ref('')
    const password = ref('');
    const isError = ref(false);
    const registerData = reactive({
        full_name:'',
        email:'',
        password: '',
        password_confirmation: '',
        phone_number: '',
    })

     const login = async () => {
            try {
                const status = await store.dispatch('login', { email: email.value, password: password.value });
            if(status){
                router.push({ name: 'UserIndex' });
            }else{
                isError.value = true
            }
        } catch (error) {
            console.error('Login hatası:', error);
        }
    }

    const register = async () => {
            try {
                const status = await store.dispatch('user_user/register', registerData);
            if(status){
               setTimeout(() => {
                location.reload();
               },2000)
            }
        } catch (error) {
            console.error('Kayıt ol hatası:', error);
        }
    }

    function showLoginForm(){
        const formLogin = document.getElementById('form_login');
        const formRegister = document.getElementById('form_register');
        const btnLogin = document.getElementById('btn_login');
        const btnRegister = document.getElementById('btn_register');

        btnRegister.classList.remove('bg-gray-500','text-white');
        btnLogin.classList.add('bg-gray-500','text-white');

        formRegister.classList.add('hidden')
        formLogin.classList.remove('hidden')
    }

    function showRegisterForm(){
         const formLogin = document.getElementById('form_login');
        const formRegister = document.getElementById('form_register');
         const btnLogin = document.getElementById('btn_login');
        const btnRegister = document.getElementById('btn_register');

        btnLogin.classList.remove('bg-gray-500','text-white');
        btnRegister.classList.add('bg-gray-500','text-white');
        
        formLogin.classList.add('hidden')
        formRegister.classList.remove('hidden')
    }

    onMounted(() => {
     
    })
    
    return{
        showLoginForm,
        showRegisterForm,
        login,
        register,
        email,
        password,
        isError,
        registerData
}
}
}
</script>

<style>

</style>
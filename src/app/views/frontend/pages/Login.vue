<template>
 <div class="py-24 3xl:py-32  mb-40">
    <div class="w-5/6 sm:w-4/6 md:w-1/2 xl:w-[40%] 3xl:w-[32%] 4xl:w-1/3 mx-auto rounded border shadow-md">
        <div class="flex text-gray-700">
            <div @click="showLoginForm" class="flex-1 py-3 text-xl 4xl:text-2xl font-medium tracking-wider bg-gray-500 text-white text-center cursor-pointer border-e-2 border-b-2" id="btn_login">Giriş</div>
            <div @click="showRegisterForm" class="flex-1 py-3 text-xl 4xl:text-2xl font-medium tracking-wider text-center cursor-pointer border-b-2" id="btn_register">Kayıt Ol</div>
        </div>
        <form class="flex flex-col gap-7 5xl:gap-8 px-6 sm:px-12 py-12 4xl:py-16 mt-2 text-gray-700" id="form_login" action="">
            <div class="w-32 h-32 mb-6 mx-auto">
             <img src="@/assets/img/logo.png" alt="">
            </div>
            <div class="position-relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <i  class="text-sky-600 mdi mdi-email text-2xl 5xl:text-[1.6rem]"/>
                </div>
                <input type="text" name="mail" class="block w-full 4xl:text-lg rounded-md border-0 py-2.5 5xl:py-3 pl-11 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400" placeholder="E-posta">
            </div>
            <div class="position-relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <i class="text-sky-600 mdi mdi-lock text-2xl 5xl:text-[1.6rem]"/>
                </div>
                <input type="password" name="password" id="password" class="block w-full 4xl:text-lg rounded-md border-0 py-2.5 5xl:py-3 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400" placeholder="Şifre">
            </div>
            <div>
                <button @click="login" class="w-full bg-green-600 text-white text-center py-2 rounded 4xl:text-lg  tracking-wider font-medium">Giriş Yap</button>
            </div>
            <!-- <div class="text-center mt-2">
                <router-link :to="{name:''}" class="text-sky-600 4xl:text-lg tracking-wider font-medium">Şifremi Unuttum</router-link>
            </div> -->
        </form>
        <form class="flex flex-col gap-7 px-6 sm:px-12 py-10 4xl:py-16  text-gray-700 hidden" id="form_register" action="">
          <div class="w-32 h-32 mb-6 mx-auto">
              <img src="@/assets/img/logo.png" alt="">
            </div>
            <div>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i  class="text-sky-600 mdi mdi-account text-2xl 5xl:text-[1.6rem]"/>
                    </div>
                    <input type="text" name="name" id="name" class="block w-full 4xl:text-lg rounded-md border-0 py-2.5 5xl:py-3 pl-11 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400" placeholder="Ad Soyad">
                </div>
            </div>
            <div>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i  class="text-sky-600 mdi mdi-email text-2xl 5xl:text-[1.6rem]"/>
                    </div>
                <input type="mail" name="mail" class="block w-full 4xl:text-lg rounded-md border-0 py-2.5 5xl:py-3 pl-11 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400" placeholder="E-posta">
                </div>
            </div>
            <div>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i  class="text-sky-600 mdi mdi-github text-2xl 5xl:text-[1.6rem]"/>
                    </div>
                <input type="text" name="github" class="block w-full 4xl:text-lg rounded-md border-0 py-2.5 5xl:py-3 pl-11 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400" placeholder="Github adresi">
                </div>
            </div>
            <div>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i class="text-sky-600 mdi mdi-cellphone text-2xl" /> 
                        +90
                    </div>
                <input type="phone" name="phone" class="block w-full 4xl:text-lg rounded-md border-0 py-2.5 5xl:py-3 pl-[72px] pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400" placeholder="Telefon">
                </div>
                <p class="text-sm text-gray-500 mt-1">Telefon numaranız whatsapp grubuna eklemek için alınmaktadır.</p>
            </div>
             <div>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i class="text-sky-600 mdi mdi-lock text-2xl 5xl:text-[1.6rem]"/>
                    </div>
                    <input type="password" name="password" id="password" class="block w-full 4xl:text-lg rounded-md border-0 py-2.5 5xl:py-3 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400" placeholder="Şifre">
                </div>
            </div>
             <div>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i class="text-sky-600 mdi mdi-lock text-2xl 5xl:text-[1.6rem]"/>
                    </div>
                <input type="password" name="password_confirmation" id="password_confirmation" class="block w-full 4xl:text-lg rounded-md border-0 py-2.5 5xl:py-3 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400" placeholder="Şifre Tekrar">
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
import { onMounted } from 'vue';
export default {

setup(){
    const router = useRouter();

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

    function login(){
        router.push({name:'Accounts'})
    }

    onMounted(() => {
      Swal.fire({
          position: "center",
          icon: "info",
          title:"😎",
          html:"<div><span class='font-bold text-red-400'>Giriş</span> ve <span class='font-bold text-red-400'>Kayıt Ol</span> işlemleri en kısa sürede aktif olacaktır.</div>",
          showConfirmButton: true,
          confirmButtonText: "Tamam",
          confirmButtonColor: "#3085d6", 
      });
    })
    
    return{
        showLoginForm,
        showRegisterForm,
        login,
    }
}
}
</script>

<style>

</style>
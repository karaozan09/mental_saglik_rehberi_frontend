<template>
 <div class="py-24 3xl:py-32  mb-40">
    <div class="w-5/6 sm:w-4/6 md:w-1/2 xl:w-[40%] 3xl:w-[32%] 4xl:w-1/3 mx-auto rounded border shadow-md">
        <div class="flex text-gray-700">
            <div @click="showLoginForm" class="flex-1 py-3 text-xl 4xl:text-2xl font-medium tracking-wider bg-gray-500 text-white text-center cursor-pointer border-e-2 border-b-2" id="btn_login">Giriş</div>
            <div @click="showRegisterForm" class="flex-1 py-3 text-xl 4xl:text-2xl font-medium tracking-wider text-center cursor-pointer border-b-2" id="btn_register">Kayıt Ol</div>
        </div>
        <form class="flex flex-col gap-7 5xl:gap-8 px-6 sm:px-12 py-12 4xl:py-16 mt-2 text-gray-700" id="form_login" action="">
            <div class="w-32 h-32 mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 50 50" viewBox="0 0 50 50" id="laptop-user">
                <path fill="#F06562" d="M40.3159,33.7859H9.6841l2.6864-8.1367c0.4089-1.2371,1.5683-2.0756,2.8675-2.0756h19.524
                  c1.3044,0,2.4586,0.8385,2.8675,2.0756L40.3159,33.7859z"></path>
                <rect width="7.247" height="10.212" x="21.382" y="23.574" fill="#DFDFDF"></rect>
                <path fill="#EF4C4A" d="M21.6159 23.7154c.0112-.0349.0296-.0678.042-.1024h-.9026c-.0405.0362-.0844.0651-.1246.1024-.9698.8932-1.8528 2.0723-3.2156 3.4913l2.0927 1.1535-2.2713 1.3679 2.9298 4.0578h3.2616l-1.8834-8.034C21.3863 25.073 21.4067 24.3636 21.6159 23.7154zM30.4921 28.3602l2.0978-1.1535c-1.3679-1.4139-2.2509-2.5981-3.2157-3.4913-.059-.0547-.1233-.0978-.183-.1503h-.8688c.019.0507.0452.0991.0617.1503.2144.6482.2348 1.3577.0715 2.0366l-1.8834 8.034h3.2616l2.9349-4.0578L30.4921 28.3602z"></path>
                <path fill="#EEC06E" d="M28.2658,17.8461v4.6996c0,1.9183-1.4178,3.4728-3.1676,3.4728h-0.1944
                  c-1.7498,0-3.1677-1.5544-3.1677-3.4728v-4.6996H28.2658z"></path>
                <path fill="#FBD178" d="M32.9145,12.2163c0,0.6625-0.0569,1.3147-0.1605,1.941c-0.7402,4.3996-3.9286,7.7071-7.7537,7.7071
                  s-7.0135-3.3075-7.7537-7.7071c-0.1035-0.6263-0.1605-1.2785-0.1605-1.941c0-2.6709,0.8903-5.0829,2.3292-6.8324
                  c1.4337-1.7391,3.4058-2.8158,5.5849-2.8158s4.1512,1.0766,5.5849,2.8158C32.0242,7.1334,32.9145,9.5455,32.9145,12.2163z"></path>
                <path fill="#545554" d="M19.3028,4.0864c-0.2901-0.6367-0.1228-1.4229,0.314-1.9695s1.1043-0.8731,1.7896-1.0144
                  S22.8,0.9892,23.4974,1.0461c1.1501,0.0937,2.2939,0.2639,3.4215,0.5091c1.1455,0.249,2.2833,0.579,3.3198,1.1266
                  s1.9725,1.3255,2.5739,2.3317c0.7485,1.2522,0.932,2.7683,0.8698,4.2258c-0.0928,2.1759-0.7467,4.281-1.8082,6.1826
                  c-0.1913-1.702-0.3827-3.4039-0.574-5.1059c-0.0686-0.6099-0.1461-1.2455-0.4845-1.7576
                  c-0.3862-0.5844-1.0647-0.9212-1.7512-1.0606s-1.3943-0.1069-2.0948-0.1042c-1.3917,0.0054-2.7838-0.1097-4.1558-0.343
                  c-0.9681-0.1646-2.277-0.6486-3.1003,0.1662c-0.3715,0.3677-0.4855,0.9149-0.5823,1.4285c-0.4233,2.2457-0.8467,4.4915-1.27,6.7372
                  c-1.1777-2.4214-1.7167-5.1225-1.5116-7.8073c0.0645-0.8445,0.2084-1.7089,0.6513-2.4308
                  C17.4438,4.4224,18.4578,4.0281,19.3028,4.0864z"></path>
                <path fill="#FBD178" d="M17.1116,12.8196c0.0236,0.454,0.0633,0.9034,0.1351,1.3377c0.7402,4.3997,3.9286,7.7071,7.7537,7.7071
                  c3.8251,0,7.0136-3.3074,7.7538-7.7071c0.0718-0.4343,0.1115-0.8837,0.135-1.3377H17.1116z"></path>
                <ellipse cx="32.533" cy="12.773" fill="#FBD178" rx="1.625" ry="2.098"></ellipse>
                <ellipse cx="17.469" cy="12.773" fill="#FBD178" rx="1.625" ry="2.098"></ellipse>
                <path fill="#919191" d="M41.338,49.0004H8.662l-2.1497-2.6717c-0.2516-0.3127-0.029-0.7776,0.3724-0.7776h36.2306
                  c0.4014,0,0.624,0.4649,0.3724,0.7776L41.338,49.0004z"></path>
                <path fill="#CCCBCB" d="M40.5102,28.6672H9.5607c-0.4767,0-0.8632,0.3864-0.8632,0.8632v19.47h32.6759v-19.47
                  C41.3734,29.0536,40.9869,28.6672,40.5102,28.6672z"></path>
                <path fill="#919191" d="M25.0301,36.0234c-1.5349,0-2.8051,1.2703-2.8051,2.8051c0,1.5454,1.2702,2.8157,2.8051,2.8157
                  c1.5455,0,2.8157-1.2703,2.8157-2.8157C27.8459,37.2936,26.5756,36.0234,25.0301,36.0234z"></path>
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 50 50" viewBox="0 0 50 50" id="laptop-user">
                <path fill="#F06562" d="M40.3159,33.7859H9.6841l2.6864-8.1367c0.4089-1.2371,1.5683-2.0756,2.8675-2.0756h19.524
                  c1.3044,0,2.4586,0.8385,2.8675,2.0756L40.3159,33.7859z"></path>
                <rect width="7.247" height="10.212" x="21.382" y="23.574" fill="#DFDFDF"></rect>
                <path fill="#EF4C4A" d="M21.6159 23.7154c.0112-.0349.0296-.0678.042-.1024h-.9026c-.0405.0362-.0844.0651-.1246.1024-.9698.8932-1.8528 2.0723-3.2156 3.4913l2.0927 1.1535-2.2713 1.3679 2.9298 4.0578h3.2616l-1.8834-8.034C21.3863 25.073 21.4067 24.3636 21.6159 23.7154zM30.4921 28.3602l2.0978-1.1535c-1.3679-1.4139-2.2509-2.5981-3.2157-3.4913-.059-.0547-.1233-.0978-.183-.1503h-.8688c.019.0507.0452.0991.0617.1503.2144.6482.2348 1.3577.0715 2.0366l-1.8834 8.034h3.2616l2.9349-4.0578L30.4921 28.3602z"></path>
                <path fill="#EEC06E" d="M28.2658,17.8461v4.6996c0,1.9183-1.4178,3.4728-3.1676,3.4728h-0.1944
                  c-1.7498,0-3.1677-1.5544-3.1677-3.4728v-4.6996H28.2658z"></path>
                <path fill="#FBD178" d="M32.9145,12.2163c0,0.6625-0.0569,1.3147-0.1605,1.941c-0.7402,4.3996-3.9286,7.7071-7.7537,7.7071
                  s-7.0135-3.3075-7.7537-7.7071c-0.1035-0.6263-0.1605-1.2785-0.1605-1.941c0-2.6709,0.8903-5.0829,2.3292-6.8324
                  c1.4337-1.7391,3.4058-2.8158,5.5849-2.8158s4.1512,1.0766,5.5849,2.8158C32.0242,7.1334,32.9145,9.5455,32.9145,12.2163z"></path>
                <path fill="#545554" d="M19.3028,4.0864c-0.2901-0.6367-0.1228-1.4229,0.314-1.9695s1.1043-0.8731,1.7896-1.0144
                  S22.8,0.9892,23.4974,1.0461c1.1501,0.0937,2.2939,0.2639,3.4215,0.5091c1.1455,0.249,2.2833,0.579,3.3198,1.1266
                  s1.9725,1.3255,2.5739,2.3317c0.7485,1.2522,0.932,2.7683,0.8698,4.2258c-0.0928,2.1759-0.7467,4.281-1.8082,6.1826
                  c-0.1913-1.702-0.3827-3.4039-0.574-5.1059c-0.0686-0.6099-0.1461-1.2455-0.4845-1.7576
                  c-0.3862-0.5844-1.0647-0.9212-1.7512-1.0606s-1.3943-0.1069-2.0948-0.1042c-1.3917,0.0054-2.7838-0.1097-4.1558-0.343
                  c-0.9681-0.1646-2.277-0.6486-3.1003,0.1662c-0.3715,0.3677-0.4855,0.9149-0.5823,1.4285c-0.4233,2.2457-0.8467,4.4915-1.27,6.7372
                  c-1.1777-2.4214-1.7167-5.1225-1.5116-7.8073c0.0645-0.8445,0.2084-1.7089,0.6513-2.4308
                  C17.4438,4.4224,18.4578,4.0281,19.3028,4.0864z"></path>
                <path fill="#FBD178" d="M17.1116,12.8196c0.0236,0.454,0.0633,0.9034,0.1351,1.3377c0.7402,4.3997,3.9286,7.7071,7.7537,7.7071
                  c3.8251,0,7.0136-3.3074,7.7538-7.7071c0.0718-0.4343,0.1115-0.8837,0.135-1.3377H17.1116z"></path>
                <ellipse cx="32.533" cy="12.773" fill="#FBD178" rx="1.625" ry="2.098"></ellipse>
                <ellipse cx="17.469" cy="12.773" fill="#FBD178" rx="1.625" ry="2.098"></ellipse>
                <path fill="#919191" d="M41.338,49.0004H8.662l-2.1497-2.6717c-0.2516-0.3127-0.029-0.7776,0.3724-0.7776h36.2306
                  c0.4014,0,0.624,0.4649,0.3724,0.7776L41.338,49.0004z"></path>
                <path fill="#CCCBCB" d="M40.5102,28.6672H9.5607c-0.4767,0-0.8632,0.3864-0.8632,0.8632v19.47h32.6759v-19.47
                  C41.3734,29.0536,40.9869,28.6672,40.5102,28.6672z"></path>
                <path fill="#919191" d="M25.0301,36.0234c-1.5349,0-2.8051,1.2703-2.8051,2.8051c0,1.5454,1.2702,2.8157,2.8051,2.8157
                  c1.5455,0,2.8157-1.2703,2.8157-2.8157C27.8459,37.2936,26.5756,36.0234,25.0301,36.0234z"></path>
              </svg>
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
import { useRouter } from 'vue-router';
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
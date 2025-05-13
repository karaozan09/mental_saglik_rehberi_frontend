<template>
    <div class="login-container">
        <div class="login-inner-container px-4 py-6 5xl:py-16">
            <div class="flex flex-col gap-2 items-center">
                <img class="w-32 5xl:w-44" src="@/assets/img/user.png" alt="">
                <h1 class="text-3xl 2xl:text-[2.6rem] 4xl:text-5xl 5xl:text-6xl tracking-wider text-white drop-shadow-md font-bold drop-shadow-md">Giriş</h1>
            </div>
            <form @submit.prevent="login" class="flex flex-col gap-7 px-2 sm:px-12 my-10" id="form_login" action="">
                <div class="flex flex-col gap-3">
                    <input v-model="email" type="text" name="email" id="email" class="text-sm 5xl:text-lg drop-shadow-md block p-2 5xl:p-2.5 bg-gray-100 w-full rounded-md border-2 border-solid" placeholder="E-posta">
                </div>
                <div class="flex flex-col gap-3">
                    <input v-model="password" type="password" name="password" id="password"  class="text-sm 5xl:text-lg drop-shadow-md block p-2 5xl:p-2.5 bg-gray-100 w-full rounded-md border-2 border-solid" placeholder="Şifre">
                </div>
                <div>
                    <button class="w-full bg-green-600 3xl:text-lg 5xl:text-2xl font-medium tracking-wider text-white text-center py-2 5xl:py-2.5 rounded">Giriş Yap</button>
                    <div v-if="isError" class="bg-red-100 text-red-600 p-2 tracking-wider text-center mt-2">E-posta veya şifre hatalı</div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
export default {
    setup(){
        const store = useStore();
        const router = useRouter();
        const email = ref('')
        const password = ref('');
        const isError = ref(false);

        const login = async () => {
            try {
                const value = await store.dispatch('login', { email: email.value, password: password.value });
                if(value && value == 'admin'){
                    router.push({ name: 'AdminDashboard' });
                }else{
                    isError.value = true
                }
            } catch (error) {
                console.error('Login hatası:', error);
            }
        }
        return{
            login,
            email,
            password,
            isError
        }
    }

}
</script>

<style scoped>
 .login-container{
        height: 100vh;
        background-color: #8BC6EC;
        background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-inner-container{
        width: 600px;
        border:1px solid #9CB9E9;
        border-radius: 0.3rem;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5.5px);
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    input{
        outline: 0;
    }

    @media only screen and (min-width:2600px){
        .login-inner-container{
            width: 800px;
        }
    }
    @media only screen and (max-width:768px){
        .login-container{
            padding: 0 2rem;
        }
        .login-inner-container{
            width: 100%;
        }
    }
    @media only screen and (max-width:400px){
        .login-container{
            padding: 0 1rem;
        }
    }

</style>
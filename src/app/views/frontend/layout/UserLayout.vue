<template>
  <Header/>
  <div class="flex lg:gap-8 lg:p-10 relative min-h-[80vh]">
    <aside class="main-aside w-1/4 xl:w-[22%] close gap-4 shadow-lg border rounded h-max">
    <i @click="asideDisplay" class="mdi mdi-menu-close text-3xl lg:hidden aside-menu-icon"></i>
        <div class="flex flex-col items-center justify-center mt-8 mb-6 lg:my-8">
            <img v-if="user.img" :src="user.img" alt="" class="profil-photo">
            <img v-else src="@/assets/img/user.png" alt="" class="profil-photo">
            <h2 class="text-gray-700 mt-5 text-lg font-medium tracking-wider">{{user.full_name}}</h2>
        </div>
        <ul class="flex flex-col p-8 pt-3 font-medium text-gray-700">
            <li :class="{ 'bg-sky-600 text-white ' : route.name == 'UserIndex'}" class="border-b-2 py-2 px-3 tracking-wider font-bold list-item">
                <router-link class="flex items-center gap-4" :to="{name:'UserIndex'}">
                    <i class="mdi mdi-chat text-2xl"/> Chat Panel
                </router-link>
            </li>
            <li :class="{ 'bg-sky-600 text-white ' : route.fullPath.includes('settings')}" class="border-b-2 py-2 px-3 tracking-wider font-bold list-item">
                <router-link class="flex items-center gap-4" :to="{name:'UserSettings'}">
                    <i class="mdi mdi-cog text-2xl"></i> Ayarlar
                </router-link>
            </li>
            <li @click="logout" class="border-b-2 py-2 px-3  tracking-wider font-bold list-item">
                <span class="flex items-center gap-4 cursor-pointer">
                    <i class="mdi mdi-logout text-2xl"></i> Çıkış
                </span>
            </li>
        </ul>
    </aside>
    <div class="main-content h-max flex-1 shadow-lg border rounded py-16 lg:py-12 px-6 sm:px-12">
        <h1 class="font-bold text-3xl tracking-wider text-gray-700 mb-8 lg:mb-10">{{routeName}}</h1>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/app/components/frontend/header/Header.vue'
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
    components:{
        Header
    },
   setup(){
    const route = useRoute()
    const router = useRouter();
    const store = useStore();
    const user = computed(() => store.state.loginUser)
    const routeName = computed(() => route.meta.displayName);

    function logout(){
        store.dispatch('logout');
        router.push({ name: 'Home' });
    }

    function asideDisplay(e){
        const mainAside = document.querySelector('.main-aside');
        const icon = e.target.closest('.aside-menu-icon')
        const screenWidth = screen.width

        if(mainAside.classList.contains('open')){
            mainAside.classList.remove('open');
            mainAside.classList.add('close');
            icon.classList.replace('mdi-backburger','mdi-menu-close')
            if(screenWidth <= 576){
                icon.style.right = "-3.5rem"
            }
        }else{
            mainAside.classList.remove('close');
            mainAside.classList.add('open');
            icon.classList.replace('mdi-menu-close','mdi-backburger');
            if(screenWidth <= 576){
                icon.style.right = "2rem"
            }
        }
    }

    onMounted(() => {
        const icon = document.querySelector('.aside-menu-icon')
        const asideItems = document.querySelectorAll('.main-aside ul a')
        const mainAside = document.querySelector('.main-aside');

        asideItems.forEach(i => {
            i.addEventListener('click',function(e){
                if(e.target.closest('li')){
                    mainAside.classList.remove('open');
                    mainAside.classList.add('close')
                    icon.classList.replace('mdi-backburger','mdi-menu-close');
                    icon.style.right = "-3.5rem"
                }
            })
        })
    })

    return{
        route,
        routeName,
        asideDisplay,
        logout,
        user
    }
   }
    
   
}
</script>

<style scoped>
    .profil-photo{
        width: 180px;
        height: 180px;
        border-radius: 50%;
        border: 3px solid #32b4f6;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
    .list-item{
        transition: all 0.2s;
    }
    .list-item:hover:not(.bg-sky-600){
        background-color: #eee;
    }
    .v-data-table-header__content{
        font-size: 1.05rem !important;
    }

    .main-content{
        background-color: #fff;
    }
    .main-aside{
        background-color: #fff;
    }

    @media only screen and (max-width:992px){
        .main-aside{
            width: 400px !important;
            height: 100% !important;
            position: absolute;
            top: 0;
            left: 0;
            transition: .5s;
            z-index: 9;
        }
        .main-aside.open{
            transform: translate(0);
        }
        .main-aside.close{
            width: 0;
            transform: translate(-100%);
        }
        .main-content{
           position: relative;
           z-index: 1;
        }
        .aside-menu-icon{
            position: absolute;
            top: 10px;
            right: -3.5rem;
            z-index: 1;
        }
    }

    @media only screen and (max-width:1280px){
        .profil-photo{
            width: 150px;
            height: 150px;
        }
    }

    @media only screen and (max-width:576px){
        .main-aside{
            width: 100% !important;
        }
    }

</style>
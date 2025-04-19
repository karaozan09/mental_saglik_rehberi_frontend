<template>
  <Header/>
  <div class="flex xl:gap-8 xl:p-10 relative min-h-[80vh]">
    <aside class="main-aside w-3/12 close gap-4 shadow-lg border rounded h-max">
    <i @click="asideDisplay" class="mdi mdi-menu-close text-3xl xl:hidden aside-menu-icon"></i>
        <div class="flex flex-col items-center justify-center mt-8 mb-6 xl:my-8">
            <img src="@/assets/img/mutlu.jpg" alt="" class="profil-photo">
        </div>
        <div v-if="route.path.includes('/author')">
            <AuthorSidebar />
        </div>
        <div v-else-if="route.path.includes('/instructor')">
            <InstructorSidebar />
        </div>
        <div v-else-if="route.path.includes('/student')">
            <StudentSidebar />
        </div>
    </aside>
    <div class="main-content flex-1 shadow-lg border rounded py-16 xl:py-12 px-6 sm:px-12">
        <div>
            <h1 class="font-bold text-2xl tracking-wider text-gray-700 mb-8 xl:mb-10">{{routeName}}</h1>
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '@/app/components/frontend/header/Header.vue'
import InstructorSidebar from '@/app/components/frontend/instructor/sidebar/Sidebar.vue'
import AuthorSidebar from '@/app/components/frontend/author/sidebar/Sidebar.vue'
import StudentSidebar from '@/app/components/frontend/student/sidebar/Sidebar.vue'

import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
export default {
    components:{
        Header,
        InstructorSidebar,
        AuthorSidebar,
        StudentSidebar
    },
   setup(){
    const route = useRoute()
    const routeName = computed(() => route.meta.displayName);

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
        asideDisplay
    }
   }
    
   
}
</script>

<style scoped>
    .profil-photo{
        width: 200px;
        height: 200px;
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

    @media only screen and (max-width:1280px){
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

    @media only screen and (max-width:992px){
        .profil-photo{
            width: 170px;
            height: 170px;
        }
    }

    @media only screen and (max-width:576px){
        .main-aside{
            width: 100% !important;
        }
    }

</style>
<template>
  <ul class="flex flex-col p-8 pt-3 font-medium text-gray-700">
            <li :class="{ 'bg-sky-600 text-white ' : route.name == ''}" class="border-b-2 py-2 px-3 tracking-wider font-bold list-item">
                <router-link class="flex items-center gap-4" :to="{name:''}">
                    <i class="mdi mdi-gauge text-2xl"/> Gösterge Paneli
                </router-link>
            </li>
            <li :class="{ 'bg-sky-600 text-white ' : route.fullPath.includes('messages')}" class="border-b-2 py-2 px-3  tracking-wider font-bold list-item">
                <router-link class="flex items-center gap-4" :to="{name:''}">
                    <i class="mdi mdi-email text-2xl"/> Mesajlar
                </router-link>
            </li>
            <li :class="{ 'bg-sky-600 text-white ' : route.fullPath.includes('settings')}" class="border-b-2 py-2 px-3 tracking-wider font-bold list-item">
                <router-link class="flex items-center gap-4" :to="{name:''}">
                    <i class="mdi mdi-cog text-2xl"></i> Ayarlar
                </router-link>
            </li>
            <li @click="logout" class="border-b-2 py-2 px-3  tracking-wider font-bold list-item">
                <span class="flex items-center gap-4 cursor-pointer">
                    <i class="mdi mdi-logout text-2xl"></i> Çıkış
                </span>
            </li>
        </ul>
</template>

<script>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
    
 setup(){
        const route = useRoute()
        const router = useRouter()
        function logout(){
            router.push({name:'Home'})
        }

        onMounted(() => {
            const subMenus = document.querySelectorAll('.sub-menu')
            document.addEventListener('click',function(e){
                e.stopPropagation();
                if(!e.target.closest('.list-item')?.querySelector('.sub-menu')){
                    subMenus.forEach(subMenu => {
                        subMenu.classList.remove('open')
                    })
                }
            })
        })
        function subMenuToggle(e){
            const subMenus = document.querySelectorAll('.sub-menu')
            subMenus.forEach(subMenu => {
                if(e.target.closest('.list-item').querySelector('.sub-menu') == subMenu){
                    subMenu.classList.toggle('open')
                }else{
                    subMenu.classList.remove('open')
                }
            }) 
        }

        return{
            route,
            logout,
            subMenuToggle
        }
    }

}
</script>

<style>
    .sub-menu{
        max-height: 0;
        overflow: hidden;
        transition: all .5s;
        padding: 0;
    }
    .sub-menu > li {
        padding-left: 1.5rem;
        position: relative;
    }
    .sub-menu > li::before{
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: absolute;
        border: 1px solid #333;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #ddd;
        z-index: 10;

    }   
    .sub-menu > li::after{
        content: "";
        width: 1px;
        height: 100%;
        position: absolute;
        left:8.5px;
        top: 0;
        background-color: #333;
    }
    .sub-menu .text-orange-800:before{
        background-color: #993413;
    }
    .sub-menu.open{
        max-height: 400px;
    }

</style>
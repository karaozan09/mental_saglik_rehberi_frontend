<template>
  <aside class="admin-sidebar open">
        <ul class="tracking-wider text-white text-sm 3xl:text-[0.9rem] 5xl:text-xl font-medium">
            <li :class="{'bg-[#F3F6FB] text-black border-r border-solid' : route.path.includes('dashboard')}">
                <router-link :to="{name:''}" class="flex items-center drop-shadow-md text-nowrap">
                    <span class="w-10 shrink-0"><i class="mdi mdi-gauge text-[1.25rem] 3xl:text-xl"/></span>
                    <span>Gösterge Paneli</span>
                </router-link>
            </li>
            <li :class="{'bg-[#F3F6FB] text-black border-r border-solid' : route.path.includes('messages')}">
                <router-link :to="{name:''}" class="flex items-center drop-shadow-md text-nowrap">
                    <span class="w-10 shrink-0"><i class="mdi mdi-email text-[1.25rem] 3xl:text-xl"/></span>
                    <span>Mesajlar</span>
                </router-link>
            </li>
            <li :class="{'bg-[#F3F6FB] text-black border-r border-solid' : route.path.includes('settings')}">
                <router-link :to="{name:''}" class="flex items-center drop-shadow-md text-nowrap">
                    <span class="w-10 shrink-0"><i class="mdi mdi-cog text-[1.25rem] 3xl:text-xl"></i></span>
                    <span>Ayarlar</span>
                </router-link>
            </li>
            <li>
                <div @click="logout" class="flex items-center drop-shadow-md text-nowrap cursor-pointer">
                    <span class="w-10 shrink-0"><i class="mdi mdi-logout text-[1.25rem] 3xl:text-xl"></i></span>
                    <span>Çıkış</span>
                </div>
            </li>
        </ul>
  </aside>
</template>

<script>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
export default {
    setup(){
        const router = useRouter();
        const route = useRoute();

        onMounted(() => {
            const blackScreen = document.querySelector('.admin-black-screen');
            const sidebar = document.querySelector('.admin-sidebar');
            let screenWidth = window.innerWidth;
            const subMenus = document.querySelectorAll('.sub-menu')

            document.addEventListener('click',function(e){
                e.stopPropagation();
                if(!e.target.closest('.list-item')?.querySelector('.sub-menu')){
                    subMenus.forEach(subMenu => {
                        subMenu.classList.remove('open')
                    })
                }
            })

            if(screenWidth < 1400){
                sidebar.classList.add('close');
                sidebar.classList.remove('open');
            }else{
                sidebar.classList.remove('close');
                sidebar.classList.add('open');
            }
            window.addEventListener('resize', () => {
                screenWidth = window.innerWidth;
                
                if(screenWidth < 1400){
                    sidebar.classList.add('close');
                    sidebar.classList.remove('open');
                    blackScreen.classList.add('hidden')
                }else{
                    sidebar.classList.remove('close');
                    sidebar.classList.add('open');
                }
            });
        })

        function logout(){
            router.push({name:'AdminLogin'})
        }

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
            subMenuToggle,
            logout,
            route
        }
    }
}
</script>

<style scoped>
   .admin-sidebar{
        background-color: #6E0840;
        transition: all .3s ease;
        overflow: hidden;
        padding: 2rem 0;
    }
    .admin-sidebar.open{
        width: 280px;
    }
    .admin-sidebar > ul > li{
        border-bottom: 1px solid rgb(255, 255, 255,0.1);
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);
        padding: 0.7rem 1.4rem;
    }
    .admin-sidebar.close{
        width: 58px;
    }
    .admin-sidebar.close i{
        position: relative;
        left:-5px
    }

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
        background-color: #F3F6FA;
        z-index: 10;

    }
    .sub-menu > li::after{
        content: "";
        width: 1px;
        height: 100%;
        position: absolute;
        left:8.5px;
        top: 0;
        background-color: #F3F6FA;
    }
    .sub-menu .active-sub-link:before{
        background-color: #6D0840;
    }
    .sub-menu.open{
        max-height: 400px;
    }


    @media only screen and (max-width:1400px){
        .admin-sidebar{
            position: absolute;
            left: 0;
            top: 6.5rem;
            height: 100%;
            z-index: 11;
            overflow: hidden;

        }
        .admin-sidebar.close{
            overflow: hidden;
            width: 0;
            transform: translate(-100%);
        }
        .admin-sidebar.open{
            transform: translate(0);
        }
    }
    
</style>